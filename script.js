console.log("Github Issues Tracker Script: ");
console.log("---------------------------------------------");
// -----------------------------------------------------------------------

// Selectors
const signIn = document.getElementById("loginBtn");
const username = document.getElementById("username");
const password = document.getElementById("password");

// Event Listeners
signIn.addEventListener("click", function (e) {
  e.preventDefault();

  // Check if any field is empty
  if (username.value.trim() === "" || password.value.trim() === "") {
    alert("Please fill in both username and password fields.");
    return;
  }

  if (username.value === "admin" && password.value === "admin123") {
    alert("Sign In Successful!");
  } else {
    alert("Invalid username or password. Please try again.");
    return;
  }
});
