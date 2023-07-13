document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "wallison" && password === "admin123") {
      window.location.href = "list_of_products.html";
    } else {
      alert("Invalid username or password.");
    }
  });