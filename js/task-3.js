const yourName = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");
yourName.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  if (event.currentTarget.value === "") {
    nameOut.textContent = "Anonymous";
  } else {
    nameOut.textContent = inputValue;
  }
});
