const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const pagination = document.querySelector('.pagination');
let currentIndex = 0;

// Function to display current slide
function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

// Event listener for left arrow
arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slideImages.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

// Event listener for right arrow
arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex === slideImages.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

// Pagination dots
slideImages.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === currentIndex) dot.classList.add('active');
    pagination.appendChild(dot);

    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
        updateDots();
    });
});

// Automatic slide show
let slideShowInterval = setInterval(() => {
    currentIndex = (currentIndex === slideImages.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}, 3000); /* Change the interval time to 3000 milliseconds (3 seconds) */

// Stop the slide show when the slider is clicked
slides.addEventListener('click', () => {
    clearInterval(slideShowInterval);
});