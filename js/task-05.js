const inputName = document.getElementById(`name-input`);
const outputName = document.getElementById(`name-output`);

inputName.addEventListener(`input`, () => {
  if (inputName !== "") {
    outputName.textContent = inputName.value;
  } else {
    outputName.textContent = "Anonimus";
  }
});
