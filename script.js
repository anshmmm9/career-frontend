document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        document.getElementById("message").textContent = "Login successful!";
        document.getElementById("message").style.color = "green";
  
        // ✅ Redirect to welcome page after short delay or instantly
        setTimeout(() => {
          window.location.href = "career-form.html";
        }, 1000); // Optional delay
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  
        if (errorCode === 'auth/wrong-password') {
          document.getElementById("message").textContent = "Incorrect password. Please try again.";
        } else if (errorCode === 'auth/user-not-found') {
          document.getElementById("message").textContent = "No user found with this email. Please sign up.";
        } else {
          document.getElementById("message").textContent = "An error occurred. Please try again later.";
        }
  
        document.getElementById("message").style.color = "red";
        console.log(errorCode, errorMessage);
      });
  });
  