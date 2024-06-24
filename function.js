const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const submitButton = document.querySelector("button");

password.addEventListener("input", function () {
    const passwordValue = password.value;

    let strengthValue = '';

    if (passwordValue === '') {
        strengthValue = '';
    } else if (/^[a-zA-Z]+$/.test(passwordValue)) {
        strengthValue = 'Weak';
    } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/.test(passwordValue)) {
        strengthValue = 'Strong';
    } else if (/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$/.test(passwordValue)) {
        strengthValue = 'Medium';
    } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(passwordValue)) {
        strengthValue = 'Robust';
    }

    strength.textContent = strengthValue;
    message.style.display = "block"; // display the message
});

submitButton.addEventListener("click", function () {
    const passwordType = password.getAttribute('type');

    if (passwordType === 'password') {
        password.setAttribute('type', 'text');
    } else {
        password.setAttribute('type', 'password');
    }
});
