async function handleFormSubmitEnhanced(e, {endpoint, mailto}) {
  e.preventDefault();
  const form = e.target;
  let status = form.querySelector(".status");
  if (!status) {
    status = document.querySelector(".status");
  }
  if (!status) {
    status = document.createElement("div");
    status.className = "status";
    status.setAttribute("aria-live", "polite");
    form.appendChild(status);
  }
  if (!validateForm(form, status)) return;
  // ...existing code...
}

async function handleFormSubmit(e, {endpoint, mailto}){
  e.preventDefault();
  const form = e.target;
  let status = form.querySelector(".status");
  if (!status) {
    status = document.querySelector(".status");
  }
  if (!status) {
    status = document.createElement("div");
    status.className = "status";
    status.setAttribute("aria-live", "polite");
    form.appendChild(status);
  }
  if (!validateForm(form, status)) return;
  // ...existing code...
}