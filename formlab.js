  document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.querySelector('input[data-username]');
    const urlInput = document.querySelector('input[data-url]');
    const emailInput = document.querySelector('input[data-email]');

    if (usernameInput) {
      usernameInput.addEventListener("keydown", function(e) {
        const nonIgnoredKeys = [
          "Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", // allowed keys
          "Tab", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "CapsLock", "MetaLeft", "MetaRight", "AltLeft", "AltRight" // ignored keys
        ];
        if (this.value === "" && nonIgnoredKeys.indexOf(e.code) === -1) { // ignore non-alphanumeric keys
          this.value = "@";
          this.setSelectionRange(1, 1);
        }
      });

      usernameInput.addEventListener('input', function() {
        this.value = this.value.toLowerCase();
      });
    }

    if (urlInput) {
      urlInput.addEventListener("keydown", function(e) {
        const nonIgnoredKeys = [
          "Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", // allowed keys
          "Tab", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "CapsLock", "MetaLeft", "MetaRight", "AltLeft", "AltRight" // ignored keys
        ];
        if (this.value === "" && nonIgnoredKeys.indexOf(e.code) === -1) { // ignore non-alphanumeric keys
          this.value = "https://";
          this.setSelectionRange(8, 8);
        }
      });

      urlInput.addEventListener('input', function() {
        this.value = this.value.toLowerCase();
      });
    }

    if (emailInput) {
      const blockedDomains = emailInput.getAttribute('data-email').split(',');

      emailInput.addEventListener('input', function() {
        const emailValue = this.value.trim();
        const atIndex = emailValue.lastIndexOf('@');
        if (atIndex > 0) {
          const domain = emailValue.substring(atIndex + 1);
          if (blockedDomains.some(blockedDomain => domain.startsWith(blockedDomain))) {
            this.setCustomValidity('Email domain not allowed');
          } else {
            this.setCustomValidity('');
          }
        }
      });

      emailInput.addEventListener('blur', function() {
        if (!this.checkValidity()) {
          this.setCustomValidity('Invalid email address');
        } else {
          this.setCustomValidity('');
        }
      });
    }
  });
