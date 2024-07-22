document.addEventListener("DOMContentLoaded", function () {
    function billToKW(inr) {
        return inr * 0.0008928571428571428;
    }

    var conversionForm = document.getElementById("conversionForm");
    var resultContainer = document.getElementById("resultContainer");
    var resultText = document.getElementById("resultText");

    conversionForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        var name = document.getElementById("nameInput").value;
        var phone = document.getElementById("phoneInput").value;
        var email = document.getElementById("emailInput").value;
        var city = document.getElementById("cityInput").value;
        var inr = parseFloat(document.getElementById("inrInput").value);

        if (!isNaN(inr)) {
            var kw = billToKW(inr);
            resultText.innerHTML =
                "Hi, " +
                name +
                "<br>Monthly Bill Amount*: &#8377; " +
                inr +
                "<br>You require 'KW' capacity plant to get maximum saving: " +
                kw.toFixed(12);
            resultContainer.style.display = "block"; // Show the result container
        } else {
            resultText.textContent = "Please enter a valid amount in Indian Rupees (INR).";
            resultContainer.style.display = "none"; // Hide the result container if no valid amount
        }
    });
});


// // ====================================== OLDER JS CODE ======================================

// document.addEventListener("DOMContentLoaded", function () {
//     function billToKW(inr) {
//         return inr * 0.0008928571428571428;
//     }

//     var conversionForm = document.getElementById("conversionForm");
//     var resultText = document.getElementById("resultText");
//     var resultModal = document.getElementById("resultModal");
//     var closeModal = document.getElementById("closeModal");

//     conversionForm.addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent default form submission

//         var name = document.getElementById("nameInput").value;
//         var phone = document.getElementById("phoneInput").value;
//         var email = document.getElementById("emailInput").value;
//         var city = document.getElementById("cityInput").value;
//         var inr = parseFloat(document.getElementById("inrInput").value);

//         if (!isNaN(inr)) {
//             var kw = billToKW(inr);
//             resultText.innerHTML =
//                 "<strong>Hi, </strong> " +
//                 name +
//                 "<br><br><strong>Monthly Bill Amount* :</strong> &#8377; " +
//                 inr +
//                 "<br><br><strong>You require 'KW' capacity plant to get maximum saving :</strong> " +
//                 kw.toFixed(12);
//             $('#resultModal').modal('show'); // Use jQuery to show the modal (since Bootstrap modal may depend on it)
//         } else {
//             resultText.textContent = "Please enter a valid amount in Indian Rupees (INR).";
//             $('#resultModal').modal('show'); // Use jQuery to show the modal (since Bootstrap modal may depend on it)
//         }
//     });

//     closeModal.addEventListener("click", function () {
//         $('#resultModal').modal('hide'); // Use jQuery to hide the modal
//     });
// });

// ====================================== CODE WITH JQUERY ======================================

// $(document).ready(function () {
//     function billToKW(inr) {
//         return inr * 0.0008928571428571428;
//     }

//     $("#conversionForm button").on("click", function () {
//         var name = $("#nameInput").val();
//         var phone = $("#phoneInput").val();
//         var email = $("#emailInput").val();
//         var city = $("#cityInput").val();
//         var inr = parseFloat($("#inrInput").val());

//         if (!isNaN(inr)) {
//             var kw = billToKW(inr);
//             $("#resultText").html(
//                 "<strong>Hi, </strong> " +
//                 name +
//                 "<br><br><strong>Monthly Bill Amount* :</strong> &#8377; " +
//                 inr +
//                 "<br><br><strong>You require 'KW' capacity plant to get maximum saving :</strong> " +
//                 kw.toFixed(12)
//             );
//             $("#resultModal").modal("show");
//         } else {
//             $("#resultText").text(
//                 "Please enter a valid amount in Indian Rupees (INR)."
//             );
//             $("#resultModal").modal("show");
//         }
//     });

//     $("#closeModal").click(function () {
//         $("#resultModal").modal("hide");
//     });
// });
