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

// marqury
document.addEventListener("DOMContentLoaded", () => {
    function createMarquee(pathSelector, waveLength, direction, speed) {
        const path = document.querySelector(pathSelector);
        let offset = direction === "leftToRight" ? -waveLength : 0;

        function increment() {
            if (direction === "leftToRight") {
                offset += speed; // Increase offset based on speed
                if (offset > 0) {
                    offset = -waveLength;
                }
            } else {
                offset -= speed; // Decrease offset based on speed
                if (offset < -waveLength) {
                    offset = 0;
                }
            }
            path.setAttribute("startOffset", offset);
            requestAnimationFrame(increment);
        }

        increment();
    }

    // Adjust the speed parameter here
    createMarquee(".marqury_one textPath", 3000, "rightToLeft", 5);
    createMarquee(".marqury_two textPath", 3000, "leftToRight", 5);
});

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
    var speed = 0.3; // The speed of the parallax effect
    for (var i = 0; i < parallax.length; i++) {
        var windowHalfY = window.innerHeight / 2;
        var parallaxY = parallax[i].getBoundingClientRect().top + windowHalfY;
        var pos = parallaxY * -speed;
        parallax[i].style.backgroundPosition = "50% " + pos + "px";
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

// left to right motion
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

// Initial check on page load
checkInView();

// Attach scroll event listener
document.addEventListener("scroll", checkInView);

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



const mideaSection = document.querySelector('.midea_section');
const sectionImage = document.querySelector('.featured_image');

if (mideaSection.querySelectorAll('.media_video').length > 0) {
    sectionImage.style.display = 'none';
} else {
    sectionImage.style.display = 'block';
};
