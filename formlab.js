  document.addEventListener("DOMContentLoaded", function() {
  const formElement = document.querySelector('form[form-lab="true"]');

  if (formElement) {
    // Username Value
    const valueInput = document.querySelector('input[username]');
    valueInput.addEventListener("keydown", function(e) {
    	const nonIgnoredKeys = [
	  "Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", // allowed keys
 	  "Tab", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "CapsLock", "MetaLeft", "MetaRight", "AltLeft", "AltRight" // ignored keys
      ];
      if (this.value === "" && nonIgnoredKeys.indexOf(e.code) === -1) { // ignore non-alphanumeric keys
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
      }
    });

    // Convert input to lowercase
    const inputs = document.querySelectorAll('input[web-url], input[username]');

    inputs.forEach(input => {
      input.addEventListener('input', function() {
        this.value = this.value.toLowerCase();
      });
    });
  }
});
