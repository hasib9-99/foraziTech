
const sliderContainer = document.querySelector('.slider_container');
const sliders = sliderContainer.querySelectorAll('.custom_slider');
const nextSlide = sliderContainer.querySelector('.next_arrow');
const prevSlide = sliderContainer.querySelector('.prev_arrow');

const sliderContent = sliderContainer.querySelector('.slider_contant');
const headingElements = sliderContent.querySelector('.slider_heading h2');
const titleElements = sliderContent.querySelector('.slider_title h2');

const dataArray = [
    {
        heading: 'Boho Bliss',
        title: 'Welcome to Glasi, where artistry meets functionality in the world of interior.'
    },
    {
        heading: 'Vrty pro tepelná čerpadla',
        title: 'Efektivní vrty pro tepelná čerpadla zajišťující úsporu energie a spolehlivý provoz.'
    },
    {
        heading: 'Boho Bliss',
        title: 'Welcome to Glasi, where artistry meets functionality in the world of interior.'
    }
];

let newZIndex = 3;
let currentIndex = 0;

function next() {
    if (currentIndex >= sliders.length) {
        currentIndex = 0;
    }

    // Apply transition and zIndex to the current slider in the next animation frame
    requestAnimationFrame(() => {
        sliders[currentIndex].style.transition = 'all 1s ease-in-out';
        sliders[currentIndex].style.zIndex = newZIndex;
        sliders[currentIndex].classList.add('active');
    });

    // Update data for the current slide
    setData(dataArray, currentIndex, contentAnimated);

    // Increment zIndex and currentIndex
    newZIndex++;
    currentIndex++;

    // Wait for the transition to complete, then reset the previous slides
    setTimeout(resetThisSlides, 1000);
}


function resetThisSlides() {
    // Calculate the previous index
    const prevIndex = (currentIndex === 0) ? sliders.length - 1 : currentIndex - 1;

    // Reset the previous slider
    sliders[prevIndex].style.transition = 'none';

    // Set the zIndex lower than the active slide but higher than the rest
    sliders[prevIndex].style.zIndex = newZIndex - 2;

    // Remove the active class from the previous slider
    sliders[prevIndex].classList.remove('active');
}



function prev() {

}



function prevReset(i) {

}

function setData(data, i, callback) {
    if (callback) {
        if (i != 3) {
            callback(sliderContent)
            headingElements.textContent = data[i].heading;
            titleElements.textContent = data[i].title;
        } else {
            callback(sliderContent)
            headingElements.textContent = data[0].heading;
            titleElements.textContent = data[0].title;
        }
    }
}

function contentAnimated(content) {
    content.style = 'transition: all 1s ease-in-out; transform: translate3d(0px, 24px, 0px) scale3d(0.8, 0.8, 1); transform-style: preserve-3d; opacity: 0;'
    setTimeout(() => {
        content.style = 'transition: all 1s ease-in-out; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1); transform-style: preserve-3d; opacity: 1;'
    }, 800);
}

nextSlide.addEventListener('click', next);
prevSlide.addEventListener('click', prev);