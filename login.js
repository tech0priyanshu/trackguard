// Function to handle the Google Sign-In response
function handleCredentialResponse(response) {
    // Log the encoded JWT ID token (this is the authentication token from Google)
    console.log("Encoded JWT ID token: " + response.credential);
    
    // Optionally, send this token to your server for verification
    // Example: send the token to your backend server (e.g., using fetch or axios)
    // fetch('/your-backend-endpoint', {
    //   method: 'POST',
    //   body: JSON.stringify({ token: response.credential }),
    //   headers: { 'Content-Type': 'application/json' }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    // })
    // .catch(error => console.error('Error:', error));
    
    // After successful login, redirect to the home page
    window.location.href = "home.html";  // Redirect to home page
  }
  
  // Initialize the Google Sign-In API and render the button
  window.onload = function () {
    // Replace with your actual Google OAuth 2.0 Client ID
    google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com", // Replace with your Client ID
      callback: handleCredentialResponse
    });
  
    // Render the Google Sign-In button with the desired configuration
    google.accounts.id.renderButton(
      document.getElementById("google-signin-button"), 
      { theme: "outline", size: "large" } // Custom button styling
    );
  };
  