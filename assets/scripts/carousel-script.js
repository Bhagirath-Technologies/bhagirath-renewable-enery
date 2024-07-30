//=========================================
//-------------CAROUSEL SCRIPT-------------
//=========================================

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