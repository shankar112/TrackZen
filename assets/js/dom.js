// assets/js/dom.js
export function $ (sel, ctx = document) {
  return ctx.querySelector(sel);
}
export function $$ (sel, ctx = document) {
  return Array.from(ctx.querySelectorAll(sel));
}
export function on (el, ev, fn) {
  if (!el) return;
  el.addEventListener(ev, fn);
}
export function el (tag, attrs = {}) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "text") node.textContent = v;
    else node.setAttribute(k, v);
  });
  return node;
}
