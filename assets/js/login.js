document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const phoneNumber = document.getElementById('phone').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('http://localhost:5000/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        phoneNumber,
                        password
                    })
                });

                const data = await response.json();
                // localStorage.setItem('token', data..token);
                console.log("dataa", data)

                if (response.ok) {
                    alert('Login successful!');
                    localStorage.setItem('token', data.data.token); // Save token
                    
                    // redirect to home page
                    window.location(loginForm.getAttribute('target'))
                } else {
                    alert(data.message || 'Login failed');
                }

            } catch (error) {
                console.error('Login error:', error);
                alert('An error occurred during login.');
            }
        });
    }
});