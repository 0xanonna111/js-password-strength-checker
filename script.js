function checkStrength() {
  const password = document.getElementById("password").value;
  const bar = document.getElementById("bar");
  const message = document.getElementById("message");

  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (strength === 0) {
    bar.style.width = "0%";
    message.innerText = "Strength:";
  } else if (strength === 1) {
    bar.style.width = "25%";
    bar.style.background = "red";
    message.innerText = "Strength: Weak";
  } else if (strength === 2) {
    bar.style.width = "50%";
    bar.style.background = "orange";
    message.innerText = "Strength: Medium";
  } else if (strength === 3) {
    bar.style.width = "75%";
    bar.style.background = "blue";
    message.innerText = "Strength: Good";
  } else {
    bar.style.width = "100%";
    bar.style.background = "green";
    message.innerText = "Strength: Strong";
  }
}
