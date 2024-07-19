//======================================
//-----REMOVING SPINNERS FROM MODAL-----
//======================================

document.addEventListener("DOMContentLoaded", function () {
    var numberInputs = document.querySelectorAll('.no-spinner');
    numberInputs.forEach(function (input) {
        input.addEventListener('keydown', function (event) {
            if (event.keyCode === 38 || event.keyCode === 40) {
                event.preventDefault();
            }
        });
    });
});