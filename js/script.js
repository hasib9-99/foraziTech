

document.addEventListener("DOMContentLoaded", () => {


    const getForm = document.querySelector(".full-form-001");
    const getImageFild = document.querySelectorAll(".previewImageContainer");
    const getInput = getForm.querySelector('#form-field-file900');
    const getImageDitals = getForm.querySelector('[name="form_fields[field_b5de8df]"]');
    const getSubmit = getForm.querySelector('#submit-btn-001');
    const getInputValue = getForm.querySelector('#form-field-field_425bc4f');
    const getSelector = getForm.querySelector("select");
    const getDelivery = getForm.querySelector(".delivery-type");
    const getOrderFree = getForm.querySelector(".order-flat-fee");
    const getTotal = getForm.querySelector('.tottal');
    const itemTotal = getForm.querySelector('.items-total');
    const orderTotal = getForm.querySelector('.order-total');
    const getOptions = getForm.querySelectorAll('[name="form_fields[field_c298b70]"] option');
    const previewContainer = document.querySelector('.previewContainer');
    const optionData = [2.95, 3.95, 4.95];
    let imageNames = [];
    let imageValues = [];
    let imageQuantity = 0;
    let files = 0;

    getOptions.forEach((option, index) => {
        option.setAttribute('data-info', optionData[index]);
    });

    function countWords(str) {
        str = str.trim();
        let words = str.split(/\s+/);
        return words.slice(0, 4).join(' ');
    }

    function calculateChat(imageQuantity, getData) {
        let totalPraic = Number(imageQuantity) * Number(getData);
        return totalPraic.toFixed(2);
    }

    function priceLoad() {
        let getData = parseFloat(getSelector.options[getSelector.selectedIndex].dataset.info || 0);
        if (getSelector.value === getOptions[0].value) {
            getOrderFree.innerHTML = '9.95';
        } else if (getSelector.value === getOptions[1].value) {
            getOrderFree.innerHTML = '11.95';
        } else if (getSelector.value === getOptions[2].value) {
            getOrderFree.innerHTML = '13.95';
        }

        getDelivery.innerHTML = countWords(getSelector.value) + ' - ' + imageQuantity + ' X ' + getData;
        getTotal.innerHTML = calculateChat(imageQuantity, getData);
        let totalRound = Number(getOrderFree.innerHTML) + Number(getTotal.innerHTML);
        itemTotal.innerHTML = totalRound.toFixed(2);
        orderTotal.innerHTML = totalRound.toFixed(2);

        getInputValue.value = `
    Order Flat Fee:    ${getOrderFree.innerHTML}
    Delivery Type: ${getDelivery.innerHTML} = ${getTotal.innerHTML}
    Items Total:   ${itemTotal.innerHTML}
    Tax:   $0.00
    Order Total:   ${orderTotal.innerHTML}

    ------------------------------------------`;
    }

    getInput.addEventListener('change', function () {
        previewContainer.innerHTML = '';
        files = getInput.files;
        imageQuantity += files.length;
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            imageNames.push(file.name);
            let reader = new FileReader();
            reader.onload = (function (file) {
                return function (e) {
                    var previewImageContainer = document.createElement('div');
                    previewImageContainer.className = 'previewImageContainer';
                    var previewImage = document.createElement('img');
                    previewImage.className = 'previewImage';
                    previewImage.src = e.target.result;
                    const removeButton = document.createElement('button');
                    removeButton.className = 'removeButton';
                    removeButton.textContent = 'Remove';
                    removeButton.onclick = function () {
                        previewContainer.removeChild(previewImageContainer);
                        imageQuantity--;
                        priceLoad();
                    };
                    var textInput = document.createElement('input');
                    textInput.className = 'textInput';
                    textInput.type = 'text';
                    textInput.placeholder = 'Enter additional information';
                    previewImageContainer.appendChild(previewImage);
                    previewImageContainer.appendChild(removeButton);
                    previewImageContainer.appendChild(textInput);
                    previewContainer.appendChild(previewImageContainer);
                };
            })(file);
            reader.readAsDataURL(file);
        }
        priceLoad();
    });


    getSubmit.addEventListener("click", function () {
        let allvalue = [];  // Ensure the array is declared inside the event listener

        getImageFild.forEach(function (previewImageContainer) {
            const perImage = previewImageContainer.querySelector('.previewImage');
            const perImageName = perImage.getAttribute('data-info');
            const inputField = previewImageContainer.querySelector('.textInput').value;

            allvalue.push('Image Name: ' + perImageName + ', Additional Information: ' + inputField);
        });

        getImageDitals.value = allvalue.join('\n');
    });
});



// Step 1: Get a reference to the element you want to observe
const targetElement = document.getElementById('targetElementId');

// Step 2: Create the observer callback
const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            console.log(`Class change detected!`);
            // You can explore mutation.oldValue for the previous class value, if needed
            console.log(`Old class value: ${mutation.oldValue}`);
            // Get the current class value
            console.log(`New class value: ${targetElement.className}`);
        }
    }
};

// Step 3: Configure the observer
const config = { attributes: true, attributeOldValue: true, attributeFilter: ['class'] };

// Create an instance of MutationObserver with the callback
const observer = new MutationObserver(callback);

// Step 4: Start observing
observer.observe(targetElement, config);

// Remember to disconnect the observer when it's no longer needed to avoid memory leaks
// observer.disconnect();


function myFunction() {
    console.log("Hello, world!");
}

// Call myFunction every 1000 milliseconds (1 second)
var intervalId = setInterval(myFunction, 1000);

// After 5 seconds, stop the interval
setTimeout(function () {
    clearInterval(intervalId);
    console.log("Interval stopped after 5 seconds.");
}, 5000);



document.addEventListener('DOMContentLoaded', () => {
    const getLoops = document.querySelectorAll('.get-loop001 .e-loop-item');

    for (let item of getLoops) {
        const bgi = item.querySelector('.tocen-001');
        if (bgi.textContent.trim() === '') {
            bgi.style.display = 'none';
        }
    }
})


//------------------------------------------------------------------------

const getGal = document.querySelectorAll('.image-cerosol-001 .swiper-slide');
const sliderBtnsPrev = document.querySelectorAll('.elementor-swiper-button-prev');
const sliderBtnsNext = document.querySelectorAll('.elementor-swiper-button-next');

// Add event listeners to "previous" buttons
for (let Btn of sliderBtnsPrev) {
    Btn.addEventListener('click', function () {
        setTimeout(htlon, 1000); // Delay of 1000 milliseconds (1 second)
    });
}

// Add event listeners to "next" buttons
for (let Btn of sliderBtnsNext) {
    Btn.addEventListener('click', function () {
        setTimeout(htlon, 1000); // Delay of 1000 milliseconds (1 second)
    });
}

// Add event listeners to image slides
for (let singCart of getGal) {
    singCart.addEventListener('click', function () {
        setTimeout(htFun, 1000); // Delay of 1000 milliseconds (1 second)
    });
}

function htFun() {
    console.log('hello');
    const sliderFooter = document.querySelector('.elementor-slideshow__description');

    if (sliderFooter) {
        const url = sliderFooter.textContent.trim();
        sliderFooter.textContent = '';

        if (url) {
            const a = document.createElement('a');
            a.setAttribute('href', url);
            a.textContent = 'Go To';
            sliderFooter.appendChild(a);
        }
    } else {
        console.error('Slider footer element not found!');
    }
}
function htlon() {
    console.log('hello');
    const sliderFooter = document.querySelector('.elementor-slideshow__title');

    if (sliderFooter) {
        const url = sliderFooter.textContent.trim();
        sliderFooter.textContent = '';

        if (url) {
            const a = document.createElement('a');
            a.setAttribute('href', url);
            a.textContent = 'Go To';
            sliderFooter.appendChild(a);
        }
    } else {
        console.error('Slider footer element not found!');
    }
}












///---//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-///-/

const getForm = document.querySelector(".full-form-001");
const getImageField = document.querySelectorAll(".previewImageContainer");
const getInput = getForm.querySelector('#form-field-file900');
const getImageDetails = getForm.querySelector('[name="form_fields[field_b5de8df]"]');
const getSubmit = getForm.querySelector('#submit-btn-001');
const getInputValue = getForm.querySelector('#form-field-field_425bc4f');
const getSelector = getForm.querySelector("select");
const getDelivery = getForm.querySelector(".delivery-type");
const getOrderFee = getForm.querySelector(".order-flat-fee");
const getTotal = getForm.querySelector('.tottal');
const itemTotal = getForm.querySelector('.items-total');
const orderTotal = getForm.querySelector('.order-total');
const getOptions = getForm.querySelectorAll('[name="form_fields[field_c298b70]"] option');
const previewContainer = document.querySelector('.previewContainer');
const optionData = [2.95, 3.95, 4.95];
let imageNames = [];
let imageValues = [];
let imageQuantity = 0;
let files = 0;

getOptions.forEach((option, index) => {
    option.setAttribute('data-info', optionData[index]);
});

function countWords(str) {
    str = str.trim();
    let words = str.split(/\s+/);
    return words.slice(0, 4).join(' ');
}

function calculatePrice(imageQuantity, getData) {
    let totalPrice = Number(imageQuantity) * Number(getData);
    return totalPrice.toFixed(2);
}

function priceLoad() {
    let getData = parseFloat(getSelector.options[getSelector.selectedIndex].dataset.info || 0);
    if (getSelector.value === getOptions[0].value) {
        getOrderFee.innerHTML = '9.95';
    } else if (getSelector.value === getOptions[1].value) {
        getOrderFee.innerHTML = '11.95';
    } else if (getSelector.value === getOptions[2].value) {
        getOrderFee.innerHTML = '13.95';
    }

    getDelivery.innerHTML = countWords(getSelector.value) + ' - ' + imageQuantity + ' X ' + getData;
    getTotal.innerHTML = calculatePrice(imageQuantity, getData);
    let totalRound = Number(getOrderFee.innerHTML) + Number(getTotal.innerHTML);
    itemTotal.innerHTML = totalRound.toFixed(2);
    orderTotal.innerHTML = totalRound.toFixed(2);

    getInputValue.value = `
    Order Flat Fee:    ${getOrderFee.innerHTML}
    Delivery Type: ${getDelivery.innerHTML} = ${getTotal.innerHTML}
    Items Total:   ${itemTotal.innerHTML}
    Tax:   $0.00
    Order Total:   ${orderTotal.innerHTML}

    ------------------------------------------`;
}

getInput.addEventListener('change', function () {
    previewContainer.innerHTML = '';
    files = getInput.files;
    imageQuantity = files.length;
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        imageNames.push(file.name);
        let reader = new FileReader();
        reader.onload = (function (file) {
            return function (e) {
                var previewImageContainer = document.createElement('div');
                previewImageContainer.className = 'previewImageContainer';
                var previewImage = document.createElement('img');
                previewImage.className = 'previewImage';
                previewImage.src = e.target.result;

                var textInput = document.createElement('input');
                textInput.className = 'textInput';
                textInput.type = 'text';
                textInput.placeholder = 'Enter additional information';
                previewImageContainer.appendChild(previewImage);
                previewImageContainer.appendChild(textInput);
                previewContainer.appendChild(previewImageContainer);
            };
        })(file);
        reader.readAsDataURL(file);
    }
    priceLoad();
});

getSelector.addEventListener('change', priceLoad);
getSubmit.addEventListener("click", function () {
    let allValue = [];
    const imageInputs = previewContainer.querySelectorAll('.textInput');
    imageInputs.forEach(function (input, i) {
        imageValues.push(input.value);
        allValue.push([i + 1] + ' . ' + 'Image Name: ' + imageNames[i] + ' > ' + 'Additional Information: ' + imageValues[i]);
    });
    getImageDetails.value = allValue.join('\n');
});


///---//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-///-/


document.addEventListener('DOMContentLoaded', () => {
    const getCards = document.querySelectorAll('.get-cards-001 .elementor-loop-container .e-loop-item');
    const getPop = document.querySelector('.cards-popup')
    const getPopImg = getPop.querySelector('.popup-image-001 img');
    const getPopTitle = getPop.querySelector('.popup-title-001')
    const getPopSubTitle = getPop.querySelector('.popup-sub-title-001 h2')
    const getPopClose = getPop.querySelector('.close-btn-001')


    getCards.forEach((card,) => {
        const popupBtn = card.querySelector('.active-btn1');
        popupBtn.addEventListener('click', () => {
            getPopImg.src = card.querySelector('.card-image-001 img').src;
            getPopTitle.innerHTML = card.querySelector('.card-title-001').innerHTML;
            getPopSubTitle.innerHTML = card.querySelector('.card-contant-001 p').innerHTML;
            getPop.style.display = "flex";
        });

    });
    getPopClose.addEventListener('click', () => {
        getPop.style.display = "none";
    })
})



//

const getAminationWrap = document.querySelector('.amnimation_wrap');

// Cache the elements
const elements = {
    dashboard: getAminationWrap.querySelector('.dashboard_wrap'),
    dashboardSmall: getAminationWrap.querySelector('.dashboard-small'),
    calendar: getAminationWrap.querySelector('.calendar_wrap'),
    calendarSmall: getAminationWrap.querySelector('.calendar-small'),
    messege: getAminationWrap.querySelector('.messege_wrap'),
    messegeSmall: getAminationWrap.querySelector('.messege-small'),
    calendarImages: getAminationWrap.querySelectorAll('.calendar')
};

// Function to switch between active and hidden states
function toggleActive(activeElement, smallElementsToShow = [], smallElementsToHide = []) {
    // Hide all main sections
    elements.dashboard.classList.remove('active');
    elements.calendar.classList.remove('active');
    elements.messege.classList.remove('active');

    // Activate the correct section
    activeElement.classList.add('active');

    // Manage small elements visibility
    smallElementsToShow.forEach(el => el.classList.remove('hide'));
    smallElementsToHide.forEach(el => el.classList.add('hide'));
}

// Handle small dashboard click event
elements.dashboardSmall.addEventListener('click', () => {
    toggleActive(elements.dashboard, [elements.messegeSmall, elements.calendarSmall], [elements.dashboardSmall]);
    elements.messegeSmall.classList.remove('calendar');
    elements.calendarSmall.classList.remove('messege');
});

// Handle small calendar click event
elements.calendarSmall.addEventListener('click', () => {
    toggleActive(elements.calendar, [elements.dashboardSmall, elements.messegeSmall], [elements.calendarSmall]);
    elements.messegeSmall.classList.add('calendar');
    showCalendarImages(elements.calendarImages, 1000, 7); // Cycle calendar images
});

// Handle small message click event
elements.messegeSmall.addEventListener('click', () => {
    toggleActive(elements.messege, [elements.dashboardSmall, elements.calendarSmall], [elements.messegeSmall]);
    elements.dashboardSmall.classList.add('messege');
    elements.calendarSmall.classList.add('messege');
    elements.messegeSmall.classList.remove('calendar');
});

// Function to cycle through calendar images
function showCalendarImages(images, delay, times) {
    let count = 0;

    function displayCalendarImages() {
        if (count < times) {
            images.forEach(image => image.style.opacity = 0); // Hide all images
            images[count % images.length].style.opacity = 1; // Show current image
            count++;
            setTimeout(displayCalendarImages, delay); // Recursion with delay
        }
    }

    displayCalendarImages();
}


///////////////////////////////


const images = document.querySelectorAll('.custom_gallery .gallery-item');


images.forEach((image) => {
    image.addEventListener('click', () => {
        const textElement = document.querySelector('.elementor-slideshow__description');
        textElement.style.transition = "opacity 2s";
        textElement.style.opacity = '0';
        setTimeout(imagesOpen, 500);
        var nextBtn = document.querySelector('.elementor-swiper-button-next');
        var prevBtn = document.querySelector('.elementor-swiper-button-prev');
        nextBtn.addEventListener('click', () => {
            textElement.style.opacity = '0';
            setTimeout(changeText, 500);
        });
        prevBtn.addEventListener('click', () => {
            textElement.style.opacity = '0';
            setTimeout(changeText, 500);
        });
    });
});




function imagesOpen() {
    setTimeout(changeText, 500);
}


function changeText() {

    const textElement = document.querySelector('.elementor-slideshow__description');
    textElement.innerHTML = textElement.textContent;
    textElement.style.opacity = '1';
}




//-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



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

let newZIndex = 10;
let currentIndex = 0;

function next() {
    if (currentIndex < sliders.length) {
        // Activate the current slide
        setTimeout(() => nextReset(currentIndex), 1000);
        sliders[currentIndex].style.transition = 'all 1s ease-in-out';
        sliders[currentIndex].classList.add('active');
        sliders[currentIndex].style.zIndex = newZIndex;

        // Update the content
        setData(dataArray, currentIndex, contentAnimated);

        // Increment zIndex and set a reset timeout
        newZIndex++;
        // nextReset(currentIndex);

        // Move to the next slide
        currentIndex++;
    } else {
        // Loop back to the first slide
        currentIndex = 0;
        next();
    }
}

function nextReset(index) {
    if (index === 3) {
        sliders[0].style.zIndex = newZIndex - 3;

        // Reset the current slide to inactive
        sliders[0].style.transition = 'none';
        sliders[0].classList.remove('active');
    } else{
        sliders[index].style.zIndex = newZIndex - 3;

        // Reset the current slide to inactive
        sliders[index].style.transition = 'none';
        sliders[index].classList.remove('active');
    }
    
}

function prev() {
    if (currentIndex > 0) {
        setData(dataArray, currentIndex, contentAnimated);
        currentIndex--;
        newZIndex++;
        sliders[currentIndex].style.zIndex = newZIndex;

        sliders[currentIndex].style.transition = 'none';
        sliders[currentIndex].style.backgroundSize = '100% auto';
        sliders[currentIndex].style.left = '-100%';

        requestAnimationFrame(() => {
            sliders[currentIndex].style.transition = 'all 1s ease-in-out';
            sliders[currentIndex].style.backgroundSize = '150% auto';
            sliders[currentIndex].style.left = '0';
        });

        prevReset(currentIndex);
    } else {
        currentIndex = sliders.length;
        prev();
    }
}



function prevReset(i) {
    if (i === 0) {
        sliders[sliders.length - 1].style.transition = 'none';
        sliders[sliders.length - 1].style.backgroundSize = '100% auto';
        sliders[sliders.length - 1].style.left = '-100%';
    } else {
        sliders[i - 1].style.transition = 'none';
        sliders[i - 1].style.backgroundSize = '100% auto';
        sliders[i - 1].style.left = '-100%';
    }
    console.log('prevReset - index:', i);
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
next();

setTimeout(() => {
    next();
}, 10000);