        // Hardcoded username and password (will add authentication later)
        const validCredentials = {
            username: "admin",
            password: "password123"
        };

        // Handle form submission
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form from reloading the page

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === validCredentials.username && password === validCredentials.password) {
                alert("Login successful!");
                // Redirect to student page (will need to change for later)
                window.location.href = "student.html";
            } else {
                alert("Invalid username or password. Please try again.");
            }
        });