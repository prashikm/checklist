const allPagesCheckbox = document.getElementById("all-pages");
const pageCheckboxes = document.querySelectorAll(".page-checkbox");
const doneButton = document.getElementById("done-btn");

function toggleAllCheckboxes(checked) {
  pageCheckboxes.forEach((checkbox) => {
    checkbox.checked = checked;
  });
}

allPagesCheckbox.addEventListener("change", () => {
  toggleAllCheckboxes(allPagesCheckbox.checked);
});

pageCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const allChecked = Array.from(pageCheckboxes).every(
      (checkbox) => checkbox.checked
    );
    allPagesCheckbox.checked = allChecked;
    updateDoneButton();
  });
});

function updateDoneButton() {
  const atLeastOneChecked = Array.from(pageCheckboxes).some(
    (checkbox) => checkbox.checked
  );
  doneButton.disabled = !atLeastOneChecked;
}

doneButton.addEventListener("click", function () {
  const selectedPages = Array.from(pageCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox, index) => `Page ${index + 1}`)
    .join(", ");

  alert(selectedPages ? `You selected: ${selectedPages}` : "No pages selected");
});

updateDoneButton();
