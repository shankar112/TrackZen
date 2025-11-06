// assets/js/modal.js
import { setStore, getStore } from "./storage.js";

const modalEl = document.getElementById("addDeviceModal");
const form = modalEl?.querySelector("form");

export function openModal() {
  if (!modalEl) return;
  modalEl.classList.add("show");
  modalEl.style.display = "block";
}

export function closeModal() {
  if (!modalEl) return;
  modalEl.classList.remove("show");
  modalEl.style.display = "none";
}

export function initModal(submitHandler) {
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const payload = {
      id: fd.get("id") || `D${Date.now()}`,
      name: fd.get("name"),
      model: fd.get("model"),
      status: fd.get("status"),
      location: fd.get("location"),
      lastService: fd.get("lastService"),
      warranty: fd.get("warranty")
    };
    submitHandler(payload);
    form.reset();
    closeModal();
  });

  // hook close buttons
  $$(".modal-close").forEach(btn => btn.addEventListener("click", closeModal));
}

// small helper for $$ inside this module
function $$ (sel, ctx = document) {
  return Array.from(ctx.querySelectorAll(sel));
}
