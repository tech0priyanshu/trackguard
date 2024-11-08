document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    const email = document.getElementById('email').value;
    const responseMessage = document.getElementById('responseMessage');

    // Basic validation before sending
    if (!email) {
        responseMessage.textContent = 'Please enter a valid email address.';
        responseMessage.classList.add('error');
        responseMessage.classList.remove('hidden');
        return;
    }

    // Prepare the form data
    const formData = new FormData();
    formData.append('email', email);

    // Send a POST request to the server
    fetch('{{ url_for('send_reset_email') }}', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            responseMessage.textContent = 'Check your email for the reset link!';
            responseMessage.classList.add('success');
            responseMessage.classList.remove('hidden');
        } else {
            responseMessage.textContent = data.message || 'Something went wrong. Please try again.';
            responseMessage.classList.add('error');
            responseMessage.classList.remove('hidden');
        }
    })
    .catch(error => {
        responseMessage.textContent = 'An error occurred. Please try again.';
        responseMessage.classList.add('error');
        responseMessage.classList.remove('hidden');
    });
});
