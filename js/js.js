const getCard = document.querySelectorAll(".card-001");

for (let singleCard of getCard) {
    singleCard
        .querySelector(".button-001")
        .addEventListener("click", function (e) {
            e.preventDefault();
            singleCard.querySelector(".over-flow").classList.toggle("max-hight-001");
            let btnText = singleCard.querySelector(".elementor-button-text");

            const fontIcon = singleCard.querySelector(".fas").classList;
            if (fontIcon[1] == "fa-plus") {
                btnText.innerHTML = "Show less";
                fontIcon.remove("fa-plus");
                fontIcon.add("fa-minus");
            } else if (fontIcon[1] == "fa-minus") {
                btnText.innerHTML = "Show More";
                fontIcon.remove("fa-minus");
                fontIcon.add("fa-plus");
            }
        });
}

//--------------  bottom popup ------------------
//------------------------------------------------
function togglePopup() {
    var popup = document.getElementById("popupContainer");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}

function hidePopup() {
    document.getElementById("popupContainer").style.display = "none";
}

const getMyForm = document.querySelector(".form-001");
const getCheckBox = getMyForm.querySelectorAll(
    ".elementor-field-group-setp001 .elementor-field-subgroup  input"
);
const getButtonHide = document.querySelector(".btn-inner-01");
const getNextBtn = getMyForm.querySelector(
    ".e-form__buttons__wrapper__button-next"
);
const getText = getMyForm.querySelector(
    ".elementor-field-group-setp002 .elementor-field-group-field_c72494c"
);
const getRadio = getMyForm.querySelector(
    ".elementor-field-group-setp002 .elementor-field-group-field_c6b3e2d"
);
const getFormTitle = getMyForm.querySelector(
    ".elementor-field-group-setp002 .elementor-field-group-field_45e2788"
);
const getFormf1 = getMyForm.querySelector(
    ".elementor-field-group-setp002 .elementor-field-group-name"
);
const getFormf2 = getMyForm.querySelector(
    ".elementor-field-group-setp002 .elementor-field-group-mail"
);
const getFormf3 = getMyForm.querySelector(
    ".elementor-field-group-setp002 .elementor-field-group-phone"
);
const redioList = getRadio.querySelectorAll(".elementor-field-subgroup  input");
const sendBtn = getMyForm.querySelector("#btn-001");
const getBtnsend = document.querySelector("#btn-001");
const newButton = document.createElement("span");
for (let singCheck of getCheckBox) {
    singCheck.addEventListener("change", function () {
        for (let checkBox of getCheckBox) {
            if (checkBox.checked) {
                getButtonHide.style.display = "none";
                break;
            } else {
                getButtonHide.style.display = "block";
            }
        }
    });
}

// -----------------this is step two ----------------
//----------------------------------------------------
getNextBtn.addEventListener("click", function () {
    for (let checkBox of getCheckBox) {
        if (checkBox.checked) {
            if (checkBox.value == "noneof") {
                getText.style.display = "none";
                getRadio.style.display = "block";
                getFormTitle.style.display = "none";
                getFormf1.style.display = "none";
                getFormf2.style.display = "none";
                getFormf3.style.display = "none";
                console.log(checkBox.value, "runned");
            } else {
                getText.style.display = "block";
                getRadio.style.display = "none";
                getFormTitle.style.display = "none";
                getFormf1.style.display = "none";
                getFormf2.style.display = "none";
                getFormf3.style.display = "none";
                console.log(checkBox.value, "runned");
                break;
            }
        }
    }
});

// this is step three the form show and hide b
newButton.className = "newButtonClass";
newButton.textContent = "New Button";

for (let redio of redioList) {
    redio.addEventListener("change", function () {
        if (redio.value == "Winnipeg") {
            getFormf1.style.display = "block";
            getFormf2.style.display = "block";
            getFormf3.style.display = "block";
            newButton.replaceWith(getBtnsend);
        } else {
            getFormf2.style.display = "none";
            getFormf3.style.display = "none";
            getFormf1.style.display = "none";
            getBtnsend.replaceWith(newButton);
        }
    });
}

// this is step four its a rediract
sendBtn.addEventListener("click", function (e) {
    for (let redio of redioList) {
        if (redio.checked) {
            if ((redio.value = "Thunder Bay")) {
                console.log(redio.value);
                window.location.href =
                    "https://ccfph.janeapp.com/locations/ccfph-consultations/book#/discipline/2/treatment/106";
            } else if ((redio.value = "Sault Ste Marie")) {
                console.log(redio.value);
                window.location.href =
                    "https://ccfph.janeapp.com/locations/ccfph-consultations/book#/discipline/2/treatment/107";
            }
        }
    }
});

// ---------------------------acrrodian heden code -----------------------------
//------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const accords = document.querySelector(
        ".faq-x1 .elementor-widget-container .e-n-accordion"
    );
    const getAccBtn = document.querySelector(".acco-btn001");
    const accordsItem = accords.querySelectorAll(".e-n-accordion-item");
    for (let i = 3; i < accordsItem.length; i++) {
        accordsItem[i].classList.add("hide");
    }

    getAccBtn.addEventListener("click", function () {
        accordsItem.forEach((item) => {
            item.classList.toggle("hide");
        });
    });
});

// ------------------------image toggle --------------
//----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const mainCard = document.querySelector(".main__card");
    const [imgOne, imgTwo] = mainCard.querySelectorAll(".card100, .card200");

    mainCard.addEventListener("mouseover", () => {
        imgOne.style.display = "block";
        imgTwo.style.display = "none";
    });
    mainCard.addEventListener("mouseout", () => {
        imgOne.style.display = "none";
        imgTwo.style.display = "block";
    });
});

// --------------------make a aminatio------------------
//------------------------------------------------------
const getbtn = document.querySelector(".trigat-btn");
const mainDiv = document.querySelector(".main-con");

getbtn.addEventListener("mouseover", function () {
    mainDiv.classList.add("btn-ac");
});
getbtn.addEventListener("mouseout", function () {
    mainDiv.classList.remove("btn-ac");
});

document.addEventListener("DOMContentLoaded", function () {
    const actionBtn = document.querySelector(".ac-mega-button");
    const megaContainer = document.querySelector(".mega-menu-container-001");
    actionBtn.addEventListener("click", function () {
        megaContainer.classList.toggle("show");
    });
});

// ----------------------btn toggle and add class------------------------
//-----------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () =>
    document
        .querySelector(".ac-mega-button")
        .addEventListener("click", () =>
            document
                .querySelector(".mega-menu-container-001")
                .classList.toggle("show")
        )
);

// -------------------------schroling event-------------------------
//------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("scroll", function () {
        console.log(window.scrollY);

        const arrowItem = document.querySelector(".bact-to-top");
        if (window.scrollY > 200) {
            arrowItem.style.display = "none";
        } else {
            arrowItem.style.display = "block";
        }
    });
});

// -----------------------------get recaptire the math number------------------------------
//-----------------------------------------------------------------------------------------

const fristNumber = document.querySelector(".frist-number");
const secendNumber = document.querySelector(".secend-number");
const submitBtn = document.querySelector(".submit-btn");
//        const getInput = document.querySelector('.get-input')

//rendom manth sum value
let randomNumOne = Math.floor(Math.random() * 9) + 1;
let randomNumtwo = Math.floor(Math.random() * 9) + 1;

// sum the value
let sum = randomNumOne + randomNumtwo;
console.log(randomNumOne, randomNumtwo);

fristNumber.innerHTML = randomNumOne;
secendNumber.innerHTML = randomNumtwo;

const getCards = document.querySelectorAll(".show-brand-list li");
console.log(getCards);

for (getCard of getCards) {
    const container = document.createElement("div");
    const img = document.createElement("img");
    img.className = "inner-imge";
    img.src = "/wp-content/uploads/2024/03/Screenshot_1.png";
    container.className = "container-inner";
    container.appendChild(img);
    getCard.append(container);
}

const imagePreview = document.querySelector("#form-field-field_c298b70");

imagePreview.addEventListener("click", (e) => {
    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = (readerEvent) => {
            console.log(readerEvent.target.result);
        };

        reader.readAsDataURL(file);
    }
});

//---------------------------------------------------------
//---------------------------------------------------------
const btn1 = document.querySelector(".in1");
const btn2 = document.querySelector(".in2");
function btnCall() {
    console.log("it's runnig");
}
btn1.addEventListener("change", btnCall);
btn2.addEventListener("change", btnCall);

const getForm = document.querySelector(".full-form-001");
const getImageFild = document.querySelectorAll(".previewImageContainer");

const getInput = getForm.querySelector("#form-field-file900");
const getImageDitals = getForm.querySelector(
    '[name="form_fields[field_b5de8df]"]'
);
const getsubmit = getForm.querySelector("#submit-btn-001");
const getInputValue = getForm.querySelector("#form-field-field_425bc4f");
const getSelector = getForm.querySelector("select");
const getDelivery = getForm.querySelector(".delivery-type");
const getOrderFree = getForm.querySelector(".order-flat-fee");
const getTotal = getForm.querySelector(".tottal");
const itemTotal = getForm.querySelector(".items-total");
const orderTotal = getForm.querySelector(".order-total");
const getOptions = getForm.querySelectorAll(
    '[name="form_fields[field_c298b70]"] option'
);
const previewContainer = document.querySelector(".previewContainer");
const optionData = [2.95, 3.95, 4.95];
let imageNames = [];
let imageValues = [];
let imageQuntity = 0;
let files = 0;
getOptions.forEach((option, index) => {
    option.setAttribute("data-info", optionData[index]);
});

function countWords(str) {
    str = str.trim();
    let words = str.split(/\s+/);
    return words.slice(0, 4).join(" ");
}
function calculatChat(imageQuntity, getData) {
    let totalPraic = Number(imageQuntity) * Number(getData);
    return totalPraic.toFixed(2);
}

function priceLoad() {
    let getData = parseFloat(
        getSelector.options[getSelector.selectedIndex].dataset.info || 0
    );
    if (getSelector.value === getOptions[0].value) {
        getOrderFree.innerHTML = "9.95";
        getDelivery.innerHTML =
            countWords(getSelector.value) + " - " + imageQuntity + " X " + getData;
        getTotal.innerHTML = calculatChat(imageQuntity, getData);
        let totalRound =
            Number(getOrderFree.innerHTML) + Number(getTotal.innerHTML);
        itemTotal.innerHTML = totalRound.toFixed(2);
        orderTotal.innerHTML = totalRound.toFixed(2);
    } else if (getSelector.value === getOptions[1].value) {
        getOrderFree.innerHTML = "11.95";
        getDelivery.innerHTML =
            countWords(getSelector.value) + " - " + imageQuntity + " X " + getData;
        getTotal.innerHTML = calculatChat(imageQuntity, getData);
        let totalRound =
            Number(getOrderFree.innerHTML) + Number(getTotal.innerHTML);
        itemTotal.innerHTML = totalRound.toFixed(2);
        orderTotal.innerHTML = totalRound.toFixed(2);
    } else if (getSelector.value === getOptions[2].value) {
        getOrderFree.innerHTML = "13.95";
        getDelivery.innerHTML =
            countWords(getSelector.value) + " - " + imageQuntity + " X " + getData;
        getTotal.innerHTML = calculatChat(imageQuntity, getData);
        let totalRound =
            Number(getOrderFree.innerHTML) + Number(getTotal.innerHTML);
        itemTotal.innerHTML = totalRound.toFixed(2);
        orderTotal.innerHTML = totalRound.toFixed(2);
    }
    getInputValue.value = `
    Order Flat Fee:    ${getOrderFree.innerHTML}
    Delivery Type:${getDelivery.innerHTML} = ${getTotal.innerHTML}
    Items Total:   ${itemTotal.innerHTML}
    Tax:   $0.00
    Order Total:   ${orderTotal.innerHTML}`;
}

getInput.addEventListener("change", function () {
    files = getInput.files;
    imageQuntity += files.length;

    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        imageNames.push(file.name);

        let reader = new FileReader();
        if ((getImageFild.length = getInput.files.length)) {
            reader.onload = (function (file) {
                return function (e) {
                    var previewImageContainer = document.createElement("div");
                    previewImageContainer.className = "previewImageContainer";

                    var previewImage = document.createElement("img");
                    previewImage.className = "previewImage";
                    previewImage.src = e.target.result;

                    const removeButton = document.createElement("button");
                    removeButton.className = "removeButton";
                    removeButton.textContent = "Remove";

                    removeButton.onclick = function () {
                        previewContainer.removeChild(previewImageContainer);
                        updateOrderDetails();
                    };

                    var textInput = document.createElement("input");
                    textInput.className = "textInput";
                    textInput.type = "text";

                    textInput.placeholder = "Enter additional information";
                    previewImageContainer.appendChild(previewImage);
                    previewImageContainer.appendChild(removeButton);
                    previewImageContainer.appendChild(textInput);

                    previewContainer.appendChild(previewImageContainer);
                };
            })(file);
        }
        reader.readAsDataURL(file);
    }
    priceLoad();
});
getSelector.addEventListener("change", priceLoad);

getsubmit.addEventListener("click", function () {
    let allvalue = [];
    const imageInputs = previewContainer.querySelectorAll(".textInput");
    imageInputs.forEach(function (input) {
        imageValues.push(input.value);
    });

    for (let i = 0; i < imageNames.length; i++) {
        allvalue.push(
            [i + 1] +
            " . " +
            "Image Name: " +
            imageNames[i] +
            " > " +
            "Additional Information: " +
            imageValues[i]
        );
    }
    getImageDitals.value = allvalue.join("\n");
});

// document.addEventListener("DOMContentLoaded", () => {

//     const getForm = document.querySelector(".full-form-001");
//     const getImageFild = document.querySelectorAll(".previewImageContainer");
//     const getInput = getForm.querySelector('#form-field-file900');
//     const getImageDitals = getForm.querySelector('[name="form_fields[field_b5de8df]"]');
//     const getSubmit = getForm.querySelector('#submit-btn-001');
//     const getInputValue = getForm.querySelector('#form-field-field_425bc4f');
//     const getSelector = getForm.querySelector("select");
//     const getDelivery = getForm.querySelector(".delivery-type");
//     const getOrderFree = getForm.querySelector(".order-flat-fee");
//     const getTotal = getForm.querySelector('.tottal');
//     const itemTotal = getForm.querySelector('.items-total');
//     const orderTotal = getForm.querySelector('.order-total');
//     const getOptions = getForm.querySelectorAll('[name="form_fields[field_c298b70]"] option');
//     const previewContainer = document.querySelector('.previewContainer');
//     const optionData = [2.95, 3.95, 4.95];
//     let imageNames = [];
//     let imageValues = [];
//     let imageQuantity = 0;
//     let files = 0;

//     getOptions.forEach((option, index) => {
//         option.setAttribute('data-info', optionData[index]);
//     });

//     function countWords(str) {
//         str = str.trim();
//         let words = str.split(/\s+/);
//         return words.slice(0, 4).join(' ');
//     }

//     function calculateChat(imageQuantity, getData) {
//         let totalPraic = Number(imageQuantity) * Number(getData);
//         return totalPraic.toFixed(2);
//     }

//     function priceLoad() {
//         let getData = parseFloat(getSelector.options[getSelector.selectedIndex].dataset.info || 0);
//         if (getSelector.value === getOptions[0].value) {
//             getOrderFree.innerHTML = '9.95';
//         } else if (getSelector.value === getOptions[1].value) {
//             getOrderFree.innerHTML = '11.95';
//         } else if (getSelector.value === getOptions[2].value) {
//             getOrderFree.innerHTML = '13.95';
//         }

//         getDelivery.innerHTML = countWords(getSelector.value) + ' - ' + imageQuantity + ' X ' + getData;
//         getTotal.innerHTML = calculateChat(imageQuantity, getData);
//         let totalRound = Number(getOrderFree.innerHTML) + Number(getTotal.innerHTML);
//         itemTotal.innerHTML = totalRound.toFixed(2);
//         orderTotal.innerHTML = totalRound.toFixed(2);

//         getInputValue.value = `
//     Order Flat Fee:    ${getOrderFree.innerHTML}
//     Delivery Type: ${getDelivery.innerHTML} = ${getTotal.innerHTML}
//     Items Total:   ${itemTotal.innerHTML}
//     Tax:   $0.00
//     Order Total:   ${orderTotal.innerHTML}

//     ------------------------------------------`;
//     }

//     getInput.addEventListener('change', function () {
//         previewContainer.innerHTML = '';
//         files = getInput.files;
//         imageQuantity += files.length;
//         for (let i = 0; i < files.length; i++) {
//             let file = files[i];
//             imageNames.push(file.name);
//             let reader = new FileReader();
//             reader.onload = (function (file) {
//                 return function (e) {
//                     var previewImageContainer = document.createElement('div');
//                     previewImageContainer.className = 'previewImageContainer';
//                     var previewImage = document.createElement('img');
//                     previewImage.className = 'previewImage';
//                     previewImage.src = e.target.result;
//                     const removeButton = document.createElement('button');
//                     removeButton.className = 'removeButton';
//                     removeButton.textContent = 'Remove';
//                     removeButton.onclick = function () {
//                         previewContainer.removeChild(previewImageContainer);
//                         imageQuantity--;
//                         priceLoad();
//                     };
//                     var textInput = document.createElement('input');
//                     textInput.className = 'textInput';
//                     textInput.type = 'text';
//                     textInput.placeholder = 'Enter additional information';
//                     previewImageContainer.appendChild(previewImage);
//                     previewImageContainer.appendChild(removeButton);
//                     previewImageContainer.appendChild(textInput);
//                     previewContainer.appendChild(previewImageContainer);
//                 };
//             })(file);
//             reader.readAsDataURL(file);
//         }
//         priceLoad();
//     });

//     getSubmit.addEventListener("click", function () {
//         let allvalue = [];  // Ensure the array is declared inside the event listener

//         getImageFild.forEach(function (previewImageContainer) {
//             const perImage = previewImageContainer.querySelector('.previewImage');
//             const perImageName = perImage.getAttribute('data-info');
//             const inputField = previewImageContainer.querySelector('.textInput').value;

//             allvalue.push('Image Name: ' + perImageName + ', Additional Information: ' + inputField);
//         });

//         getImageDitals.value = allvalue.join('\n');
//     });
// });

// Step 1: Get a reference to the element you want to observe
const targetElement = document.getElementById("targetElementId");

// Step 2: Create the observer callback
const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
            console.log(`Class change detected!`);
            // You can explore mutation.oldValue for the previous class value, if needed
            console.log(`Old class value: ${mutation.oldValue}`);
            // Get the current class value
            console.log(`New class value: ${targetElement.className}`);
        }
    }
};

// Step 3: Configure the observer
const config = {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ["class"],
};

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

document.addEventListener("DOMContentLoaded", () => {
    const getLoops = document.querySelectorAll(".get-loop001 .e-loop-item");

    for (let item of getLoops) {
        const bgi = item.querySelector(".tocen-001");
        if (bgi.textContent.trim() === "") {
            bgi.style.display = "none";
        }
    }
});

//------------------------------------------------------------------------

const getGal = document.querySelectorAll(".image-cerosol-001 .swiper-slide");
const sliderBtnsPrev = document.querySelectorAll(
    ".elementor-swiper-button-prev"
);
const sliderBtnsNext = document.querySelectorAll(
    ".elementor-swiper-button-next"
);

// Add event listeners to "previous" buttons
for (let Btn of sliderBtnsPrev) {
    Btn.addEventListener("click", function () {
        setTimeout(htlon, 1000); // Delay of 1000 milliseconds (1 second)
    });
}

// Add event listeners to "next" buttons
for (let Btn of sliderBtnsNext) {
    Btn.addEventListener("click", function () {
        setTimeout(htlon, 1000); // Delay of 1000 milliseconds (1 second)
    });
}

// Add event listeners to image slides
for (let singCart of getGal) {
    singCart.addEventListener("click", function () {
        setTimeout(htFun, 1000); // Delay of 1000 milliseconds (1 second)
    });
}

function htFun() {
    console.log("hello");
    const sliderFooter = document.querySelector(
        ".elementor-slideshow__description"
    );

    if (sliderFooter) {
        const url = sliderFooter.textContent.trim();
        sliderFooter.textContent = "";

        if (url) {
            const a = document.createElement("a");
            a.setAttribute("href", url);
            a.textContent = "Go To";
            sliderFooter.appendChild(a);
        }
    } else {
        console.error("Slider footer element not found!");
    }
}
function htlon() {
    console.log("hello");
    const sliderFooter = document.querySelector(".elementor-slideshow__title");

    if (sliderFooter) {
        const url = sliderFooter.textContent.trim();
        sliderFooter.textContent = "";

        if (url) {
            const a = document.createElement("a");
            a.setAttribute("href", url);
            a.textContent = "Go To";
            sliderFooter.appendChild(a);
        }
    } else {
        console.error("Slider footer element not found!");
    }
}

///---//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-///-/

const getForm = document.querySelector(".full-form-001");
const getImageField = document.querySelectorAll(".previewImageContainer");
const getInput = getForm.querySelector("#form-field-file900");
const getImageDetails = getForm.querySelector(
    '[name="form_fields[field_b5de8df]"]'
);
const getSubmit = getForm.querySelector("#submit-btn-001");
const getInputValue = getForm.querySelector("#form-field-field_425bc4f");
const getSelector = getForm.querySelector("select");
const getDelivery = getForm.querySelector(".delivery-type");
const getOrderFee = getForm.querySelector(".order-flat-fee");
const getTotal = getForm.querySelector(".tottal");
const itemTotal = getForm.querySelector(".items-total");
const orderTotal = getForm.querySelector(".order-total");
const getOptions = getForm.querySelectorAll(
    '[name="form_fields[field_c298b70]"] option'
);
const previewContainer = document.querySelector(".previewContainer");
const optionData = [2.95, 3.95, 4.95];
let imageNames = [];
let imageValues = [];
let imageQuantity = 0;
let files = 0;

getOptions.forEach((option, index) => {
    option.setAttribute("data-info", optionData[index]);
});

function countWords(str) {
    str = str.trim();
    let words = str.split(/\s+/);
    return words.slice(0, 4).join(" ");
}

function calculatePrice(imageQuantity, getData) {
    let totalPrice = Number(imageQuantity) * Number(getData);
    return totalPrice.toFixed(2);
}

function priceLoad() {
    let getData = parseFloat(
        getSelector.options[getSelector.selectedIndex].dataset.info || 0
    );
    if (getSelector.value === getOptions[0].value) {
        getOrderFee.innerHTML = "9.95";
    } else if (getSelector.value === getOptions[1].value) {
        getOrderFee.innerHTML = "11.95";
    } else if (getSelector.value === getOptions[2].value) {
        getOrderFee.innerHTML = "13.95";
    }

    getDelivery.innerHTML =
        countWords(getSelector.value) + " - " + imageQuantity + " X " + getData;
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

getInput.addEventListener("change", function () {
    previewContainer.innerHTML = "";
    files = getInput.files;
    imageQuantity = files.length;
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        imageNames.push(file.name);
        let reader = new FileReader();
        reader.onload = (function (file) {
            return function (e) {
                var previewImageContainer = document.createElement("div");
                previewImageContainer.className = "previewImageContainer";
                var previewImage = document.createElement("img");
                previewImage.className = "previewImage";
                previewImage.src = e.target.result;

                var textInput = document.createElement("input");
                textInput.className = "textInput";
                textInput.type = "text";
                textInput.placeholder = "Enter additional information";
                previewImageContainer.appendChild(previewImage);
                previewImageContainer.appendChild(textInput);
                previewContainer.appendChild(previewImageContainer);
            };
        })(file);
        reader.readAsDataURL(file);
    }
    priceLoad();
});

getSelector.addEventListener("change", priceLoad);
getSubmit.addEventListener("click", function () {
    let allValue = [];
    const imageInputs = previewContainer.querySelectorAll(".textInput");
    imageInputs.forEach(function (input, i) {
        imageValues.push(input.value);
        allValue.push(
            [i + 1] +
            " . " +
            "Image Name: " +
            imageNames[i] +
            " > " +
            "Additional Information: " +
            imageValues[i]
        );
    });
    getImageDetails.value = allValue.join("\n");
});

///---//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-///-/

document.addEventListener("DOMContentLoaded", () => {
    const getCards = document.querySelectorAll(
        ".get-cards-001 .elementor-loop-container .e-loop-item"
    );
    const getPop = document.querySelector(".cards-popup");
    const getPopImg = getPop.querySelector(".popup-image-001 img");
    const getPopTitle = getPop.querySelector(".popup-title-001");
    const getPopSubTitle = getPop.querySelector(".popup-sub-title-001 h2");
    const getPopClose = getPop.querySelector(".close-btn-001");

    getCards.forEach((card) => {
        const popupBtn = card.querySelector(".active-btn1");
        popupBtn.addEventListener("click", () => {
            getPopImg.src = card.querySelector(".card-image-001 img").src;
            getPopTitle.innerHTML = card.querySelector(".card-title-001").innerHTML;
            getPopSubTitle.innerHTML = card.querySelector(
                ".card-contant-001 p"
            ).innerHTML;
            getPop.style.display = "flex";
        });
    });
    getPopClose.addEventListener("click", () => {
        getPop.style.display = "none";
    });
});
//----------------------------------------------------------
//------------------Update Order Details ----------------
//----------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const mainContainer = document.querySelector(".main-container-001");
    const tabBtns = mainContainer.querySelectorAll(".tab-button-001");
    const tabContant = mainContainer.querySelectorAll(".tab-contant-001");
    const getImageCerosol = mainContainer.querySelector(".image-carosol-001");
    const translet = mainContainer.querySelector(".translet-001");
    const contantContainer = mainContainer.querySelector(".contant-container");
    const englishContent = mainContainer.querySelectorAll(".content-engilish");
    const hebrewContent = mainContainer.querySelectorAll(".content-hebrew");
    const galleryBtn = mainContainer.querySelector(".gallery-btn-001");
    let imageList = [
        "/wp-content/uploads/2024/03/upstairs.jpg",
        "/wp-content/uploads/2024/03/ENTREES.jpg",
        "/wp-content/uploads/2024/03/main.jpg",
        "/wp-content/uploads/2024/03/DESSERTS.jpg",
        "/wp-content/uploads/2024/03/Cocktails.jpg",
        "/wp-content/uploads/2024/03/Wine-Cellar.jpg",
    ];

    tabBtns.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            contantContainer.classList.remove("reset-container");
            getImageCerosol.style.display = "none";
            tabContant.forEach((element) => {
                element.style.display = "none";
            });

            // Reset all button colors to default
            tabBtns.forEach((button) => {
                button.querySelector(
                    ".elementor-widget-container"
                ).style.backgroundColor = "#FFFFFF99";
            });

            tabContant[index].style.display = "block";
            mainContainer.style.backgroundImage = `url(${imageList[index]})`;

            // Set the selected button color
            if (index > 0) {
                tab.querySelector(".elementor-widget-container").style.backgroundColor =
                    "#ABA26D";
            }
        });
    });

    let english = true;

    translet.addEventListener("click", () => {
        if (english) {
            englishContent.forEach((e) => (e.style.display = "none"));
            hebrewContent.forEach((h) => (h.style.display = "block"));
            translet.querySelector(".elementor-heading-title").textContent = "עברית";
            english = false;
        } else {
            englishContent.forEach((e) => (e.style.display = "block"));
            hebrewContent.forEach((h) => (h.style.display = "none"));
            translet.querySelector(".elementor-heading-title").textContent =
                "ENGLISH";
            english = true;
        }
    });

    galleryBtn.addEventListener("click", () => {
        contantContainer.classList.add("reset-container");
        getImageCerosol.style.display = "block";
        if (getImageCerosol.style.display != "none") {
            setInterval(changeimage, 500);
        }
    });

    function changeimage() {
        let activeImage = getImageCerosol.querySelector(
            ".swiper-slide-active .swiper-slide-inner img"
        );
        mainContainer.style.backgroundImage = `url(${activeImage.src})`;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const mainContainer = document.querySelector(".main-container-001");
    const tabBtns = mainContainer.querySelectorAll(".tab-button-001");
    const tabContant = mainContainer.querySelectorAll(".tab-contant-001");
    const getImageCerosol = mainContainer.querySelector(".image-carosol-001");
    const translet = mainContainer.querySelector(".translet-001");
    const contantContainer = mainContainer.querySelector(".contant-container");
    const englishContent = mainContainer.querySelectorAll(".content-engilish");
    const hebrewContent = mainContainer.querySelectorAll(".content-hebrew");
    const galleryBtn = mainContainer.querySelector(".gallery-btn-001");
    let imageList = [
        "/wp-content/uploads/2024/03/upstairs.jpg",
        "/wp-content/uploads/2024/03/ENTREES.jpg",
        "/wp-content/uploads/2024/03/main.jpg",
        "/wp-content/uploads/2024/03/DESSERTS.jpg",
        "/wp-content/uploads/2024/03/Cocktails.jpg",
        "/wp-content/uploads/2024/03/Wine-Cellar.jpg",
    ];

    tabBtns.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            contantContainer.classList.remove("reset-container");
            getImageCerosol.style.display = "none";
            tabContant.forEach((element) => {
                element.style.display = "none";
            });

            // Reset all button colors to default
            tabBtns.forEach((button) => {
                button.querySelector(
                    ".elementor-widget-container"
                ).style.backgroundColor = "#FFFFFF99";
            });

            tabContant[index].style.display = "block";
            mainContainer.style.backgroundImage = `url(${imageList[index]})`;

            // Set the selected button color
            if (index > 0) {
                tab.querySelector(".elementor-widget-container").style.backgroundColor =
                    "#ABA26D";
            }
        });
    });

    let english = true;

    translet.addEventListener("click", () => {
        if (english) {
            englishContent.forEach((e) => (e.style.display = "none"));
            hebrewContent.forEach((h) => (h.style.display = "block"));
            translet.querySelector(".elementor-heading-title").textContent = "עברית";
            english = false;
        } else {
            englishContent.forEach((e) => (e.style.display = "block"));
            hebrewContent.forEach((h) => (h.style.display = "none"));
            translet.querySelector(".elementor-heading-title").textContent =
                "ENGLISH";
            english = true;
        }
    });

    galleryBtn.addEventListener("click", () => {
        contantContainer.classList.add("reset-container");
        getImageCerosol.style.display = "block";
        if (getImageCerosol.style.display != "none") {
            setInterval(changeimage, 500);
        }
    });

    function changeimage() {
        let activeImage = getImageCerosol.querySelector(
            ".swiper-slide-active .swiper-slide-inner img"
        );
        mainContainer.style.backgroundImage = `url(${activeImage.src})`;
    }
});

const sliderNavItems = document.querySelectorAll(".slider-nav ul li");
const getSliders = document.querySelectorAll(".single-slider");
const topContent = document.querySelectorAll(".slider-content-top");
const bottomContent = document.querySelectorAll(".slider-content-buttom");
const getDots = document.querySelectorAll(".dot");

sliderNavItems.forEach((navItem, index) => {
    navItem.addEventListener("click", () => {
        sliderNavItems.forEach((item) => {
            item.style.opacity = 0.5;
        });
        getDots.forEach((item) => {
            item.style.Color = "transparent";
            item.style.backgroundColor = "transparent";
            item.style.borderColor = "#fff";
        });
        getSliders.forEach((item) => {
            item.style.opacity = 0;
            item.style.transition = "opacity 0.5s ease-in-out";
        });

        topContent.forEach((item) => {
            item.style.top = "-20px";
            item.style.transition =
                "top 0.5s ease-in-out, opacity 2s ease-in-out 1.5s";
        });

        bottomContent.forEach((item) => {
            item.style.top = "20px";
            item.style.transition =
                "top 0.5s ease-in-out, opacity 2s ease-in-out 1.5s";
        });
        getSliders;

        getSliders[index].style.opacity = 1;
        topContent[index].style.top = 0;
        bottomContent[index].style.top = 0;

        navItem.style.opacity = 1;

        getDots[index].style.Color = "#ffc80f";
        getDots[index].style.backgroundColor = "#ffc80f";
        getDots[index].style.borderColor = "#ffc80f";
    });
});

const getSlider = document.querySelectorAll(".slider");

for (let slide of getSlider) {
    // Get all navigation items within the slider
    const getAllNavigation = slide.querySelectorAll(".slider-nav ul li");
    // Get all slides within the slider
    const getAllSlider = slide.querySelectorAll(".slider-body .single-slider");

    // Set the first navigation item and slide to active
    getAllNavigation[0].setAttribute("active-status", true);
    getAllSlider[0].setAttribute("active-status", true);

    // Add click event listeners to each navigation item
    getAllNavigation.forEach(function (current, index, arr) {
        current.addEventListener("click", function () {
            // Deactivate all navigation items and slides
            getAllNavigation.forEach(function (current2, index2, arr2) {
                current2.setAttribute("active-status", false);
                getAllSlider[index2].setAttribute("active-status", false);
            });
            // Set the clicked navigation item and slide to active
            current.setAttribute("active-status", true);
            getAllSlider[index].setAttribute("active-status", true);
        });
    });
}

//--------------------form funtion lity ----------------
//------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const getForm = document.querySelector(".full-form-001");
    const getImageFild = document.querySelectorAll(".previewImageContainer");
    const getInput = getForm.querySelector("#form-field-file900");
    const getImageDitals = getForm.querySelector(
        '[name="form_fields[field_b5de8df]"]'
    );
    const getSubmit = getForm.querySelector("#submit-btn-001");
    const getInputValue = getForm.querySelector("#form-field-field_425bc4f");
    const getSelector = getForm.querySelector("select");
    const getDelivery = getForm.querySelector(".delivery-type");
    const getOrderFree = getForm.querySelector(".order-flat-fee");
    const getTotal = getForm.querySelector(".tottal");
    const itemTotal = getForm.querySelector(".items-total");
    const orderTotal = getForm.querySelector(".order-total");
    const getOptions = getForm.querySelectorAll(
        '[name="form_fields[field_c298b70]"] option'
    );
    const previewContainer = document.querySelector(".previewContainer");
    const optionData = [2.95, 3.95, 4.95];
    let imageNames = [];
    let imageValues = [];
    let imageQuantity = 0;
    let files = 0;

    getOptions.forEach((option, index) => {
        option.setAttribute("data-info", optionData[index]);
    });

    function countWords(str) {
        str = str.trim();
        let words = str.split(/\s+/);
        return words.slice(0, 4).join(" ");
    }

    function calculateChat(imageQuantity, getData) {
        let totalPraic = Number(imageQuantity) * Number(getData);
        return totalPraic.toFixed(2);
    }

    function priceLoad() {
        let getData = parseFloat(
            getSelector.options[getSelector.selectedIndex].dataset.info || 0
        );
        if (getSelector.value === getOptions[0].value) {
            getOrderFree.innerHTML = "9.95";
        } else if (getSelector.value === getOptions[1].value) {
            getOrderFree.innerHTML = "11.95";
        } else if (getSelector.value === getOptions[2].value) {
            getOrderFree.innerHTML = "13.95";
        }

        getDelivery.innerHTML =
            countWords(getSelector.value) + " - " + imageQuantity + " X " + getData;
        getTotal.innerHTML = calculateChat(imageQuantity, getData);
        let totalRound =
            Number(getOrderFree.innerHTML) + Number(getTotal.innerHTML);
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

    getInput.addEventListener("change", function () {
        previewContainer.innerHTML = "";
        files = getInput.files;
        imageQuantity += files.length;
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            imageNames.push(file.name);
            let reader = new FileReader();
            reader.onload = (function (file) {
                return function (e) {
                    var previewImageContainer = document.createElement("div");
                    previewImageContainer.className = "previewImageContainer";
                    var previewImage = document.createElement("img");
                    previewImage.className = "previewImage";
                    previewImage.src = e.target.result;
                    const removeButton = document.createElement("button");
                    removeButton.className = "removeButton";
                    removeButton.textContent = "Remove";
                    removeButton.onclick = function () {
                        previewContainer.removeChild(previewImageContainer);
                        imageQuantity--;
                        priceLoad();
                    };
                    var textInput = document.createElement("input");
                    textInput.className = "textInput";
                    textInput.type = "text";
                    textInput.placeholder = "Enter additional information";
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
        let allvalue = []; // Ensure the array is declared inside the event listener

        getImageFild.forEach(function (previewImageContainer) {
            const perImage = previewImageContainer.querySelector(".previewImage");
            const perImageName = perImage.getAttribute("data-info");
            const inputField =
                previewImageContainer.querySelector(".textInput").value;

            allvalue.push(
                "Image Name: " +
                perImageName +
                ", Additional Information: " +
                inputField
            );
        });

        getImageDitals.value = allvalue.join("\n");
    });
});

// Step 1: Get a reference to the element you want to observe
const targetElement = document.getElementById("targetElementId");

// Step 2: Create the observer callback
const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
            console.log(`Class change detected!`);
            // You can explore mutation.oldValue for the previous class value, if needed
            console.log(`Old class value: ${mutation.oldValue}`);
            // Get the current class value
            console.log(`New class value: ${targetElement.className}`);
        }
    }
};

// Step 3: Configure the observer
const config = {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ["class"],
};

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

//----------------------remove bb tag-----------------------
//----------------------------------------------------------
// Select all <b> elements on the page
var boldTags = document.querySelectorAll("b");

// Loop through each <b> element and replace it with its children
boldTags.forEach(function (tag) {
    // Loop through the child nodes of the <b> element
    while (tag.firstChild) {
        // Insert each child node before the <b> element
        tag.parentNode.insertBefore(tag.firstChild, tag);
    }
    // Remove the empty <b> element
    tag.parentNode.removeChild(tag);
});

//----------------------------------------
//----------------------------------------
const menuBtn = document.querySelector(".menu-icon001");

menuBtn.addEventListener("click", () => {
    document.querySelector("#elementor-popup-modal-556").style.display = "flex";
    const menuIcon = menuBtn.querySelector("svg").cloneNode(true); // Clone the menu icon SVG
    const closeIcon = document.querySelector(".dialog-lightbox-close-button svg"); // Get the close icon SVG container

    // Ensure closeIcon is visible before replacing it

    // Replace the closeIcon with menuIcon
    closeIcon.parentNode.replaceChild(menuIcon, closeIcon);
});

//-----------------------------------------
//-----------------------------------------

const mainCon = document.querySelectorAll(".btn-container-001");

mainCon.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.classList.add("active");
        const [conInner, conIcon, text] = [
            item.querySelector(".button-inner"),
            item.querySelector(".con-icon"),
            item.querySelector(".text-001"),
        ];
        [conInner, conIcon, text].forEach((el) => el.classList.add("active"));
    });
    item.addEventListener("mouseout", () => {
        item.classList.remove("active");
        const [conInner, conIcon, text] = [
            item.querySelector(".button-inner"),
            item.querySelector(".con-icon"),
            item.querySelector(".text-001"),
        ];
        [conInner, conIcon, text].forEach((el) => el.classList.remove("active"));
    });
});
//-----------------------------------------
//-----------------------------------------

//---------------------------------------
const getGal = document.querySelectorAll(".image-cerosol-001 .swiper-slide");
const sliderBtnsPrev = document.querySelectorAll(
    ".elementor-swiper-button-prev"
);
const sliderBtnsNext = document.querySelectorAll(
    ".elementor-swiper-button-next"
);

for (let Btn of sliderBtnsPrev) {
    Btn.addEventListener("click", function () {
        console.log("Clicked on button1");
        setTimeout(htFun, 100);
    });
}
for (let Btn of sliderBtnsNext) {
    Btn.addEventListener("click", function () {
        console.log("Clicked on button2");
        setTimeout(htFun, 100);
    });
}

for (let singCart of getGal) {
    singCart.addEventListener("click", function () {
        setTimeout(htFun, 0);
    });
}
function htFun() {
    console.log("hello");
    const sliderFooter = document.querySelector(
        ".elementor-slideshow__description"
    );
    const url = sliderFooter.textContent.trim();
    sliderFooter.textContent = "";
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.textContent = "Go To";
    sliderFooter.appendChild(a);
}

// this is a card poupop  for the product in home page
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".cards-001 .e-loop-item");
    console.log(cards);
    cards.forEach((card) => {
        const popup = card.querySelector(".poup-001");
        const btn = card.querySelector(".active-btn1");
        btn.addEventListener("click", () => {
            popup.classList.add("active");
        });
        const getcanel = card.querySelector(".cancel-001");
        getcanel.addEventListener("click", () => {
            popup.classList.remove("active");
        });
    });
});

const maivalu = 500;
const tenPar = (mainCon / 100) * 10;
const total = maivalu - tenPar;
console.log(total);

document.activeElement("DOMContentLoaded", () => {
    const musicContent = document.querySelector(".loop-music11");
    const getMusic = musicContent.querySelectorAll(".music-item");
    const getPopup = document.querySelector(".music-popup");
    const closePop = document.querySelector(".close-popup-001");
    const amazonPop = getPopup.querySelector(".pop-amazon a");
    const spotifyPop = getPopup.querySelector(".pop-spotify a");
    const applePop = getPopup.querySelector(".pop-apple a");

    getMusic.forEach((music) => {
        music.addEventListener("click", () => {
            const amazonMusic = document.querySelector(".music-amazon a");
            const spotifyMusic = document.querySelector(".music-spotify a");
            const appleMusic = document.querySelector(".music-apple a");

            amazonPop.href = amazonMusic.href;
            spotifyPop.href = spotifyMusic.href;
            applePop.href = appleMusic.href;
            getPopup.style.display = "flex";
        });
    });

    closePop.addEventListener("click", () => {
        getPopup.style.display = "none";
    });
});

const placeOrder = document.querySelector("place_order");
placeOrder.after;

document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll(".product_title");
    const textArray = [];
    const registeredTrademark = "®";

    headings.forEach((heading) => {
        if (heading.textContent.trim()) {
            const [part1, ...rest] = heading.textContent.split(registeredTrademark);
            const part2 = rest.join(registeredTrademark);
            textArray.push(part1);
            if (part2) {
                textArray.push(part2);
            }
            heading.innerHTML = `${part1}<span class="heading_icon">${registeredTrademark}</span> ${part2}`;
        }
    });
});

const headings = document.querySelectorAll(".product_title");
const textArray = [];
const registeredTrademark = "®";

headings.forEach((heading) => {
    if (heading.textContent.trim()) {
        const [part1, ...rest] = heading.textContent.split(registeredTrademark);
        const part2 = rest.join(registeredTrademark);
        textArray.push(part1);
        if (part2) {
            textArray.push(part2);
        }
        heading.innerHTML = `${part1}<span class="heading_icon">${registeredTrademark}</span> ${part2}`;
    }
});

//

document.querySelector(".bottom_sec").style.top = "0";
document.querySelector(".bottom_sec").style.top = "-200px";

//
document.addEventListener("DOMContentLoaded", () => {
    const SectionPopop = document.querySelector(".section_popop");
    SectionPopop.style.transform = "translateX(-50%)!important";

    window.onscroll = function (e) {
        if (window.scrollY >= 600) {
            SectionPopop.style.bottom = "0px";
        } else {
            SectionPopop.style.bottom = "-30%";
        }
    };
});

//

document.addEventListener("DOMContentLoaded", () => {
    const mideaSection = document.querySelector(".midea_section");
    const sectionImage = document.querySelector(".fesure_image");

    if (mideaSection.querySelector(".media_video") !== null) {
        sectionImage.style.display = "none";
    } else {
        sectionImage.style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const mideaSection = document.querySelector(".midea_section");
    const sectionImage = document.querySelector(".fesure_image");
    const mediaVideo = mideaSection.querySelector(".media_video");

    sectionImage.style.display = mediaVideo ? "none" : "block";
});

//

document.addEventListener("DOMContentLoaded", () => {
    const numContainer = document.querySelector(".count_container");
    const perContainers = numContainer.querySelectorAll(".per_con h2");
    const num = document.querySelector(
        ".the_number .post-views-count"
    ).textContent;
    const length = 9;
    let numStr = num.toString().padStart(length, "0");

    let numArr = numStr.split("").map(Number);

    perContainers.forEach((item, index) => {
        item.textContent = numArr[index] !== undefined ? numArr[index] : "0";
    });
});

//

var acc = document.querySelector(".custom_accrodian");
var accItem = acc.querySelectorAll(".accrodian-item");

var i;

for (i = 0; i < accItem.length; i++) {
    accItem[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.querySelector(".panel");
        var accIcon = this.querySelector(".accrodian_icon");

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            accIcon.style.transform = "rotate(0)";
            this.style.border = "2px solid #ffffff00";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            this.style.border = "2px solid #9a72f9";
            accIcon.style.transform = "rotate(90deg)";
        }
    });
}

//
document.addEventListener("DOMContentLoaded", () => {
    const acc = document.querySelector(".custom_accrodian");
    const accItem = acc.querySelectorAll(".accrodian-item");

    accItem.forEach(function (item) {
        item.addEventListener("click", function () {
            accItem.forEach(function (otherItem) {
                if (otherItem !== item) {
                    let otherPanel = otherItem.querySelector(".panel");
                    let otherIcon = otherItem.querySelector(".accrodian_icon");
                    //
                    otherPanel.style.maxHeight = null;
                    otherIcon.style.transform = "rotate(0)";
                    otherItem.style.border = "2px solid #ffffff00";
                }
            });
            let panel = this.querySelector(".panel");
            let accIcon = this.querySelector(".accrodian_icon");
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                accIcon.style.transform = "rotate(0)";
                this.style.border = "2px solid #ffffff00";
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                this.style.border = "2px solid #9a72f9";
                accIcon.style.transform = "rotate(90deg)";
            }
        });
    });
});

//marquee

//     .marquee {
//     overflow: hidden;
//     display: flex;
// }

// .marquee h1{
//     font - size: 5em;
//     white - space: nowrap;
// }
// <div class="marquee">
//     <h2>Nepal * Himalayas * Mountains * Everest</h2>
// </div>

function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    console.log(firstElement);
    parentSelector.insertAdjacentHTML("beforeend", clone);
    parentSelector.insertAdjacentHTML("beforeend", clone);

    setInterval(function () {
        firstElement.style.marginLeft = `-${i}px`;
        if (i > firstElement.clientWidth) {
            i = 0;
        }
        i = i + speed;
    }, 0);
}

window.addEventListener("load", Marquee(".marquee", 0.2));

//

document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".what-slider", {
        loop: true, // Включає прокручування по колу
        autoplay: {
            delay: 0, // Задержка перед автоматическим переключением слайдов (в миллисекундах)
            disableOnInteraction: true, // Не останавливать автопрокрутку при взаимодействии пользователя
        },
        speed: 3000, // Скорость прокрутки слайдов (в миллисекундах)
        breakpoints: {
            100: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
            500: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
            759: {
                slidesPerView: 3.5,
                spaceBetween: 15,
            },
            1259: {
                slidesPerView: 4.5,
                spaceBetween: 20,
            },
        },
    });

    function resetDataNum() {
        const elementsWithDataNum = document.querySelectorAll("[data-num]");
        elementsWithDataNum.forEach((element) => {
            element.innerHTML = "0";
        });
    }

    // Створення спостерігача для анімації чисел
    const numObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const targetNum = parseFloat(entry.target.getAttribute("data-num")); // Отримати цільове число
                const duration = 2000; // Тривалість анімації у мілісекундах
                const precision = entry.target.classList.contains("per") ? 2 : 0; // Точність анімації

                // Почати анімацію для числового значення
                startCounterAnimation(entry.target, targetNum, duration, precision);
                entry.target.dataset.animationStarted = true; // Помічаємо, що анімація вже запущена
            }
        });
    });

    // Встановлення спостереження для кожного елемента з класом .num-anim
    const numElements = document.querySelectorAll(".num-anim");
    numElements.forEach((element) => {
        numObserver.observe(element);
    });

    // Створення спостерігача для елемента .dashboard
    const dashboardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const dashboardBackAnimation = document.querySelector(
                ".dashboard-back-animation"
            );
            if (entry.isIntersecting) {
                dashboardBackAnimation.classList.add("active");
                setTimeout(() => {
                    dashboardBackAnimation.classList.add("fade");
                }, 3000); // Додати клас 'fade' через 3 секунди
            } else {
                dashboardBackAnimation.classList.remove("active");
                dashboardBackAnimation.classList.remove("fade");
            }
        });
    });

    // Встановлення спостереження для елемента .dashboard
    const dashboardElement = document.querySelector(".dashboard-back");
    dashboardObserver.observe(dashboardElement);

    function startCounterAnimation(element, targetNum, duration, precision) {
        const startTime = Date.now();
        const startNum = parseFloat(element.textContent); // Початкове значення

        // Функція анімації
        function animate() {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = elapsed / duration;

            // Плавна анімація числового значення
            const currentNum = startNum + (targetNum - startNum) * progress;
            element.textContent = currentNum.toFixed(precision); // Вивід з потрібною точністю

            // Продовжити анімацію до досягнення кінцевого значення
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        // Запускаємо анімацію
        animate();
    }

    const calendar = document.querySelector(".dashboard-calendar");
    const calendarWrap = document.querySelector(".calendar-animation-wrap");
    const images = calendarWrap.querySelectorAll(".calendar-animation");

    const noAnim = document.querySelector(".dashboard-back-small-wrap");
    const messege = document.querySelector(".dashboard-messege");
    const messegeWrap = document.querySelector(".messege-animation-wrap");
    const messegeText = document.querySelector(".animation-text");

    messege.addEventListener("click", function () {
        messege.parentNode.classList.add("hide");
        messege.parentNode.classList.add("messege");
        noAnim.parentNode.classList.remove("calendar");
        calendarWrap.classList.remove("active");
        messegeWrap.classList.add("active");
        animateText(messegeText);

        images.forEach((img) => {
            img.classList.remove("active");
        });
    });

    function animateText(element) {
        if (element.dataset.animating === "true") {
            return;
        }

        element.dataset.animating = "true";

        const text = element.dataset.text;
        let index = 0;
        let innerHTML = "";

        const intervalId = setInterval(function () {
            if (index < text.length) {
                if (text[index] === "|" && text[index + 1] === "|") {
                    // Если встречаем ||, начинаем новый абзац
                    innerHTML += "<br>";
                    // Пропускаем символы ||
                    index += 2;
                } else {
                    // Добавляем текущий символ к innerHTML
                    innerHTML += text[index];
                    index++;
                }
                // Вставляем HTML-код с учетом обработки ||
                element.innerHTML = innerHTML;
            } else {
                // Когда текст полностью выведен, очищаем интервал
                clearInterval(intervalId);
                element.dataset.animating = "false";
            }
        }, 50); // Задержка между символами (мс)
    }

    noAnim.addEventListener("click", function () {
        resetDataNum();
        noAnim.parentNode.classList.remove("hide");
        noAnim.parentNode.classList.remove("calendar");
        noAnim.parentNode.classList.remove("messege");
        calendarWrap.classList.remove("active");
        messegeWrap.classList.remove("active");

        images.forEach((img) => {
            img.classList.remove("active");
        });
    });

    calendar.addEventListener("click", function () {
        calendar.parentNode.classList.add("hide");
        messegeWrap.classList.remove("active");
        calendar.parentNode.classList.add("calendar");
        calendar.parentNode.classList.remove("messege");
        calendarWrap.classList.add("active");

        images.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add("active");
            }, index * 800); // Збільшуємо затримку для кожного наступного елемента
        });
    });

    const newBtns = document.querySelectorAll(".hire-container-bottom-block");
    const newTabs = document.querySelectorAll(".hire-container-top");

    newBtns.forEach(function (item, index) {
        item.addEventListener("click", () => {
            newBtns.forEach(function (item) {
                item.classList.remove("active");
            });
            newTabs.forEach(function (item) {
                item.classList.remove("active");
            });

            item.classList.add("active");
            newTabs[index].classList.add("active");
        });
    });
});

$("#pop-up-active").each(function () {
    $(this).on("click", () => {
        $("#body-id").addClass("body-scroll");
        $(".pop-up").addClass("pop-up-active");
    });
});

$(".pop-up-svg-close").on("click", function () {
    $("#body-id").removeClass("body-scroll");
    $(".pop-up").removeClass("pop-up-active");
});

$("#pop-up-close").on("click", function () {
    $("#body-id").removeClass("body-scroll");
    $(".pop-up").removeClass("pop-up-active");
});

var loaded;

window.addEventListener("scroll", function () {
    if (!loaded) {
        loaded = true;

        document.querySelectorAll(".js-load-block").forEach(function (el) {
            el.classList.add("loaded");
        });
    }
});

// https://aisdr.com/home/

const getAminationWrap = document.querySelector(".amnimation_wrap");
const dashboard = getAminationWrap.querySelector(".dashboard_wrap");
const dashboardSmall = getAminationWrap.querySelector(".dashboard-small");
const calendar = getAminationWrap.querySelector(".calendar_wrap");
const calendarSmall = getAminationWrap.querySelector(".calendar-small");
const messege = getAminationWrap.querySelector(".messege_wrap");
const messegeSmall = getAminationWrap.querySelector(".messege-small");
const calendarImages = calendar.querySelectorAll(".calendar");
const desbordSvgLine = getAminationWrap.querySelector(".dashboard-back-line");
const desbordSvg = getAminationWrap.querySelector(".dashboard-back-fade");
const desbordCharcel = getAminationWrap.querySelector(".deshbord_carcel");

const typewriterElement = document.querySelector(".typewriter h2");
const text =
    "Hey, Alex!<br><br>" +
    "Glad you’re interested! AiSDR crafts a unique, personalized email to every lead, " +
    "using their LinkedIn profile information and handles responses, delivering answers in under 10 minutes. " +
    "This has shown to boost conversion by 42% and helped ACME book 10 meetings in a month.<br>" +
    "To discuss details, let’s get a time to chat. Here’s my calendar: http://calendly.com/aisdr-intro</a>";
const typingSpeed = 50;

dashboard.classList.add("active");
desbordSvgLine.classList.add("active");
dashboardSmall.classList.add("hide");
desbordCharcel.classList.add("active");

//deshbord click funtion
dashboardSmall.addEventListener("click", () => {
    dashboard.classList.add("active");
    calendar.classList.remove("active");
    messege.classList.remove("active");

    dashboardSmall.classList.add("hide");
    messegeSmall.classList.remove("hide");
    calendarSmall.classList.remove("hide");

    messegeSmall.classList.remove("calendar");
    calendarSmall.classList.remove("messege");

    desbordCharcel.classList.add("active");

    desbordSvgLine.classList.add("active");
    setTimeout(fadeSVG, 3000);
    startCounters();
});

//calander click funtion
calendarSmall.addEventListener("click", () => {
    calendar.classList.add("active");
    dashboard.classList.remove("active");
    messege.classList.remove("active");

    calendarSmall.classList.add("hide");
    dashboardSmall.classList.remove("hide");
    messegeSmall.classList.remove("hide");

    desbordSvgLine.classList.remove("active");
    desbordSvg.style.opacity = 0;

    messegeSmall.classList.add("calendar");
    dashboardSmall.classList.add("calendar");

    desbordCharcel.classList.remove("active");

    showCalendarImages(calendarImages, 1000, 7);
});

//messege click funtion
messegeSmall.addEventListener("click", () => {
    messege.classList.add("active");
    dashboard.classList.remove("active");
    calendar.classList.remove("active");

    messegeSmall.classList.add("hide");
    dashboardSmall.classList.remove("hide");
    calendarSmall.classList.remove("hide");

    desbordSvgLine.classList.remove("active");
    desbordSvg.style.opacity = 0;

    desbordCharcel.classList.remove("active");

    messegeSmall.classList.remove("calendar");
    dashboardSmall.classList.remove("calendar");
    dashboardSmall.classList.add("messege");
    calendarSmall.classList.add("messege");
    resetTypeWriter();
});

// calender imge show
function showCalendarImages(images, delay, times) {
    let count = 0;

    function displayCalendarImages() {
        if (count < times) {
            images.forEach((image) => (image.style.opacity = 0));
            const image = images[count % images.length];
            image.style.opacity = 1;
            count++;

            setTimeout(displayCalendarImages, delay);
        }
    }

    displayCalendarImages();
}

// typed write function
let index = 0;
let typingInterval;

function typeWriter() {
    if (index < text.length) {
        if (text[index] === "<") {
            const tagEndIndex = text.indexOf(">", index) + 1;
            const tag = text.substring(index, tagEndIndex);

            typewriterElement.innerHTML += tag;
            index = tagEndIndex;
        } else {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
        }

        typingInterval = setTimeout(typeWriter, typingSpeed);
    }
}

function resetTypeWriter() {
    clearTimeout(typingInterval);
    typewriterElement.innerHTML = "";
    index = 0;
    typeWriter();
}

typeWriter();

// deshbord svg fade function
function fadeSVG() {
    desbordSvg.style.opacity = 1;
}

setTimeout(fadeSVG, 3000);

//all counter funtion
const countersData = [
    { limit: 1217, increment: 9, interval: 10 },
    { limit: 903, increment: 9, interval: 20 },
    { limit: 3, increment: 1, interval: 300 },
    { limit: 27, increment: 1, interval: 100 },
    { limit: 7.12, increment: 0.44, interval: 40 },
    { limit: 61.23, increment: 4.44, interval: 50 },
    { limit: 2.17, increment: 0.44, interval: 300 },
];

let intervalIds = [];

function stopCounters() {
    intervalIds.forEach(clearInterval);
    intervalIds = [];
}

function resetCounters() {
    countersData.forEach((_, index) => {
        const element = document.querySelector(`.custom-counter${index + 1} h2`);
        if (index >= 4) {
            element.textContent = "0.00%";
        } else {
            element.textContent = "0";
        }
    });
}

function startCounters() {
    stopCounters();
    resetCounters();
    countersData.forEach((counter, index) => {
        let currentValue = 0;
        function updateCounter() {
            if (currentValue < counter.limit) {
                currentValue += counter.increment;
                const element = document.querySelector(
                    `.custom-counter${index + 1} h2`
                );
                if (index >= 4) {
                    element.textContent = currentValue.toFixed(2) + "%";
                } else {
                    element.textContent = currentValue.toFixed(0);
                }
            }
        }
        const intervalId = setInterval(updateCounter, counter.interval);
        intervalIds.push(intervalId);
    });
}

startCounters();

//make a custom popup

const popup = document.querySelector(".manu_popup");
const closePopup = document.querySelector(".popup_close");
const openPopup = document.querySelector(".open_popup");

openPopup.addEventListener("click", () => {
    popup.classList.add("active");
});
closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
});

// make a gellary image popup custom image fild

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".custom_gallery .gallery-item");

    images.forEach((image) => {
        image.addEventListener("click", () => {
            setTimeout(imagesOpen, 400);
        });
    });

    function imagesOpen() {
        var textElement = document.querySelector(
            ".elementor-slideshow__description"
        );
        textElement.transition = "opacity 2s";
        textElement.style.opacity = 0;
        setTimeout(changeText, 400);
        var nextBtn = document.querySelector(".elementor-swiper-button-next");
        var prevBtn = document.querySelector(".elementor-swiper-button-prev");

        nextBtn.addEventListener("click", () => {
            var textElement = document.querySelector(
                ".elementor-slideshow__description"
            );
            textElement.style.opacity = 0;
            setTimeout(changeText, 400);
        });
        prevBtn.addEventListener("click", () => {
            var textElement = document.querySelector(
                ".elementor-slideshow__description"
            );
            textElement.style.opacity = 0;
            setTimeout(changeText, 400);
        });
    }

    function changeText() {
        var textElement = document.querySelector(
            ".elementor-slideshow__description"
        );
        textElement.innerHTML = textElement.textContent;
        textElement.style.opacity = 1;
    }
});

// card hover than scale and contant change.

const sectionWrapper = document.querySelector(".main_section"); // main section
const cardContainer = document.querySelector(".card_container");
const cards = cardContainer.querySelectorAll(".custom_card"); // all cards
const bgImages = document.querySelectorAll(".bg_images .gallery-item img"); // all image
// console.log(bgImages[1].currentSrc);

cards[0].querySelector(".card_footer").style.display = "flex";
cards[0].querySelector(".card_body").classList.add("active");
cards[0].style.padding = 0;
cards[0].classList.add("active");

cards.forEach((card, index) => {
    card.addEventListener("mouseover", () => {
        cards.forEach((outherCard) => {
            // peveas cards style defolsd
            outherCard.querySelector(".card_footer").style.display = "none";
            outherCard.querySelector(".card_body").classList.remove("active");
            outherCard.style.padding = "0px 62px 0px 40px";
            outherCard.classList.remove("active");
        });
        // here all hover action
        card.querySelector(".card_footer").style.display = "flex";
        card.querySelector(".card_body").classList.add("active");
        card.style.padding = 0;
        card.classList.add("active");
        sectionWrapper.style.backgroundImage = `url(${bgImages[index].src})`;
        // console.log(bgImages[index].currentSrc);
    });
});

// single page popup
const singlePopup = document.querySelector(".single_popup");
const closePopup = document.querySelector(".single_popup_cloase");
const activePoup = document.querySelector(".active_popup");

activePoup.addEventListener("click", (e) => {
    e.preventDefault();
    singlePopup.classList.add("active");
});
closePopup.addEventListener("click", () => {
    singlePopup.classList.remove("active");
});

// first time show popup
document.addEventListener("DOMContentLoaded", function () {
    const CTApopup = document.querySelector(".cta_popup");
    const CTAcloseButton = document.querySelector(".cat_closeBTN");

    function showPopup() {
        CTApopup.style.display = "block";
    }

    function CtaclosePopup() {
        popup.style.display = "none";
    }

    if (!localStorage.getItem("popupShown")) {
        showPopup();
        localStorage.setItem("popupShown", "true");
    }

    CTAcloseButton.addEventListener("click", CtaclosePopup);
});

//

// Helper function to set a cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Helper function to get a cookie by name
function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return value;
        }
    }
    return null;
}

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closeButton = document.querySelector(".close-btn");

    // Check if the 'popupShown' cookie exists
    const popupShown = getCookie("popupShown");

    // Show the popup if the cookie does not exist
    if (!popupShown) {
        popup.style.display = "flex"; // Show the popup
    }

    // Close popup and set the cookie when the close button is clicked
    closeButton.addEventListener("click", function () {
        popup.style.display = "none"; // Hide the popup
        setCookie("popupShown", "true", 365); // Set cookie for 1 year
    });

    // Optionally, close the popup if the user clicks outside the popup content
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
            setCookie("popupShown", "true", 365); // Set cookie for 1 year
        }
    });
});

//

document.addEventListener("DOMContentLoaded", function () {
    function clickElement() {
        const firstLoopItem = document.querySelector(
            '[data-filter="highlights-en"]'
        );
        firstLoopItem.click();
    }

    setTimeout(clickElement, 500);
});

//
const myLocation = window.location.href;
const myUrl = "https://steelblue-walrus-284561.hostingersite.com/contact/";
const menu = document.querySelector(".cusrom_menu h2");
if ((myLocation = myUrl)) {
    menu.classList.add("active");
}

const menuPopup = document.querySelector(".menu_popup");
const closeMenu = document.querySelector(".close_popup");
const activeMenu = document.querySelector(".active_menu");

activeMenu.addEventListener("click", () => {
    menuPopup.style.display = "flex";
});
closeMenu.addEventListener("click", () => {
    menuPopup.style.display = "none";
});

// parallax images
function parallax() {
    var parallax = document.querySelectorAll(".parallax");
    var speed = 0.2; // The speed of the parallax effect
    for (var i = 0; i < parallax.length; i++) {
        var windowHalfY = window.innerHeight / 2;
        var parallaxY = parallax[i].getBoundingClientRect().top + windowHalfY;
        var pos = parallaxY * -speed;
        parallax[i].style.backgroundPosition = " center" + -pos + "px";
    }
}
window.addEventListener("scroll", parallax);

// parallax video
window.addEventListener("scroll", () => {
    const elementVideo = document.querySelector(".parallax iframe");
    let scrollValue = window.pageYOffset;
    elementVideo.style.top = `calc(50% - ${scrollValue / 3}px)`;
});

//
const images = document.querySelectorAll(
    "#gallery-horizontal-scroll-comp-lzkh52e91 .item-link-wrapper picture source"
);
let all = [];
images.forEach((item) => {
    all.push(item.getAttribute("srcset"));
});
console.log(all);

// left to right motion  // frist lode animation
function checkInView() {
    const containers = document.querySelectorAll(".left_to_right");

    containers.forEach((container) => {
        const rect = container.getBoundingClientRect();

        // Check if the container is within the viewport
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            container.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%);"; // Full view
        } else {
            container.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%);"; // Hidden view
        }
    });
}

checkInView();
document.addEventListener("scroll", checkInView);

// left to right motion  // frist lode animation
// virson 2.0
function checkInView() {
    const containers = document.querySelectorAll(".left_to_right");

    containers.forEach((container) => {
        const rect = container.getBoundingClientRect();

        // Check if the container is within the viewport
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            container.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"; // Full view
        } else {
            container.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0 100%)"; // Hidden view
        }
    });
}

let lastCall = 0;
window.addEventListener("scroll", () => {
    const now = Date.now();
    if (now - lastCall > 100) {
        lastCall = now;
        checkInView();
    }
});
//
const popup = document.querySelector(".form_popup");
const popupClose = document.querySelector(".form_popup_close");
const popupOpen = document.querySelector("body");

// popup open on mouse leave the window
popupOpen.addEventListener("mouseleave", (event) => {
    popup.style.display = "block";
});

// popup close on clicking close button
popupClose.addEventListener("click", () => {
    popup.style.display = "none";
});

// add animation class in carosol
const cerosels = document.querySelectorAll(".custom_carosel");

cerosels.forEach((carosol) => {
    const prevBtn = carosol.querySelector(".elementor-swiper-button-prev");
    const nextBtn = carosol.querySelector(".elementor-swiper-button-next");
    nextBtn.classList.add("anime_icon");
    prevBtn.classList.add("anime_icon");
});

// memu animation  custom menu
const lists = document.querySelectorAll(".menu_item nav ul li a");

lists.forEach((list) => {
    list.addEventListener("mouseover", () => {
        lists.forEach((item) => {
            item.style.color = "#132430b5";
        });
        list.style.color = "#132430";

        const linkRect = list.getBoundingClientRect();
        const linkCenterX = linkRect.left + linkRect.width / 2;
        const linkCenterY = linkRect.top + linkRect.height / 2;
        console.log(linkRect.width);
        console.log(linkRect.height);

        list.addEventListener("mousemove", (e) => {
            const offsetX = (e.clientX - linkCenterX) / 5;
            const offsetY = (e.clientY - linkCenterY) / 5;

            list.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    });

    list.addEventListener("mouseout", () => {
        lists.forEach((item) => {
            item.style.color = "#132430";
        });
        list.style.transform = "";
    });
});

// button hover animetion for mouewe
const animBtns = document.querySelectorAll(".custom_btn");

animBtns.forEach((btn) => {
    const btnText = btn.querySelector(".elementor-button-content-wrapper");

    btn.style.transition = "transform 0.3s ease";
    btnText.style.transition = "transform 0.3s ease";

    btn.addEventListener("mousemove", (event) => {
        const rcet = btn.getBoundingClientRect();
        const btnCenterX = rcet.left + rcet.width / 2;
        const btnCenterY = rcet.top + rcet.height / 2;

        const offsetX = (event.clientX - btnCenterX) / 5;
        const offsetY = (event.clientY - btnCenterY) / 5;
        const textOffsetX = -(event.clientX - btnCenterX) / 6;
        const textOffsetY = -(event.clientY - btnCenterY) / 6;

        btn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        btnText.style.transform = `translate(${textOffsetX}px, ${textOffsetY}px)`;
    });

    btn.addEventListener("mouseout", () => {
        btn.style.transform = "";
        btnText.style.transform = "";
    });
});

// menu popup move using mouse hover

const menuBtns = document.querySelectorAll(".menu_button");
const menuPopup = document.querySelector(".menu_popup");

menuBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!menuPopup.classList.contains("active")) {
            menuPopup.classList.add("active");
        } else {
            menuPopup.classList.remove("active");
        }
    });
});

// feature card bigger animation

const getCards = document.querySelectorAll(".feature_card");

getCards.forEach((card, index) => {
    const textContent = card.querySelector(".text_contant");
    const cardImage = card.querySelector(".card_image");
    const cardIcon = card.querySelector(".card_icon");

    card.addEventListener("mouseover", () => {
        const height = textContent.scrollHeight;
        cardImage.style.opacity = 0;
        textContent.style.height = `${height}px`;
        cardIcon.style.opacity = 1;

        bigger(index);
    });

    card.addEventListener("mouseout", () => {
        cardImage.style.opacity = 1;
        textContent.style.height = "0px";
        cardIcon.style.opacity = 0;

        resetWidths();
    });
});

function bigger(index) {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
        getCards[index].style.width = "100%"; // full width on smaller screens
    } else {
        getCards[index].style.width = "51%"; // original behavior
    }

    if (index > 0 && screenWidth > 768) {
        getCards[index - 1].style.width = "49%";
    }
}

function resetWidths() {
    const screenWidth = window.innerWidth;
    getCards.forEach((card) => {
        card.style.width = screenWidth <= 768 ? "100%" : "50%"; // responsive reset
    });
}

//this is icon animaption
const cusromIcons = document.querySelectorAll(".anime_icon");

cusromIcons.forEach((Icon) => {
    const IconText = Icon.querySelector("svg");

    Icon.style.transition = "transform 0.3s ease";
    IconText.style.transition = "transform 0.3s ease";

    Icon.addEventListener("mousemove", (event) => {
        const rcet = Icon.getBoundingClientRect();
        const IconCenterX = rcet.left + rcet.width / 2;
        const IconCenterY = rcet.top + rcet.height / 2;

        const offsetX = (event.clientX - IconCenterX) / 5;
        const offsetY = (event.clientY - IconCenterY) / 5;
        const textOffsetX = -(event.clientX - IconCenterX) / 6;
        const textOffsetY = -(event.clientY - IconCenterY) / 6;

        Icon.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        IconText.style.transform = `translate(${textOffsetX}px, ${textOffsetY}px)`;
    });

    Icon.addEventListener("mouseout", () => {
        Icon.style.transform = "";
        IconText.style.transform = "";
    });
});

// hero page menu;
const heroMenu = document.querySelector(".home_header");
const screenHeight = window.screen.height;

window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    if (scrollY >= screenHeight) {
        heroMenu.style.top = "0";
    } else {
        heroMenu.style.top = "-200px";
    }
    console.log(screenHeight);
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".ti-profile-img").style.margin = 0;
});

// custom link

const getLinks = document.querySelectorAll(".custom_moving a");

getLinks.forEach((link) => {
    link.classList.add("line");
    const div = document.createElement("div");
    div.classList.add("this-is-line");
    link.appendChild(div);
    div.style.left = "-100%";
    link.addEventListener("mouseover", () => {
        div.style.transition = "left 0.3s ease-in-out";
        div.style.left = 0;
    });
    link.addEventListener("mouseout", () => {
        div.style.left = "100%";
        setTimeout(() => {
            div.style.transition = "none";
            div.style.left = "-100%";
        }, 300);
    });
});

// card show if cart have prodact
const cardIcon = document.querySelector(".custom_card_icon");
const cardQuantity = parseInt(
    cardIcon.querySelector(".elementor-button-icon").getAttribute("data-counter")
);

function updateQuantity() {
    if (cardQuantity > 0) {
        cardIcon.style.display = "flex";
    } else {
        cardIcon.style.display = "none";
    }
}

setTimeout(updateQuantity, 300);

//
const featureCard = document.querySelector(".feature_card");
const featureTitle = featureCard.querySelector(".feature_title h2");
const featureDetails = featureCard.querySelector(".feature_ditals h2");
const featureBtn = featureCard.querySelector(".feature_btn");

const data = [
    {
        title: "Vi Kan Fixa Det",
        details:
            "Har du en trasig Smartphone, Surfplatta, Smart watch eller Dator?",
        img: "/wp-content/uploads/2024/10/3a2e96_c041ed838e01476181a52c49da058c08mv2.jpg",
        color: "#27e491",
    },
    {
        title: "Snabbt Och Enkelt",
        details: "Reparationer som inte stör ditt liv",
        img: "/wp-content/uploads/2024/10/6ff278_996d0e6ebb36445284d7690b1897b99dmv2.webp",
        color: "black",
    },
];

let i = 1;

const setInitialStyles = () => {
    featureTitle.style.transform = "translateY(20px)";
    featureDetails.style.transform = "translateY(20px)";
    featureBtn.style.transform = "translateY(20px)";
    featureTitle.style.transition = "transform 0.3s ease-in-out";
    featureDetails.style.transition = "transform 0.3s ease-in-out";
    featureBtn.style.transition = "transform 0.3s ease-in-out";
};

const updateContent = () => {
    featureTitle.style.transform = "translateY(20px)";
    featureDetails.style.transform = "translateY(20px)";
    featureBtn.style.transform = "translateY(20px)";

    setTimeout(() => {
        featureTitle.textContent = data[i].title;
        featureDetails.textContent = data[i].details;
        featureCard.style.backgroundImage = `url(${data[i].img})`;

        featureTitle.style.color = data[i].color;
        featureDetails.style.color = data[i].color;

        setTimeout(() => {
            featureTitle.style.transform = "translateY(0)";
        }, 0);

        setTimeout(() => {
            featureDetails.style.transform = "translateY(0)";
        }, 100);

        setTimeout(() => {
            featureBtn.style.transform = "translateY(0)";
        }, 200);

        i = (i + 1) % data.length;
    }, 300);
};

setInitialStyles();
setInterval(updateContent, 4000);

//

const theNumber = document.querySelectorAll(
    ".elementor-shortcode > .show-the-number-here span"
);
const itemsNumber = document.querySelectorAll(
    ".elementor-shortcode .e-loop-item .show-the-number-here span"
);

itemsNumber.forEach((item, index) => {
    if (theNumber[index]) {
        item.textContent = theNumber[index].textContent;
    }
});

//

const projectBoxes = document.querySelectorAll(".Prjct_main_con");

projectBoxes.forEach((topBlockBox) => {
    const blackBg = topBlockBox.querySelector(".black_bg");
    // const transparentBg = topBlockBox.querySelector('.transparent_bg');

    blackBg.style.transform = "translateY(-65px)";
    // transparentBg.style.transform = 'translateY(-65px)';
    blackBg.style.transition = "0.5s ease-in-out";
    // transparentBg.style.transition = '0.5s ease-in-out'

    topBlockBox.addEventListener("mouseover", () => {
        blackBg.style.transform = "translateY(0px)";
        // transparentBg.style.transform = 'translateY(-65px)';
    });
    topBlockBox.addEventListener("mouseout", () => {
        // transparentBg.style.transform = 'translateY(0px)';
        blackBg.style.transform = "translateY(65px)";
        setTimeout(() => {
            blackBg.style.transition = "none";
            // transparentBg.style.transition = 'none'
            blackBg.style.transform = "translateY(-65px)";
            // transparentBg.style.transform = 'translateY(-65px)';
        }, 300);
    });
});

// make a slider
//-----------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const sliderContainer = document.querySelector(".slider_container");
    const sliders = sliderContainer.querySelectorAll(".custom_slider");
    const nextSlide = sliderContainer.querySelector(".next_arrow");
    const prevSlide = sliderContainer.querySelector(".prev_arrow");

    const sliderContent = sliderContainer.querySelector(".slider_contant");
    const headingElements = sliderContent.querySelector(".slider_heading h2");
    const titleElements = sliderContent.querySelector(".slider_title h2");

    const dataArray = [
        {
            heading: "Boho Bliss",
            title:
                "Welcome to Glasi, where artistry meets functionality in the world of interior.",
        },
        {
            heading: "Vrty pro tepelná čerpadla",
            title:
                "Efektivní vrty pro tepelná čerpadla zajišťující úsporu energie a spolehlivý provoz.",
        },
        {
            heading: "Boho Bliss",
            title:
                "Welcome to Glasi, where artistry meets functionality in the world of interior.",
        },
    ];

    let newZIndex = 10;
    let currentIndex = 0;

    function next() {
        if (currentIndex < sliders.length) {
            sliders[currentIndex].style.transition = "all 1s linear";
            sliders[currentIndex].style.zIndex = newZIndex;
            sliders[currentIndex].style.backgroundSize = "150% auto";
            sliders[currentIndex].style.left = "-130%";
            setData(dataArray, currentIndex, contentAnimated);
            newZIndex++;
            currentIndex++;
            nextReset(currentIndex);
        } else {
            currentIndex = 0; // Reset to first slide
            next();
        }
    }

    function prev() {
        if (currentIndex > 0) {
            setData(dataArray, currentIndex, contentAnimated);
            currentIndex--;
            newZIndex++;
            sliders[currentIndex].style.zIndex = newZIndex;

            sliders[currentIndex].style.transition = "none";
            sliders[currentIndex].style.backgroundSize = "100% auto";
            sliders[currentIndex].style.left = "-100%";

            requestAnimationFrame(() => {
                sliders[currentIndex].style.transition = "all 1s linear";
                sliders[currentIndex].style.backgroundSize = "150% auto";
                sliders[currentIndex].style.left = "0";
            });

            prevReset(currentIndex);
        } else {
            currentIndex = sliders.length;
            prev();
        }
    }

    function nextReset(index) {
        if (index === sliders.length) {
            sliders[0].style.transition = "none";
            sliders[0].style.backgroundSize = "100% auto";
            sliders[0].style.left = 0;
            sliders[0].style.zIndex = 0;
        } else {
            sliders[index].style.transition = "none";
            sliders[index].style.backgroundSize = "100% auto";
            sliders[index].style.left = 0;
            sliders[index].style.zIndex = 0;
        }
    }

    function prevReset(i) {
        if (i === 0) {
            sliders[sliders.length - 1].style.transition = "none";
            sliders[sliders.length - 1].style.backgroundSize = "100% auto";
            sliders[sliders.length - 1].style.left = "-100%";
        } else {
            sliders[i - 1].style.transition = "none";
            sliders[i - 1].style.backgroundSize = "100% auto";
            sliders[i - 1].style.left = "-100%";
        }
        console.log("prevReset - index:", i);
    }

    function setData(data, i, callback) {
        if (callback) {
            if (i != 3) {
                callback(sliderContent);
                headingElements.textContent = data[i].heading;
                titleElements.textContent = data[i].title;
            } else {
                callback(sliderContent);
                headingElements.textContent = data[0].heading;
                titleElements.textContent = data[0].title;
            }
        }
    }

    function contentAnimated(content) {
        content.style =
            "transition: all 1s linear; transform: translate3d(0px, 24px, 0px) scale3d(0.8, 0.8, 1); transform-style: preserve-3d; opacity: 0;";
        setTimeout(() => {
            content.style =
                "transition: all 1s linear; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1); transform-style: preserve-3d; opacity: 1;";
        }, 800);
    }

    nextSlide.addEventListener("click", next);
    prevSlide.addEventListener("click", prev);
    // HOVER EFECT IN VIDEOS

    const vidosBox = document.querySelector(".video_box");
    const vidosIcon = document.querySelector(".video_icon");
    vidosIcon.addEventListener("mouseover", () => {
        vidosBox.classList.add("active");
    });
    vidosIcon.addEventListener("mouseout", () => {
        vidosBox.classList.remove("active");
    });

    //

    const projectBoxes = document.querySelectorAll(".Prjct_main_con");

    projectBoxes.forEach((topBlockBox) => {
        const blackBg = topBlockBox.querySelector(".black_bg");

        blackBg.style.transition = "0.3s ease-in-out";

        blackBg.style.transform = "translateY(-65px)";
        blackBg.style.opacity = "0";

        topBlockBox.addEventListener("mouseover", () => {
            blackBg.style.transform = "translateY(0px)";
            blackBg.style.opacity = "1";
        });

        topBlockBox.addEventListener("mouseout", () => {
            blackBg.style.transform = "translateY(65px)";
            blackBg.style.opacity = "0";

            // setTimeout(() => {
            //     blackBg.style.transition = 'none'
            //     blackBg.style.transform = 'translateY(-65px)';
            // }, 150);

            blackBg.addEventListener(
                "transitionend",
                () => {
                    blackBg.style.transform = "translateY(-65px)";
                },
                { once: true }
            );
        });
    });

    //
    const newSliderContainer = document.querySelector(".new_slider_container");
    const newSliders = newSliderContainer.querySelectorAll(".new_custom_slider");
    const newNextSlide = newSliderContainer.querySelector(".new_next_arrow");
    const newPrevSlide = newSliderContainer.querySelector(".new_prev_arrow");

    const newSliderContent = newSliderContainer.querySelector(
        ".new_slider_content"
    );
    const newHeadingElements = newSliderContent.querySelector(
        ".new_slider_heading h2"
    );
    const newTitleElements = newSliderContent.querySelector(
        ".new_slider_title h2"
    );

    const newDataArray = [
        {
            heading: "Vrtání studen",
            title:
                "Provádíme profesionální vrtání studen s důrazem na přesnost a kvalitu. Naše technologie umožňuje rychlé a efektivní vrty s minimálním zásahem do okolí. Zajistíme vám spolehlivý zdroj čisté vody přímo na vašem pozemku.",
        },
        {
            heading: "průzkum podlaží",
            title:
                "Provádíme detailní hydrogeologické průzkumy, které určují ideální místo a hloubku vrtu. Analyzujeme podloží, aby byl zajištěn optimální přístup k vodě. Naše odborné služby garantují přesné a efektivní výsledky, které minimalizují rizika.",
        },
        {
            heading: "Legislativní poradenství",
            title:
                "Zajišťujeme kompletní legislativní podporu pro realizaci vašeho projektu. Pomůžeme vám s vyřízením všech potřebných povolení a dokumentace. Díky našim znalostem a zkušenostem zvládneme celý proces rychle a bez zbytečných komplikací.",
        },
        {
            heading: "Montáž a servis čerpadel",
            title:
                "Nabízíme profesionální montáž a servis čerpadel pro dlouhodobě bezproblémový provoz. Zajišťujeme instalaci moderních čerpacích systémů, které jsou přizpůsobeny vašim potřebám. Pravidelný servis zajistí jejich dlouhou životnost a maximální účinnost.",
        },
    ];

    let newZIndex2 = 10;
    let newCurrentIndex = 0;

    function newNext() {
        if (newCurrentIndex < newSliders.length) {
            newSliders[newCurrentIndex].style.transition = "all 1s linear";
            newSliders[newCurrentIndex].style.zIndex = newZIndex2;
            // newSliders[newCurrentIndex].style.transform = 'skew(5deg, 5deg)';
            newSliders[newCurrentIndex].style.top = "-100%";
            newZIndex2++;
            newCurrentIndex++;
            newSetData(newDataArray, newCurrentIndex, newContentAnimated);
            newNextReset(newCurrentIndex);
        } else {
            newCurrentIndex = 0; // Reset to first slide
            newNext();
        }
    }

    function newPrev() {
        if (newCurrentIndex > 0) {
            newSetData(newDataArray, newCurrentIndex, newContentAnimated);
            newCurrentIndex--;
            newZIndex2++;
            newSliders[newCurrentIndex].style.zIndex = newZIndex2;

            newSliders[newCurrentIndex].style.transition = "none";
            // newSliders[newCurrentIndex].style.transform = 'skew(5deg, 5deg)';
            newSliders[newCurrentIndex].style.top = "-100%";

            requestAnimationFrame(() => {
                newSliders[newCurrentIndex].style.transition = "all 1s linear";
                // newSliders[newCurrentIndex].style.transform = 'skew(0deg, 0deg)';
                newSliders[newCurrentIndex].style.top = "0";
            });

            newPrevReset(newCurrentIndex);
        } else {
            newCurrentIndex = newSliders.length;
            newPrev();
        }
    }

    function newNextReset(index) {
        if (index === newSliders.length) {
            newSliders[0].style.transition = "none";
            // newSliders[0].style.transform = 'skew(0deg, 0deg)';
            newSliders[0].style.top = 0;
            newSliders[0].style.zIndex = 0;
        } else {
            newSliders[index].style.transition = "none";
            // newSliders[index].style.transform = 'skew(0deg, 0deg)';
            newSliders[index].style.top = 0;
            newSliders[index].style.zIndex = 0;
        }
    }

    function newPrevReset(i) {
        if (i === 0) {
            newSliders[newSliders.length - 1].style.transition = "none";
            // newSliders[newSliders.length - 1].style.transform = 'skew(0deg, 0deg)';
            newSliders[newSliders.length - 1].style.top = "-100%";
        } else {
            newSliders[i - 1].style.transition = "none";
            // newSliders[i - 1].style.transform = 'skew(0deg, 0deg)';
            newSliders[i - 1].style.top = "-100%";
        }
        console.log("newPrevReset - index:", i);
    }

    function newSetData(data, i, callback) {
        if (callback) {
            if (i != 4) {
                callback(newSliderContent);
                newHeadingElements.textContent = data[i].heading;
                newTitleElements.textContent = data[i].title;
            } else {
                callback(newSliderContent);
                newHeadingElements.textContent = data[0].heading;
                newTitleElements.textContent = data[0].title;
            }
        }
    }

    function newContentAnimated(content) {
        content.style =
            "transition: all 1s linear; transform: translate3d(0px, 24px, 0px) scale3d(0.8, 0.8, 1); transform-style: preserve-3d; opacity: 0;";
        setTimeout(() => {
            content.style =
                "transition: all 1s linear; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1); transform-style: preserve-3d; opacity: 1;";
        }, 800);
    }

    newNextSlide.addEventListener("click", newNext);
    newPrevSlide.addEventListener("click", newPrev);
    newNext();

    setInterval(() => {
        newNext();
    }, 10000);
});

// tab image change

const image = document.querySelector(".change_image img");
const tabBtns = document.querySelectorAll(".tab_button .tabs-heading li");

const imagesUrl = [
    "/wp-content/uploads/2024/10/tab1.png",
    "/wp-content/uploads/2024/10/tab2.png",
    "/wp-content/uploads/2024/10/tab3.png",
];
tabBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        image.src = imagesUrl[index];
        image.srcset = imagesUrl[index];
    });
});

///

// get all content part
const getNewAllCon = document.querySelectorAll(
    ".new_slider_content .content_con"
);

// get all slider part
const getNewSliderCon = document.querySelectorAll(
    ".new_slider_container .new_custom_slider"
);

// get Arrows
const getNewArrowPrev = document.querySelector(
    ".new_slider_container .new_prev_arrow"
);
const getNewArrowNext = document.querySelector(
    ".new_slider_container .new_next_arrow"
);

let newTemp1,
    newTemp2,
    newTemp3,
    newTemp4,
    newTemp5,
    acIndex = 0,
    tempUp = false;

getNewArrowNext.addEventListener("click", function () {
    let nextIndex = acIndex + 1;
    if (nextIndex >= getNewSliderCon.length) nextIndex = 0;
    newSliderSlide(nextIndex);
    newContentActive(nextIndex);
});

getNewArrowPrev.addEventListener("click", function () {
    let nextIndex = acIndex - 1;
    if (nextIndex < 0) nextIndex = getNewSliderCon.length - 1;
    newSliderSlide(nextIndex);
    newContentActive(nextIndex);
});

function newContentActive(activeItIndex = 0) {
    document.documentElement.style.setProperty("--second-anim-speed", "0s");

    if (newTemp1) clearTimeout(newTemp1);
    if (newTemp2) clearTimeout(newTemp2);
    if (newTemp3) clearTimeout(newTemp3);

    getNewAllCon.forEach(function (item, index) {
        if (index !== acIndex) {
            item.setAttribute("ac_status", false);
        }
    });

    newTemp1 = setTimeout(function () {
        document.documentElement.style.setProperty("--second-anim-speed", "1s");
        getNewAllCon[acIndex].setAttribute("ac_status", "close");
    }, 5);

    newTemp2 = setTimeout(function () {
        getNewAllCon[activeItIndex].setAttribute("ac_status", true);
    }, 1005);
}

function newSliderSlide(nextActive) {
    document.documentElement.style.setProperty("--slider2-anim-speed", "0s");
    getNewSliderCon[acIndex].style.zIndex = 3;
    getNewSliderCon[nextActive].style.zIndex = 2;

    getNewSliderCon.forEach(function (item, index) {
        if (index !== acIndex && index !== nextActive) {
            item.style.zIndex = 1;
            item.setAttribute("anim_status", false);
        }
    });

    if (newTemp4) clearTimeout(newTemp4);
    if (newTemp5) clearTimeout(newTemp5);

    newTemp4 = setTimeout(function () {
        document.documentElement.style.setProperty("--slider2-anim-speed", "1s");
        getNewSliderCon[acIndex].setAttribute("anim_status", "close");
        getNewSliderCon[nextActive].setAttribute("anim_status", true);
    }, 5);

    newTemp5 = setTimeout(function () {
        document.documentElement.style.setProperty("--slider2-anim-speed", "0s");
        getNewSliderCon[acIndex].style.zIndex = 2;
        getNewSliderCon[nextActive].style.zIndex = 3;
        getNewSliderCon[acIndex].setAttribute("anim_status", false);
        acIndex = nextActive;
    }, 1005);
}

// single page price

const priceBtn = document.querySelectorAll(
    ".cfvsw-product-container .cfvsw-swatches-option"
);
const updatePrice = document.querySelector(".product_price .price");

priceBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        setTimeout(() => {
            const price = document.querySelector(".woocommerce-variation-price bdi");
            updatePrice.innerHTML = price.textContent;
        }, 200);
    });
});

const images = document.querySelectorAll(
    ".galary_images .elementor-gallery__container .e-gallery-item"
);
const imagesBtn = document.querySelector(".galary_btn");

images.forEach((image, i) => {
    if (i > 7) {
        image.style.display = "none";
    }
});

imagesBtn.addEventListener("click", () => {
    images.forEach((image) => {
        image.style.display = "flex";
    });
});

// const imagesWraper = document.querySelector('.galary_wraper')
// const galary = document.querySelector('.galary_images');
// const images = galary.querySelectorAll('.elementor-gallery__container .e-gallery-item');
// const imagesBtn = document.querySelector('.galary_btn');

// const imageRect = images[0].getBoundingClientRect();
// imagesWraper.style.height = `${(imageRect.height * 2) + 15}px`;

// const galaryRect = galary.getBoundingClientRect();

// imagesBtn.addEventListener('click', () => {
//     imagesWraper.style.height = `${galaryRect.height}px`;
// });

//

const slides = document.querySelectorAll(".custom_slider");
const nextButton = document.querySelector(".next_arrow");
const prevButton = document.querySelector(".prev_arrow");
const counter = document.querySelector(".counter h2");
let currentIndex = 0;
let autoSlideInterval;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active", "next");
        if (index === currentIndex) {
            slide.classList.add("active");
        } else if (index === (currentIndex + 1) % slides.length) {
            slide.classList.add("next");
        }
    });
    updateCounter();
}

function updateCounter() {
    counter.textContent = `${currentIndex + 1}/${slides.length}`;
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
}

function showPreviousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(showNextSlide, 30000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

nextButton.addEventListener("click", () => {
    showNextSlide();
    resetAutoSlide();
});

prevButton.addEventListener("click", () => {
    showPreviousSlide();
    resetAutoSlide();
});

updateSlides();
startAutoSlide();

// mega menu create

const menuItems = document.querySelectorAll(
    ".custom_menu .elementor-nav-menu--main li"
);
const menuContent = document.querySelectorAll(".menu_contant");

menuItems.forEach((menu, i) => {
    menu.addEventListener("mouseover", () => {
        if (menuContent[i] || menuItems[i]) {
            menuContent[i].classList.add("active");
        }
    });
    menu.addEventListener("mouseout", () => {
        if (menuContent[i] || menuItems[i]) {
            menuContent[i].classList.remove("active");
        }
    });
});


// image show
const mideaSection = document.querySelector('.midea_section');
const sectionImage = document.querySelector('.featured_image');

if (mideaSection.querySelectorAll('.media_video').length > 0) {
    sectionImage.style.display = 'none';
} else {
    sectionImage.style.display = 'block';
};












// Query selectors for the card buttons and the circle element.
const featureBtns = document.querySelectorAll('.single_card');
const circleElement = document.querySelector('.drawline');
const nextBtn = document.querySelector('.next_btn');
const prevBtn = document.querySelector('.prev_btn');

// set data veriabol
const cardName = document.querySelector('.custom_name h2');
const cardTitle = document.querySelector('.custom_title h2');
const cardDescription = document.querySelector('.custom_desc h2');
const navigitor = document.querySelector('.custom_navigitor h2');

const strokeOffsets = [300, 228, 152, 76];

let counter = strokeOffsets[0] + 5;
let countdown;

const featureBtnsArray = Array.from(featureBtns);

// Feature data array.
const data = [
    {
        id: 1,
        name: 'Meer bereik',
        title: 'Wil jij meer online bereik?', // Corrected typo from 'tilte' to 'title'
        description: 'Hoe meer jij online zichtbaar bent, hoe vaker mensen naar jouw producten zoeken en ook bij jou bestellen. Je merkt dat men je bedrijf ook sneller weet te vinden. Zo werken wij aan je online bereik!'
    },
    {
        id: 2,
        name: 'Meer verkeer',
        title: 'Boost je websiteverkeer',
        description: 'Voel jij je soms overweldigd door de talloze opties die er zijn om meer verkeer naar je website te genereren? Wij helpen je graag met het vinden en uitvoeren van een goed uitgedachte online marketing strategie! Benieuwd hoe we te werk gaan?'
    },
    {
        id: 3,
        name: 'Meer leads',
        title: 'Verhoog het aantal leads via je website',
        description: 'Leuk al dat verkeer naar je website, maar je hebt behoefte aan meer leads en uiteindelijk meer klanten. Wil je weten hoe wij je aan meer leads helpen?'
    },
    {
        id: 4,
        name: 'Meer klanten',
        title: 'Wil jij meer klanten?',
        description: 'Trek meer kwalitatief verkeer naar je website en vergroot je klantenbestand. Zorg dat jouw bezoekers vloeiend alle stappen naar een conversie doorlopen. Zo gaan wij te werk!'
    }
];

function setActiveButton(index) {
    featureBtns.forEach(item => item.classList.remove('active'));
    featureBtns[index].classList.add('active');

    navigitor.textContent = ` 0${data[index].id} / 0${data.length}`
    cardName.textContent = data[index].name
    cardTitle.textContent = data[index].title
    cardDescription.textContent = data[index].description

    if (strokeOffsets[index] !== undefined) {
        circleElement.setAttribute('stroke-dashoffset', strokeOffsets[index]);
    }
}

featureBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        stopCountdown();
        setActiveButton(index);
    });
});

function startCountdown() {
    if (!countdown) {
        countdown = setInterval(() => {
            circleElement.setAttribute('stroke-dashoffset', counter);
            counter--;

            strokeOffsets.forEach((offset, index) => {
                if (counter === offset) {
                    setActiveButton(index);
                }
            });

            if (counter < 0) {
                stopCountdown();
                console.log("Countdown finished");
                restartCountdown();
            }
        }, 100);
    }
}

function changeActiveFeature(direction) {
    let activeIndex = featureBtnsArray.findIndex(item => item.classList.contains('active'));
    let nextIndex = (activeIndex + direction + featureBtnsArray.length) % featureBtnsArray.length;
    stopCountdown();
    setActiveButton(nextIndex);
}

nextBtn.addEventListener('click', () => changeActiveFeature(1));
prevBtn.addEventListener('click', () => changeActiveFeature(-1));

function stopCountdown() {
    if (countdown) {
        clearInterval(countdown);
        countdown = null;
        console.log("Countdown stopped");
    }
}

function restartCountdown() {
    stopCountdown();
    counter = strokeOffsets[0] + 5; // Reset to the initial offset
    startCountdown();
}

startCountdown();


// tab animation 
document.addEventListener('DOMContentLoaded', () => {
    const tabsContainer = document.querySelectorAll('.tabs-container');
    const tabs = document.querySelectorAll('.ft-tab-button');
    const images = document.querySelectorAll('.ft-image-content');
    const texts = document.querySelectorAll('.ft-text-content');
    let currentIndex = 0;
    let autoSwitchInterval;

    function activateTab(index) {
        let nextIndex = (index + 1) % tabs.length;

        tabs.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
            images[i].classList.toggle('active', i === index);
            texts[i].classList.toggle('active', i === index);

            if (i === nextIndex) {
                btn.classList.add('animated');
                images[i].classList.add('animated');
                texts[i].classList.add('animated');
            } else {
                btn.classList.remove('animated');
                images[i].classList.remove('animated');
                texts[i].classList.remove('animated');
            }
        });
    }

    function startAutoSwitch() {
        // Clear any existing interval before setting a new one
        clearInterval(autoSwitchInterval);

        autoSwitchInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % tabs.length;
            activateTab(currentIndex);
        }, 3000);
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            currentIndex = index;
            activateTab(currentIndex);
            startAutoSwitch();  // Restart auto-switch after tab click
        });
    });

    activateTab(currentIndex);
    startAutoSwitch();


})







const style = document.createElement('style');
style.textContent = `
    .ft-tab-button.animated .featuretabs_line rect {
        animation: outerline 3s linear infinite;
    }
    .ft-tab-button.active .custom_btn {
        color: #fff !important;
    }
    @keyframes outerline {
        0% {
            stroke-dashoffset: 367.091;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }
`;
document.head.appendChild(style);

const tabs = document.querySelectorAll('.ft-tab-button');
const images = document.querySelectorAll('.ft-image-content');
const texts = document.querySelectorAll('.ft-text-content');
const tabsContainer = document.querySelector('.tabs-container');
let currentIndex = 0;
let autoSwitchInterval;

function activateTab(index) {
    let nextIndex = (index + 1) % tabs.length;

    tabs.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
        images[i].classList.toggle('active', i === index);
        texts[i].classList.toggle('active', i === index);

        if (i === nextIndex) {
            btn.classList.add('animated');
            images[i].classList.add('animated');
            texts[i].classList.add('animated');
        } else {
            btn.classList.remove('animated');
            images[i].classList.remove('animated');
            texts[i].classList.remove('animated');
        }
    });
}

function startAutoSwitch() {
    autoSwitchInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % tabs.length;
        activateTab(currentIndex);
    }, 3000);
}

function pauseAutoSwitch() {
    clearInterval(autoSwitchInterval);
}

tabsContainer.addEventListener('mouseover', pauseAutoSwitch);
tabsContainer.addEventListener('mouseout', startAutoSwitch);

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        currentIndex = index;
        activateTab(currentIndex);
    });
});

activateTab(currentIndex);
startAutoSwitch();



// menu style css 



const popupBtn = document.querySelector('.menu_btn');
const popupMenuContainer = document.querySelector('.popup_menu');
const menuItems = document.querySelectorAll(".custom_menu .elementor-nav-menu--main li");
const popupMenu = document.querySelectorAll(".custop_popup_menu .elementor-nav-menu--main .menu-item");
console.log(popupMenu);

const menuContent = document.querySelectorAll(".menu_contant");
const menuBacks = document.querySelectorAll(".menu_back");


popupBtn.addEventListener('click', () => {
    popupMenuContainer.classList.toggle('active');
});

menuBacks.forEach((menuBack) => {
    menuBack.addEventListener('click', () => {
        menuContent.forEach((menu) => {
            menu.classList.remove('active');
        })
    })
})

function setMenuListeners() {
    const width = window.innerWidth;

    if (width < 1024) {
        popupMenu.forEach((menu, i) => {
            menu.addEventListener("click", () => {
                menuContent[i]?.classList.add("active");
            });

        });
    } else {
        menuItems.forEach((menu, i) => {
            menu.addEventListener("mouseover", () => {
                menuContent[i]?.classList.add("active");
            });
            menu.addEventListener("mouseout", () => {
                menuContent[i]?.classList.remove("active");
            });
        });
    }
}


setMenuListeners();
window.addEventListener('resize', setMenuListeners);







const sliderSection = document.querySelector('.slider_conteiner');
const sliderWraper = document.querySelector('.slider_wraper');
let current = 0;

document.addEventListener('scroll', () => {
    const rcet = sliderSection.getBoundingClientRect();
    console.log(rcet.top);

    if (rcet.top <= 0) {
        sliderSection.classList.add('fixed')

    }
})

sliderSection.addEventListener('wheel', (event) => {

    if (event.deltaY > 0) {
        current += event.deltaY
        sliderWraper.style.transform = `translateX(${-(current)}px)`

        current
    } else if (event.deltaY < 0) {
        current += event.deltaY
        sliderWraper.style.transform = `translateX(${-(current)}px)`
    }

    checkThreshold(current)
});

function checkThreshold(current) {
    if (current = -1000 || sliderSection.classList.contains('fixed')) {
        sliderSection.classList.remove('fixed');
        sliderSection.classList.add('end');
    }
}





const sliderSection = document.querySelector('.slider_conteiner');
const sliderWraper = document.querySelector('.slider_wraper');
let current = 0;
const maxScroll = -2828; // Adjust according to your slider width and container size

// Fix the slider when it reaches the viewport top
document.addEventListener('scroll', () => {
    const rect = sliderSection.getBoundingClientRect();
    console.log(rect.top);

    if (rect.top <= 0) {
        sliderSection.classList.add('fixed');
    }

    // Remove fixed position when reaching maxScroll
    if (current <= maxScroll) {
        sliderSection.classList.remove('fixed');
        sliderSection.classList.add('end');
    }

    if (current > 0) {
        sliderSection.classList.remove('end');
    }
});

// Handle horizontal scroll with wheel event
sliderSection.addEventListener('wheel', (event) => {
    // Adjust the current position based on scroll direction and limit within bounds
    if (event.deltaY > 0 && current > maxScroll) {
        current -= 20; // Adjust increment to control speed
    } else if (event.deltaY < 0 && current < 0) {
        current += 20;
    }

    // Apply transformation
    sliderWraper.style.transform = `translateX(${current}px)`;
});





const sliderSection = document.querySelector('.slider_conteiner');
const sliderWraper = document.querySelector('.slider_wraper');
let current = 0;
const threshold = 1000; // Set your desired threshold value here

document.addEventListener('scroll', () => {
    const rcet = sliderSection.getBoundingClientRect();

    if (rcet.top <= 0 && current === 0) {
        sliderSection.classList.remove('end');
        sliderSection.classList.add('fixed');
        console.log('last col');

    }
    // else if (rcet.top >= 0 && sliderSection.classList.contains('end') && current !== 0) {
    //     sliderSection.classList.remove('end');
    //     sliderSection.classList.add('fixed');
    //     revarsCheckThreshold(current)
    // } else {

    // }
});

sliderSection.addEventListener('wheel', (event) => {
    if (current === threshold) {
        checkThreshold()
    }
    if (current === 0 && !sliderSection.classList.contains('fixed')) {
        revarsCheckThreshold()
    }
    current += event.deltaY;
    sliderWraper.style.transform = `translateX(${-current}px)`;
});

function checkThreshold() {
    sliderSection.classList.remove('fixed');
    sliderSection.classList.add('end');
    console.log('checkThreshold');


}

function revarsCheckThreshold() {
    sliderSection.classList.remove('fixed');
}









const sliderSection = document.querySelector('.slider_conteiner');
const sliderWraper = document.querySelector('.slider_wraper');
let current = 0;
const threshold = 1000; // Set your desired threshold value here

document.addEventListener('scroll', () => {
    const rcet = sliderSection.getBoundingClientRect();

    if (rcet.top <= 0 && !sliderSection.classList.contains('fixed') && !sliderSection.classList.contains('end') && current === 0) {
        sliderSection.classList.add('fixed');
        console.log('last col');

    }
    // else if (rcet.top >= 0 && sliderSection.classList.contains('end') && current !== 0 ) {
    //     sliderSection.classList.remove('end');
    //     sliderSection.classList.add('fixed');
    //     revarsCheckThreshold(current)
    // }
});

sliderSection.addEventListener('wheel', (event) => {
    if (sliderSection.classList.contains('fixed')) {
        current += event.deltaY;
        sliderWraper.style.transform = `translateX(${-current}px)`;

        checkThreshold(current);
    }
});

function checkThreshold(current) {
    if (current >= threshold) {
        sliderSection.classList.add('end');
        sliderSection.classList.remove('fixed');
        console.log('checkThreshold');

    }
}

function revarsCheckThreshold(current) {
    if (current === 0) {
        sliderSection.classList.remove('fixed');
        console.log('revarsCheckThreshold');

    }
}





const stickySection = [...document.querySelectorAll('.cs_sticky')];

document.addEventListener('scroll', (e) => {
    for (let i = 0; i < stickySection.length; i++) {
        transform(stickySection[i])
    }
})

function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    console.log(offsetTop);
    const scrollSection = section.querySelector('.cu_scroll_section');
    console.log(scrollSection);
    let percentage = ((document.scrollY = offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    console.log(percentage);
    scrollSection.style.transform = `translate3d(${-(percentage)}vh, 0, 0)`
}

//







const title = document.querySelector('.feature_title h2');
const description = document.querySelector('.feature_description h2');
const btns = document.querySelectorAll('.feature_btns .feature_btn');
const featureImage = document.querySelector('.feature_img img');
const Images = document.querySelectorAll('.feature_btn_img');
const imageScroll = document.querySelector('.image_scroll')
const featureData = [
    {
        id: 1,
        title: "Hillsborough Castle",
        description: "Explore one of Northern Ireland’s must-see attractions, a stunning royal residence surrounded by 100 acres of picturesque gardens. Hillsborough Castle, the Royal Family's residence in Northern Ireland, is where pivotal events like the signing of the Anglo-Irish Agreement and crucial peace process meetings took place.",
        image: "wp-content/uploads/2024/11/Hillsborough-Castle-and-Gardens.png"

    },
    {
        id: 2,
        title: "The Rock of Cashel",
        description: "The Rock of Cashel is also known as Cashel of the Kings. The Rock is a spectacular group of medieval buildings set on a rocky outcrop of limestone, looming above the town of Cashel, County Tipperary. There is a 12th century round tower.",
        image: "/wp-content/uploads/2024/11/MAs_v4Fj7P0-1.png"
    },
    {
        id: 3,
        title: "Giant’s Causeway",
        description: "Giant’s Causeway is as iconic as it gets. The UNESCO world heritage site consists of over 40,000 basalt columns, creating a truly unique natural spectacle",
        image: "/wp-content/uploads/2024/11/Giants-Causeway-1.jpg"
    },
    {
        id: 4,
        title: "Clonmacnoise",
        description: "Dating from 545AD, Clonmacnoise contains over 1,500 years of Irish history. Its imposing ruins include a cathedral, round tower, high crosses and seven churches. A visit is a must.",
        image: "/wp-content/uploads/2024/11/Clocmacnoise.jpg"

    },
    {
        id: 5,
        title: "Giant’s Causeway",
        description: "Giant’s Causeway is as iconic as it gets. The UNESCO world heritage site consists of over 40,000 basalt columns, creating a truly unique natural spectacle",
        image: "/wp-content/uploads/2024/11/Cliffs-of-Moher.jpg"
    },
    {
        id: 6,
        title: "Kylemore Abbey & Gardens",
        description: "Home to the Benedictine nuns since 1920, Kylemore Abbey is characterised by its grand design and beautiful 6-acre Victorian garden. Explore its hallowed lands and learn more about its rich history of religion and education.",
        image: "/wp-content/uploads/2024/11/Kylemore-Abbey.jpg"
    },
    {
        id: 7,
        title: "Bunratty Castle and Folk Park",
        description: "Ireland’s most complete medieval fortress transports visitors to times of old. Discover the castle’s ancient tapestries and artworks and wander round the adjacent Folk Park to explore the reconstruction of a rural village from over a century ago.",
        image: "/wp-content/uploads/2024/11/Bunratty.jpg"
    },
    {
        id: 8,
        title: "The Jameson Distillery Midleton",
        description: "Discover the process behind creating Ireland's most famous whiskey. Tours include an unforgettable whiskey tasting experience and a behind the scenes journey through Jameson’s past.",
        image: "/wp-content/uploads/2024/11/Jameson-1.jpg"
    }

]


function updateFeatureContent(i) {
    btns[i].classList.add('active')
    title.textContent = featureData[i].title
    description.textContent = featureData[i].description
    featureImage.src = Images[i].querySelector('img').sre
    featureImage.srcset = Images[i].querySelector('img').src

    let rcet = Images[i].getBoundingClientRect()
    let offset = i >= 2 ? (i - 2) * (rcet.height + 20) : 0;
    if (window.innerWidth <= 1024) {
        imageScroll.style.transform = `translateX(${-offset}px)`;
    } else {
        imageScroll.style.transform = `translateY(${-offset}px)`;
    }

}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        btns.forEach((item) => item.classList.remove('active'))
        updateFeatureContent(i)
    })
})

Images.forEach((img, i) => {
    img.addEventListener('click', () => {
        btns.forEach((item) => item.classList.remove('active'))
        updateFeatureContent(i)
    })
})





// tab Header
const tabHeader = document.querySelector('.custom_tab .e-n-tabs-heading')
const btn = tabHeader.querySelectorAll('button')

const div = document.createElement('div')
div.classList.add('btn_background')

tabHeader.appendChild(div)

btn.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (i === 0) {
            div.style.left = 0;
            div.style.transform = 'translateX(0)';
        } else if (i === 1) {
            div.style.left = 'calc(50% - 15px)'
            div.style.transform = 'translateX(-50%)';
        } else if (i === 2) {
            div.style.left = '100%'
            div.style.transform = 'translateX(calc(-100% - 20px))';
        }
    })
})



//

const sliders = document.querySelectorAll('.custom_slider .swiper-wrapper .swiper-slide:not(.swiper-slide-duplicate)');
const wraper = document.querySelector('.custom_slider .swiper-wrapper');
const sliderBtn = document.querySelectorAll('.elementor-swiper-button');
const ariaLabel = document.querySelector('.custom_aria-label h2');
const slideInner = document.querySelector('.slider_inner');

function updateData() {
    let activeItem = document.querySelector('.custom_slider .swiper-wrapper .swiper-slide.swiper-slide-active');
    const activeIndex = Array.from(sliders).indexOf(activeItem);
    ariaLabel.textContent = activeItem.getAttribute('aria-label');

    const totalSlides = sliders.length;
    const widthPercentage = ((activeIndex + 1) / totalSlides) * 100;
    if (activeIndex !== -1) {
        slideInner.style.width = `${widthPercentage}%`;
    } else {
        slideInner.style.width = `${(1 / totalSlides) * 100}%`;
    }
    console.log(activeIndex);
}

sliderBtn.forEach((btn) => {
    btn.addEventListener('click', updateData);
});


wraper.addEventListener('mousemove', updateData);




//
const checkbox = document.querySelector('#form-field-field_b86a53a-11')
const input = document.querySelector('#form-field-field_0c5602c')

input.disabled = true;
input.style.opacity = 0.5;
checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        input.disabled = false;
        input.style.opacity = 1;
    } else {
        input.disabled = true;
        input.style.opacity = 0.5;

    }
});


//



document.addEventListener('DOMContentLoaded', () => {
    const experts = document.querySelectorAll('.expert');
    let currentIndex = 0;

    function showNextExpert() {
        experts[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % experts.length;
        experts[currentIndex].classList.add('active');
    }

    experts[currentIndex].classList.add('active');
    setInterval(showNextExpert, 5000);
})



//
const tabe = document.querySelector('.tab-box-09')
const tabeContant = tabe.querySelector('.tab-box-09 .e-n-tabs-content');
const tabeHeader = tabe.querySelector('.tab-box-09 .e-n-tabs-heading')
const rect = tabeContant.getBoundingClientRect()
tabeHeader.style.height = rect.height

//


const tab = document.querySelector('.custom-tab');
const tabBtnsContant = document.querySelectorAll('.custom-tab .e-n-tabs-heading .e-n-tab-title-text');
const tabBtns = document.querySelectorAll('.custom-tab .e-n-tabs-heading button');

const tabImmegesData = [
    {
        id: 1,
        image: 'https://imoconsultoria.pt/wp-content/uploads/2024/11/programa_mvp-1.webp',
    },
    {
        id: 2,
        image: 'https://imoconsultoria.pt/wp-content/uploads/2024/11/programa_semente-1.webp',
    },
    {
        id: 3,
        image: 'https://imoconsultoria.pt/wp-content/uploads/2024/11/programa_idealizacao.webp',
    },
    {
        id: 4,
        image: 'https://imoconsultoria.pt/wp-content/uploads/2024/11/programa_start.webp',
    },
    {
        id: 5,
        image: 'https://imoconsultoria.pt/wp-content/uploads/2024/11/programa_lacamento.webp',
    },
    {
        id: 6,
        image: 'https://imoconsultoria.pt/wp-content/uploads/2024/11/programa_aceleracao.webp',
    }
]

tabBtnsContant.forEach((item, index) => {
    item.textContent = '';
    let img = document.createElement('img');
    img.classList.add('tab_btn_img');
    img.src = tabImmegesData[index].image;
    item.appendChild(img);
});

tabBtns.forEach((item) => {
    item.addEventListener('click', () => {
        if (getAttribute('aria-selected')) {
            item.querySelector('.tab_btn_img').style.filter = 'saturate(100%)';
        }
    });
})

//


const mq = window.matchMedia("(min-width: 1025px)");
if (mq.matches) {

    const cardsContainer = document.getElementById("cards");
    const cardsContents = document.querySelectorAll(".fe_card");

    cardsContainer.addEventListener("mousemove", e => {
        cardsContents.forEach(card => {
            const rect = card.getBoundingClientRect()
                , x = e.clientX - rect.left
                , y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
        );
    }
    );
}


document.addEventListener('DOMContentLoaded', () => {
    const brandContainer = document.querySelector('.brand_images');
    const brandImgs = brandContainer.querySelectorAll('.brand_image');

    brandImgs.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            brandImgs.forEach((img) => {
                if (img !== item) {
                    img.classList.add('deactive')
                }
            })
            item.classList.add('active')
        })
        item.addEventListener('mouseout', () => {
            brandImgs.forEach((img) => img.classList.remove('deactive'))
            item.classList.remove('active')
        })
    })
})

function parallax() {
    var parallax = document.querySelectorAll(".parallax");
    var speed = 0.1; // The speed of the parallax effect
    for (var i = 0; i < parallax.length; i++) {
        var windowHalfY = window.innerHeight / 7;
        var parallaxY = parallax[i].getBoundingClientRect().top + windowHalfY;
        var pos = parallaxY * -speed;
        parallax[i].style.backgroundPosition = "50% " + pos + "px";


    }
}
window.addEventListener("scroll", parallax);


//




const allFilde = document.querySelectorAll('.wapf-checkable');
const showPricing = document.querySelector('.single_add_to_cart_button.button.alt');
const defaultPrice = document.querySelector('.elementor-widget-woocommerce-product-price .woocommerce-Price-amount.amount bdi');
const priceCurrency = defaultPrice.querySelector('.woocommerce-Price-currencySymbol').textContent;
console.log(defaultPrice.textContent);


const bdiText = Array.from(defaultPrice.childNodes)
    .filter(node => node.nodeType === Node.TEXT_NODE) // Only text nodes
    .map(node => node.textContent.trim()) // Get text content
    .join(''); // Combine text nodes (if multiple)
console.log(bdiText);

function calculateTotalPrice() {
    setTimeout(() => {
        const chekedFlides = document.querySelectorAll('.wapf-checkable.has-pricing.wapf-checked');

        let totalPrice = 0;

        chekedFlides.forEach((chekedFilde) => {
            const inputElement = chekedFilde.querySelector('input');
            if (inputElement) {
                const priceValue = parseFloat(inputElement.getAttribute('data-wapf-price'));
                if (!isNaN(priceValue)) {
                    totalPrice += priceValue;
                }
            }
        });

        showPricing.textContent = `Add to cart (${priceCurrency} ${((parseFloat(bdiText) + totalPrice).toFixed(2))})`;
        console.log(`Add to cart (${priceCurrency} ${((parseFloat(bdiText) + totalPrice).toFixed(2))})`);
    }, 300);
}



allFilde.forEach((filde) => {
    filde.addEventListener('click', calculateTotalPrice);
});

window.addEventListener('DOMContentLoaded', calculateTotalPrice);

//

document.addEventListener("DOMContentLoaded", function () {
    const newText = document.querySelector(".cr-ajax-reviews-review-form .cr-review-form-res .cr-review-form-result");
    if (newText && window.getComputedStyle(newText).display === "flex") {
        newText.querySelector("span").innerText = "Thank You! Your review has successfully been submitted. All reviews are subject to review before posting.";
    }
});



// feature slider navigetor and nevigetor line
const sliderNav = document.querySelector('.feature_slider_nevigetor h2');
const sliderLine = document.querySelector('.feuter_slider_line');
const featureSlider = document.querySelector('.feature_slider .swiper-wrapper');

featureSlider.addEventListener('transitionend', () => {
    const activeSlide = featureSlider.querySelector('.swiper-slide-active');
    const featureAriaLabel = activeSlide.getAttribute('aria-label');
    console.log(ariaLabel);
    sliderNav.textContent = featureAriaLabel;
    // sliderLine.width
    if (featureAriaLabel == '1 / 3') {
        sliderLine.style = 'transform: translateX(0%); left: 0%;';
    } else if (featureAriaLabel == '2 / 3') {
        sliderLine.style = 'transform: translateX(-50%); left: 50%;';
    } else if (featureAriaLabel == '3 / 3') {
        sliderLine.style = 'transform: translateX(-100%); left: 100%;';
    }
})


const gallerySlider = document.querySelector('.custom_gallery .swiper-wrapper');
const galleryNav = document.querySelector('.gallery_slider_navigetor h2')
const galleryLine = document.querySelector('.gallery_line');

gallerySlider.addEventListener('transitionend', () => {
    let galleryActive = gallerySlider.querySelector('.swiper-slide-active');
    let galleryAriaLabel = galleryActive.getAttribute('aria-label');
    console.log(galleryAriaLabel);
    galleryNav.textContent = galleryAriaLabel;
    if (galleryAriaLabel == '1 / 4') {
        galleryLine.style = 'transform: translateX(0%); left: 0%;';
    } else if (galleryAriaLabel == '2 / 4') {
        galleryLine.style = 'transform: translateX(0%); left: 25%;';
    } else if (galleryAriaLabel == '3 / 4') {
        galleryLine.style = 'transform: translateX(0%); left: 50%;';
    } else if (galleryAriaLabel == '4 / 4') {
        galleryLine.style = 'transform: translateX(0%); left: 75%;';
    }
})


// this is update and daynamic  navigetor
function updateSliderNav(sliderWrapper, navElement, lineElement, positions) {
    sliderWrapper.addEventListener('transitionend', () => {
        const activeSlide = sliderWrapper.querySelector('.swiper-slide-active');
        const SliderAriaLabel = activeSlide.getAttribute('aria-label');
        navElement.textContent = SliderAriaLabel;

        const [current, total] = SliderAriaLabel.split(' / ').map(Number);
        const leftPercentage = ((current - 1) / (total - 1)) * 100;

        lineElement.style.width = `${100 / total}%`;
        lineElement.style.transform = `translateX(-${leftPercentage}%)`;
        lineElement.style.left = `${leftPercentage}%`;
    });
}

const featureSlider = document.querySelector('.feature_slider .swiper-wrapper');
const sliderNav = document.querySelector('.feature_slider_nevigetor h2');
const sliderLine = document.querySelector('.feuter_slider_line');
updateSliderNav(featureSlider, sliderNav, sliderLine);

const gallerySlider = document.querySelector('.custom_gallery .swiper-wrapper');
const galleryNav = document.querySelector('.gallery_slider_navigetor h2');
const galleryLine = document.querySelector('.gallery_line');
updateSliderNav(gallerySlider, galleryNav, galleryLine);





//hover chnage background image for a section 
const sectionWrapper = document.querySelector('.main_section') // main section
const cardContainer = sectionWrapper.querySelector('.card_container');
const cards = cardContainer.querySelectorAll('.custom_card'); // all cards
const bgImages = sectionWrapper.querySelectorAll('.bg_images .gallery-item img') // all image 
// console.log(bgImages[1].currentSrc);


cards[0].querySelector('.card_footer').style.display = "flex";
cards[0].querySelector('.card_body').classList.add('active');
cards[0].style.padding = 0;
cards[0].classList.add('active');


cards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        cards.forEach((outherCard) => { // peveas cards style defolsd
            outherCard.querySelector('.card_footer').style.display = "none"
            outherCard.querySelector('.card_body').classList.remove('active');
            outherCard.style.padding = "0px 62px 0px 40px"
            outherCard.classList.remove('active');
        })
        // here all hover action
        card.querySelector('.card_footer').style.display = "flex";
        card.querySelector('.card_body').classList.add('active');
        card.style.padding = 0;
        card.classList.add('active');
        sectionWrapper.style.backgroundImage = `url(${bgImages[index].src})`
        // console.log(bgImages[index].currentSrc);

    })
})

//hover chnage background image for multipua section 
document.querySelectorAll('.main_section').forEach((sectionWrapper) => {
    const cardContainer = sectionWrapper.querySelector('.card_container');
    const cards = cardContainer.querySelectorAll('.custom_card'); // All cards
    const bgImages = sectionWrapper.querySelectorAll('.bg_images .gallery-item img'); // All images

    // Initial state
    let activeIndex = 0;
    const setActiveCard = (card, index) => {
        card.querySelector('.card_footer').style.display = "flex";
        card.querySelector('.card_body').classList.add('active');
        card.style.padding = 0;
        card.classList.add('active');
        sectionWrapper.style.backgroundImage = `url(${bgImages[index].src})`;
    };

    const resetCard = (card) => {
        card.querySelector('.card_footer').style.display = "none";
        card.querySelector('.card_body').classList.remove('active');
        card.style.padding = "0px 62px 0px 40px";
        card.classList.remove('active');
    };

    // Set initial card
    if (cards.length > 0) {
        setActiveCard(cards[0], 0);
    }

    cards.forEach((card, index) => {
        card.addEventListener('mouseover', () => {
            if (index !== activeIndex) {
                // Reset previous active card
                resetCard(cards[activeIndex]);
                // Set new active card
                setActiveCard(card, index);
                activeIndex = index;
            }
        });
    });
});



//
// const sliderBtnsWraper = document.querySelector('.slider_button-wraper');
// const sliderBtns = sliderBtnsWraper.querySelectorAll('.slider_btn');
// const contantWraper = document.querySelector('.contant_wraper');

// sliderBtns.forEach((btn, i) => {
//     btn.addEventListener('click', () => {
//         const rect = contantWraper.getBoundingClientRect();
//         contantWraper.style.transform = `translateX(-${i * rect.width}px)`;
//     })
// })



// const sliderBtnsWraper = document.querySelector('.slider_button-wraper');
// const sliderBtns = sliderBtnsWraper.querySelectorAll('.slider_btn');
// const contantWraper = document.querySelector('.contant_wraper');

// let isDragging = false; // Tracks if the slider is being dragged
// let startX = 0; // Stores the initial X position of the mouse
// let currentTranslate = 0; // Tracks the current translate value
// let prevTranslate = 0; // Stores the previous translate value

// // Button functionality
// sliderBtns.forEach((btn, i) => {
//     btn.addEventListener('click', () => {
//         const rect = contantWraper.getBoundingClientRect();
//         currentTranslate = -i * rect.width;
//         prevTranslate = currentTranslate;
//         contantWraper.style.transform = `translateX(${currentTranslate}px)`;
//     });
// });

// // Drag functionality
// contantWraper.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     startX = e.clientX;
//     contantWraper.style.cursor = 'grabbing'; // Change cursor to grabbing
// });

// window.addEventListener('mousemove', (e) => {
//     if (!isDragging) return;

//     const currentX = e.clientX;
//     const deltaX = currentX - startX; // Calculate distance moved
//     currentTranslate = prevTranslate + deltaX;

//     contantWraper.style.transform = `translateX(${currentTranslate}px)`;
// });

// window.addEventListener('mouseup', () => {
//     if (!isDragging) return;

//     isDragging = false;
//     prevTranslate = currentTranslate; // Update previous translate
//     contantWraper.style.cursor = 'grab'; // Reset cursor
// });

// // Add grab cursor styling
// contantWraper.style.cursor = 'grab';






// const sliderBtnsWraper = document.querySelector('.slider_button-wraper');
// const sliderBtns = sliderBtnsWraper.querySelectorAll('.slider_btn');
// const contantWraper = document.querySelector('.contant_wraper');

// let isDragging = false;
// let startX = 0;
// let currentTranslate = 0;
// let prevTranslate = 0;


// sliderBtns.forEach((btn, i) => {
//     btn.addEventListener('click', () => {
//         const rect = contantWraper.getBoundingClientRect();
//         currentTranslate = -i * rect.width;
//         prevTranslate = currentTranslate;
//         contantWraper.style.transform = `translateX(${currentTranslate}px)`;
//     });
// });

// // Drag functionality
// contantWraper.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     startX = e.clientX;
//     contantWraper.style.cursor = 'grabbing';
// });

// window.addEventListener('mousemove', (e) => {
//     if (!isDragging) return;

//     const currentX = e.clientX;
//     const deltaX = currentX - startX;
//     currentTranslate = prevTranslate + deltaX;

//     contantWraper.style.transform = `translateX(${currentTranslate}px)`;
// });

// window.addEventListener('mouseup', () => {
//     if (!isDragging) return;

//     isDragging = false;
//     prevTranslate = currentTranslate;
//     contantWraper.style.cursor = 'grab'
// });


// contantWraper.style.cursor = 'grab';




// make a translet slider with grab 

const sliderBtnsWraper = document.querySelector('.slider_button-wraper');
const sliderBtns = sliderBtnsWraper.querySelectorAll('.slider_btn');
const contantWraper = document.querySelector('.contant_wraper');
const images = contantWraper.querySelectorAll('img');

let isDragging = false; // Tracks if the slider is being dragged
let startX = 0; // Stores the initial X position of the mouse/touch
let currentTranslate = 0; // Tracks the current translate value
let prevTranslate = 0; // Stores the previous translate value
let animationID; // For canceling the animation frame
const slideWidth = contantWraper.getBoundingClientRect().width;

// Button functionality
sliderBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        setSlide(i);
    });
});

// Disable image dragging in the slider

images.forEach(img => img.setAttribute('draggable', 'false'));
contantWraper.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Drag functionality
contantWraper.addEventListener('mousedown', startDrag);
contantWraper.addEventListener('touchstart', startDrag);

window.addEventListener('mousemove', drag);
window.addEventListener('touchmove', drag);

window.addEventListener('mouseup', endDrag);
window.addEventListener('touchend', endDrag);

// Helper functions
function startDrag(e) {
    isDragging = true;
    startX = getPositionX(e);
    animationID = requestAnimationFrame(animate);
    contantWraper.style.cursor = 'grabbing';
    contantWraper.style.transition = 'none'; // Disable transition for dragging

    // Prevent text selection during drag
    document.body.style.userSelect = 'none';
}

function drag(e) {
    if (!isDragging) return;
    const currentX = getPositionX(e);
    const deltaX = currentX - startX;
    currentTranslate = prevTranslate + deltaX;
}

function endDrag() {
    if (!isDragging) return;

    isDragging = false;
    cancelAnimationFrame(animationID);

    // Snap to the nearest slide
    const slidesCount = sliderBtns.length;
    const slideIndex = Math.round(-currentTranslate / slideWidth);

    // Ensure the slideIndex stays within bounds
    const clampedIndex = Math.max(0, Math.min(slidesCount - 1, slideIndex));
    setSlide(clampedIndex);

    contantWraper.style.cursor = 'grab'; // Reset cursor

    // Re-enable text selection
    document.body.style.userSelect = '';
}

function setSlide(index) {
    currentTranslate = -index * slideWidth;
    prevTranslate = currentTranslate;
    contantWraper.style.transform = `translateX(${currentTranslate}px)`;
    contantWraper.style.transition = 'transform 0.3s ease-in-out';

    // Update active button state
    sliderBtns.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}

function getPositionX(e) {
    return e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
}

function animate() {
    contantWraper.style.transform = `translateX(${currentTranslate}px)`;
    if (isDragging) requestAnimationFrame(animate);
}

// Initial styles
contantWraper.style.cursor = 'grab';




// input type file name modify
const fileContainer = document.querySelector('.wapf-field-file');
const fileInput = fileContainer.querySelector('.wapf-input');

const customLabel = document.createElement('label');
customLabel.textContent = 'JPG, PNG, PSD and AI are accepted';
customLabel.className = 'custom-file-label';

const uniqueId = 'custom-file-input';
fileInput.id = uniqueId;
customLabel.setAttribute('for', uniqueId);

const fileList = document.createElement('div');
fileList.textContent = 'No files selected';
fileList.className = 'selected-files';

const inputContainer = fileInput.parentNode;
inputContainer.appendChild(customLabel);
customLabel.appendChild(fileList);

fileInput.addEventListener('change', () => {
    const files = fileInput.files;
    if (files.length > 0) {
        const fileNames = Array.from(files).map(file => file.name).join(', ');
        fileList.textContent = `${fileNames}`;
    } else {
        fileList.textContent = 'No files selected';
    }
});


// product card featuer desigen;
const productCards = document.querySelector('.product_cards');
const getCards = productCards.querySelectorAll('.product_card');
const productClose = productCards.querySelectorAll('.product_close');

getCards.forEach((card, i) => {
    // Card click event
    card.addEventListener('click', () => {
        // Remove classes from all cards
        getCards.forEach((item) => item.classList.remove('active', 'reset'));

        // Add active class to clicked card
        card.classList.add('active');

        // Remove active and add reset after 500ms
        setTimeout(() => {
            card.classList.remove('active');
            card.classList.add('reset');
        }, 500);
    });

    // Close button click event
    productClose[i]?.addEventListener('click', (event) => {
        event.stopPropagation();
        card.classList.remove('active', 'reset');
    });
});

// scroll animation
const leftHand = document.querySelector('.left_hand img');
const rightHand = document.querySelector('.right_hand img');

function hadAnimation() {
    const width = window.innerWidth;
    if (window.scrollY <= 400) {
        if (width < 768) {
            console.log('Scroll value:', window.scrollY);
            leftHand.style.transform = `translateX(${-window.scrollY / 80}vw) translateY(${-window.scrollY / 35}vw)`;
            rightHand.style.transform = `translateX(${window.scrollY / 80}vw) translateY(${window.scrollY / 35}vw)`;
        } else if (width < 1024) {
            console.log('Scroll value:', window.scrollY);
            leftHand.style.transform = `translateX(${-window.scrollY / 20}%) translateY(${-window.scrollY / 130}%)`;
            rightHand.style.transform = `translateX(${window.scrollY / 20}%) translateY(${window.scrollY / 130}%)`;
        } else {
            console.log('Scroll value:', window.scrollY);
            leftHand.style.transform = `translateX(${-window.scrollY / 20}vw) translateY(${-window.scrollY / 130}vw)`;
            rightHand.style.transform = `translateX(${window.scrollY / 20}vw) translateY(${window.scrollY / 130}vw)`;
        }
    }
}

window.addEventListener('scroll', hadAnimation);
window.addEventListener('resize', hadAnimation);


// side menu popup 
const popupContainer = document.querySelector('.container_popup');
const popupActiveBtn = document.querySelector('.active_popup');
const popupClose = document.querySelector('.popup_close_btn');
const popupMenu = document.querySelectorAll('.popup_menu ul li');

popupActiveBtn.addEventListener('click', () => {
    popupContainer.classList.add('active');
});

function closePopup() {
    popupContainer.classList.remove('active');
};

popupMenu.forEach((item) => {
    item.addEventListener('click', () => {
        closePopup();
    })
})

popupClose.addEventListener('click', closePopup);



// observe any section and see any appand note 
const section = document.querySelector('.custom_form form');
const formMessage = document.querySelector('.form_popup')

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) {
                    const result = yourFunction(node);
                    if (result) {
                        formMessage.classList.add('active');
                        setTimeout(() => {
                            formMessage.classList.remove('active');
                        }, 3000);
                    }
                    // console.log('Function result:', result);
                }
            });
        }
    });
});

observer.observe(section, { childList: true });

function yourFunction(newElement) {
    const isDiv = newElement.tagName === 'DIV';
    return isDiv;
}


// custom slider

const sliderContainer = document.querySelector('.Custom_slider');
const listsContainer = sliderContainer.querySelector('.custom_lists');
const sliders = listsContainer.querySelectorAll('.custom_item');

let sliderWidth = 0

console.log(listsContainer.offsetWidth); // Use offsetWidth for the element's width.

sliders.forEach((item) => {
    sliderWidth += (item.offsetWidth + 20);
})
listsContainer.style.transition = 'all 0.5s linear'
listsContainer.transform = `translateX(${(sliderWidth - 20) - listsContainer.offsetWidth})`
console.log(sliderWidth - 20);



// custom slider
const sliderContainer = document.querySelector('.Custom_slider');
const listsContainer = sliderContainer.querySelector('.custom_lists');
const sliders = listsContainer.querySelectorAll('.custom_item');

let sliderWidth = 0;

// Calculate the total width of all sliders, including 20px spacing
sliders.forEach((item) => {
    sliderWidth += (item.offsetWidth + 20);
});

// Log the total calculated slider width
console.log('Total Slider Width:', sliderWidth - 20);

// Initialize animation
let currentTranslateX = 0;
let animationInterval;

function startAnimation() {
    // Clear any existing interval to avoid duplication
    clearInterval(animationInterval);

    // Start a new interval for continuous movement
    animationInterval = setInterval(() => {
        currentTranslateX -= 2; // Adjust the speed of the movement
        if (Math.abs(currentTranslateX) >= sliderWidth - listsContainer.offsetWidth) {
            currentTranslateX = 0; // Reset the position when reaching the end
        }
        listsContainer.style.transform = `translateX(${currentTranslateX}px)`;
    }, 16); // Runs approximately at 60fps
}

function stopAnimation() {
    clearInterval(animationInterval);
}

// Apply hover effects
listsContainer.addEventListener('mouseover', stopAnimation);
listsContainer.addEventListener('mouseout', startAnimation);

// Start the animation initially
startAnimation();



// clone slider
const sliderContainer = document.querySelector('.Custom_slider');
const listsContainer = sliderContainer.querySelector('.custom_lists');
const sliders = [...listsContainer.children]; // Spread operator to get an array of children

// Clone the sliders to create an infinite loop effect
sliders.forEach((slider) => {
    const clone = slider.cloneNode(true); // Deep clone the element
    listsContainer.appendChild(clone);   // Append the clone to the container
});

let currentTranslateX = 0;
const totalWidth = sliders.reduce((acc, slider) => acc + slider.offsetWidth + 20, 0) * 2; // Account for original + cloned elements

// Start the infinite animation
function startAnimation() {
    currentTranslateX -= 1; // Adjust speed
    if (Math.abs(currentTranslateX) >= totalWidth / 2) {
        currentTranslateX = 0; // Reset to the starting position
    }
    listsContainer.style.transform = `translateX(${currentTranslateX}px)`;
    requestAnimationFrame(startAnimation); // Use requestAnimationFrame for smooth animation
}

// Stop animation on hover
function stopAnimation() {
    cancelAnimationFrame(animationFrame);
}

// Resume animation on mouse out
function resumeAnimation() {
    animationFrame = requestAnimationFrame(startAnimation);
}

let animationFrame = requestAnimationFrame(startAnimation); // Initialize the animation

// Attach hover event listeners
listsContainer.addEventListener('mouseover', stopAnimation);
listsContainer.addEventListener('mouseout', resumeAnimation);


//

const sliderContainer = document.querySelector('.Custom_slider');
const listsContainer = sliderContainer.querySelector('.custom_lists');
const sliders = [...listsContainer.children];

const sliderWidth = sliders.reduce((total, item) => total + item.offsetWidth + 20, 0);
const speed = 10;
const step = 2;
let offset = 0;

const slideTranslet = sliderWidth - listsContainer.offsetWidth;


const cloneItem = function () {
    sliders.forEach((slider, i) => {
        if (i < sliders.length) {
            const clone = slider.cloneNode(true);
            return clone
        }
    });
}

function animateSlider() {

    for (let i = 0; i <= sliderWidth; i += step) {
        setTimeout(() => {
            offset = i;
            listsContainer.style.transform = `translateX(-${offset}px)`;

            // if (i >= sliderWidth - listsContainer.offsetWidth) {
            //     setTimeout(() => {
            //         listsContainer.style.transform = `translateX(0px)`;
            //         animateSlider();
            //     }, 2000);
            // }

        }, i * speed);
        if (offset >= -slideTranslet) {
            listsContainer.appendChild(cloneItem());
            offset = 0
        }
    }
}

animateSlider();








const sliderContainer = document.querySelector('.Custom_slider');
const listsContainer = sliderContainer.querySelector('.custom_lists');
const sliderNext = document.querySelector('.slider_next')
const sliderPrev = document.querySelector('.slider_prev')
const sliders = [...listsContainer.children];

const listsContainerWidth = listsContainer.offsetWidth;
const sliderWidth = sliders.reduce((total, item) => total + item.offsetWidth + 20, 0);
const translateContainer = sliderWidth - listsContainerWidth;

//popup
const sliderPopup = document.querySelector('.slider_popup');
const sliderPopupImg = sliderPopup.querySelector('.slider_popup_img img');
const sliderPopupHeading = sliderPopup.querySelector('.slider_popup_headeing h2');
const sliderPopupText = sliderPopup.querySelector('.slider_popup_text h2');
const sliderPopupClose = sliderPopup.querySelector('.slider_popup_close');

let preTranslet = 300;
let offset = 0;
let speed = 2;
let isHovered = false;

function animateSlider() {
    if (!isHovered) {
        offset += speed;
        if (offset >= translateContainer) {
            offset = 0;
        }
        listsContainer.style.transform = `translateX(-${offset}px)`;
    }
    requestAnimationFrame(animateSlider);
}

animateSlider();

sliders.forEach((item) => {
    item.addEventListener('click', () => {
        sliderPopup.classList.add('active');
        let bgImage = window.getComputedStyle(item).backgroundImage;
        let url = bgImage.slice(5, -2);
        sliderPopupImg.src = url;
        sliderPopupHeading.innerHTML = item.querySelector('.slider_heading h2').innerHTML
        sliderPopupText.innerHTML = item.querySelector('.slider_text h2').innerHTML
        isHovered = true;
    })
})

function next() {
    offset = Math.min(offset + preTranslet, translateContainer);
    listsContainer.style.transform = `translateX(-${offset}px)`;
}

function prev() {
    offset = Math.max(offset - preTranslet, 0);
    listsContainer.style.transform = `translateX(-${offset}px)`;
}


sliderPopupClose.addEventListener('click', () => {
    sliderPopup.classList.remove('active');
    isHovered = false;
})

sliderContainer.addEventListener('mouseenter', () => {
    isHovered = true;
});

sliderContainer.addEventListener('mouseleave', () => {
    isHovered = false;
});


sliderNext.addEventListener('click', next);
sliderPrev.addEventListener('click', prev);



// menu item click ad popup close
const popupTrigar = document.querySelector('.menu-toggle');
const poupopSection = document.querySelector('.popup_container');
const poupopMenuItem = poupopSection.querySelectorAll('.poup_nemu .elementor-nav-menu__container .menu-item');
const poupopClose = poupopSection.querySelector('.close_popup');


popupTrigar.addEventListener('click', () => {
    poupopSection.classList.add('active');
})
poupopClose.addEventListener('click', () => {
    poupopSection.classList.remove('active');
})
poupopMenuItem.forEach((item) => {
    item.addEventListener('click', () => {
        poupopSection.classList.remove('active');
    })
})

// circle animation ofr counter
const circleAnimation = document.querySelectorAll('.circle_animation .elementor-counter-number-wrapper');
const svgMarkup = `
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="circle_animation-svg" style="display: block; width: 100%;" width="213" height="213">
    <path d="M 50,50 m 0,-46.71038780580235 a 46.71038780580235,46.71038780580235 0 1 1 0,93.4207756116047 a 46.71038780580235,46.71038780580235 0 1 1 0,-93.4207756116047" 
            stroke="#7D8C9A" stroke-width="6.57922px" fill-opacity="0" fill="#2C88D9"></path>
    <path d="M 50,50 m 0,-46.71038780580235 a 46.71038780580235,46.71038780580235 0 1 1 0,93.4207756116047 a 46.71038780580235,46.71038780580235 0 1 1 0,-93.4207756116047" 
        stroke="#2C88D9" stroke-width="6.57922px" fill-opacity="0" 
        style="stroke-dasharray: 293.623, 293.623;stroke-dashoffset: 20.623;"></path>
</svg>
`;

circleAnimation.forEach((item) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = svgMarkup.trim();
    console.log(tempDiv.innerHTML);

    const svgElement = tempDiv.firstChild;

    item.appendChild(svgElement);
});


// time counter
const initialTime = 7 * 60 + 12;
let totalSeconds = initialTime;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `0${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function startCountdown() {
    const timerElement = document.querySelector('.custom_counter h2');

    const interval = setInterval(() => {
        timerElement.textContent = formatTime(totalSeconds);

        if (totalSeconds <= 0) {
            clearInterval(interval);
            totalSeconds = initialTime;
            startCountdown();
        } else {
            totalSeconds--;
        }
    }, 1000);
}

startCountdown();



// popup 
const CustomPopup = document.querySelector('.form_popup');
const CustomPopupClose = document.querySelector('.custom_popup_closer');
const CustomPopupActive = document.querySelectorAll('.custom_popup_active');

CustomPopupActive.forEach((item) => {
    item.addEventListener('click', () => {
        CustomPopup.classList.add('active');
    })
})

CustomPopupClose.addEventListener('click', () => {
    CustomPopup.classList.remove('active');
})



// first lood animation

function checkInView() {
    const borderAnimation = document.querySelectorAll(".border_animation");
    const cornerBorder = document.querySelectorAll('.corner_animation');

    borderAnimation.forEach((item) => {
        const rect = item.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            item.classList.add('active');
        }
    });

    cornerBorder.forEach((item) => {
        const rect = item.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            item.classList.add('active');
        }
    });
}

checkInView();

window.addEventListener('scroll', checkInView);
window.addEventListener('resize', checkInView);



//  slider navigetor 
setTimeout(() => {
    const sliders = document.querySelectorAll('.custom_slider .swiper-wrapper .swiper-slide:not(.swiper-slide-duplicate)');
    const sliderBullets = document.querySelectorAll('.custom_slider .swiper-pagination-bullets .swiper-pagination-bullet');
    const dotsContainer = document.querySelector('.custom_line');
    const innerContainer = dotsContainer.querySelector('.inner_line');
    let activeButtonIndex = -1;

    if (sliders.length && dotsContainer && innerContainer && sliderBullets.length) {
        sliders.forEach(() => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.custom_line .dot');

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                sliderBullets[i].click();
                updateProgressBar(i);
            });
        });

        const updateProgressBar = (index) => {
            activeButtonIndex = index;
            const percentage = (100 / (dots.length - 1)) * activeButtonIndex;
            innerContainer.style.transform = `translate(${percentage}%, -50%)`;
            dots.forEach((dot) => {
                dot.classList.remove('active')
            });
            dots[index].classList.add('active');
            // let result = dots.indexOf.slice(0, activeButtonIndex);
            // result.forEach((item) => item.style.borderColor = '#000')

        };

        const observer = new MutationObserver(() => {
            sliderBullets.forEach((button, index) => {
                if (button.classList.contains('swiper-pagination-bullet-active')) {
                    updateProgressBar(index);
                }
            });
        });

        sliderBullets.forEach((bullet) => {
            observer.observe(bullet, { attributes: true, attributeFilter: ['class'] });
        });

        sliderBullets.forEach((button, index) => {
            if (button.classList.contains('active')) {
                updateProgressBar(index);
            }
        });
    }
}, 500);



// menus some popup
const searchPopup = document.querySelector('.search_popup');
const searchClosePopup = searchPopup.querySelector('.search_close_popup');
const searchPopupActive = document.querySelector('.menu_icon .elementor-grid-item:nth-child(1)');


const popupSearch = searchPopup.querySelector('.popup_search input.e-search-input');
const popupSearchContant = searchPopup.querySelector('.search_popup_contant');

const menuPopup = document.querySelector('.menu_popup ');
const menuClosePopup = document.querySelector('.menu_close_popup');
const menuPopupActive = document.querySelector('.menu_popup_active')

menuPopupActive.addEventListener('click', () => {
    menuPopup.classList.add('active');
})
menuClosePopup.addEventListener('click', () => {
    menuPopup.classList.remove('active');
})

searchPopupActive.addEventListener('click', () => {
    searchPopup.classList.add('active');
})
searchClosePopup.addEventListener('click', () => {
    searchPopup.classList.remove('active')
})

popupSearch.addEventListener('input', () => {
    if (popupSearch.value.trim()) {
        popupSearchContant.style.display = 'none';
    } else {
        popupSearchContant.style.display = 'block';
    }
});

function subMenus() {
    if (window.innerWidth <= 1024) {
        const subMenuConainer = document.querySelector('.sub_popup')
        const subMenus = document.querySelectorAll('.custom_menu nav:nth-child(1) li.menu-item-has-children .sub-menu li.menu-item-object-product_cat')
        const appandSubMenu = document.querySelector('.appand_submenu')
        const closeSubMenu = document.querySelector('.close_sub_menu')
        const activeSubeMenu = document.querySelector('.custom_menu nav li.menu-item-has-children');


        activeSubeMenu.addEventListener('click', () => {
            subMenuConainer.classList.add('active');
        })

        closeSubMenu.addEventListener('click', () => {
            subMenuConainer.classList.remove('active');
        })

        subMenus.forEach((item, i) => {
            appandSubMenu.appendChild(item)
        })
    }
}

function handleResize() {
    subMenus();
}

window.addEventListener('resize', handleResize);
handleResize();


// video popup with puase and play
const items = document.querySelectorAll('.loop_item');

items.forEach((card) => {
    const cardContant = card.querySelector('.card_contant')
    const popup = card.querySelector('.loop_popup');
    const closeBtn = popup.querySelector('.close_popup_loop');
    const videoFrame = popup.querySelector('.loop_video')

    if (!popup || !closeBtn) {
        console.error('Missing popup or close button for:', card);
        return;
    }

    cardContant.addEventListener('click', () => {
        popup.classList.add('active');

        let iframe = videoFrame.querySelector('iframe')
        if (iframe) {
            let src = iframe.src;
            iframe.src = src
        } else {
            videoFrame.querySelector('.elementor-custom-embed-play').click()
            let video = videoFrame.querySelector('video')
            video.currentTime = 0;
            video.play()
        }
    });

    closeBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        popup.classList.remove('active');

        const iframe = videoFrame.querySelector('iframe');
        if (iframe) {
            const iframeSrc = iframe.src;
            if (iframeSrc.includes('youtube') || iframeSrc.includes('vimeo')) {
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            }
        } else {
            const video = videoFrame.querySelector('video');
            if (video) {
                video.pause();
            }
        }
    });
});


// path marquee
function createMarquee(pathSelector, waveLength, direction, speed) {
    const path = document.querySelector(pathSelector);
    let lastTime = performance.now();
    let offset = direction === 'leftToRight' ? -waveLength : 0;

    function increment(currentTime) {
        const timeElapsed = currentTime - lastTime;
        lastTime = currentTime;

        const movement = (speed * timeElapsed) / 16.67;

        if (direction === 'leftToRight') {
            offset += movement;
            if (offset > 0) {
                offset = -waveLength;
            }
        } else {
            offset -= movement;
            if (offset < -waveLength) {
                offset = 0;
            }
        }

        path.setAttribute('startOffset', offset);
        requestAnimationFrame(increment);
    }

    requestAnimationFrame(increment);
}

// Adjust marquee speed and direction here
createMarquee('.marqury_one textPath', 3000, 'rightToLeft', 3);
createMarquee('.marqury_two textPath', 3000, 'leftToRight', 3);



// button slider

const btnSlider = document.querySelector('.custom_btn-slider');

const sliderimgWrap = btnSlider.querySelector('.img_wraper');
const sliderImgs = sliderimgWrap.querySelectorAll('.img_item');

const sliderContentWrap = btnSlider.querySelector('.contant_wraper');
const sliderContent = sliderContentWrap.querySelectorAll('.content_item');

const sliderBtnWrap = btnSlider.querySelector('.btn_wraper');
const sliderBtns = sliderBtnWrap.querySelectorAll('.custom_btn');

const sliderimgWrapWidth = sliderimgWrap.offsetWidth;
const sliderImgsWidth = sliderImgs[1].offsetWidth;

const sliderContentWrapWidth = sliderContentWrap.offsetWidth;
const sliderContentWidth = sliderContent[1].offsetWidth;

const sliderBtnsWrapHeight = sliderBtnWrap.offsetHeight;
const sliderBtnsHeight = sliderBtns[1].offsetHeight;

let activeItem = 0;

function moveToItem(index) {
    sliderimgWrap.style.transform = `translateX(${-(index * sliderImgsWidth)}px)`;
    sliderContentWrap.style.transform = `translateX(${-(index * sliderContentWidth)}px)`;
    sliderBtnWrap.style.transform = `translateY(${-(index * (sliderBtnsHeight + 10))}px)`;

    activeItem = index;
}

sliderBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        moveToItem(i);
    });
});

setInterval(() => {
    activeItem = (activeItem + 1) % sliderImgs.length;
    moveToItem(activeItem);
}, 3000);


// custom menu cercal

const menuItem = document.querySelectorAll('.custom_menu .elementor-nav-menu__container ul li')

const svgNamespace = "http://www.w3.org/2000/svg";
const svgElement = document.createElementNS(svgNamespace, "svg");

const pathData = [
    {
        'd': 'M0.22609712876944454,-0.8711372385349011 C-0.25469660157418084,-0.9959236408977121 -0.8737549835121222,-0.3812295346215822 -0.8310231640216085,0.0774246353044851 S-0.22572822632497902,0.9674174917095621 0.2362422305630721,0.837031855241827 S0.9918965690718465,-0.012592370693059322 0.754973903181371,-0.4292738109597364 S-0.21493867537754885,-0.9902871236638886 -0.5836939040026736,-0.6681376883392542'
    },
    {
        'd': 'M-0.12266648370977769,-0.8916013311869151 C-0.6147546542506868,-0.8238998558256402 -0.949861359328015,0.03283827452630227 -0.7141883654875235,0.4270095637576786 S0.3861828231353019,0.7390498979516964 0.6086688339229702,0.4031164235683659 S0.6257504103641498,-0.5140663021344707 0.2621698773582621,-0.6587617964182453 S-0.6584636435540702,-0.3814413321638274 -0.6660892652534615,-0.013816659016272175'
    },
    {
        'd': 'M0.09634992880408431,-0.8948277438811606 C-0.3975189473779971,-0.9480047171970619 -1.0266527692416483,-0.22401075232438616 -0.8817098579765397,0.26261816553733686 S0.1272012472420461,0.898168316793898 0.4774712312878693,0.6346447704824734 S0.8577776985705593,-0.36591699180250664 0.5026962198835112,-0.6433625883125565 S-0.5447290678652562,-0.7180610837158388 -0.7213171969767188,-0.3199552852784891'
    },
    {
        'd': 'M0.1653662464401276,-0.8846773448768217 C-0.32290047202685024,-0.9759454608313055 -0.8117881314146466,-0.47026981129378603 -0.8211932656555021,-0.01704090996522186 S-0.05481025763186774,0.8386647598345137 0.31278417540284564,0.6660344740057165 S0.819471432036205,-0.05401099934347909 0.6052857424260552,-0.38807729470042424 S-0.25325869111874216,-0.6554319743554231 -0.471406285190853,-0.3952557629176877'
    },
    {
        'd': 'M0.32528033766991654,-0.8391619044769282 C-0.13786572539389882,-1.0186890100094366 -0.8503614573136449,-0.46921666898301434 -0.850314669889384,0.00008477287659241612 S-0.10572557805822509,1.0020243414334118 0.34286617784750867,0.8127913464885401 S0.9075009963186343,-0.34670196231461964 0.548938661866461,-0.6496694573243518 S-0.6280481247858961,-0.7606385740429691 -0.8031946911180545,-0.3173433564210968'
    },
    {
        'd': 'M-0.13054382476052565,-0.8904820659715126 C-0.6220142560126606,-0.8184329677312665 -0.8725386600062475,-0.1475572443449331 -0.7312358314604809,0.25602279748646856 S-0.018527200990458494,0.8847892972528618 0.3601085655631928,0.686039969469553 S0.7811752208217793,-0.2995776758721636 0.4720442958467041,-0.5601060149766508 S-0.4199017114300263,-0.6985372241914932 -0.6173759059771395,-0.3577981859221146'
    },
    {
        'd': 'M-0.038742895839174146,-0.8991657177750912 C-0.5350059649891785,-0.8777829314690448 -0.9866047590843942,-0.34694436778845106 -0.9030195942908825,0.15144571371316315 S-0.05700311612455546,0.9256179507890087 0.34788884821945937,0.7336128686027763 S0.9493860150056841,-0.11757275507724542 0.6779771067997841,-0.4917585065830194 S-0.28278933804611744,-0.9104328089245683 -0.6019199355773479,-0.5782241529369693'
    },
    {
        'd': 'M-0.07012645513599891,-0.8972637740876752 C-0.5653398129891769,-0.858559929883613 -1.0351932433349396,0.014506782972851138 -0.7873514528499046,0.4490578793578926 S0.11745000743156388,0.9840282205546859 0.5063197955887098,0.7045827181705461 S0.7615976918371898,-0.4013943360559164 0.4139643622258777,-0.6298674871734554 S-0.5217893943989897,-0.5863249495747103 -0.648002711478924,-0.22868251719664107'
    },
    {
        'd': 'M0.322535677679203,-0.8402206475825367 C-0.14119472161167715,-1.0182329340290428 -0.658286585269799,-0.6051733880093344 -0.7606033395264485,-0.18538497724437644 S-0.27837677051610704,0.834991416404382 0.13986364534288095,0.7577985691591457 S0.7737016187396367,-0.03481344270971034 0.5783241308186057,-0.35399921953593233 S-0.21563590883486547,-0.7682087779369838 -0.49027815215577353,-0.497616899581057'
    },
    {
        'd': 'M0.04625264334259778,-0.8988107103188204 C-0.4498144918584834,-0.9243382391021625 -0.9127462710933575,-0.46613166304151854 -0.8968282974210658,0.02884134869654125 S-0.069840893163156,0.9747867658073736 0.3588493870604791,0.7767323975582324 S0.9192446486660284,-0.10881435932417712 0.6585786104179703,-0.47229378922423554 S-0.45241406331905065,-0.6915618138680674 -0.6393460839318843,-0.3386971042946581'
    },
    {
        'd': 'M-0.10450808477162539,-0.8939116624238476 C-0.5978713618337553,-0.8362320802572949 -0.9800930600353691,-0.1941200665752697 -0.8333760123259578,0.26583267568032326 S0.023118668530257784,0.8905889919167127 0.39448420384994953,0.6728672328863717 S0.7806790968616754,-0.1261453497348375 0.5450345139109445,-0.42695808683007247 S-0.40775910141708077,-0.6779877632467997 -0.5993749993792454,-0.34718369578331193'
    }
]


menuItem.forEach((item) => {
    item.addEventListener('mouseover', () => {
        // Set SVG dimensions to match the menu item's size
        svgElement.setAttribute("width", `${item.offsetWidth}`);
        svgElement.setAttribute("height", `${item.offsetHeight}`);

        const pathElement = document.createElementNS(svgNamespace, "path");

        // Select a random path from the pathData array
        const randomPath = pathData[Math.floor(Math.random() * pathData.length)].d;

        // Set the random path data to the path element
        pathElement.setAttribute("d", randomPath);
        pathElement.setAttribute("fill", "none");
        pathElement.setAttribute("stroke", "red");
        pathElement.setAttribute("stroke-width", "2");

        // Append the path to the SVG
        svgElement.appendChild(pathElement);

        // Append the SVG to the clicked menu item
        item.appendChild(svgElement);
    });

    item.addEventListener('mouseout', () => {
        // Clear the SVG path when the mouse leaves the item
        if (item.contains(svgElement)) {
            svgElement.innerHTML = ''; // Clear the path element inside the SVG
        }
    });
});


// hadeing after image loop

const imgeSrc = [
    '/wp-content/uploads/2024/12/Microsoft_logo.svg',
    '/wp-content/uploads/2024/12/Netflix_2015_logo.svg',
    '/wp-content/uploads/2024/12/Facebook.svg',
    '/wp-content/uploads/2024/12/apple-light-1.svg',
    '/wp-content/uploads/2024/12/amazon-logo.png',
    '/wp-content/uploads/2024/12/linkedin-light-2.svg',
    '/wp-content/uploads/2024/12/Logo_Google_2013_Official.svg'
];
const ipv3imgeSrc = [
    '/wp-content/uploads/2024/12/Facebook-Logo.png',
    '/wp-content/uploads/2024/12/svgexport-1.png',
    '/wp-content/uploads/2024/12/svgexport-2.png',
    '/wp-content/uploads/2024/12/svgexport-3.png'
];

const title = document.querySelector('.post_title h2');
const postLogo = document.querySelector('.post_logo img');
let index = 0;

// Create and append image container
const imgeDiv = document.createElement('div');
imgeDiv.classList.add('img_div');
title.appendChild(imgeDiv);

const Img = document.createElement('img');
Img.classList.add('title_img');
imgeDiv.appendChild(Img);

let pageAddress = document.location.href;
let segments = pageAddress.split('/');
let ipv3 = segments[3];

if (postLogo) {
    Img.src = postLogo.src;
} else if (ipv3 === 'ipv3') {
    ipv3imgeSrc.forEach((item, i) => {
        if (i === 0) {
            Img.src = item;
        } else {
            const ipv3Img = document.createElement('img');
            ipv3Img.classList.add('title_img');
            ipv3Img.src = item;
            imgeDiv.appendChild(ipv3Img);
        }
    });
} else {
    // Image slider with fade effect
    Img.src = imgeSrc[index];
    setInterval(() => {
        Img.style.opacity = 0;
        setTimeout(() => {
            index = (index + 1) % imgeSrc.length;
            Img.src = imgeSrc[index];
            Img.style.opacity = 1;
        }, 500); // Match fade-out duration
    }, 2000); // Adjusted for better visibility
}


// custom slider
const sliderOffset = document.querySelector('.phone_slider .offset-both');  // Offset container
const fream = document.createElement('div');
// fream.src = '/wp-content/uploads/2024/12/mobile_frame.png';
fream.classList.add('phone_fream');
sliderOffset.appendChild(fream);

//

// const sliderNext = document.querySelector('.testumonial-slider .elementor-swiper-button-next[aria-label="Next slide"]');
// const sliderPrev = document.querySelector('.testumonial-slider .elementor-swiper-button-prev[aria-label="Next slide"]');
const sliderPrev = document.querySelectorAll('.testumonial-slider elementor-swiper-button');

const customNext = document.querySelector('.next_btn');
const customPrev = document.querySelector('.prev_btn');

sliderPrev[1].addEventListener('click', () => {
    customNext.click();
});
// sliderPrev.addEventListener('click', () => {
//     customPrev.click();
// });


// Locate the Elementor Swiper instance
const elementorSwiper = document.querySelector('.testumonial-slider').swiper;

// Custom Previous Button
document.querySelector('.prev_btn').addEventListener('click', function () {
    elementorSwiper.slidePrev(); // Go to the previous slide
});

// Custom Next Button
document.querySelector('.next_btn').addEventListener('click', function () {
    elementorSwiper.slideNext(); // Go to the next slide
});



// menu problem

const menuBtn = document.querySelector('.menu_btn');
const items = document.querySelectorAll('#menu-main-nav li a');

function isMobileDevice() {
    return window.matchMedia('(max-width: 1024px)').matches;
}

items.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const targetHref = item.href;

        window.location.href = targetHref;

        if (isMobileDevice() && menuBtn) {
            menuBtn.click();
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const readMore = document.querySelectorAll('.read-more');
    readMore.forEach((item) => {
        item.addEventListener('click', () => {
            if (item.textContent === 'Read more..') {
                item.textContent = 'Read less..';
            } else {
                item.textContent = 'Read more..';
            }
        });
    });
})


// hover content grow effect

const growItems = document.querySelectorAll('.hover_grow .grow_con');

growItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('active');
    });
});


// header amination

document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll(".header_call_ani");
    let prevScrollPos = window.pageYOffset;

    window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset;

        if (window.innerWidth > 1024) {
            if (currentScrollPos < prevScrollPos) {
                headers[0]?.classList.remove('scrolled');
            } else {
                headers[0]?.classList.add('scrolled');
            }
        } else {
            if (currentScrollPos < prevScrollPos) {
                headers[1]?.classList.remove('scrolled');
            } else {
                headers[1]?.classList.add('scrolled');
            }
        }

        prevScrollPos = currentScrollPos;
    });
});





// single page product price update


const allFields = document.querySelectorAll('.wapf-checkable');
const showPricing = document.querySelector('.single_add_to_cart_button.button.alt');
const defaultPrice = document.querySelector('.elementor-widget-woocommerce-product-price .woocommerce-Price-amount.amount bdi');
const priceCurrency = defaultPrice.querySelector('.woocommerce-Price-currencySymbol').textContent;


const defaultPriceValue = parseFloat(
    Array.from(defaultPrice.childNodes)
        .filter(node => node.nodeType === Node.TEXT_NODE)
        .map(node => node.textContent.trim())
        .join('')
);

function calculateTotalPrice() {
    setTimeout(() => {
        const checkedFields = document.querySelectorAll('.wapf-checkable.has-pricing.wapf-checked');
        let totalPrice = 0;

        checkedFields.forEach((field) => {
            const priceElement = field.querySelector('.wapf-addon-price');
            if (priceElement) {
                const priceValue = parseFloat(priceElement.textContent.replace(/[^\d.]/g, ''));  // filter only number in string
                if (!isNaN(priceValue)) {
                    totalPrice += priceValue;
                }
            }
        });

        // Update button text
        const finalPrice = (defaultPriceValue + totalPrice).toFixed(2);
        showPricing.textContent = `Add to cart (${priceCurrency} ${finalPrice})`;
        console.log(`Add to cart (${priceCurrency} ${finalPrice})`);
    }, 300);
}

allFields.forEach((field) => {
    field.addEventListener('click', calculateTotalPrice);
});


window.addEventListener('DOMContentLoaded', calculateTotalPrice);

// menu icon toggole aso tigar menu icon outsite click close
const menuIcon = document.querySelector('.menu_icon');
const menuPopup = document.querySelector('.menu-popup');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menuPopup.classList.toggle('active');

});
document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target)) {
        menuIcon.classList.remove('active');
        menuPopup.classList.remove('active');
    }
});


// scroll add classs and remove class
function checkInView() {
    const containers = document.querySelectorAll(".sticy_number, .vakue_card");

    containers.forEach((container) => {
        const rect = container.getBoundingClientRect();
        const viewportMiddle = window.innerHeight / 2;
        console.log(viewportMiddle);


        if (rect.top < viewportMiddle) {
            container.classList.add("active");
        } else {
            container.classList.remove("active");
        }
    });
}

document.addEventListener("scroll", checkInView);



// scroll with transform
const numberSection = document.querySelector('.custom_numbers');
const numberContent = document.querySelector('.number_contant');

document.addEventListener('scroll', () => {
    const rect = numberContent.getBoundingClientRect();
    console.log(rect.top);

    const numberMover = (rect.top / rect.height) * 100;

    if (rect.top < 0 && numberMover < (100 - (100 / 5))) {
        numberSection.style.transform = `translateY(${numberMover}%)`;
    } else if (rect.top > 0) {
        numberSection.style.transform = `translateY(0%)`;
    }
});


// scroll and class add
const mainHeader = document.querySelector('.custom_header');
const BlackSction = document.querySelector('.black-section');

document.addEventListener('scroll', () => {
    const rect = BlackSction.getBoundingClientRect();
    console.log(rect.top);
    if (rect.top < 0) {
        mainHeader.classList.add('active');
    } else {
        mainHeader.classList.remove('active');
    }
});

// scroll and translet
const footer = document.querySelector('.custom_footer');

document.addEventListener('scroll', () => {
    const rect = footer.getBoundingClientRect();
    const theValue = window.innerHeight - rect.bottom;
    if (theValue > -700 && theValue < 0) {
        footer.style.transform = `translateY(${theValue}px)`;
    } else {
        footer.style.transform = `translateY(0px)`;
    }

});


// scroll and translet updateted
const footer = document.querySelector('.custom_footer');
let viewportHeight = window.innerHeight;

// Update viewport height on resize
window.addEventListener('resize', () => {
    viewportHeight = window.innerHeight;
});

// Throttle scroll event for better performance
let scrollTimeout;
document.addEventListener('scroll', () => {
    if (scrollTimeout) return;

    scrollTimeout = setTimeout(() => {
        const rect = footer.getBoundingClientRect();
        const offset = viewportHeight - rect.bottom;

        // Update footer position if within the range
        footer.style.transform = offset > -700 && offset < 0
            ? `translateY(${offset}px)`
            : `translateY(0px)`;

        scrollTimeout = null;
    }, 50); // Adjust throttle time as needed
});


// custom tab
const tabBtn = document.querySelectorAll('.tab_btns .tab_btn');
const tabContent = document.querySelectorAll('.tab_contants .tab_contant-item');
console.log(tabBtn, tabContent);


tabBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        tabBtn.forEach((item) => item.classList.remove('active'));
        tabContent.forEach((item) => item.classList.remove('active'));

        btn.classList.add('active');
        tabContent[i].classList.add('active');
    })
});

tabBtn[0].click();


// test animiation loade

const h2Element = document.querySelector('.custom_heading span');
const text = h2Element.innerText
h2Element.innerHTML = '';

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    const span = document.createElement('span');
    span.classList.add('char', `char-${i}`);

    span.textContent = text[i];
    h2Element.appendChild(span);
}

const words = document.querySelectorAll('.char');
words.forEach((word, i) => {
    setTimeout(() => {
        if (word.textContent === ' ') {
            word.style.width = '1rem';
        }
        word.classList.add('active');
    }, 150 * i);
});


// mouse over and out add class and remove class
const philosophyTitles = document.querySelectorAll('.philosophy_title');
const philosophyContents = document.querySelectorAll('.philosophy_content');

philosophyTitles.forEach((title, i) => {
    title.addEventListener('mouseover', () => {
        philosophyTitles.forEach((item) => item.classList.remove('active'));
        philosophyContents.forEach((item) => item.classList.remove('active'));

        title.classList.add('active');
        philosophyContents[i].classList.add('active');
    });

    title.addEventListener('mouseout', () => {
        title.classList.remove('active');
        philosophyContents[i].classList.remove('active');
        philosophyTitles[0].classList.add('active');
        philosophyContents[0].classList.add('active');

    });
});


// if text on haif veiwport clsaa add and remove

const servicesTexts = document.querySelectorAll('.services_tttle');
const servicesImg = document.querySelectorAll('.servise_image');
const viewportMiddle = window.innerHeight / 2;

const handleScroll = () => {
    let activeIndex = 0;
    servicesTexts.forEach((text, i) => {
        const textRect = text.getBoundingClientRect();
        if (textRect.top < viewportMiddle && textRect.bottom > viewportMiddle) {
            text.classList.add('active');
            activeIndex = i;
        } else {
            text.classList.remove('active');
        }
    });

    servicesImg.forEach((img, i) => {
        if (i === activeIndex) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', handleScroll);
handleScroll();


// gallery 
const galleryItems = document.querySelectorAll('.items_section .item');
const galleryPreview = document.querySelector('.preview_contant');
const galleryPreviewVideo = galleryPreview.querySelector('.preview_video');
const galleryPreviewImg = galleryPreview.querySelector('.preview_img');
const previewImage = galleryPreview.querySelector('img');
const previewVideo = galleryPreview.querySelector('video');

galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const video = item.querySelector('video');

        if (img) {
            galleryPreviewVideo.style.display = 'none';
            galleryPreviewImg.style.display = 'block';
            previewImage.src = img.src;
            previewImage.setAttribute('srcset', img.getAttribute('srcset') || '');
            previewVideo.src = '';
        } else if (video) {
            galleryPreviewImg.style.display = 'none';
            galleryPreviewVideo.style.display = 'flex';
            previewVideo.src = video.src;
            previewImage.src = '';
            previewImage.setAttribute('srcset', '');
        }
    });
});

galleryItems[0].click();


// section grow effect
const growItems = document.querySelectorAll('.grow_effect');

growItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.style.width = '150%';
    });

    item.addEventListener('mouseleave', () => {
        item.style.width = '100%';
    });
});


//calculate hight and toggle class
const contactBtn = document.querySelector('.contact_btn');
const contactSection = document.querySelector('.custom_form-con');

let contactHeight = contactSection.offsetHeight;
contactSection.style.top = `${-contactHeight}px`;


contactBtn.addEventListener('click', () => {
    contactSection.classList.toggle('active');

    if (!contactSection.classList.contains('active')) {
        contactSection.style.top = `${-contactHeight}px`;
    } else {
        contactSection.style.top = '0px';
    }
});


// custom form font change
const form = document.querySelector('.custom_field .wapf-field-group');
const select = form.querySelector('select');
const inputs = form.querySelectorAll('input');
const fonts = [
    'Amaze',
    'Caliban',
    'CollegiateFLF',
    'FrenchScriptStd',
    'Gem',
    'Georgia',
    'HarlowSolidItalic',
    'LucidaHandwriting',
    'ITCMonaLisaStd',
    'OldEnglishTextMT',
    'Stencil'
];

inputs[1].addEventListener('input', () => {
    inputs[2].value = inputs[1].value;
});

select.addEventListener('change', () => {
    const selectedOption = select.options[select.selectedIndex];
    const optionsIndex = Array.prototype.indexOf.call(select.options, selectedOption);
    fontChange(inputs[2], optionsIndex);

});

function fontChange(input, index) {
    input.style.fontFamily = `"${fonts[index - 1]}", Sans-serif`;
}


// marquee text 
document.addEventListener('DOMContentLoaded', () => {
    const marqueeText = document.querySelectorAll('.custom-marquee .deensimc-scroll-text');
    marqueeText.forEach((text) => {
        const textContent = text.textContent;
        text.innerHTML = textContent;
    });
});


// marquee text upadte
const marqueeText = document.querySelector('.custom-marqury');
const marqueeTextContent = marqueeText.textContent;
marqueeText.innerHTML = '';
const marqueeTextElements = [];
for (let i = 0; i < marqueeTextContent.length; i++) {
    const span = document.createElement('span');
    span.textContent = marqueeTextContent[i];
    marqueeText.appendChild(span);
    marqueeTextElements.push(span);
}
const marquee = marqueeTextElements[0];
let marqueeIndex = 0;
const marqueeInterval = setInterval(() => {
    marqueeIndex = (marqueeIndex + 1) % marqueeTextElements.length;
    marqueeTextElements.forEach((span, i) => {
        span.classList.toggle('active', i === marqueeIndex);
    });
}, 500);


// blog card popup
const blogSection = document.querySelector('.blog_section');
const popupCard = blogSection.querySelectorAll('.blog_popup');

popupCard.forEach((card) => {
    card.querySelector('.open_pop').addEventListener('click', () => {
        card.querySelector('.main_pop_come').classList.add('active');
    });
    card.querySelector('.close_pop').addEventListener('click', () => {
        card.querySelector('.main_pop_come').classList.remove('active');
    });
});


// scroll slide left and right
const scrollLeftElements = document.querySelectorAll('.scroll_left');
const scrollRightElements = document.querySelectorAll('.scroll_right');

document.addEventListener('scroll', () => {
    scrollLeftElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.style.transform = `translateX(${rect.top / 2}px)`; // Adjust the divisor for smoother motion
        }
    });

    scrollRightElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.style.transform = `translateX(${-rect.top / 2}px)`; // Adjust the divisor for smoother motion
        }
    });
});



// success form page redirect outher page
const redirectForm = document.querySelector('.redirect_form');
const theOvserver = redirectForm.querySelector('form');
const applyBtn = redirectForm.querySelector('button');

applyBtn.addEventListener('click', () => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        const result = yourFunction(node);
                        console.log('Function result:', result);
                        if (result) {
                            window.location.href = 'https://relaunch.smartico.one/products/ad-studio/beta-access_success/';

                        }
                    }
                });
            }
        });
    });
    observer.observe(theOvserver, { childList: true });
    function yourFunction(newElement) {
        const isDiv = newElement.tagName === 'DIV';
        return isDiv;
    }
});



// copy url and show copy text
const theBtn = document.querySelector('.copyUrlButton');

theBtn.addEventListener('click', function () {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
    theBtn.querySelector('p').textContent = 'Copied!';
    setTimeout(() => {
        theBtn.querySelector('p').textContent = 'Copy Link';
    }, 400);
});

// collaps section
const colapsSection = document.querySelectorAll('.colaps_section');
colapsSection.forEach((section) => {
    const textWraper = section.querySelector('.text_wraper');
    const colapsBtn = section.querySelector('.colaps_btn');

    colapsBtn.addEventListener('click', () => {
        textWraper.classList.toggle('active');
    });

});


// image popup form galary
const imagePopup = document.querySelector('.image_popup');
const floorDesigns = document.querySelectorAll('.floor_design .gallery-item');
const imagePopupClose = document.querySelector('.image_popup_close');

floorDesigns.forEach((design) => {
    design.addEventListener('click', () => {
        const img = design.querySelector('img');
        console.log(img.src);
        imagePopup.querySelector('img').src = img.src;
        imagePopup.classList.add('active');
    });
});
imagePopupClose.addEventListener('click', () => {
    imagePopup.classList.remove('active');
});


// menu stycy and translet top
const menuIcon = document.querySelector('.nav-burger-icon');
const subMenu = document.querySelector('.sub_menu');
let menu = document.querySelector(".main_header");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 0 && scrollTop > lastScrollTop) {
        // Scrolling down past 1000px
        menu.classList.add("active");
    } else {
        // Scrolling up
        menu.classList.remove("active");
    }
    lastScrollTop = scrollTop;
});

menuIcon.addEventListener('click', () => {
    subMenu.classList.toggle('active');
});


//  varticale scroll and sticky section
if (window.innerWidth > 768) {
    const mainCon = document.querySelector('.main_con');
    const workItems = mainCon.querySelectorAll('.work_item');
    const workWraper = mainCon.querySelector('.work_wraper');

    let totalWidth = Array.from(workItems).reduce((acc, item) => acc + item.offsetWidth, 0);
    let useWidth = totalWidth - workItems[0].offsetWidth;

    mainCon.style.height = `${useWidth + window.innerHeight}px`; // Ensure enough scroll space

    document.addEventListener('scroll', () => {
        const rect = mainCon.getBoundingClientRect();
        let progress = Math.min(0, Math.max(rect.top, -useWidth)); // Keep within bounds
        workWraper.style.transform = `translateX(${progress}px)`;
    });
}



// class add in sticky mood
const iconCon = document.querySelector('.icon_section');
const iconBoxs = iconCon.querySelectorAll('.custom_icon_box');
const iconImage = iconCon.querySelectorAll('.mony_image');

document.addEventListener('scroll', () => {
    const iconRect = iconCon.getBoundingClientRect();
    const sectionHeight = iconCon.clientHeight;

    let activeIndex = 2;

    if (iconRect.top > -sectionHeight * 0.33) {
        activeIndex = 0;
    } else if (iconRect.top > -sectionHeight * 0.66) {
        activeIndex = 1;
    }

    iconBoxs.forEach((box, i) => {
        box.classList.toggle('active', i === activeIndex);
    });

});




// type writer i array
const texts = ["Saves You Money", "Saves You Time", "Makes You Money"];
const heading = document.querySelector(".typewriter h2");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    if (!heading) return;

    const currentText = texts[textIndex];

    if (isDeleting) {
        heading.textContent = currentText.substring(0, charIndex--);
    } else {
        heading.textContent = currentText.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        speed = 2000; // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // Move to next text
        speed = 500; // Pause before typing new text
    }

    setTimeout(typeText, speed);
}

typeText();



// scroll slide left and right
const scrollLeftElements = document.querySelectorAll('.scroll_left');
const scrollRightElements = document.querySelectorAll('.scroll_right');

document.addEventListener('scroll', () => {
    scrollLeftElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.style.transform = `translateX(${rect.top / 0}px)`; // Adjust the divisor for smoother motion
        }
    });

    scrollRightElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.style.transform = `translateX(${-rect.top / 0}px)`; // Adjust the divisor for smoother motion
        }
    });
});



// animated slider

const customSlider = document.querySelector('.custom_slider');
const sliderWrapper = customSlider.querySelector('.swiper-wrapper');
const sliderPreview = document.querySelector('.preview_slider');

const prevTitle = sliderPreview.querySelector('.preview_title h2');
const prevDitels = sliderPreview.querySelector('.preview_ditels h2');
const activeVideoBtn = sliderPreview.querySelector('.active_video_section');

const videoSection = document.querySelector('.video_section');
const previewVideo = videoSection.querySelector('.cusom_video video');
const previewVideoClose = videoSection.querySelector('.video_close');

sliderWrapper.addEventListener('transitionend', () => {
    const activeSlide = sliderWrapper.querySelector('.swiper-slide-prev .slider_item');
    const activeTitle = activeSlide.querySelector('.item_title h2').textContent;
    const activeDesrip = activeSlide.querySelector('.item_descrip h2').textContent;
    const itemVideo = activeSlide.querySelector('.item_video video');

    sliderPreview.style.transition = 'none';
    sliderPreview.style.transform = 'translateY(100%)';
    sliderPreview.style.opacity = 0;

    void sliderPreview.offsetHeight;

    if (activeSlide) {
        const bgImage = window.getComputedStyle(activeSlide).backgroundImage;
        sliderPreview.style.backgroundImage = bgImage;
        prevTitle.textContent = activeTitle;
        previewVideo.src = itemVideo.src;
        prevDitels.textContent = activeDesrip;
    }

    sliderPreview.style.transition = 'all 0.5s ease';
    sliderPreview.style.transform = 'translateY(0%)';
    sliderPreview.style.opacity = 1;
});

activeVideoBtn.addEventListener('click', () => {
    videoSection.classList.add('active');
    previewVideo.play();

});

previewVideoClose.addEventListener('click', () => {
    videoSection.classList.remove('active');
    previewVideo.pause();
});


// custom slider
const about = document.querySelector('.custom_about');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);

    if (window.scrollY === 0) {
        about.style.transform = `scale(1)`;
    } else if (window.scrollY >= 10) {
        about.style.transform = `scale(${window.scrollY / 10})`;
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const cardSection = document.querySelector('.card_section');
    const cardWraper = document.querySelector('.card_wraper');
    let wrapperCenter = window.innerWidth / 2;
    const maxMovement = 300; // Adjust as needed

    // Update wrapperCenter on window resize
    window.addEventListener('resize', () => {
        wrapperCenter = window.innerWidth / 2;
    });

    // Apply smooth transition
    cardWraper.style.transition = 'transform 0.3s ease-out';

    cardSection.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const moveX = ((x - wrapperCenter) / wrapperCenter) * maxMovement;
        cardWraper.style.transform = `translateX(${moveX}px)`;
    });

    cardSection.addEventListener('mouseout', () => {
        cardWraper.style.transform = `translateX(0px)`; // Reset smoothly
    });
});


//pathfill
document.addEventListener('DOMContentLoaded', () => {
    const thepath = document.querySelectorAll('.pathfill');
    thepath.forEach((path) => {
        path.classList.add('active');
    });
});

//
const theBtns = document.querySelectorAll('.location_btn ul li');
const locationTabs = document.querySelectorAll('.locarions_tabs .locarions_tab');

theBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        const isActive = locationTabs[i].classList.contains('active');
        locationTabs.forEach((tab) => tab.classList.remove('active'));
        if (!isActive) {
            locationTabs[i].classList.add('active');
        }
    });
});




// if text on haif veiwport clsaa add and remove
const servicesTexts = document.querySelectorAll('.services_tttle');
const servicesImg = document.querySelectorAll('.servise_image');
const viewportMiddle = window.innerHeight / 2;
let activeIndex = 0;

const handleScroll = () => {
    servicesTexts.forEach((text, i) => {
        const textRect = text.getBoundingClientRect();
        if (textRect.top < viewportMiddle && textRect.bottom > viewportMiddle) {
            servicesTexts.forEach((item) => item.classList.remove('active'))
            servicesImg.forEach((image) => image.classList.remove('active'))

            text.classList.add('active');
            servicesImg[i].classList.add('active')
        }
    });
};

window.addEventListener('scroll', handleScroll);
handleScroll();

// custom varticale scroll and sticky section
const section = document.querySelector('.the-section');
const cardWraper = document.querySelector('.card_wraper')
document.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    console.log(rect.top);
    if (rect.top > 0) {
        console.log(rect.top);
        cardWraper.style.transform = `translateX(${rect.top}px)`;

    } else if (rect.top < 0) {
        console.log(rect.top);
        cardWraper.style.transform = `translateX(0px)`;

    }
});


