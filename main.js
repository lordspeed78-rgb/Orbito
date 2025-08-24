function showSignup() {
  document.getElementById("signup").style.display = "block";
}

function signup() {
  let user = document.getElementById("newUser").value;
  let pass = document.getElementById("newPass").value;
  if (user && pass) {
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
    alert("Account created! Now login.");
    document.getElementById("signup").style.display = "none";
  } else {
    alert("Fill all fields!");
  }
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let storedUser = localStorage.getItem("user");
  let storedPass = localStorage.getItem("pass");
  
  if (user === storedUser && pass === storedPass) {
    document.getElementById("auth-container").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  } else {
    alert("Wrong credentials!");
  }
}

function logout() {
  document.getElementById("auth-container").style.display = "block";
  document.getElementById("dashboard").style.display = "none";
}

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}