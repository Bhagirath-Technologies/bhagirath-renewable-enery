// TEXT ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        const elements = document.querySelectorAll('.text-animation');
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);

    checkVisibility();
});


// COUNTER
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

let activated = false;

window.addEventListener("scroll", () => {
    if (pageYOffset > container.offsetTop - container.offsetHeight - 700 && activated === false) {
        counters.forEach(counter => {
            counter.innerText = 0;
            let count = 0;

            function updateCount() {
                const target = parseInt(counter.dataset.count);
                if (count < target) {
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, 20);
                }
                else {
                    counter.innerText = target;
                }
            }
            updateCount()
            activated = true;
        });

    }
    else if (pageYOffset < container.offsetTop - container.offsetHeight - 1000 || pageYOffset === 0 && activated === true) {
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
})

// BACK TO TOP
let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// DROPDOWN 
// document.addEventListener("DOMContentLoaded", function() {
//     const dropdownToggle = document.querySelector('.dropdown-toggle-special');
//     const dropdownMenu = document.querySelector('.dropdown-menu-special');

//     dropdownToggle.addEventListener('click', function() {
//         dropdownMenu.classList.toggle('show');
//     });

//     // Close the dropdown menu if clicked outside
//     document.addEventListener('click', function(event) {
//         if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
//             dropdownMenu.classList.remove('show');
//         }
//     });
// });

// SWIPER
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });

// CUSTOM SWIPER (DELETE this, IT USES JQUERY) 
// var carouselWidth = $('.carousel-inner')[0].scrollWidth;
// var cardWidth = $('.carousel-item').width();

// var scrollPosition = 0;

// $('carousel-control-next').on('click', function() {
//     scrollPosition = scrollPosition + cardWidth;
//     $('carousel-inner').animate({scrollLeft: scrollPosition}, 600);
// });
// Get references to DOM elements

var carouselInner = document.querySelector('.carousel-inner');
var carouselNext = document.querySelector('.carousel-control-next');
var carouselItems = document.querySelectorAll('.carousel-item');

// Calculate carousel and card widths
var carouselWidth = carouselInner.scrollWidth;
var cardWidth = carouselItems[0].offsetWidth; // Use offsetWidth to include padding and borders

var scrollPosition = 0;

// Add click event listener to the next button
carouselNext.addEventListener('click', function() {
    scrollPosition = scrollPosition + cardWidth;
    // Use scrollLeft to animate the scroll position
    animateScroll(carouselInner, scrollPosition, 600);
});

// Function to animate scroll left
function animateScroll(element, scrollPos, duration) {
    var start = element.scrollLeft,
        change = scrollPos - start,
        currentTime = 0,
        increment = 20;

    var animateScrollLoop = function() {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollLeft = val;
        if (currentTime < duration) {
            setTimeout(animateScrollLoop, increment);
        }
    };

    animateScrollLoop();
}

// Easing function for smooth animation (optional)
Math.easeInOutQuad = function(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};
