document.addEventListener("DOMContentLoaded", function() {
  // Username Value
  const valueInput = document.querySelector('input[username]');
  valueInput.addEventListener("keydown", function(e) {
    if (this.value === "" && e.key !== "Backspace" && e.key !== "Delete") {
      this.value = "@";
      this.setSelectionRange(1, 1);
    }
  });

  // Url Value
  const urlInput = document.querySelector('input[web-url]');
  urlInput.addEventListener("keydown", function(e) {
    if (this.value === "" && e.key !== "Backspace" && e.key !== "Delete") {
      this.value = "https://";
      this.setSelectionRange(8, 8);
    } else if (this.value.indexOf("https://") === -1 && this.selectionStart === 0) {
      this.value = "https://" + this.value;
      this.setSelectionRange(8, 8);
    }
  });

  // Convert input to lowercase
  const inputs = document.querySelectorAll('input[web-url], input[username]');

  inputs.forEach(input => {
    input.addEventListener('input', function() {
      this.value = this.value.toLowerCase();
    });
  });
});
