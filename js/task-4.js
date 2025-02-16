const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (!email || !password) {
    return alert("All form fields must be filled in");
  } else {
  }
  const user = {
    email,
    password,
  };
  console.log("User object :>>", user);
  event.target.reset;
});
