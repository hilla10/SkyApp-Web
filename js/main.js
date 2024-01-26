const menu = document.querySelector('.nav');
const header = document.querySelector('.main-header');
const hamburger = document.querySelector('.hamburger'); 

hamburger.addEventListener('click', function () {
    menu.classList.toggle('show');
    hamburger.classList.toggle('show');
});

document.body.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('show');
        hamburger.classList.remove('show');
    }
});

// Tab Button

document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Activate the first tab by default
    tabButtons[0].classList.add('active');
    tabPanes[0].classList.add('active');

    tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all buttons and panes
            tabButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            tabPanes.forEach(function (pane) {
                pane.classList.remove('active');
            });

            // Add active class to the clicked button and pane
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

//   Accordion

document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders[0].parentNode.classList.add('active');

    accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            const accordionItem = this.parentNode;

            if (accordionItem.classList.contains('active')) {
                accordionItem.classList.remove('active');
            } else {
                const activeItem = document.querySelector('.accordion-item.active');

                if (activeItem) {
                    activeItem.classList.remove('active');
                }

                accordionItem.classList.add('active');
            }
        });
    });
});

// Slides

// Access the Images
let slideImages = document.querySelectorAll('.img');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// Code for next button
next.addEventListener('click', slideNext);

function slideNext() {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if (counter >= slideImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}

// Code for prev button
prev.addEventListener('click', slidePrev);

function slidePrev() {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if (counter == 0) {
        counter = slideImages.length - 1;
    } else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}

// Auto slideing
function autoSliding() {
    deletInterval = setInterval(timer, 3000);

    function timer() {
        slideNext();
        indicators();
    }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function () {
    clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

// Add and remove active class from the indicators
function indicators() {
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

// Add click event to the indicator
function switchImage(currentImage) {
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if (imageId > counter) {
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    } else if (imageId == counter) {
        return;
    } else {
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}
