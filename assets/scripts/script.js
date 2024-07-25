//========================================================
//---------------------TEXT ANIMATION---------------------
//========================================================

document.addEventListener("DOMContentLoaded", function () {

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const tolerance = 50; // Adjust this value as needed
        return (
            rect.top >= -tolerance &&
            rect.left >= -tolerance &&
            rect.bottom <= (window.innerHeight + tolerance || document.documentElement.clientHeight + tolerance) &&
            rect.right <= (window.innerWidth + tolerance || document.documentElement.clientWidth + tolerance)
        );
    };

    function checkVisibility() {
        const elements = document.querySelectorAll('.text-animation');
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);

    checkVisibility();
});

//=================================================
//---------------------COUNTER---------------------
//=================================================

const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

let activated = false;

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top + 600 >= 0 && // in case of any issue, replace this line with: rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function startCounters() {
    counters.forEach(counter => {
        counter.innerText = 0;
        let count = 0;
        function updateCount() {
            const target = parseInt(counter.dataset.count);
            if (count < target) {
                count++;
                counter.innerText = count;
                setTimeout(updateCount, 40);
            } else {
                counter.innerText = target;
            }
        }
        updateCount();
        activated = true;
    });
};

function resetCounters() {
    counters.forEach(counter => {
        counter.innerText = 0;
    });
    activated = false;
};

window.addEventListener("scroll", () => {
    if (isInViewport(container) && !activated) {
        startCounters();
    } else if (!isInViewport(container) && activated) {
        resetCounters();
    }
});

//=====================================================
//---------------------BACK TO TOP---------------------
//=====================================================

let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

//==================================================
//-------------ABOUT PAGE - OUR PRODUCTS------------
//==================================================

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('#product-tabs .nav-link');
    const productTitle = document.getElementById('product-title');
    const productDescription = document.getElementById('product-description');
    const productImage = document.getElementById('product-image');

    const products = {
        'monocrystalline-tab': {
            title: 'Monocrystalline Solar Cell Panels',
            description: 'Monocrystalline solar panels are made from a single continuous crystal structure. They are cut from a single, pure silicon crystal, hence the name "mono" which means single. These panels are easily recognizable by their uniform dark color and rounded edges.',
            image: './assets/img/our products/temporary-product-image.webp'
        },
        'polycrystalline-tab': {
            title: 'Polycrystalline Solar Cell Panels',
            description: 'Polycrystalline solar panels, also known as multicrystalline panels, are made from silicon crystals that are melted together. They have a less uniform appearance with a speckled blue color due to the different crystals that are visible on the surface.',
            image: './assets/img/our products/temporary-product-image-2.webp'
        }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const productKey = this.id;
            const product = products[productKey];

            productTitle.textContent = product.title;
            productDescription.textContent = product.description;
            productImage.src = product.image;
        });
    });
});

//======================================
//-------------NEW CAROUSEL-------------
//======================================

document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('carouselExampleIndicators');
    var carouselListItems = document.querySelectorAll('#carousel-list-div .carousel-list-item-container');

    carousel.addEventListener('slide.bs.carousel', function (event) {
        // Get the index of the active slide
        var slideIndex = event.to;

        // Remove active class from all list items
        carouselListItems.forEach(function (item) {
            item.classList.remove('active');
        });

        // Add active class to the corresponding list item
        carouselListItems[slideIndex].classList.add('active');
    });
});

//=====================================================================
//-------------VALIDATING FORMS (TICKING TERMS OF SERVICE)-------------
//=====================================================================

// function setupFormValidation(checkboxId, submitButtonId, formId) {
//     var checkBox = document.getElementById(checkboxId);
//     var submitButton = document.getElementById(submitButtonId);
//     var form = document.getElementById(formId);

//     checkBox.addEventListener('change', function () {
//         submitButton.disabled = !this.checked;
//     });

//     form.addEventListener('submit', function (event) {
//         if (!checkBox.checked) {
//             alert("Please agree to the Terms of Service.");
//             event.preventDefault(); // Prevent form submission
//         }
//     });
// }

// setupFormValidation("gridCheck", "submitButton", "contactForm");
// setupFormValidation("gridCheckModal", "submitButtonModal", "contactFormModal");

// OLDER VERSION OF THE ABOVE SCRIPT

    document.getElementById("gridCheck").addEventListener('change', function () {
        var submitButton = document.getElementById("submitButton");
        submitButton.disabled = !this.checked;
    });

    document.getElementById("contactForm").addEventListener('submit', function (event) {
        var checkBox = document.getElementById("gridCheck");
        if (!checkBox.checked) {
            alert("Please agree to the Terms of Service.");
            event.preventDefault(); // Prevent form submission
        }
    });

// // Same code for the modal

// document.getElementById("gridCheckModal").addEventListener('change', function () {
//     var submitButtonModal = document.getElementById("submitButtonModal");
//     submitButtonModal.disabled = !this.checked;
// });

// document.getElementById("contactFormModal").addEventListener('submit', function (event) {
//     var checkBoxModal = document.getElementById("gridCheckModal");
//     if (!checkBoxModal.checked) {
//         alert("Please agree to the Terms of Service.");
//         event.preventDefault(); // Prevent form submission
//     }
// });
