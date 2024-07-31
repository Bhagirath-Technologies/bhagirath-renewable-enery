//==================================================
//-------------TICKING TERMS OF SERVICE-------------
//==================================================

// This script makes sure that the user has ticked the Terms of Service checkbox before submitting the form

document.getElementById("gridCheck").addEventListener('change', function () {
    var submitButton = document.getElementById("submitButtonContactUs");
    submitButton.disabled = !this.checked;
});

document.getElementById("contactForm").addEventListener('submit', function (event) {
    var checkBox = document.getElementById("gridCheck");
    if (!checkBox.checked) {
        alert("Please agree to the Terms of Service.");
        event.preventDefault(); // Prevent form submission
    }
});
