document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var email = document.getElementById("email").value;
    
    if (email) {
      // Validate email format
      var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (emailPattern.test(email)) {
        var successMessage = "O link para redefinição da senha foi enviado para o endereço " + email;
        alert(successMessage);
        window.location.href = "index.html";
      } else {
        alert("Invalid email format.");
      }
    } else {
      alert("Email is required.");
    }
  });
  