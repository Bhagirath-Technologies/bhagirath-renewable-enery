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

//======================================================
//-----------FORM SUBMIT (Google Apps Script)-----------
//======================================================

async function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(document.getElementById('contactForm'));
    const formObject = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbz1-HIWjyAWUwRbqosOzBcbM7SkXrxgGMCbOx3wHTIMKFDpEC4iAdyc5jIzZ0vm7vU1/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formObject),
            mode: 'cors', // Enable CORS
            credentials: 'same-origin' // Include credentials if needed
        });

        if (response.ok) {
            alert('Form submitted successfully!');
            document.getElementById('contactForm').reset(); // Optionally reset the form
        } else {
            // Log response details for debugging
            const responseText = await response.text();
            console.error('Error response:', responseText);
            alert('There was an error submitting the form. Check the console for details.');
        }
    } catch (error) {
        console.error('Fetch error:', error);
        alert('There was an error submitting the form.');
    }
}
