document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    // Clear old errors
    document.querySelectorAll(".error").forEach(el => el.innerText = "");
    document.getElementById("successMessage").innerText = "";

    // Name validation
    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name must be at least 3 characters";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email address";
        isValid = false;
    }

    // Password validation
    let passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (!password.match(passwordPattern)) {
        document.getElementById("passwordError").innerText =
            "Password must be 8+ chars, include 1 uppercase, 1 number & 1 special character";
        isValid = false;
    }

    // Gender validation
    if (!gender) {
        document.getElementById("genderError").innerText = "Please select your gender";
        isValid = false;
    }

    // DOB validation (must be 18+)
    if (dob === "") {
        document.getElementById("dobError").innerText = "Select your date of birth";
        isValid = false;
    } else {
        let birthDate = new Date(dob);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 18) {
            document.getElementById("dobError").innerText = "You must be at least 18 years old";
            isValid = false;
        }
    }

    // Success
    if (isValid) {
        document.getElementById("successMessage").innerText = 
            "Registration Successful! Welcome to Advorix Technologies 🎉";
        document.getElementById("registrationForm").reset();
    }
});
// Show / Hide Password Toggle
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.innerText = "Hide";
    } else {
        passwordInput.type = "password";
        togglePassword.innerText = "Show";
    }
});