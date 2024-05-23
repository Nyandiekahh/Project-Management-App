// Email validation function
function validateEmail(email) {
    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Password validation function
function validatePassword(password) {
    // Regular expression for password validation (at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character)
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[^\s]).{8,}$/;
    return passwordPattern.test(password);
}

// Validation function for the form
function validated(){
    var email = document.forms['form']['email'];
    var password = document.forms['form']['password'];

    var email_error = document.getElementById('email_error');
    var pass_error = document.getElementById('pass_error');

    if (!validateEmail(email.value)) {
        // Display error message for invalid email format
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (!validatePassword(password.value)) {
        // Display error message for invalid password format
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
    return true; // If both email and password pass validation, allow form submission
}
