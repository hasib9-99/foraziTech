const slidersData = [
    {
        subTitle: 'Empower your business',
        title: 'Technology Products and Solutions',
        content: 'Driving operational and business excellence with intelligent technology'
    },
    {
        subTitle: 'Empower your business',
        title: 'Excellent IT services for your success',
        content: 'Accelerating success with cutting-edge digital solutions'
    },
    {
        subTitle: 'Empower your business',
        title: 'Advanced Technology Solutions',
        content: 'Enhancing performance and growth through smart technology'
    }
]



// custom slider
const slides = document.querySelectorAll('.slide_image');
const subTitleFild = document.querySelector('.sub_title')
const titleFild = document.querySelector('.custom_title')
const contentFild = document.querySelector('.custom_content')
const customBtn = document.querySelector('.custom_btn');
const shapes = document.querySelectorAll('.custom_shep')
const draggable = document.querySelector('.draggable');

let currentIndex = 0;
let isAnimating = false;

slides.forEach((item, i) => {
    const classes = ['left', 'right', 'top'];
    const URL = item.querySelector('img').src;
    item.style.setProperty('--before-bg', `url("${URL}")`);
    item.classList.add(classes[i % classes.length]);
    item.style.zIndex = 0; // default z-index
});

// Initial active slide
slides[currentIndex].classList.add('active');
slides[currentIndex].style.zIndex = 2;

function updateText(field, newText) {
    if (field.querySelector('a')) {
        const ancor = field.querySelector('a');
        ancor.style.transition = 'none';
        field.classList.remove('active');

        setTimeout(() => {
            ancor.style.transition = 'transform 0.3s linear';
            field.classList.add('active');
        }, 300);

    } else if (field.querySelector('h2')) {
        const h2 = field.querySelector('h2');
        h2.style.transition = 'none'
        field.classList.remove('active');

        setTimeout(() => {
            h2.textContent = newText;
            h2.style.transition = 'transform 0.3s linear';
            field.classList.add('active');
        }, 300);
    } else if (field.querySelector('img')) {
        const img = field.querySelector('img');
        img.style.transition = 'none'
        field.classList.remove('active');

        setTimeout(() => {
            img.style.transition = 'transform 0.3s linear';
            field.classList.add('active');
        }, 300);
    }
}


function sliderUpdate(nextIndex) {
    if (isAnimating) return; // prevent overlapping animations
    isAnimating = true;


    const currentSlide = slides[nextIndex];
    const previousSlide = slides[currentIndex];

    currentSlide.style.zIndex = 2;
    previousSlide.style.zIndex = 1;
    updateText(subTitleFild, slidersData[currentIndex].subTitle);
    updateText(titleFild, slidersData[currentIndex].title);
    updateText(contentFild, slidersData[currentIndex].content);
    updateText(customBtn, '');
    shapes.forEach((item) => updateText(item, ''))


    currentSlide.style.transition = "all 2s linear";
    currentSlide.classList.add('active');

    setTimeout(() => {
        currentSlide.classList.add('revars');
    }, 1000);


    const removePrev = () => {
        previousSlide.classList.remove('active', 'revars'); // cleanup
        previousSlide.style.transition = "none";
        previousSlide.style.zIndex = 0; // reset z-index
        previousSlide.removeEventListener('transitionend', removePrev);
        isAnimating = false;
    };

    // currentSlide.addEventListener('transitionend', removePrev);
    setTimeout(() => {
        if (previousSlide.classList.contains('active')) {
            removePrev();
        }
    }, 2200);
    currentIndex = nextIndex;
}




let startX = 0;
let endX = 0;
let isDragging = false;

// Mouse Events
draggable.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
});

window.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    endX = e.clientX;

    if (endX - startX > 50) {
        const nextIndex = (currentIndex + 1) % slides.length;
        sliderUpdate(nextIndex);
    } else if (endX - startX < -50) {
        const nextIndex = (currentIndex - 1) % slides.length;
        sliderUpdate(nextIndex);
    }
});

// Touch Events
draggable.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
});

window.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;
    endX = e.changedTouches[0].clientX;

    if (endX - startX > 50) {
        const nextIndex = (currentIndex + 1) % slides.length;
        sliderUpdate(nextIndex);
    } else if (endX - startX < -50) {
        const nextIndex = (currentIndex - 1) % slides.length;
        sliderUpdate(nextIndex);
    }
});


setInterval(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    sliderUpdate(nextIndex);
}, 6000);

