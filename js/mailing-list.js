const processForm = form => {
  const data = new FormData(form)
  data.append("form-name", "newsletter");
  fetch("/", {
    method: "POST",
    body: data,
  })
    .then(() => {
      form.innerHTML = `<div class="email-form-success">Almost there! Check your inbox for a confirmation e-mail.</div>`;
    })
    .catch(error => {
      form.innerHTML = `<div class="email-form-error">Error: ${error}</div>`;
    })
}

const emailForm = document.querySelector(".email-form")
if (emailForm) {
  emailForm.addEventListener("submit", e => {
    e.preventDefault();
    processForm(emailForm);
  })
}