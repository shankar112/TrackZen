// assets/js/devices.js
import { getStore, setStore } from "./storage.js";
import { listDevices as defaultList } from "./api.js";

const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const deviceListBody = document.getElementById("deviceListBody");
const openAddBtn = document.getElementById("openAddBtn");

function loadDevices() {
  return getStore("devices", defaultList());
}

function saveDevices(list) {
  setStore("devices", list);
}

function renderTable(list) {
  deviceListBody.innerHTML = list.map(d => `
    <tr role="button" data-id="${d.id}" class="device-row">
      <td>${d.id}</td>
      <td>${d.name}</td>
      <td><span class="badge bg-${d.status === "Active" ? "success" : d.status === "Needs Service" ? "warning" : "secondary"}">${d.status}</span></td>
      <td>${d.location}</td>
      <td>${d.warranty}</td>
      <td>${d.lastService}</td>
    </tr>
  `).join("");
}

function applyFilter() {
  const all = loadDevices();
  const q = searchInput.value.trim().toLowerCase();
  const filter = filterSelect.value;
  const filtered = all.filter(d => {
    const matchesSearch = !q || d.name.toLowerCase().includes(q) || d.id.toLowerCase().includes(q) || (d.model || "").toLowerCase().includes(q);
    const matchesFilter = filter === "all" || d.status === filter;
    return matchesSearch && matchesFilter;
  });
  renderTable(filtered);
}

// Add device modal handler (same as dashboard)
function initAddHandler() {
  const addModalEl = document.getElementById("addDeviceModal");
  const addForm = document.getElementById("addDeviceFormModal");
  if (!addModalEl || !addForm) return;

  const addModal = new bootstrap.Modal(addModalEl);
  openAddBtn.addEventListener("click", () => addModal.show());

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
    const current = loadDevices();
    current.unshift(device);
    saveDevices(current);
    addModal.hide();
    addForm.reset();
    applyFilter();
  });
}

function initRowClicks() {
  deviceListBody.addEventListener("click", (e) => {
    const tr = e.target.closest("tr.device-row");
    if (!tr) return;
    const id = tr.getAttribute("data-id");
    const arr = loadDevices();
    const device = arr.find(d => d.id === id);
    if (!device) return;
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
      <p class="small text-muted">Data persisted to LocalStorage (trackzen:devices)</p>
    `;
    const detailModal = new bootstrap.Modal(document.getElementById("deviceDetailModal"));
    detailModal.show();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // render initial table
  renderTable(loadDevices());
  // events
  searchInput.addEventListener("input", applyFilter);
  filterSelect.addEventListener("change", applyFilter);
  initAddHandler();
  initRowClicks();
});
