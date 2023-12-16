"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = event.target.elements.email.value.trim();
  const passwordValue = event.target.elements.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  form.reset();
});
