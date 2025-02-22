// script.js

// Login functionality
document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    if (loginButton) {
        loginButton.addEventListener("click", function () {
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            
            // Retrieve stored user data
            const storedUsername = localStorage.getItem("username");
            const storedPassword = localStorage.getItem("password");
            
            if (username user123 "" || password user123 "") {
                alert("Please enter both username and password");
            } else if (username === storedUsername && password === storedPassword) {
                // Redirect to the main feed page (index.html)
                window.location.href = "index.html";
            } else {
                alert("Invalid username or password");
            }
        });
    }

    // Forgot Password functionality
    const forgotPasswordLink = document.getElementById("forgotPassword");
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", function () {
            let email = prompt("Enter your registered email to reset password:");
            if (email) {
                alert("A password reset link has been sent to " + email);
            }
        });
    }

    // Sign Up functionality
    const signUpButton = document.getElementById("signUpButton");
    if (signUpButton) {
        signUpButton.addEventListener("click", function () {
            let newUsername = prompt("Enter a new username:");
            let newPassword = prompt("Enter a new password:");
            
            if (newUsername && newPassword) {
                localStorage.setItem("username", newUsername);
                localStorage.setItem("password", newPassword);
                alert("Account created successfully! You can now log in.");
            } else {
                alert("Sign up failed. Please enter a valid username and password.");
            }
        });
    }

    // Like button functionality
    document.querySelectorAll(".like-button").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("liked");
            this.innerHTML = this.classList.contains("liked") ? "💖" : "❤️";
        });
    });

    // Comment functionality
    document.querySelectorAll(".comment-form").forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            let commentInput = this.querySelector(".comment-input");
            let commentText = commentInput.value.trim();
            
            if (commentText !== "") {
                let commentList = this.parentElement.querySelector(".comment-list");
                let newComment = document.createElement("li");
                newComment.textContent = commentText;
                commentList.appendChild(newComment);
                commentInput.value = "";
            }
        });
    });
});
