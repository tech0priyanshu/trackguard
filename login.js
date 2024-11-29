
function handleCredentialResponse(response) {

    console.log("Encoded JWT ID token: " + response.credential);
    
   
    window.location.href = "home.html";    }
  
  window.onload = function () {
   
    google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com", 
      callback: handleCredentialResponse
    });
  
    
    google.accounts.id.renderButton(
      document.getElementById("google-signin-button"), 
      { theme: "outline", size: "large" } 
    );
  };
  