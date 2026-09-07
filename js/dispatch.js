const form = document.querySelector("form.note");
const confirmEl = document.querySelector(".confirm");
if (form) form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const notes = JSON.parse(localStorage.getItem("rhr-notes") || "[]");
  notes.push({ ...data, at: new Date().toISOString() });
  localStorage.setItem("rhr-notes", JSON.stringify(notes));
  form.hidden = true;
  if (confirmEl) confirmEl.hidden = false;
});
