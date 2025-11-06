// assets/js/dashboard.js
import { getStore, setStore } from "./storage.js";
import { listDevices as defaultList } from "./api.js";

const totalDevicesEl = document.getElementById("totalDevices");
const activeDevicesEl = document.getElementById("activeDevices");
const serviceDevicesEl = document.getElementById("serviceDevices");
const expiredDevicesEl = document.getElementById("expiredDevices");
const deviceTableBody = document.getElementById("deviceTableBody");

const openAddBtn = document.getElementById("openAddBtn");

// load devices from storage or fallback
function loadDevices() {
  return getStore("devices", defaultList());
}

function renderDashboard() {
  const devices = loadDevices();
  totalDevicesEl.textContent = devices.length;
  activeDevicesEl.textContent = devices.filter(d => d.status === "Active").length;
  serviceDevicesEl.textContent = devices.filter(d => d.status === "Needs Service").length;
  expiredDevicesEl.textContent = devices.filter(d => new Date(d.warranty) < new Date()).length;

  // show 6 most recent (by array order)
  const recent = devices.slice(0, 6);
  deviceTableBody.innerHTML = recent.map(d => `
    <tr role="button" data-id="${d.id}" class="device-row">
      <td>${d.id}</td>
      <td>${d.name}</td>
      <td><span class="badge bg-${d.status === "Active" ? "success" : d.status === "Needs Service" ? "warning" : "secondary"}">${d.status}</span></td>
      <td>${d.location}</td>
      <td>${d.lastService}</td>
    </tr>
  `).join("");
}

function initAddModalHandler() {
  // show bootstrap modal for add device
  const addModalEl = document.getElementById("addDeviceModal");
  const addForm = document.getElementById("addDeviceFormModal");

  if (!addModalEl || !addForm) return;

  const addModal = new bootstrap.Modal(addModalEl);
  document.getElementById("openAddBtn").addEventListener("click", () => addModal.show());

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(addForm);
    const device = {
      id: fd.get("id") || `D${Date.now()}`,
      name: fd.get("name"),
      model: fd.get("model"),
      status: fd.get("status"),
      location: fd.get("location"),
      lastService: fd.get("lastService"),
      warranty: fd.get("warranty")
    };
    const current = getStore("devices", defaultList());
    current.unshift(device);
    setStore("devices", current);
    addForm.reset();
    addModal.hide();
    renderDashboard();
  });
}

function initRowClicks() {
  deviceTableBody.addEventListener("click", (e) => {
    const tr = e.target.closest("tr.device-row");
    if (!tr) return;
    const id = tr.getAttribute("data-id");
    const devices = loadDevices();
    const device = devices.find(d => d.id === id);
    if (!device) return;
    // fill modal detail
    const title = document.getElementById("deviceDetailTitle");
    const body = document.getElementById("deviceDetailBody");
    title.textContent = `${device.name} (${device.id})`;
    body.innerHTML = `
      <ul class="list-unstyled">
        <li><strong>Model:</strong> ${device.model || "-"}</li>
        <li><strong>Status:</strong> ${device.status}</li>
        <li><strong>Location:</strong> ${device.location}</li>
        <li><strong>Last Service:</strong> ${device.lastService || "-"}</li>
        <li><strong>Warranty:</strong> ${device.warranty || "-"}</li>
      </ul>
      <p class="small text-muted">This is mock data stored in LocalStorage.</p>
    `;
    const detailModal = new bootstrap.Modal(document.getElementById("deviceDetailModal"));
    detailModal.show();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderDashboard();
  initAddModalHandler();
  initRowClicks();
});
