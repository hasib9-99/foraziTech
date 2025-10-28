const getCard = document.querySelectorAll(".card-001");

for (let singleCard of getCard) {
    singleCard
        .querySelector(".btn-001")
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

if (window.innerWidth > 1024) {
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

}

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

const h2Element = document.querySelector('.custom_heading p');
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


// outline focus
const thebox = document.querySelector('.outline_focuse > div');

thebox.addEventListener('click', (event) => {
    event.stopPropagation();
    thebox.style.borderColor = 'rgb(58, 125, 255)';
});

document.addEventListener('click', () => {
    thebox.style.borderColor = 'rgb(237, 239, 243)';
});


// custom slider
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active", "prev", "next", "hidden", "hidden-left");

        if (index === currentIndex) {
            slide.classList.add("active");
        } else if (index === (currentIndex + 1) % slides.length) {
            slide.classList.add("next");
        } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
            slide.classList.add("prev");
        } else if (index === (currentIndex + 2) % slides.length) {
            slide.classList.add("hidden");
        } else {
            slide.classList.add("hidden-left");
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
}

slides.forEach((slide) => {
    slide.addEventListener("click", (event) => {
        if (event.target.classList.contains("next")) {
            nextSlide();
        } else if (event.target.classList.contains("prev")) {
            prevSlide();
        }
    });
});

// setInterval(nextSlide, 3000); // Auto slide every 3 seconds
updateSlides();



// custom slider nevigetor
const sliders = document.querySelectorAll('.custom_slider .swiper-wrapper .swiper-slide');
const SliderLenth = document.querySelectorAll('.custom_slider .swiper-slide:not(.swiper-slide-duplicate)');
const progresBar = document.querySelector('.progres_bar');
console.log(sliders);

function updateprogres() {
    sliders.forEach((slider) => {
        const activeSlide = slider.querySelector('.swiper-slide-active');
        const lable = activeSlide.getAttribute('aria-label');
        console.log(lable);
        lable.split('/')[1];
        progresBar.style.width = `${(lable.split('/')[1] / SliderLenth.length) * 100}%`;

    });
}


updateprogres();



// custom slider nevigetor
const sliders = document.querySelectorAll('.custom_slider .swiper-slide');
const SliderLength = document.querySelectorAll('.custom_slider .swiper-slide:not(.swiper-slide-duplicate)').length;
const progresBar = document.querySelector('.progres_bar');
const wraper = document.querySelector('.custom_slider .swiper-wrapper');
const progresText = document.querySelector('.progtes_text  h3');

function updateProgress() {
    const activeSlide = document.querySelector('.custom_slider .swiper-slide-active');

    if (activeSlide) {
        const label = activeSlide.getAttribute('aria-label'); // Example: "2 / 5"
        const [currentSlide, totalSlides] = label.split('/').map(num => parseInt(num.trim(), 10));

        if (!isNaN(currentSlide) && !isNaN(totalSlides)) {
            progresBar.style.width = `${(currentSlide / totalSlides) * 100}%`;
            console.log(progresText.textContent);

            progresText.textContent = `0${currentSlide} / 0${totalSlides}`;
        }
    }
}

setInterval(wraper.addEventListener('transitionend', updateProgress), 1000);
updateProgress();



// varticar scroll and sticky section and pre card animation 
const animationSection = document.querySelector('.animation-section');
const animationDiv = document.querySelector('.animation-section .animation-div');
const boxWrap = document.querySelector('.animation-section .box-wrap');
// boxs
const oddBox = boxWrap.querySelectorAll('.box.odd');
const evenBox = boxWrap.querySelectorAll('.box.even');

animationSection.style.height = `${animationSection.offsetHeight + 800}px`;

animationDiv.style.position = 'sticky';
animationDiv.style.top = '0';

document.addEventListener('scroll', () => {
    const animationSectionRect = animationSection.getBoundingClientRect();
    const animationDivRect = animationDiv.getBoundingClientRect();

    let distance = animationDivRect.top - animationSectionRect.top;

    console.log("Distance:", distance);

    boxWrap.style.transform = `translateX(${-distance / 2.5}px)`;
    boxWrap.style.transition = 'transform 0.5s ease';

    // celculate the tranlateY each box
    const evenTranslate = 30 - (distance / 800) * 60;
    const oddTranslate = (distance / 800) * 30;

    // Apply transformations
    oddBox.forEach(box => {
        box.style.transform = `translateY(${oddTranslate}px)`;
        box.style.transition = 'transform 0.5s ease';
    });

    evenBox.forEach(box => {
        box.style.transform = `translateY(${evenTranslate}px)`;
        box.style.transition = 'transform 0.5s ease';
    });
});

const splitUrl = window.location.href.split('/');
const url = splitUrl[3];
if (url === 'sample') {
    mainHeader.classList.add('active');
}

// custom hover efect
const theFeature = document.querySelectorAll('.hover_card');

theFeature.forEach((feature) => {
    const philosophyTitles = feature.querySelectorAll('.philosophy_title');
    const philosophyContents = feature.querySelectorAll('.philosophy_content');

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
});





// mulitple after content add using set property

const data = {
    'Explosive Review Growth': 'Our clients see a 1,152% increase in reviews in their first year. 4x more reviews? That’s just the beginning!',
    'Texting Beats Email – Every Time': 'Texts are 6x more effective than emails for reviews. We do both to guarantee results.',
    'Personalised Review Requests That Get Noticed': 'We text & email each customer a custom image with their name—featuring you or your team—to grab their attention!',
    'Turn 5-Star Reviews into Social Proof': 'Every time you earn a 5-star review, we create and post branded social media content using your logo & photos!',
    'Never Worry About Review Responses Again': "We personally respond to every review using the reviewer's name and context—so you don’t have to.",
    'Full Automation – No Extra Work for You': 'We custom-build an integration into your business, automating the entire process. Get reviews, referrals & customers on autopilot with 6,000+ integrations!',
    'Protect Your Reputation Before Issues Go Public': 'Negative feedback? We send it to you, not Google—so you can fix problems before they impact your rating. (Optional feature.)'
};

const listIcons = document.querySelectorAll('.hover_item ul li');

listIcons.forEach((list) => {
    const theIcon = list.querySelector('.elementor-icon-list-icon');
    const title = list.querySelector('.elementor-icon-list-text')?.textContent.trim();
    theIcon.style.setProperty('--after-content', `"${data[title]}"`);
});


//
const iconslist = document.querySelectorAll('.list-scroll-on-mobile .elementor-icon-list-items .elementor-icon-list-item');
const containers = document.querySelectorAll('#generative-ai-course-curriculum, #instructors-section, #alumni-is-saying, #capstone-projects');

document.addEventListener('scroll', () => {
    containers.forEach((container, i) => {
        if (container.getBoundingClientRect().top <= window.innerHeight) {

            iconslist.forEach((icon) => icon.classList.remove('active'));
            iconslist[i].classList.add('active');
        } else {
            iconslist[i].classList.remove('active');
        }
    });
});

iconslist.forEach((item) => {
    item.addEventListener('click', () => {
        iconslist.forEach((icon) => icon.classList.remove('active'));
        item.classList.add('active');
    });
})


// slider with custom button
const wraper = document.querySelector('.section_wraper');
const theSection = wraper.querySelectorAll('.custom_section');
const sectionBtn = document.querySelectorAll('.section_btn');

sectionBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sectionBtn.forEach((btn) => btn.classList.remove('btn_active'));

        sectionBtn[i].classList.add('btn_active');
        wraper.style.transform = `translateX(${i * -100}%)`;

        theSection.forEach((section) => section.classList.remove('active_overly'));
        ssvActive(i)
        bgupadte(btn)
    });
});

function bgupadte(btn) {
    const bg = document.createElement('div');
    bg.classList.add('btn_bg');
    btn.appendChild(bg);
    setTimeout(() => {
        bg.remove();
    }, 800);
}

function ssvActive(item) {
    setTimeout(() => {
        theSection[item].classList.add('active_overly');
    }, 1000);
}



// custom page loder
document.addEventListener("DOMContentLoaded", function () {
    // Create preloader container
    let preloader = document.createElement("div");
    preloader.id = "custom-preloader";
    Object.assign(preloader.style, {
        position: "fixed",
        width: "100%",
        height: "100%",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "9999",
        top: "0",
        left: "0"
    });

    // Create image element
    let img = document.createElement("img");
    img.src = "https://elated-mayer.77-68-127-114.plesk.page/wp-content/uploads/2025/03/loading.gif"; // Replace with your image URL
    img.alt = "Loading...";
    img.style.width = "100px"; // Adjust as needed

    // Append image to preloader
    preloader.appendChild(img);
    document.body.appendChild(preloader);

    // Remove preloader after page loads
    window.onload = function () {
        setTimeout(() => {
            preloader.remove();
        }, 1000); // Adjust delay if needed
    };
});

// 
document.addEventListener('DOMContentLoaded', () => {
    const theHeader = document.querySelector('.elementor-sticky');

    document.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 20) {
            theHeader.classList.add('active');
        } else {
            theHeader.classList.remove('active');
        }
    });
});


// spasicic page add class for header

const mainHeader = document.querySelector('.custom_header');
const BlackSction = document.querySelector('.black-section');

const splitUrl = window.location.href.split('/');
const url = splitUrl[3];
const pageSlags = ['phuket-web-design', '404', 'test-3'];

if (pageSlags.includes(url)) {
    mainHeader.classList.add('active');
}

document.addEventListener('scroll', () => {
    const rect = BlackSction.getBoundingClientRect();
    if (rect.top < 0) {
        mainHeader.classList.add('active');
    } else {
        mainHeader.classList.remove('active');
    }
});



// custm menu popup animation
const mainPopup = document.querySelector('.main_popup');
const manuBtn = document.querySelector('.menu_btn');
const menuClose = document.querySelector('.menu_close');
const bars = mainPopup.querySelectorAll('.bar');
const totalDuration = (bars.length + 1) * 100;

const fadeUp = document.querySelectorAll('.custom_fade-up');
const menuImage = document.querySelector('.menu_image');


manuBtn.addEventListener('click', () => {
    mainPopup.style.display = 'flex';

    bars.forEach((bar, i) => {
        setTimeout(() => {
            bar.style.transform = 'translateX(0%)';
        }, i * 100);
    });

    setTimeout(() => {
        menuClose.style.transform = 'scale(1)';
    }, 100);

    fadeUp.forEach((item, i) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            menuImage.style.opacity = '1';
        }, totalDuration + (i * 100));
    });

});

menuClose.addEventListener('click', () => {
    fadeUp.forEach((item, i) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50%)';
            menuImage.style.opacity = '0';
        }, i * 100);
    });

    bars.forEach((bar, i) => {
        setTimeout(() => {
            bar.style.transform = 'translateX(100%)';
        }, 200 + (i * 100));
    });

    setTimeout(() => {
        mainPopup.style.display = 'none';
    }, 600);

    menuClose.style.transform = 'scale(0)';
});


// scroll and add class

const cards = document.querySelectorAll('.card_wraper .scroll-points');
const scrollImgs = document.querySelectorAll('.scroll_img');

const activeLocative = window.innerHeight / 3;

document.addEventListener('scroll', () => {
    cards.forEach((card, i) => {

        const rect = card.getBoundingClientRect();
        if (rect.top < activeLocative) {
            card.classList.add('active');
            console.log(i);
            scrollImgs[i]?.classList.add('active');

        } else if (rect.top > activeLocative) {
            card.classList.remove('active');
            console.log(i);
            scrollImgs[i]?.classList.remove('active');
        }
    });
});

//mega menu
const theMenu = document.querySelectorAll('.custom_menu .elementor-nav-menu--main .menu-item');
const content = document.querySelectorAll('.menu_drop');

theMenu.forEach((menu) => {
    const menuTitle = menu.querySelector('a').textContent.trim();
    const relatedContent = document.querySelector(`.menu_drop[data-type="${menuTitle}"]`);

    if (!relatedContent) return;

    // Show dropdown on hover
    menu.addEventListener('mouseenter', () => {
        relatedContent.style.transform = 'translateY(0)';
        relatedContent.style.opacity = '1';
        relatedContent.style.pointerEvents = 'auto';
    });

    relatedContent.addEventListener('mouseenter', () => {
        relatedContent.style.transform = 'translateY(0)';
        relatedContent.style.opacity = '1';
        relatedContent.style.pointerEvents = 'auto';
    });

    const hideDropdown = () => {
        relatedContent.style.transform = 'translateY(-100%)';
        relatedContent.style.opacity = '0';
        relatedContent.style.pointerEvents = 'none';
    };

    menu.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!relatedContent.matches(':hover')) {
                hideDropdown();
            }
        }, 200); // Small delay to allow smooth transition
    });

    relatedContent.addEventListener('mouseleave', hideDropdown);
});



//
const theContainer = document.querySelector('.the_container');
const titles = theContainer.querySelectorAll('.cusom_title');
const Images = theContainer.querySelectorAll('.backgroun_images');
const circle = theContainer.querySelector('.custom_circle');

titles.forEach((title, i) => {
    title.addEventListener('mouseenter', () => {
        Images.forEach((img) => img.classList.remove('active'));
        Images[i].classList.add('active');

    });
    title.addEventListener('mouseleave', () => {
        Images.forEach((img) => img.classList.remove('active'));
    });
});

// in theContainer the cusrsor position
theContainer.addEventListener('mousemove', (e) => {
    circle.style.display = 'block';
    const rect = theContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    circle.style.left = `${x - circle.offsetWidth / 2}px`;
    circle.style.top = `${y - circle.offsetHeight / 2}px`;
});

theContainer.addEventListener('mouseleave', (e) => {
    circle.style.display = 'none';
});




// btns
const btns = document.querySelectorAll('.custom_btn');

btns.forEach((btn) => {
    const btnWidth = btn.offsetWidth;
    btn.style.width = `${btnWidth - 40}px`;
});




// Scroll animation
const mainCon = document.querySelector('.full_contant');
const sticyContainer = mainCon.querySelector('.custom_sticky_con');
const phone = sticyContainer.querySelector('.phone_image');
const rightContant = sticyContainer.querySelector('.right_contant');
const logos = sticyContainer.querySelectorAll('.custom_logo');

// Predefined positions from your example
const logoPositions = [
    { x: 452, y: 100 },
    { x: -497, y: 41 },
    { x: -540, y: -300 },
    { x: -42, y: -344 },
    { x: 564, y: -170 },
    { x: -414, y: -71 },
    { x: -442, y: 339 },
    { x: -542, y: 466 },
    { x: -13, y: 500 },
    { x: 535, y: 440 },
    { x: 380, y: -25 },
    { x: 443, y: -294 }
];

document.addEventListener('scroll', () => {
    const rect = mainCon.getBoundingClientRect();
    const scrollTop = -rect.top;

    // Stage 1: Initial Transition
    if (scrollTop >= 0 && scrollTop <= 500) {
        const progress = scrollTop / 500;
        const transletePhone = progress * 50;
        const progressPhone = (transletePhone / 50) * 185;
        phone.style.transform = `translateX(calc(${transletePhone}% - ${progressPhone}px))`;
        rightContant.style.transform = `translateX(${scrollTop / 4}px) scale(${1 - progress})`;
        rightContant.style.opacity = `${1 - progress}`;
        rightContant.style.display = 'flex';
    }


    // Stage 2: Phone Rotation
    else if (scrollTop > 500 && scrollTop <= 1400) {
        rightContant.style.display = 'none';
        const progress = (scrollTop - 500) / 900;
        // phone scale 1 to 0.9 
        const scale = 1 - (progress * 0.1);

        phone.style.transform = `translateX(calc(50% - 185px)) rotate(${progress * -90}deg) scale(${scale})`;
        logos.forEach((logo) => logo.style.display = 'none')
    }

    // Stage 3: Lock Phone Position
    else if (scrollTop > 1400) {
        phone.style.transform = `translateX(calc(50% - 185px)) rotate(-90deg) scale(0.9)`;
    }

    // Stage 4: Animate Logos to Specific Positions
    if (scrollTop >= 1400) {
        const progress = scrollTop < 2000
            ? (scrollTop - 1400) / 600  // Animate between 1400-2000
            : 1;                         // Lock after 2000

        logos.forEach((logo, index) => {
            logo.style.display = 'flex';
            const pos = logoPositions[index];
            const scale = Math.min(progress, 1);
            const x = pos.x * progress;
            const y = pos.y * progress;

            logo.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`;
        });
    }

    console.log(scrollTop);
});






// custom slider
document.addEventListener('DOMContentLoaded', () => {
    function createMarquee(pathSelector, waveLength, direction) {
        const path = document.querySelector(pathSelector);
        let offset = direction === 'leftToRight' ? -waveLength : 0;

        function increment() {
            // check window width
            if (window.innerWidth < 768) {
                if (direction === 'leftToRight') {
                    offset += 3; // Left to right
                    if (offset > 0) {
                        offset = -waveLength;
                    }
                } else {
                    offset -= 3; // Right to left
                    if (offset < -waveLength) {
                        offset = 0;
                    }
                }
            } else {
                if (direction === 'leftToRight') {
                    offset += 1; // Left to right
                    if (offset > 0) {
                        offset = -waveLength;
                    }
                } else {
                    offset -= 1; // Right to left
                    if (offset < -waveLength) {
                        offset = 0;
                    }
                }
            }
            path.setAttribute('startOffset', offset);
            requestAnimationFrame(increment);
        }

        increment();
    }
    createMarquee('.marqury_one textPath', 3000, 'rightToLeft');
    createMarquee('.marqury_two textPath', 3000, 'leftToRight');
})


document.addEventListener('DOMContentLoaded', () => {
    function createMarquee(pathSelector, waveLength, direction) {
        const path = document.querySelector(pathSelector);
        let offset = direction === 'leftToRight' ? -waveLength : 0;

        function increment() {
            if (direction === 'leftToRight') {
                offset += 1; // Left to right
                if (offset > 0) {
                    offset = -waveLength;
                }
            } else {
                offset -= 1; // Right to left
                if (offset < -waveLength) {
                    offset = 0;
                }
            }
            path.setAttribute('startOffset', offset);
            requestAnimationFrame(increment);
        }

        increment();
    }
    createMarquee('.marqury_one textPath', 3000, 'rightToLeft');
    createMarquee('.marqury_two textPath', 3000, 'leftToRight');
})










const mainCon = document.querySelector('.full_contant');
const sticyContainer = mainCon.querySelector('.custom_sticky_con');
const phone = sticyContainer.querySelector('.phone_image');
const rightContant = sticyContainer.querySelector('.right_contant');
const logos = sticyContainer.querySelectorAll('.custom_logo');

document.addEventListener('scroll', () => {
    const rect = mainCon.getBoundingClientRect();
    const scrollTop = -rect.top;

    // -----------------------------
    // Stage 1: Initial Transition (0 - 500px Scroll)
    // -----------------------------
    if (scrollTop >= 0 && scrollTop <= 500) {
        const progress = scrollTop / 500;

        phone.style.transform = `translateX(${scrollTop}px)`;
        rightContant.style.transform = `translateX(${scrollTop / 4}px) scale(${progress})`;
        rightContant.style.opacity = `${1 - progress}`;
        rightContant.style.display = 'flex';
    }

    // -----------------------------
    // Stage 2: Phone Rotation (500 - 1400px Scroll)
    // -----------------------------
    else if (scrollTop > 500 && scrollTop <= 1400) {
        rightContant.style.display = 'none';

        const progress = (scrollTop - 500) / 900;
        const rotateDeg = progress * -90;
        const scale = 1 - progress * 0.3;
        phone.style.transform = `translateX(500px) rotate(${rotateDeg}deg) scale(${1 - scale})`;
    }

    // -----------------------------
    // Stage 3: Lock Phone Position (After 1400px Scroll)
    // -----------------------------
    else if (scrollTop > 1400) {
        phone.style.transform = `translateX(500px) rotate(-90deg)`;
    }

    // -----------------------------
    // Stage 4: Logo Scaling and Expanding to Sides (1400 - 2000px Scroll)
    // -----------------------------
    if (scrollTop >= 1400 && scrollTop < 2000) {
        const progress = (scrollTop - 1400) / 600;  // Progress from 0 to 1
        const scaleValue = Math.min(progress, 1);

        // Dynamically calculate translateX and translateY for each logo
        logos.forEach((logo, index) => {
            const offsetX = (index % 2 === 0 ? 1 : -1) * (progress * 600); // Alternate positive/negative
            const offsetY = (Math.floor(index / 2) + 1) * (progress * 400); // More movement as you go down the grid

            // Apply transformations
            logo.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px) scale(${scaleValue})`;
        });
    }

    // -----------------------------
    // Stage 5: Lock Logos at Full Scale and Position (After 2000px Scroll)
    // -----------------------------
    if (scrollTop >= 2000) {
        logos.forEach((logo) => {
            logo.style.transform = `translate(0, 0) scale(1)`;
        });
    }

    // Debugging: Log the scroll position
    console.log(scrollTop);
});



// custom menu
const mainPopup = document.querySelector('.main_popup');
const manuBtn = document.querySelector('.menu_btn');
const menuClose = document.querySelector('.menu_close');
const bars = mainPopup.querySelectorAll('.bar');
const totalDuration = (bars.length + 1) * 100;

const fadeUp = document.querySelectorAll('.custom_fade-up');
const menuImage = document.querySelector('.menu_image');


manuBtn.addEventListener('click', () => {
    mainPopup.style.display = 'flex';

    bars.forEach((bar, i) => {
        setTimeout(() => {
            bar.style.transform = 'translateX(0%)';
        }, i * 100);
    });

    setTimeout(() => {
        menuClose.style.transform = 'scale(1)';
    }, 100);

    fadeUp.forEach((item, i) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            menuImage.style.opacity = '1';
        }, totalDuration + (i * 100));
    });

});

menuClose.addEventListener('click', () => {
    fadeUp.forEach((item, i) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50%)';
            menuImage.style.opacity = '0';
        }, i * 100);
    });

    bars.forEach((bar, i) => {
        setTimeout(() => {
            bar.style.transform = 'translateX(100%)';
        }, 200 + (i * 100));
    });

    setTimeout(() => {
        mainPopup.style.display = 'none';
    }, 600);

    menuClose.style.transform = 'scale(0)';
});



// slider


const Slider = document.querySelector('.custom_slider');
const sliderWrapper = Slider.querySelector('.swiper_wrapper'); // Ensure this class is correct
const slides = sliderWrapper.querySelectorAll('.slide');
const sliderBtns = document.querySelectorAll('.slider_btn');

sliderBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sliderBtns.forEach((item) => item.classList.remove('active'))
        btn.classList.add('active')
        sliderWrapper.style.transform = `translateX(${i * -100}%)`;
    });
});

sliderBtns[0].click()



// grab option
const Slider = document.querySelector('.custom_slider');
const sliderWrapper = Slider.querySelector('.swiper_wrapper');
const slides = sliderWrapper.querySelectorAll('.slide');
const sliderBtns = document.querySelectorAll('.slider_btn');

let currentIndex = 0;
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

// Function to update slide position
function setPositionByIndex() {
    currentTranslate = currentIndex * -100;
    sliderWrapper.style.transform = `translateX(${currentTranslate}%)`;
    sliderBtns.forEach((btn) => btn.classList.remove('active'));
    sliderBtns[currentIndex].classList.add('active');
}

// Button Click Navigation
sliderBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        currentIndex = i;
        setPositionByIndex();
    });
});

// Drag & Swipe Functionality
const touchStart = (index) => (event) => {
    isDragging = true;
    startX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
    prevTranslate = currentTranslate;
    animationID = requestAnimationFrame(animation);
};

const touchMove = (event) => {
    if (!isDragging) return;
    const currentX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
    const deltaX = currentX - startX;
    currentTranslate = prevTranslate + (deltaX / Slider.clientWidth) * 100;
    sliderWrapper.style.transform = `translateX(${currentTranslate}%)`;
};

const touchEnd = () => {
    isDragging = false;
    cancelAnimationFrame(animationID);

    // Determine direction
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -10 && currentIndex < slides.length - 1) {
        currentIndex += 1;
    } else if (movedBy > 10 && currentIndex > 0) {
        currentIndex -= 1;
    }

    setPositionByIndex();
};

// Continuous animation function
const animation = () => {
    if (isDragging) requestAnimationFrame(animation);
};

// Attach event listeners
sliderWrapper.addEventListener('mousedown', touchStart(0));
sliderWrapper.addEventListener('mousemove', touchMove);
sliderWrapper.addEventListener('mouseup', touchEnd);
sliderWrapper.addEventListener('mouseleave', touchEnd);
sliderWrapper.addEventListener('touchstart', touchStart(0));
sliderWrapper.addEventListener('touchmove', touchMove);
sliderWrapper.addEventListener('touchend', touchEnd);




//  custom slider btn and progres
const welcherSlider = document.querySelector('.welcher_slider')
const sliderNext = welcherSlider.querySelector('.elementor-swiper-button-next')
const sliderPrev = welcherSlider.querySelector('.elementor-swiper-button-prev')
const nextArrow = document.querySelector('.next_arrow');
const prevArrow = document.querySelector('.prev_arrow');
const welcherSliderWrap = welcherSlider.querySelector('.swiper-wrapper')

const progres_bar = document.querySelector('.progres_bar')


welcherSliderWrap.addEventListener('transitionend', () => {
    setTimeout(() => {
        const activeSlide = welcherSliderWrap.querySelector('.swiper-slide-active');
        const label = activeSlide.getAttribute('aria-label');
        label.split('/');
        const currentSlide = label.split('/')[0];
        const totalSlides = label.split('/')[1];
        progres_bar.style.width = `${(currentSlide / totalSlides) * 100}%`;
    }, 200);
})


nextArrow.addEventListener('click', () => {
    sliderNext.click()
})
prevArrow.addEventListener('click', () => {
    sliderPrev.click()
})


// round counter
const circleProgres = document.querySelector('.circular_progres');
const progresNumber = parseInt(
    document.querySelector('.calculate_number .elementor-counter-number')
        .getAttribute('data-to-value')
);

console.log(progresNumber);

const targetAngle = (progresNumber * 360) / 100;
let currentAngle = 0;
const speed = 4000; // Time to complete the animation
const step = 10; // Smoothness factor
const increment = (targetAngle / speed) * step;

let isAnimating = false;


function animateProgress() {
    if (currentAngle < targetAngle) {
        currentAngle = Math.min(currentAngle + increment, targetAngle);
        circleProgres.style.background = `conic-gradient(orange ${currentAngle}deg, white ${currentAngle}deg)`;

        requestAnimationFrame(animateProgress);
    } else {
        isAnimating = false;
        updating()
    }
}

document.addEventListener('scroll', () => {
    if (!isAnimating) {
        const rect = circleProgres.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            isAnimating = true;
            animateProgress();
        }
    }
});

function updating() {
    circleProgres.style.background = `conic-gradient( orange ${currentAngle}deg, white ${currentAngle}deg)`;
}

// hero section animation 

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.img_header');
    const heroTitle = document.querySelector('.hero_title');
    const heroSubtitle = document.querySelector('.hero_subtitle');

    const imagePotion = [
        { x: -55, y: 50 },
        { x: 184, y: -60 },
        { x: 185, y: 30 },
        { x: 65, y: 58 },
        { x: -180, y: 35 },
        { x: -200, y: -45 }
    ]

    images.forEach((image, i) => {
        setTimeout(() => {
            image.style.transform = `translate(${imagePotion[i].x}%, ${imagePotion[i].y}%)`
        }, 200 * i);
    })

    setTimeout(() => {
        heroTitle.style = `opacity: 1; transform: translateY(0px)`
        heroSubtitle.style = `opacity: 1; transform: translateY(0px)`
    }, (images.length * 200) + 200);
});

// double text button animation

const buttons = document.querySelectorAll('.btn_custom');

buttons.forEach((button) => {

    const btnWrap = button.querySelector('.elementor-button-text');
    const btnText = btnWrap.textContent.trim();
    btnWrap.innerHTML = '';

    const spanOne = document.createElement('span');
    spanOne.classList.add('btn_text-one');

    const spanTwo = document.createElement('span');
    spanTwo.classList.add('btn_text-two');

    [...btnText].forEach((char, index) => {
        const charSpanOne = document.createElement('span');
        charSpanOne.textContent = char;
        charSpanOne.classList.add('char-one');

        const charSpanTwo = document.createElement('span');
        charSpanTwo.textContent = char;
        charSpanTwo.classList.add('char-two');

        if (char === ' ') {
            charSpanOne.style.width = '10px';
            charSpanTwo.style.width = '10px';
        }

        spanOne.appendChild(charSpanOne);
        spanTwo.appendChild(charSpanTwo);
    });

    btnWrap.appendChild(spanOne);
    btnWrap.appendChild(spanTwo);

    // Add event listeners
    button.addEventListener('mouseenter', () => {
        spanOne.querySelectorAll('.char-one').forEach((char, index) => {
            setTimeout(() => {
                char.style.transform = 'translateY(-20px)';
                char.style.opacity = '0';
            }, index * 50);
        });

        spanTwo.querySelectorAll('.char-two').forEach((char, index) => {
            setTimeout(() => {
                char.style.transform = 'translateY(-20px)';
                char.style.opacity = '1';
            }, index * 50);
        });
    });

    button.addEventListener('mouseleave', () => {
        spanOne.querySelectorAll('.char-one').forEach((char, index) => {
            setTimeout(() => {
                char.style.transform = 'translateY(0)';
                char.style.opacity = '1';
            }, index * 50);
        });

        spanTwo.querySelectorAll('.char-two').forEach((char, index) => {
            setTimeout(() => {
                char.style.transform = 'translateY(0)';
                char.style.opacity = '0';
            }, index * 50);
        });
    });
});


// text animarion

const theTitles = document.querySelectorAll('.the_title h2');

theTitles.forEach((theTitle) => {
    const theText = theTitle.textContent.trim();
    const words = theText.split(' ');

    theTitle.innerHTML = '';

    words.forEach((word) => {
        const span = document.createElement('span');
        span.classList.add('word');
        span.textContent = `${word} `; // Maintain spacing
        theTitle.appendChild(span);
    });

    function animateText() {
        const spans = theTitle.querySelectorAll('.word');
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('animate');
            }, index * 100);
        });
    }

    // Intersection Observer to detect when element enters the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateText();
                observer.unobserve(theTitle); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    observer.observe(theTitle);
});


// image grabbing
const draggableDiv = document.querySelector('.draggableDiv');
const theImage = draggableDiv.querySelector('img');

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 1247;  // Set default x position
let yOffset = 476;   // Set default y position

draggableDiv.style.left = xOffset + 'px';
draggableDiv.style.top = yOffset + 'px';

theImage.setAttribute('draggable', 'false');
draggableDiv.addEventListener('dragstart', (e) => {
    if (e.target === theImage) {
        e.preventDefault();
    }
});

draggableDiv.addEventListener('mousedown', dragStart);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', dragEnd);

function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === draggableDiv) {
        isDragging = true;
        draggableDiv.style.cursor = 'grabbing';
    }
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();

        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        const section = draggableDiv.parentElement;
        const maxX = section.offsetWidth - draggableDiv.offsetWidth;
        const maxY = section.offsetHeight - draggableDiv.offsetHeight;

        currentX = Math.min(Math.max(currentX, 0), maxX);
        currentY = Math.min(Math.max(currentY, 0), maxY);

        setTranslate(currentX, currentY, draggableDiv);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.left = xPos + 'px';
    el.style.top = yPos + 'px';
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
    draggableDiv.style.cursor = 'grab';  // Reset cursor
}



// Hero section feature animation
const section = document.querySelector('.the_section');
const heroTitle = section.querySelector('.hero_title .elementor-heading-title');
const slideText = heroTitle.querySelector('.slide_text');
const heroImage = section.querySelector('.hero_image img'); // Select <img> inside
const groingEfect = section.querySelector('.groing_efect');

const data = {
    "extra protein": {
        src: "/wp-content/uploads/2025/03/641abb7d502f81488b138e7d_hero-img-05.webp",
        color: "#FED141"
    },
    "gluten free": {
        src: "/wp-content/uploads/2025/03/641abb7d3ed7592c59438a16_hero-img-04.webp",
        color: "#EB8900"
    },
    "low carb": {
        src: "/wp-content/uploads/2025/03/641abb7d614c87135bd621c9_hero-img-03.webp",
        color: "#4597C9"
    },
    "eating better": {
        src: "/wp-content/uploads/2025/03/66c64664769c230f1965c3be_hero-img-rgh.webp",
        color: "#00AA52"
    },
    "minding macros": {
        src: "/wp-content/uploads/2025/03/641abb7da032193345e76a3a_hero-img-02.webp",
        color: "#CF6F5E"
    }
};


const keys = Object.keys(data);
let index = 0;

function integration() {
    const key = keys[index];
    titleUpdate(key);
    imageUpdate(data[key].src);
    sectionUpdate(data[key].color);
    groingEfectAdd(50)

    index = (index + 1) % keys.length;
    setTimeout(integration, 3000);
}

function titleUpdate(titleKey,) {
    slideText.style.transition = "opacity 0.5s ease, transform 0.5s ease, color 0.5s ease";
    slideText.style.opacity = "0";
    slideText.style.transform = "translateY(-20px)";

    setTimeout(() => {
        slideText.textContent = titleKey;

        requestAnimationFrame(() => {
            slideText.style.transition = "none";
            slideText.style.opacity = "1";
            slideText.style.transform = "translateY(0px)";
        });
    }, 500);
}

function imageUpdate(imgSrc) {
    heroImage.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    heroImage.style.opacity = "0";
    heroImage.style.transform = "translateY(0)";

    setTimeout(() => {
        heroImage.src = imgSrc;
        heroImage.setAttribute('srcset', imgSrc);

        requestAnimationFrame(() => {
            heroImage.style.opacity = "1";
            heroImage.style.transform = "translateY(-100%)";
        });
    }, 500);
}

function sectionUpdate(color) {
    section.style.transition = "background-color 0.5s ease";
    section.style.backgroundColor = color;
}

function groingEfectAdd(layerPsition) {

    // the animation is scale 1 to 3 and opacity 1 to 0 and after 500ms latter scale 1 opasity 1
    groingEfect.style.transition = "transform 1s ease, opacity 1s ease";
    groingEfect.style.transform = `translateY(${layerPsition}%) scale(2)`;
    groingEfect.style.opacity = "0";
    setTimeout(() => {
        groingEfect.style.transition = "none";
        groingEfect.style.transform = `translateY(${layerPsition}%) scale(1)`;
        groingEfect.style.opacity = "1";
    }, 1000);
}


integration();


// icon droip
const dropCon = document.querySelector('.drop_con');
const dropImgs = dropCon.querySelectorAll('.drop_img');
document.addEventListener('scroll', () => {
    const rect = dropCon.getBoundingClientRect();
    if (rect.top < window.innerHeight / 2) {
        dropImgs.forEach((img, i) => {
            setTimeout(() => {
                img.classList.add('active');
            }, i * 200);
        });
    }
});


const whiteSection = document.querySelector('.white_section');

document.addEventListener('scroll', () => {
    const whiteRect = whiteSection.getBoundingClientRect();
    if (whiteRect.top < 0) {
        whiteSection.classList.remove('active');
    }
});


const sliders = document.querySelectorAll('.slide_card');
const classes = ['hidden', 'third-card-appear', 'from-right-to-left', 'from-left-to-center', 'from-center-to-bottom'];

function slider() {
    sliders.forEach((slider, i) => {
        classes.forEach(cls => slider.classList.remove(cls));

        setTimeout(() => {
            slider.classList.add(classes[i % classes.length]);
        }, 100);
    });
}

setTimeout(() => {
    slider();
}, 500);


const menuIcon = document.querySelector('.menu_btn');
const menu = document.querySelector('.popop_menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});


//


//
const slider = document.querySelector('.custom_slider');
const theSlide = slider.querySelector('.slider_wraper');
const cards = slider.querySelectorAll('.slider_wraper .card');
const nextBtn = slider.querySelector('.next_btn');
const prevBtn = slider.querySelector('.prev_btn');

let totalWidth = 0;
let translateX = 0;
let translateWidth = 0;

// Calculate total width of all cards
cards.forEach(card => {
    totalWidth += card.offsetWidth;
});

// Amount to scroll each time
translateWidth = (totalWidth - window.innerWidth) / 2;

nextBtn.addEventListener('click', () => {
    // Make sure there's still space to scroll right
    if (Math.abs(translateX) < (totalWidth - window.innerWidth)) {
        translateX -= translateWidth;
        if (Math.abs(translateX) >= (totalWidth - window.innerWidth)) {
            translateX = -(totalWidth - window.innerWidth); // clamp at end
        }
        theSlide.style.transform = `translateX(${translateX}px)`;
        prevBtn.style.display = 'block';
    }
});

prevBtn.addEventListener('click', () => {
    // Make sure there's space to scroll back left
    if (translateX < 0) {
        translateX += translateWidth;
        if (translateX >= 0) {
            translateX = 0;
            prevBtn.style.display = 'none'; // hide if back at start
        }
        theSlide.style.transform = `translateX(${translateX}px)`;
    }
});



//
document.querySelectorAll('.custom_slider').forEach((slider) => {
    const theSlide = slider.querySelector('.slider_wraper');
    const cards = theSlide.querySelectorAll('.card');
    const nextBtn = slider.querySelector('.next_btn');
    const prevBtn = slider.querySelector('.prev_btn');

    let totalWidth = 0;
    let translateX = 0;

    cards.forEach((card) => {
        totalWidth += card.offsetWidth;
    });

    let translateWidth = (totalWidth - window.innerWidth) / 2;
    const maxTranslate = -(totalWidth - window.innerWidth);
    translateWidth = Math.min(translateWidth, Math.abs(maxTranslate)); // prevent overscroll

    nextBtn.addEventListener('click', () => {
        if (translateX - translateWidth >= maxTranslate) {
            translateX -= translateWidth;
            if (translateX <= maxTranslate) {
                translateX = maxTranslate;
                nextBtn.style.display = 'none';
            }
            prevBtn.style.display = 'block';
            theSlide.style.transform = `translateX(${translateX}px)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (translateX + translateWidth <= 0) {
            translateX += translateWidth;
            if (translateX >= 0) {
                translateX = 0;
                prevBtn.style.display = 'none';
            }
            nextBtn.style.display = 'block';
            theSlide.style.transform = `translateX(${translateX}px)`;
        }
    });
});


const image = document.querySelectorAll('.clip_image')

image.forEach((img) => {
    img.classList.add('active')
})


// 
const roundBox = document.querySelectorAll('.round_card');

document.addEventListener('scroll', () => {
    roundBox.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const boxHeight = rect.height;
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, window.innerHeight);
        const visibleHeight = visibleBottom - visibleTop;

        if (visibleHeight >= boxHeight / 2) {
            box.classList.add('active');
        }
    });
});


//
const slideContainer = document.querySelectorAll('.slide_container');


function action() {
    slideContainer.forEach((slide) => {
        const one = slide.querySelector('.image_one');
        const two = slide.querySelector('.image_two');

        two.style.zIndex = '';
        one.style.left = '-100%';
        two.style.left = '0%';

        setTimeout(() => {
            one.style.left = '100%';
            one.style.zIndex = -1;
        }, 100);

        setTimeout(() => {
            one.style.zIndex = '';
            one.style.left = '0%';
            two.style.left = '-100%';
        }, 200);

        setTimeout(() => {
            two.style.zIndex = -1;
            two.style.left = '100%';
        }, 300);
    });
};


setInterval(action, 2000);





const mainCons = document.querySelectorAll('.main_con')
const slideContainers = document.querySelectorAll('.slide_container');
const color = [
    {
        one: '#96B6CC',
        two: '#E2CCD2'
    },
    {
        one: '#B8D6A4',
        two: '#AF9D72'
    }
]

function action() {
    slideContainers.forEach((slide) => {
        const one = slide.querySelector('.image_one');
        const two = slide.querySelector('.image_two');

        one.style.zIndex = '1';
        two.style.zIndex = '2';

        one.style.transform = 'translateX(-100%)';
        two.style.transform = 'translateX(-100%)';
        mainCons[0].style.backgroundColor = color[0].one;
        mainCons[1].style.backgroundColor = color[1].one;

        setTimeout(() => {
            one.style.transform = 'translateX(100%)';
        }, 500);

        setTimeout(() => {
            two.style.zIndex = 0;
            one.style.transform = 'translateX(0)';
            two.style.transform = 'translateX(-200%)';
            mainCons[0].style.backgroundColor = color[0].two;
            mainCons[1].style.backgroundColor = color[1].two;
        }, 1000);

        setTimeout(() => {
            two.style.transform = 'translateX(0%)';
        }, 1500);
    });
}

setInterval(action, 2000);


// tab feature
const tabs = document.querySelectorAll('.custom_tab');

tabs.forEach((tab) => {
    const tabBtns = tab.querySelectorAll('.tab_btn');
    const tabContents = tab.querySelectorAll('.tab_content');
    tabBtns.forEach((tabBtn, index) => {
        tabBtn.addEventListener('click', () => {
            tabBtns.forEach((btn) => btn.classList.remove('active'));
            tabBtn.classList.add('active');
            tabContents.forEach((content) => content.classList.remove('active'));
            tabContents[index].classList.add('active');
        });
    });
});



const menu = document.querySelector('.main_menu');

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        menu.style.transform = "translateY(-100%)"; // Scrolling Down
    } else if (currentScroll < lastScrollTop) {
        menu.style.transform = "translateY(0)"; // Scrolling Up
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);


const wcPage = document.querySelector('.wc_page');
wcPage.classList.add('active')

document.addEventListener('DOMContentLoaded', () => {
    wcPage.classList.remove('active')
});


//
const postInfo = document.querySelector('.post_info time');
const readingTime = document.querySelector('.rt-reading-time .rt-time');

const createElement = (tag, className, text) => {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.textContent = text;
    return element;
};

// Create dot separator
const dot = createElement('span', 'dot', '.');

// Add spacing if needed
dot.style.margin = '0 6px';

// Create a span for the reading time
const reading = createElement('span', 'reading-info', `${readingTime.textContent} mins`);

// Append the dot and reading time to postInfo
postInfo.appendChild(dot);
postInfo.appendChild(reading);


//

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

//
const megaMenu = document.querySelectorAll('.mega_menu .e-n-menu-heading .e-n-menu-item');
const miniMenu = document.querySelector('.mini_menu .elementor-nav-menu--main ul');

function update() {
    megaMenu.forEach((item, i) => {
        if (i > 2) {
            item.style.display = 'none';
        }
        else {
            item.style.display = 'block';
        }
    });
}

const mediaQuery = window.matchMedia('(min-width: 1024px) and (max-width: 1440px)');

if (mediaQuery.matches) {
    update();
}

mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
        update();
    }
});

//
const registerBtn = document.querySelector('.register_btn');
const fristSection = document.querySelector('.first_section');

document.addEventListener('scroll', () => {
    const rect = fristSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        registerBtn.classList.add('active');
    } else {
        registerBtn.classList.remove('active');
    }
});


//
const menuBtn = document.querySelectorAll('.menu_tab_btn');
const menuTabContent = document.querySelectorAll('.menu_contant');


menuBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        menuBtn.forEach((item) => item.classList.remove('active'));
        btn.classList.add('active');
        menuTabContent.forEach((content) => content.classList.remove('active'));
        menuTabContent[i].classList.add('active');
    });
});


//

const menuOpenIcon = document.querySelector('.menu_open_icon');
const menuCloseIcon = document.querySelector('.menu_close_icon');
const menuPopup = document.querySelector('.menu_popup');

menuOpenIcon.addEventListener('click', () => {
    menuPopup.style.display = 'flex';
    menuOpenIcon.style.display = 'none';
    menuCloseIcon.style.display = 'block';
});

menuCloseIcon.addEventListener('click', () => {
    menuPopup.style.display = 'none';
    menuOpenIcon.style.display = 'block';
    menuCloseIcon.style.display = 'none';
});

//
const menuPrograms = document.querySelector('.menu_programs_phone');
const menuProgramsPopup = document.querySelector('.programs_popup');

menuPrograms.addEventListener('click', () => {
    menuProgramsPopup.classList.toggle('active');
    menuPrograms.classList.toggle('active');
});



document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.querySelector('.register_btn');
    const fristSection = document.querySelector('.first_section');

    document.addEventListener('scroll', () => {
        const rect = fristSection.getBoundingClientRect();
        if (rect.bottom <= 0) {
            registerBtn.classList.add('active');

        } else {
            registerBtn.classList.remove('active');
        }
    });
});



//

const menuOpenIcon = document.querySelector('.menu_open_icon');
const menuCloseIcon = document.querySelector('.menu_close_icon');
const menuPopup = document.querySelector('.menu_popup');
const menuWraper = menuPopup.querySelector('.menu_wraper');

menuOpenIcon.addEventListener('click', () => {
    menuPopup.style.display = 'flex';
    menuOpenIcon.style.display = 'none';
    menuCloseIcon.style.display = 'block';
});

menuCloseIcon.addEventListener('click', () => {
    closeMenu();
});

// Close menu function
function closeMenu() {
    menuPopup.style.display = 'none';
    menuOpenIcon.style.display = 'block';
    menuCloseIcon.style.display = 'none';
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const isClickInsideMenu = menuWraper.contains(e.target);
    const isClickOnIcons = menuOpenIcon.contains(e.target) || menuCloseIcon.contains(e.target);

    if (!isClickInsideMenu && !isClickOnIcons) {
        closeMenu();
    }
});


//
const megaMenuFirstItem = document.querySelector('.mega_menu ul li:nth-child(1)');
const megaMenuFirstItemBtn = megaMenuFirstItem.querySelector('.e-n-menu-title');
const megaMenuFirstItemContent = megaMenuFirstItem.querySelector('.e-n-menu-content');

megaMenuFirstItem.addEventListener('click', () => {
    const isActive = megaMenuFirstItemContent.classList.contains('e-active');

    if (isActive) {
        megaMenuFirstItemBtn.classList.add('active');
    } else {
        megaMenuFirstItemBtn.classList.remove('active');
    }
});



const mainTab = document.querySelector('.main_tab');
const tabBtn = mainTab.querySelectorAll('.main_tab_btn');
const tabContent = mainTab.querySelectorAll('.main_tab_content');

const SubTabs = mainTab.querySelectorAll('.sub_tab');

tabBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        tabBtn.forEach((item) => item.classList.remove('active'));
        btn.classList.add('active');
        tabContent.forEach((content) => content.classList.remove('active'));
        tabContent[i].classList.add('active');
    });
});


SubTabs.forEach((subTab) => {
    const subTabBtn = subTab.querySelectorAll('.tab_btn');
    const subTabContent = subTab.querySelectorAll('.tab_content');
    subTabBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            subTabBtn.forEach((item) => item.classList.remove('active'));
            btn.classList.add('active');
            subTabContent.forEach((content) => content.classList.remove('active'));
            subTabContent[i].classList.add('active');
        });
    });
});



//

const dropMwnu = document.querySelector('.programs_popup');
const DropMenuBtn = dropMwnu.querySelectorAll('.menu_tab_btn');
const DropMenuContent = dropMwnu.querySelectorAll('.menu_tab_contant');

DropMenuBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        // menuBtn.forEach((item) => item.classList.remove('active'));
        // btn.classList.add('active');
        DropMenuContent.forEach((content) => content.classList.remove('active'));
        DropMenuContent[i].classList.add('active');
    });
});


//

const heroSection = document.querySelector('.hero_section');
const fristImage = heroSection.querySelector('.hero-img-card.first');
const secondImage = heroSection.querySelector('.hero-img-card.second');
const thirdImage = heroSection.querySelector('.hero-img-card.third');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Animation happens from scroll 0px to 800px
    const startScroll = 0;
    const endScroll = 800;
    const progress = Math.min(Math.max((scrollY - startScroll) / (endScroll - startScroll), 0), 1);

    // === First Image Interpolation ===
    const firstTranslateX = -104.428 + (104.428 * progress);
    const firstTranslateY = 41.7714 + ((40 - 41.7714) * progress);
    const firstRotateZ = 43.1638 + (-43.1638 * progress);
    const firstOpacity = 0.37018 + ((1 - 0.37018) * progress);

    fristImage.style.transform = `
    translate3d(${firstTranslateX}%, ${firstTranslateY}%, 0px)
    scale3d(1, 1, 1)
    rotateZ(${firstRotateZ}deg)
    skew(0deg, 0deg)
`;
    fristImage.style.opacity = firstOpacity;

    // === Second Image Interpolation ===
    const secondTranslateX = 126.038 + (-126.038 * progress);
    const secondTranslateY = 90.027 + ((60 - 90.027) * progress);
    const secondScale = 0.09973 + ((1 - 0.09973) * progress);
    const secondRotateZ = -39.6119 + (39.6119 * progress);
    const secondOpacity = 0.09973 + ((1 - 0.09973) * progress);

    secondImage.style.transform = `
    translate3d(${secondTranslateX}%, ${secondTranslateY}%, 0px)
    scale3d(${secondScale}, ${secondScale}, 1)
    rotateZ(${secondRotateZ}deg)
    skew(0deg, 0deg)
`;
    secondImage.style.opacity = secondOpacity;

    // === Third Image Interpolation ===
    const thirdTranslateX = -150 + (150 * progress);
    const thirdTranslateY = -70 + ((40 - (-70)) * progress);
    const thirdScale = 0 + (1 * progress);
    const thirdRotateZ = -131 + (131 * progress);
    const thirdOpacity = 0 + (1 * progress);

    thirdImage.style.transform = `
    translate3d(${thirdTranslateX}%, ${thirdTranslateY}%, 0px)
    scale3d(${thirdScale}, ${thirdScale}, 1)
    rotateZ(${thirdRotateZ}deg)
    skew(0deg, 0deg)
`;
    thirdImage.style.opacity = thirdOpacity;
});


//
const heroSection = document.querySelector('.hero_section');
const fristImage = heroSection.querySelector('.hero-img-card.first');
const secondImage = heroSection.querySelector('.hero-img-card.second');
const thirdImage = heroSection.querySelector('.hero-img-card.third');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Animation happens from scroll 0px to 1000px
    const startScroll = 0;
    const endScroll = 1000;
    const progress = Math.min(Math.max((scrollY - startScroll) / (endScroll - startScroll), 0), 1);

    // === First Image Interpolation (Rotation + Opacity for first 200px scroll) ===
    const firstTranslateX = -104.428 + (104.428 * progress);
    const firstTranslateY = 41.7714 + ((40 - 41.7714) * progress);
    const firstRotateZ = scrollY >= 0 && scrollY < 200 ? 43.1638 - (43.1638 * (scrollY / 200)) : 0;
    const firstOpacity = scrollY >= 0 && scrollY < 200 ? 0.37018 + ((1 - 0.37018) * (scrollY / 200)) : 1;

    fristImage.style.transform = `
    translate3d(${firstTranslateX}%, ${firstTranslateY}%, 0px)
    scale3d(1, 1, 1)
    rotateZ(${firstRotateZ}deg)
    skew(0deg, 0deg)
  `;
    fristImage.style.opacity = firstOpacity;

    // === Second Image Interpolation (Rotation + Opacity for 200px to 400px scroll) ===
    const secondTranslateX = 126.038 + (-126.038 * progress);
    const secondTranslateY = 90.027 + ((60 - 90.027) * progress);
    const secondScale = 0.09973 + ((1 - 0.09973) * progress);
    const secondRotateZ = scrollY >= 200 && scrollY < 400 ? -39.6119 + (39.6119 * ((scrollY - 200) / 200)) : 0;
    const secondOpacity = scrollY >= 200 && scrollY < 400 ? 0.09973 + ((1 - 0.09973) * ((scrollY - 200) / 200)) : 1;

    secondImage.style.transform = `
    translate3d(${secondTranslateX}%, ${secondTranslateY}%, 0px)
    scale3d(${secondScale}, ${secondScale}, 1)
    rotateZ(${secondRotateZ}deg)
    skew(0deg, 0deg)
  `;
    secondImage.style.opacity = secondOpacity;

    // === Third Image Interpolation (Rotation + Opacity for 400px to 600px scroll) ===
    const thirdTranslateX = -150 + (150 * progress);
    const thirdTranslateY = -70 + ((40 - (-70)) * progress);
    const thirdScale = 0 + (1 * progress);
    const thirdRotateZ = scrollY >= 400 && scrollY < 600 ? -131 + (131 * ((scrollY - 400) / 200)) : 0;
    const thirdOpacity = scrollY >= 400 && scrollY < 600 ? 0 + (1 * ((scrollY - 400) / 200)) : 1;

    thirdImage.style.transform = `
    translate3d(${thirdTranslateX}%, ${thirdTranslateY}%, 0px)
    scale3d(${thirdScale}, ${thirdScale}, 1)
    rotateZ(${thirdRotateZ}deg)
    skew(0deg, 0deg)
  `;
    thirdImage.style.opacity = thirdOpacity;
});



///

const stickyWrapper = document.querySelector('.sticky_wraper');
const stickySection = stickyWrapper.querySelector('.custom_sticky');
const items = stickySection.querySelectorAll('.item_wraper .item');

document.addEventListener('scroll', () => {
    const rect = stickyWrapper.getBoundingClientRect();
    const stickyScrollY = -rect.top;

    // animation progress calculation 0 - 1
    const stickyScrollStart = 0;
    const stickyScrollEnd = rect.height;
    const stickyPreItem = stickyScrollEnd / 3;
    const stickyProgress = Math.min(Math.max((stickyScrollY - stickyScrollStart) / (stickyScrollEnd - stickyScrollStart), 0), 1);

    // === First Image Interpolation ===
    const firstItemTranslateY = 200 - (200 * Math.min(stickyScrollY / stickyPreItem, 1));
    const firstItemOpacity = Math.min(stickyScrollY / stickyPreItem, 1);

    items[0].style.transform = `translate3d(0, ${firstItemTranslateY}px, 0px)`;
    items[0].style.opacity = firstItemOpacity;

    // === Second Image Interpolation ===
    const secondStickyProgress = Math.min(Math.max((stickyScrollY - stickyPreItem) / stickyPreItem, 0), 1);
    const secondItemTranslateY = 200 - (200 * secondStickyProgress);
    const secondItemOpacity = secondStickyProgress;

    items[1].style.transform = `translate3d(0, ${secondItemTranslateY}px, 0px)`;
    items[1].style.opacity = secondItemOpacity;

    // === Third Image Interpolation ===
    const thirdStickyProgress = Math.min(Math.max((stickyScrollY - (stickyPreItem * 2)) / stickyPreItem, 0), 1);
    const thirdItemTranslateY = 200 - (200 * thirdStickyProgress);
    const thirdItemOpacity = thirdStickyProgress;

    items[2].style.transform = `translate3d(0, ${thirdItemTranslateY}px, 0px)`;
    items[2].style.opacity = thirdItemOpacity;
});


///





//
//
const stickyWraper = document.querySelector('.sticky_wraper');
const stickySection = stickyWraper.querySelector('.custom_sticky');
const items = stickySection.querySelectorAll('.item_wraper .item');

document.addEventListener('scroll', () => {
    const rect = stickyWraper.getBoundingClientRect();
    const stickyScrollY = -rect.top;

    // animation progress calculation 0 - 1
    const stickyScrollStart = 0;
    const stickyScrollEnd = rect.height;
    const stickyPreItem = stickyScrollEnd / 3


    // === First Image Interpolation ===
    const firstTitle = items[0].querySelector('.item_title');
    const firstContent = items[0].querySelector('.item_content');

    const stickyProgress = Math.min(Math.max((stickyScrollY - stickyScrollStart) / (stickyScrollEnd - stickyScrollStart), 0), 1)
    const fristItemTransleteY = 200 - (200 * Math.min(stickyScrollY / 200, 1));
    const fristItemOpacity = 0 + (1 * Math.min(stickyScrollY / 200, 1));
    const firstTitleProgress = -50 + (50 * Math.min(stickyScrollY / 50, 1));
    const firstTitleContent = 50 - (50 * Math.min(stickyScrollY / 50, 1));

    items[0].style.transform = `translate3d(0, ${fristItemTransleteY}px, 0px)`;
    items[0].style.opacity = fristItemOpacity;
    firstTitle.style.transform = `translate3d( ${firstTitleProgress}%, 0px, 0px)`;
    firstContent.style.transform = `translate3d( ${firstTitleContent}%, 0px, 0px)`;


    // === secend Image Interpolation ===
    const secendStickyProgress = Math.min(Math.max((stickyScrollY - stickyPreItem) / stickyPreItem, 0), 1)
    const secendItemTransleteY = 200 + (-200 * secendStickyProgress);
    const secendItemOpacity = 0 + (1 * secendStickyProgress);

    items[1].style.transform = `translate3d(0, ${secendItemTransleteY}px, 0px)`;
    items[1].style.opacity = secendItemOpacity;



    // === third Image Interpolation ===
    const thirdStickyProgress = Math.min(Math.max((stickyScrollY - (stickyPreItem * 2)) / (stickyPreItem * 2), 0), 1)
    const thirdItemTransleteY = 200 + (-200 * thirdStickyProgress);
    const thirdItemOpacity = 0 + (1 * thirdStickyProgress);

    items[2].style.transform = `translate3d(0, ${thirdItemTransleteY}px, 0px)`;
    items[2].style.opacity = thirdItemOpacity;
});





// sticky animation
const stickyWrapper = document.querySelector('.sticky_wraper');
const stickySection = stickyWrapper.querySelector('.custom_sticky');
const items = stickySection.querySelectorAll('.item_wraper .item');

document.addEventListener('scroll', () => {
    const rect = stickyWrapper.getBoundingClientRect();
    const stickyScrollY = -rect.top;

    const stickyScrollStart = 0;
    const stickyScrollEnd = rect.height;
    const stickyPreItem = stickyScrollEnd / items.length; // dynamically divide for any number of items

    items.forEach((item, index) => {
        const itemTitle = item.querySelector('.item_title');
        const itemContent = item.querySelector('.item_content');

        const itemStart = stickyPreItem * index;
        const itemEnd = stickyPreItem * (index + 1);

        const itemProgress = Math.min(Math.max((stickyScrollY - itemStart) / stickyPreItem, 0), 1);

        const itemTranslateY = 200 - (200 * itemProgress);
        const itemOpacity = itemProgress;

        item.style.transform = `translate3d(0, ${itemTranslateY}px, 0)`;
        item.style.opacity = itemOpacity;

        if (itemTitle) {
            const titleTranslateX = -50 + (50 * Math.min(stickyScrollY / 50, 1));
            itemTitle.style.transform = `translate3d(${titleTranslateX}%, 0, 0)`;
        }

        if (itemContent) {
            const contentTranslateX = 50 - (50 * Math.min(stickyScrollY / 50, 1));
            itemContent.style.transform = `translate3d(${contentTranslateX}%, 0, 0)`;
        }
    });
});




// DOM elements
const stickyWrapper = document.querySelector('.sticky_wraper');
const stickySection = stickyWrapper.querySelector('.custom_sticky');
const items = stickySection.querySelectorAll('.item_wraper .item');

document.addEventListener('scroll', () => {
    const rect = stickyWrapper.getBoundingClientRect();
    const stickyScrollY = -rect.top;

    const scrollPerItem = 1800; // 600px enter + 600px hold + 600px exit

    items.forEach((item, index) => {
        const itemTitle = item.querySelector('.item_title');
        const itemContent = item.querySelector('.item_content');

        const itemStart = index * scrollPerItem;
        const enterStart = itemStart;
        const enterEnd = itemStart + 600;
        const holdStart = enterEnd;
        const holdEnd = holdStart + 600;
        const exitStart = holdEnd;
        const exitEnd = exitStart + 600;

        let translateY = 200; // default before appearing
        let titleTranslateX = -50;
        let contentTranslateX = 50;
        let opacity = 0;

        if (stickyScrollY < enterStart) {
            // Before entering
            translateY = 200;
            titleTranslateX = -50;
            contentTranslateX = 50;
            opacity = 0;
        } else if (stickyScrollY >= enterStart && stickyScrollY < enterEnd) {
            // Entering
            const progress = (stickyScrollY - enterStart) / 600;
            translateY = 200 - (200 * progress);
            titleTranslateX = -50 + (50 * progress);
            contentTranslateX = 50 - (50 * progress);
            opacity = progress;
        } else if (stickyScrollY >= holdStart && stickyScrollY < holdEnd) {
            // Holding
            translateY = 0;
            titleTranslateX = 0;
            contentTranslateX = 0;
            opacity = 1;
        } else if (stickyScrollY >= exitStart && stickyScrollY < exitEnd) {
            // Exiting
            const progress = (stickyScrollY - exitStart) / 600;
            translateY = 0 - (200 * progress);
            titleTranslateX = 0 + (50 * progress);
            contentTranslateX = 0 - (50 * progress);
            opacity = 1 - (0.5 * progress); // fade a little during exit
        } else {
            // After exiting
            translateY = -200;
            titleTranslateX = 50;
            contentTranslateX = -50;
            opacity = 0.5; // keep half visible if fully exited
        }

        // Apply transforms
        item.style.transform = `translate3d(0, ${translateY}%, 0)`;
        item.style.opacity = opacity;
        if (itemTitle) {
            itemTitle.style.transform = `translate3d(${titleTranslateX}%, 0, 0)`;
        }
        if (itemContent) {
            itemContent.style.transform = `translate3d(${contentTranslateX}%, 0, 0)`;
        }
    });
});




const stickyWrapper = document.querySelector('.sticky_wraper');
const stickySection = stickyWrapper.querySelector('.custom_sticky');
const items = stickySection.querySelectorAll('.item_wraper .item');

document.addEventListener('scroll', () => {
    const rect = stickyWrapper.getBoundingClientRect();
    const stickyScrollY = -rect.top;

    const fullHeight = stickyWrapper.offsetHeight;
    const numberOfItems = items.length + 1; // +1 for the last item that doesn't animate
    const perItemHeight = fullHeight / numberOfItems;
    const stayTime = perItemHeight / 2; // half stay, half move
    const scrollPerItem = stayTime * 3; // total scroll for one item

    items.forEach((item, index) => {
        const itemTitle = item.querySelector('.item_title');
        const itemContent = item.querySelector('.item_content');

        const itemScrollStart = index * scrollPerItem;
        const enterStart = itemScrollStart;
        const enterEnd = enterStart + stayTime;
        const holdStart = enterEnd;
        const holdEnd = holdStart + stayTime;
        const exitStart = holdEnd;
        const exitEnd = exitStart + stayTime;

        let translateY = 200;
        let titleTranslateX = -50;
        let contentTranslateX = 50;
        let opacity = 0;

        if (stickyScrollY < enterStart) {
            // Before enter
            translateY = 200;
            titleTranslateX = -50;
            contentTranslateX = 50;
            opacity = 0;
        } else if (stickyScrollY >= enterStart && stickyScrollY < enterEnd) {
            // Entering
            const progress = (stickyScrollY - enterStart) / stayTime;
            translateY = 200 - (200 * progress);
            titleTranslateX = -50 + (50 * progress);
            contentTranslateX = 50 - (50 * progress);
            opacity = progress;
        } else if (stickyScrollY >= holdStart && stickyScrollY < holdEnd) {
            // Holding
            translateY = 0;
            titleTranslateX = 0;
            contentTranslateX = 0;
            opacity = 1;
        } else if (stickyScrollY >= exitStart && stickyScrollY < exitEnd) {
            // Exiting
            const progress = (stickyScrollY - exitStart) / stayTime;
            translateY = 0 - (200 * progress);
            titleTranslateX = 0 + (50 * progress);
            contentTranslateX = 0 - (50 * progress);
            opacity = 1 - (0.5 * progress);
        } else {
            // After exit
            translateY = -200;
            titleTranslateX = 50;
            contentTranslateX = -50;
            opacity = 0.5;
        }

        // Apply styles
        item.style.transform = `translate3d(0, ${translateY}%, 0)`;
        item.style.opacity = opacity;
        if (itemTitle) {
            itemTitle.style.transform = `translate3d(${titleTranslateX}%, 0, 0)`;
        }
        if (itemContent) {
            itemContent.style.transform = `translate3d(${contentTranslateX}%, 0, 0)`;
        }
    });
});


//@ts-check
//
const accordion = document.querySelector('.custom_accordion');
const accordionItems = accordion.querySelectorAll('.e-n-accordion-item');

function handleScroll() {
    accordionItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemTop = itemRect.top;
        const itemBottom = itemRect.bottom;
        const windowHeight = window.innerHeight;

        // Check if item is entering viewport
        if (itemTop < windowHeight && itemBottom > 0) {
            const delay = index * 100; // stagger delay
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.transform = 'translateY(0px)';
                item.style.opacity = '1';
            }, delay);
        } else {
            // Reset if not visible
            item.style.transition = 'none';
            item.style.transform = 'translateY(100px)';
            item.style.opacity = '0';
        }
    });
}

// Initialize all items hidden at start
accordionItems.forEach(item => {
    item.style.transform = 'translateY(100px)';
    item.style.opacity = '0';
});

// Listen to scroll
window.addEventListener('scroll', handleScroll);

// Also trigger once in case some items already visible
handleScroll();



//  menu popu

const menuIcon = document.querySelector('.menu_icon');
const menuPopup = document.querySelector('.menu_popup');

document.addEventListener('click', (e) => {
    const isClickInsideMenu = menuPopup.contains(e.target);
    const isClickOnIcon = menuIcon.contains(e.target);
    if (!isClickInsideMenu && !isClickOnIcon) {
        menuPopup.classList.remove('active');
    }
    if (isClickOnIcon) {
        menuPopup.classList.toggle('active');
    }
});



// 
const menuPopup = document.querySelector('.menu_popup');
const menuOpenIcon = document.querySelector('.menu_open_icon');
const menuCloseIcon = document.querySelector('.menu_close_icon');

menuOpenIcon.addEventListener('click', () => {
    menuPopup.classList.add('active');
    menuOpenIcon.style.display = 'none';
    menuCloseIcon.style.display = 'block';
});
menuCloseIcon.addEventListener('click', () => {
    menuPopup.classList.remove('active');
    menuCloseIcon.style.display = 'none';
    menuOpenIcon.style.display = 'block';
});

// main form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.newsletter-form .elementor-form');
    const fieldsWrapper = form.querySelector('.elementor-form-fields-wrapper');

    if (!form) return;

    // Use MutationObserver to watch for .elementor-message being added
    const observer = new MutationObserver(() => {
        const message = form.querySelector('.elementor-message');
        if (message && message.offsetParent !== null) {
            fieldsWrapper.style.display = 'none';
        }
    });

    observer.observe(form, {
        childList: true,
        subtree: true
    });
});

// submit popup form 


const subscribeForm = document.querySelector('.subscribe-form .elementor-form');
const subscribeWrapper = subscribeForm.querySelector('.elementor-form-fields-wrapper');

if (subscribeForm) return;

// Use MutationObserver to watch for .elementor-message being added
const subscribObserver = new MutationObserver(() => {
    const subscribeMessage = subscribeForm.querySelector('.elementor-message');
    if (subscribeMessage && subscribeMessage.offsetParent !== null) {
        subscribeWrapper.style.display = 'none';
    }
});

subscribObserver.observe(subscribeForm, {
    childList: true,
    subtree: true
});



jQuery(window).on('elementor/popup/show', function (event, id, instance) {
    // Check for a specific popup ID
    if (id !== 357) return;

    const subscribeForm = document.querySelector('#elementor-popup-modal-357 .subscribe-form .elementor-form');
    if (!subscribeForm) return;

    const subscribeWrapper = subscribeForm.querySelector('.elementor-form-fields-wrapper');
    if (!subscribeWrapper) return;

    // Use MutationObserver to detect success message
    const subscribObserver = new MutationObserver(() => {
        const subscribeMessage = subscribeForm.querySelector('.elementor-message');
        if (subscribeMessage && subscribeMessage.offsetParent !== null) {
            subscribeWrapper.style.display = 'none';
        }
    });

    subscribObserver.observe(subscribeForm, {
        childList: true,
        subtree: true
    });
});



// menu scroll up down

const menu = document.querySelector('.custom_menu');
let lastScrollTop = 0;
let scrollTriggerPoint = 0;

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll <= 200) {
        menu.style.top = "0px";
        menu.style.backgroundColor = "transparent";
    } else if (currentScroll > lastScrollTop) {
        menu.style.top = "-150px";
        menu.style.backgroundColor = "#ffeccf";
        scrollTriggerPoint = currentScroll;
    } else if (scrollTriggerPoint - currentScroll > 200) {
        menu.style.top = "0px";
        menu.style.backgroundColor = "#ffeccf";
        scrollTriggerPoint = currentScroll;
    }

    lastScrollTop = Math.max(currentScroll, 0);
});


//outside click close menu

const menuOpenIcon = document.querySelector('.menu_open_icon');
const menuCloseIcon = document.querySelector('.menu_close_icon');
const menuPopup = document.querySelector('.menu_popup');
const menuWraper = menuPopup.querySelector('.menu_wraper');

menuOpenIcon.addEventListener('click', () => {
    menuPopup.style.display = 'flex';
    menuOpenIcon.style.display = 'none';
    menuCloseIcon.style.display = 'block';
});

menuCloseIcon.addEventListener('click', () => {
    closeMenu();
});

// Close menu function
function closeMenu() {
    menuPopup.style.display = 'none';
    menuOpenIcon.style.display = 'block';
    menuCloseIcon.style.display = 'none';
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const isClickInsideMenu = menuWraper.contains(e.target);
    const isClickOnIcons = menuOpenIcon.contains(e.target) || menuCloseIcon.contains(e.target);

    if (!isClickInsideMenu && !isClickOnIcons) {
        closeMenu();
    }
});

// black menu custom


const theHeader = document.querySelector('.custom_menu');
const pageSlags = ['commercial-photographer-austin', 'about', 'services', 'contact'];

const currentHref = window.location.href;

const isMatch = pageSlags.some((page) => currentHref.includes(page));
console.log(isMatch, currentHref, pageSlags);


if (isMatch) {
    theHeader.classList.add('black');
} else {
    theHeader.classList.remove('black');
}


//

const mainPrice = document.querySelector('.main_price .elementor-heading-title');
const mainName = document.querySelector('.main_price_name');
const fildPrice = document.querySelector('.custom_frild_price .order-total bdi');
const fildName = document.querySelector('.pisol_product_name');
const cuponBtn = document.querySelector('.e-apply-coupon');

console.log(fildPrice.textContent, fildName.textContent, mainPrice.textContent, mainName.textContent);

mainPrice.textContent = fildPrice.textContent;
mainName.textContent = fildName.textContent;

cuponBtn.addEventListener('click', () => {
    const observer = new MutationObserver(() => {
        mainPrice.textContent = fildPrice.textContent;
        mainName.textContent = fildName.textContent;
    });
    observer.observe(fildPrice, {
        childList: true,
        subtree: true
    });
})



const mainPrice = document.querySelector('.main_price .elementor-heading-title');
const mainName = document.querySelector('.main_price_name');
const oderBox = document.querySelector('.woocommerce-checkout-review-order');

function updateMainFields() {
    const fildPrice = document.querySelector('.custom_frild_price .order-total bdi');
    const fildName = document.querySelector('.pisol_product_name');

    if (fildPrice && fildName) {
        mainPrice.textContent = fildPrice.textContent;
        mainName.textContent = fildName.textContent;
    }
}

// Initial set
updateMainFields();

// Set up observer
const observer = new MutationObserver(() => {
    updateMainFields();
});

observer.observe(oderBox, {
    childList: true,
    subtree: true,
    attributes: true,
});












//
const mainPrice = document.querySelector('.main_price .elementor-heading-title');
const mainName = document.querySelector('.main_price_name');
const oderBox = document.querySelector('.woocommerce-checkout-review-order');
const productBox = document.querySelector('.shop_table'); // Adjust if needed

function updateMainFields() {
    const fildPrice = document.querySelector('.custom_frild_price .order-total bdi');
    const fildName = document.querySelector('.pisol_product_name');

    if (fildPrice && mainPrice) {
        mainPrice.textContent = fildPrice.textContent;
    }

    if (fildName && mainName) {
        mainName.textContent = fildName.textContent;
    }

    console.log('Updated:', {
        price: fildPrice?.textContent,
        name: fildName?.textContent
    });
}

// Initial set
updateMainFields();

// Observe changes in both relevant containers
const observer = new MutationObserver(updateMainFields);

if (oderBox) {
    observer.observe(oderBox, {
        childList: true,
        subtree: true,
        attributes: true
    });
}

if (productBox) {
    observer.observe(productBox, {
        childList: true,
        subtree: true,
        attributes: true
    });
}



const mainPrice = document.querySelector('.main_price .elementor-heading-title');
const mainName = document.querySelector('.main_price_name');
const checkoutArea = document.querySelector('.woocommerce-checkout'); // Covers all updates

function updateMainFields() {
    const fildPrice = document.querySelector('.custom_frild_price .order-total bdi');
    const fildName = document.querySelector('.pisol_product_name');

    if (fildPrice && mainPrice) {
        mainPrice.textContent = fildPrice.textContent;
    }

    if (fildName && mainName) {
        mainName.textContent = fildName.textContent;
    }

    console.log('Updated:', {
        price: fildPrice?.textContent,
        name: fildName?.textContent
    });
}

// Initial sync
updateMainFields();

// MutationObserver for dynamic updates
const observer = new MutationObserver(() => {
    updateMainFields();

    setTimeout(() => {
        observer.disconnect();
        console.log("MutationObserver stopped.");
    }, 2000);

});

if (checkoutArea) {
    observer.observe(checkoutArea, {
        childList: true,
        subtree: true,
        attributes: true,
    });
}
// Observe the main price and name fields for changes
const mainPrice = document.querySelector('.main_price .elementor-heading-title');
const mainName = document.querySelector('.main_price_name');

function updateMainFields() {
    setTimeout(() => {
        const fieldPrice = document.querySelector('.custom_frild_price .order-total bdi');
        const fieldName = document.querySelector('.pisol_product_name');
        mainPrice.textContent = fieldPrice.textContent;
        mainName.textContent = fieldName.textContent;
    }, 100);
}

const observer = new MutationObserver(updateMainFields);
observer.observe(document.body, {
    childList: true,
    subtree: true,
});


const x = function (a, b) {
    return a + b;
}

console.log(x(2, 3));


//popup
const menuPopup = document.querySelector('.menu_popup');
const openIcon = document.querySelector('.open_icon');
const closeIcon = document.querySelector('.close_icon');

openIcon.addEventListener('click', () => {
    menuPopup.classList.add('active');
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Corrected "Document" to "document"
});

closeIcon.addEventListener('click', () => {
    menuPopup.classList.remove('active');
    openIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    document.body.style.overflow = 'auto'; // Corrected "Document" to "document"
});


const progresBar = document.querySelector('.progress_bar');

document.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;

    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

    progresBar.style.height = `${scrollPercent}%`;

    console.log(`ScrollTop: ${scrollTop}`);
    console.log(`ScrollHeight: ${scrollHeight}`);
    console.log(`ClientHeight: ${clientHeight}`);
    console.log(`Scroll Percent: ${scrollPercent.toFixed(2)}%`);
});



const menuPopup = document.querySelector('.menu_popup');
const openIcon = document.querySelector('.open_icon');
const closeIcon = document.querySelector('.close_icon');

openIcon.addEventListener('click', () => {
    menuPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeIcon.addEventListener('click', () => {
    menuPopup.classList.remove('active');
    document.body.style.overflow = 'auto';
});


const playBtn = document.querySelector('.custom_play_btn');

if (playBtn) {
    playBtn.addEventListener('click', () => {
        setTimeout(() => {
            const btn = document.querySelector('.video-stream.html5-main-video');
            btn.play();
        }, 1000);
    });
}


const customMenu = document.querySelectorAll('.update_attribute');
const theAttribute = 'data-click-id'
customMenu.forEach((menu) => {
    const menuItem = menu.querySelectorAll('ul li a');
    menuItem.forEach((item) => {
        const menuAttribute = item.getAttribute('title');
        item.setAttribute(theAttribute, menuAttribute);
        item.removeAttribute('title')
    })
})




//
const theInput = document.querySelectorAll('[type="file"]');

theInput.forEach((input) => {
    input.addEventListener('change', () => {
        const fileName = input.files[0].name;
        document.documentElement.style.setProperty('--after-content', `"${fileName}"`);
    });
})

//

const links = ['https://example.com/page1', 'https://example.com/page2', 'https://example.com/page3'];
const currentUrl = window.location.href;
let nextIndex = 0;

const currentIndex = links.findIndex(link => link === currentUrl);

if (currentIndex !== -1) {
    nextIndex = (currentIndex + 1) % links.length;
}

setTimeout(() => {
    // window.location.href = links[nextIndex];
    console.log(links[nextIndex]);

}, 300);


//


// const efect = [
//     {
//         current: { x: 25, y: -2, rotate: 2.11 },
//         to: { x: 25, y: -100, rotate: -90 }
//     },
//     {
//         current: { x: 10, y: -1, rotate: 1.13 },
//         to: { x: 10, y: -100, rotate: -90 }
//     },
//     {
//         current: { x: -5, y: 0, rotate: 0 },
//         to: { x: -5, y: -100, rotate: -90 }
//     },
//     {
//         current: { x: -20, y: 1, rotate: 0.1 },
//         to: { x: -20, y: -100, rotate: -90 }
//     }
// ];

// card sticky and scroll animation
const mainCon = document.querySelector('.main_con');
const cards = document.querySelectorAll('.sticky_card');
const segmentCount = cards.length + 1;
const mediaQuery = window.matchMedia('(max-width: 768px)');


// adjust the height of the main container
mainCon.style.height = `${segmentCount * 100}vh`;

document.addEventListener('scroll', () => {
    const rect = mainCon.getBoundingClientRect();
    const topOffset = rect.top;

    if (topOffset > 0) {
        // Before animation starts
        cards.forEach((card, i) => {
            applyTransform(card, i);
        });
        return;
    }

    const scrollableHeight = mainCon.offsetHeight - window.innerHeight;
    const scrollY = Math.abs(topOffset);
    const segmentHeight = scrollableHeight / segmentCount;

    cards.forEach((card, i) => {
        const start = segmentHeight * i;
        const end = segmentHeight * (i + 1);
        let progress = (scrollY - start) / (end - start);
        progress = Math.max(0, Math.min(progress, 1)); // Clamp 0–1

        // const currentEffect = efect[i];

        if (mediaQuery.matches) {
            const x = interpolate(25 - (10 * i), 25 - (10 * i), progress);
            const y = interpolate(-2 - (1 * i), -100, progress);
            const rotate = interpolate(0 - (0.6 * i), -90, progress);

            const transform = `translate3d(${x}px, ${y}vh, 0px) rotateZ(${rotate}deg)`;
            card.style.transform = transform;
        } else {
            // Interpolated values
            const x = interpolate(25 - (15 * i), 25 - (15 * i), progress);
            const y = interpolate(-2 - (1 * i), -100, progress);
            const rotate = interpolate(i, -90, progress);

            const transform = `translate3d(${x}px, ${y}vh, 0px) rotateZ(${rotate}deg)`;
            card.style.transform = transform;
        }
    });
});

// Helper function
function interpolate(start, end, progress) {
    return start + (end - start) * progress;
}

function applyTransform(element, index) {
    if (mediaQuery.matches) {
        element.style.transform = `translate3d(${25 - (10 * index)}px, ${-2 - (1 * index)}vh, 0px) rotateZ(${0 - (0.6 * index)}deg)`;
    } else {
        element.style.transform = `translate3d(${25 - (15 * index)}px, ${-2 - (1 * index)}vh, 0px) rotateZ(${index}deg)`;
    }
    element.style.zIndex = 20 - index;
}




// card auto fill the section 
const aboutSection = document.querySelector('.about_Wrapr');
const aboutCard = aboutSection.querySelectorAll('.about_card');

let perCardWidth = 0;
let transformValue = 0;

function updateWidth() {
    perCardWidth = aboutSection.offsetWidth / (aboutCard.length - 1);
    transformValue = perCardWidth / (aboutCard.length - 1);

    aboutCard.forEach((card) => {
        card.style.width = `${perCardWidth}px`;
    });
}

function updateAboutCards() {
    const rect = aboutSection.getBoundingClientRect();
    const topOffset = rect.top;

    if (topOffset < window.innerHeight / 2) {
        updateWidth();
        aboutCard.forEach((card, i) => {
            card.style.transform = `translate3d(${(transformValue * (aboutCard.length - 2)) * i}px, ${30 * i}%, 0)`;
            card.style.zIndex = i;
        });
    }
}

updateWidth();
document.addEventListener('scroll', updateAboutCards);
window.addEventListener('resize', updateAboutCards);



// text replace
document.addEventListener("DOMContentLoaded", function () {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        const node = walker.currentNode;
        node.textContent = node.textContent.replace(/\bRasel\b/gi, "Rasel viper"); // Replace "hello" with "Hi"
    }
});


// Define custom transform values for each card
const efect = [
    { current: [-5, 0, 0, 0.9, 0.9, 1, -15], to: [0, 0, 0, 1, 1, 1, 0] },
    { current: [-63, -10, 0, 0.9, 0.9, 1, -4], to: [0, 0, 0, 1, 1, 1, 0] },
    { current: [-110, -18, 0, 0.9, 0.9, 1, -2], to: [0, 0, 0, 1, 1, 1, 0] },
    { current: [150, -117, 0, 0.9, 0.9, 1, 7], to: [0, 0, 0, 1, 1, 1, 0] },
    { current: [80, -110, 0, 0.9, 0.9, 1, 8], to: [0, 0, 0, 1, 1, 1, 0] },
    { current: [9, -100, 0, 0.9, 0.9, 1, 18], to: [0, 0, 0, 1, 1, 1, 0] }
];

// Select section and cards
const workSection = document.querySelector('.work_section');
const workCards = workSection.querySelectorAll('.work_card');

// Linear interpolation function
function lerp(a, b, t) {
    return a + (b - a) * t;
}

// Scroll-based animation handler
function updateTransforms() {
    const rect = workSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Start animation 20% before reaching viewport center
    const offset = windowHeight * 0.2;
    const triggerPoint = windowHeight / 1 - offset;

    // Normalize scroll progress between 0 and 1
    let progress = (triggerPoint - rect.top) / rect.height;
    progress = Math.min(Math.max(progress, 0), 1); // Clamp between 0 and 1

    // Apply transform to each card
    workCards.forEach((card, i) => {
        const from = efect[i].current;
        const to = efect[i].to;

        const x = lerp(from[0], to[0], progress);
        const y = lerp(from[1], to[1], progress);
        const z = lerp(from[2], to[2], progress);
        const scaleX = lerp(from[3], to[3], progress);
        const scaleY = lerp(from[4], to[4], progress);
        const scaleZ = lerp(from[5], to[5], progress);
        const rotate = lerp(from[6], to[6], progress);

        card.style.transform = `translate3d(${x}%, ${y}%, ${z}px) scale3d(${scaleX}, ${scaleY}, ${scaleZ}) rotateZ(${rotate}deg)`;
    });
}

// Set up event listeners
window.addEventListener('scroll', updateTransforms);
window.addEventListener('resize', updateTransforms);

// Initial run
updateTransforms();



//

const form = document.querySelector('.the_form');
const steps = form.querySelectorAll('.elementor-field-type-step');
const stepContents = document.querySelectorAll('.step_content');
const sectionWrap = document.querySelector('.section_wrap');
const questions = document.querySelectorAll('.question_wrapper');


// Function to handle step changes
function updateVisibleStep() {
    const currentStep = Array.from(steps).findIndex(
        step => !step.classList.contains('elementor-hidden')
    );

    if (currentStep === -1) return; // No visible step found

    stepContents.forEach(content => {
        content.style.display = 'none';
    });

    questions.forEach(question => {
        question.style.display = 'none';
    });

    const currentStepContent = stepContents[currentStep];
    const currentQuestion = questions[currentStep];
    if (currentStepContent) {
        if (currentStep === 3) {
            sectionWrap.style.flexDirection = 'row-reverse';
        } else {
            sectionWrap.style.flexDirection = 'row';
        }

        currentStepContent.style.display = 'block';
    }
    if (currentQuestion) {
        currentQuestion.style.display = 'block';
    }
    console.log('Step changed to:', currentStep);
}

function handleNewNoteList(node) {
    if (node.classList.contains('elementor-message-success')) {
        window.location.href = 'thanks';
    }
}

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            updateVisibleStep();
        }

        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    handleNewNoteList(node);
                }
            });
        }
    });
});

observer.observe(form, {
    attributes: true,
    attributeFilter: ['class'],
    subtree: true,
    childList: true,
});

updateVisibleStep();


const fromPopup = document.querySelector('.from_popup');
const popupOpen = document.querySelector('.popup_open');
const popupClose = document.querySelector('.popup_close');

popupOpen.addEventListener('click', () => {
    fromPopup.classList.add('active');
});
popupClose.addEventListener('click', () => {
    fromPopup.classList.remove('active');
});










const form = document.querySelector('.the_form');
const steps = form.querySelectorAll('.elementor-field-type-step');
const stepContents = document.querySelectorAll('.step_content');
const sectionWrap = document.querySelector('.section_wrap');


// Function to handle step changes
function updateVisibleStep() {
    const currentStep = Array.from(steps).findIndex(
        step => !step.classList.contains('elementor-hidden')
    );

    if (currentStep === -1) return; // No visible step found

    stepContents.forEach(content => {
        content.style.display = 'none';
    });

    questions.forEach(question => {
        question.style.display = 'none';
    });

    const currentStepContent = stepContents[currentStep];
    const currentQuestion = questions[currentStep];
    if (currentStepContent) {

        // change the row-reverse content index
        if (currentStep === 7) {
            sectionWrap.style.flexDirection = 'row-reverse';
        } else {
            sectionWrap.style.flexDirection = 'row';
        }

        currentStepContent.style.display = 'flex';
    }
    if (currentQuestion) {
        currentQuestion.style.display = 'block';
    }

}

function handleNewNoteList(node) {
    if (node.classList.contains('elementor-message-success')) {
        window.location.href = 'thanks';
    }
}

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            updateVisibleStep();
        }

        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    handleNewNoteList(node);
                }
            });
        }
    });
});

observer.observe(form, {
    attributes: true,
    attributeFilter: ['class'],
    subtree: true,
    childList: true,
});

updateVisibleStep();



//
const oddCards = document.querySelectorAll('.odd_card .unsere_card');
const evenCards = document.querySelectorAll('.even_cards .unsere_card');
const phoneCards = document.querySelectorAll('.phone_cards .unsere_card');
const loodBtn = document.querySelector('.more_btn');

let activeCards = 0;
const cardsToShow = 2;

const cardsToShowPhone = 1;

function showCards() {
    oddCards.forEach((card, index) => {
        if (index < activeCards) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    evenCards.forEach((card, index) => {
        if (index < activeCards) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    phoneCards.forEach((card, index) => {
        if (index < activeCards) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    loodBtn.style.display = activeCards < oddCards.length ? 'block' : 'none';
    loodBtn.style.display = activeCards < evenCards.length ? 'block' : 'none';
    loodBtn.style.display = activeCards < phoneCards.length ? 'block' : 'none';
}
function loadMoreCards() {
    activeCards += cardsToShow;
    showCards();
    if (activeCards >= oddCards.length && activeCards >= evenCards.length && activeCards >= phoneCards.length) {
        loodBtn.style.display = 'none';
    }
}
function loadMoreCardsPhone() {
    activeCards += cardsToShowPhone;
    showCards();
    if (activeCards >= oddCards.length && activeCards >= evenCards.length && activeCards >= phoneCards.length) {
        loodBtn.style.display = 'none';
    }
}
// Initial setup
showCards();


const oddCards = document.querySelectorAll('.odd_cards .unsere_card');
const evenCards = document.querySelectorAll('.even_cards .unsere_card');
const phoneCards = document.querySelectorAll('.phone_cards .unsere_card');
const loodBtn = document.querySelector('.more_btn');

console.log(oddCards, evenCards, phoneCards, loodBtn);


let activeCards = 0;
const cardsToShow = 1;

function showCards() {
    if (window.innerWidth < 768) {
        phoneCards[activeCards].style.display = 'block';
    } else {
        oddCards[activeCards].style.display = 'block';
        evenCards[activeCards].style.display = 'block';
    }
    activeCards += cardsToShow;

    if (window.innerWidth < 768) {

        if (activeCards >= phoneCards.length) {
            loodBtn.style.display = 'none';
        } else {
            loodBtn.style.display = 'block';
        }
    } else if (window.innerWidth >= 768) {
        if (activeCards >= oddCards.length && activeCards >= evenCards.length) {
            loodBtn.style.display = 'none';
        } else {
            loodBtn.style.display = 'block';
        }
    }
}

loodBtn.addEventListener('click', showCards);
showCards()


//

const theContainer = document.querySelector('.e-atc-qty-button-holder');

const ovserver = new MutationObserver((mutation) => {
    mutation.forEach((mut) => {
        if (mut.type === 'childList') {
            mut.addedNodes.forEach((node) => {
                node.click();
            });
        }
    });

})

ovserver.observe(theContainer, {
    childList: true
});


// dual card image effect

const cardImage = document.querySelectorAll('.prodact_card');
cardImage.forEach((card) => {
    if (card.querySelector('.second_image')) {
        const firstImage = card.querySelector('.frist_image');
        const secondImage = card.querySelector('.second_image');
        card.addEventListener('mouseover', () => {
            firstImage.style.opacity = '0';
            secondImage.style.opacity = '1';
        });
        card.addEventListener('mouseout', () => {
            firstImage.style.opacity = '1';
            secondImage.style.opacity = '0';
        });
    }
})







// custom menu efect
const menuSec = document.querySelector('.menu_section');
const mainMenu = document.querySelector('.main_menu')
const menuIcon = mainMenu.querySelector('.burger-menu');
const bars = menuIcon.querySelectorAll('.bar');
const menuPopup = document.querySelector('.menu_popup');
const menuItems = menuPopup.querySelectorAll('.menu_list .elementor-icon-list-text');
const subMenu = menuPopup.querySelectorAll('.sub_menu');
const mainPopup = document.querySelector('.main_popup');
const backBtn = document.querySelectorAll('.back_btn');

let lastScrollY = window.scrollY;


// set submenu attribute
subMenu.forEach((item, i) => {
    const attributeValue = menuItems[i].textContent;
    item.setAttribute('data-submenu', attributeValue);
});


//menu toggle function
function menuTogole() {
    menuIcon.classList.toggle('active');
    menuPopup.classList.toggle('active');
    handleScroling()
    changeColor()

    if (!menuPopup.classList.contains('active')) {
        resetMenu(); // Reset submenu when menu is closed
    }
}

//handle Scroling
function handleScroling() {
    document.body.style.overflow = menuPopup.classList.contains('active') ? 'hidden' : 'auto'; // Disable scrolling when menu is active
}

// menu item click event
menuItems.forEach((item) => {
    subMenu.forEach((item) => {
        item.classList.remove('active');
    });
    item.addEventListener('click', () => {
        const content = item.textContent;
        subMenu.forEach((sub) => {
            if (sub.getAttribute('data-submenu') === content) {
                sub.classList.toggle('active');
                mainPopup.classList.add('disable');
            }
        });
    });
});

// change color
function changeColor() {
    if (menuIcon.classList.contains('active')) {
        bars.forEach((bar) => {
            bar.style.backgroundColor = '#262c3d';
        });
        mainMenu.style.backgroundColor = '#FFFDF7';
    } else {
        bars.forEach((bar) => {
            bar.style.backgroundColor = '#FFFDF7';
        });
        mainMenu.style.backgroundColor = 'transparent';
    }
}

//height resize
function resizeMenuHeight() {
    const theSpacing = mainMenu.offsetHeight;
    mainPopup.style.inset = `${theSpacing}px 0px 0px 0px`;
    subMenu.forEach((sub) => {
        sub.style.inset = `${theSpacing}px 0px 0px 0px`;
    });
}

// heading animation on scroll
function scrollanimation() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        menuSec.classList.add('hide');
    } else if (currentScrollY < lastScrollY) {
        menuSec.classList.remove('hide');
    }

    if (currentScrollY > 2) {
        mainMenu.style.backgroundColor = '#262c3d';
    } else {
        mainMenu.style.backgroundColor = 'transparent';
    }
    lastScrollY = currentScrollY;
}


// reset menu
function resetMenu() {
    subMenu.forEach((sub) => {
        sub.classList.remove('active');
    });
    mainPopup.classList.remove('disable');
}

window.addEventListener('resize', resizeMenuHeight);
resizeMenuHeight();
backBtn.forEach((btn) => {
    btn.addEventListener('click', resetMenu);
});
menuIcon.addEventListener('click', menuTogole);
window.addEventListener('scroll', scrollanimation);


//

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function checkButtonsInView() {
    const buttons = document.querySelectorAll('.watch-btn');
    buttons.forEach(btn => {
        if (isInViewport(btn)) {
            btn.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkButtonsInView);
window.addEventListener('resize', checkButtonsInView);
window.addEventListener('load', checkButtonsInView);




//

const burgerMenu = document.querySelector('.burger-menu');
const menuPopup = document.querySelector('.menu_popup');
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    menuPopup.classList.toggle('active');
    if (menuPopup.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

const menuOpen = document.querySelector('.menu_open');
const menuClose = document.querySelector('.menu_close');
const menuPopup = document.querySelector('.menu_popup');
const mainMenu = document.querySelector('.main_menu');

menuOpen.addEventListener('click', () => {
    menuPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
});
menuClose.addEventListener('click', () => {
    menuPopup.classList.remove('active');
    document.body.style.overflow = 'auto';
});


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        mainMenu.classList.add('active');
    } else {
        mainMenu.classList.remove('active');
    }
});



window.addEventListener('scroll', () => {
    if (!target) return;

    const scrollY = window.scrollY;
    const start = 0;
    const end = 600;

    let ratio = (scrollY - start) / (end - start);
    ratio = Math.min(Math.max(ratio, 0), 1);

    const minAlpha = 0.2;
    const maxAlpha = 1;
    const alpha = (minAlpha + (maxAlpha - minAlpha) * ratio).toFixed(2);

    target.style.backgroundColor = `rgba(42, 75, 188, ${alpha})`;
});

//
const paragraph = document.querySelector('.more_less');
const toggleBtn = document.querySelector('.toggle_btn');

toggleBtn.addEventListener('click', () => {
    paragraph.classList.toggle('short');
    toggleBtn.textContent = paragraph.classList.contains('short') ? 'Read more' : 'Read less';
});


//
const resgisterBtn = document.querySelector('.regi_btn');


//

const dValue = {
    desktop: "M-1.0044999999999997, 0.886 L-1.0044999999999997, 0.943 c0.25075,-0.07296000000000001 0.25075,-0.07296000000000001 0.5015,0 s0.25075,0.07296000000000001 0.5015,0c0.25075,-0.07296000000000001 0.25075,-0.07296000000000001 0.5015,0 s0.25075,0.07296000000000001 0.5015,0c0.25075,-0.07296000000000001 0.25075,-0.07296000000000001 0.5015,0 s0.25075,0.07296000000000001 0.5015,0 L1, -1 L0, -1 z",
    tablet: "M-1.012, 0.924 L-1.012, 0.962 c0.252,-0.04864 0.252,-0.04864 0.504,0 s0.252,0.04864 0.504,0c0.252,-0.04864 0.252,-0.04864 0.504,0 s0.252,0.04864 0.504,0c0.252,-0.04864 0.252,-0.04864 0.504,0 s0.252,0.04864 0.504,0 L1, -1 L0, -1 z",
    mobile: "M-1.0284999999999997, 0.968 L-1.0284999999999997, 0.984 c0.25475,-0.02048 0.25475,-0.02048 0.5095,0 s0.25475,0.02048 0.5095,0c0.25475,-0.02048 0.25475,-0.02048 0.5095,0 s0.25475,0.02048 0.5095,0c0.25475,-0.02048 0.25475,-0.02048 0.5095,0 s0.25475,0.02048 0.5095,0 L1, -1 L0, -1 z"
}
const path = document.querySelector('#section-divider path');
const stockPath = document.querySelectorAll('.section-divider-svg-stroke path');

function updatePath() {
    const width = window.innerWidth;
    const d =
        width >= 1024 ? dValue.desktop :
            width >= 768 ? dValue.tablet :
                dValue.mobile;

    path.setAttribute('d', d);
    stockPath.forEach(p => p.setAttribute('d', d));
}

window.addEventListener('resize', updatePath);
updatePath();

//
const GallerySection = document.querySelector('.image_gelary .pgcsimplygalleryblock-justified-content');
const images = GallerySection.querySelectorAll('.pgcsimplygalleryblock-justified-item.pgc-image');

// ovserver node list the gallery section and and console log the images
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            const newImages = mutation.addedNodes;
            newImages.forEach((node) => {
                if (node.nodeType === 1 && node.classList.contains('pgc-image')) {
                    console.log('New image added:', node);
                    images.push(node);
                }
            });
        }
    });
});
observer.observe(GallerySection, {
    childList: true,
    subtree: true
});
//



const GallerySection = document.querySelector('.image_gelary .pgcsimplygalleryblock-justified-content');

function update() {
    const images = GallerySection.querySelectorAll('.pgcsimplygalleryblock-justified-item.pgc-image');
    const beforeLastImageWidth = images[images.length - 2].style.innerWidth;
    images[images.length - 1].style.width = `calc(100% - ${beforeLastImageWidth}px)`;
}

if (GallerySection) {

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                update()
            }
        });
    });

    observer.observe(GallerySection, {
        childList: true,
        subtree: true
    });
} else {
    console.log('Gallery section not found.');
}
update()
window.addEventListener('resize', update);


//
const GallerySection = document.querySelector('.image_gelary .pgcsimplygalleryblock-justified-content');

function update() {
    if (!GallerySection) return;

    const images = GallerySection.querySelectorAll('.pgcsimplygalleryblock-justified-item.pgc-image');
    if (images.length < 2) return;

    const beforeLastImage = images[images.length - 2];
    const lastImage = images[images.length - 1];

    const beforeLastImageWidth = beforeLastImage.getBoundingClientRect().width;

    setTimeout(() => {
        lastImage.style.width = `calc(100% - ${beforeLastImageWidth}px)`;
    }, 200); // Give layout time to stabilize if needed
}

if (GallerySection) {
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList') {
                update();

            }
        }
    });

    observer.observe(GallerySection, {
        childList: true,
        subtree: true
    });

    update();
    window.addEventListener('resize', update);
}




const GallerySection = document.querySelector('.image_gelary .pgcsimplygalleryblock-justified-content');

function update() {

    const images = GallerySection.querySelectorAll('.pgcsimplygalleryblock-justified-item.pgc-image');
    if (images.length < 2) return;

    const beforeLastImage = images[images.length - 2];
    const lastImage = images[images.length - 1];

    const beforeLastImageWidth = beforeLastImage.getBoundingClientRect().width;
    setTimeout(() => {
        lastImage.style.width = `calc(100% - ${beforeLastImageWidth}px)`;
        console.log('size updated');
    }, 300);

}

if (GallerySection) {
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList') {
                update();
                console.log('menord call');

            }
        }
    });

    observer.observe(GallerySection, {
        childList: true,
        subtree: true
    });

    update();
    window.addEventListener('resize', update);
}


console.log('Script loaded successfully!');


setTimeout(() => {
    const GallerySection = document.querySelector('.image_gelary .pgcsimplygalleryblock-justified-content');

    function update() {

        const images = GallerySection.querySelectorAll('.pgcsimplygalleryblock-justified-item.pgc-image');
        if (images.length < 2) return;

        const beforeLastImage = images[images.length - 2];
        const lastImage = images[images.length - 1];

        const beforeLastImageWidth = beforeLastImage.getBoundingClientRect().width;
        setTimeout(() => {
            lastImage.style.width = `calc(100% - ${beforeLastImageWidth}px)`;
            console.log('size updated');
        }, 300);

    }

    if (GallerySection) {
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'childList') {
                    update();
                    console.log('menord call');

                }
            }
        });

        observer.observe(GallerySection, {
            childList: true,
            subtree: true
        });

        update();
        window.addEventListener('resize', update);
    }
}, 300);


// step form data update
document.addEventListener("DOMContentLoaded", function () {
    // Get current date and time
    const now = new Date();

    // Format date as DD-MM-YYYY
    const date = now.toLocaleDateString('nl-NL'); // or use 'en-GB' for DD/MM/YYYY
    // Format time as HH:MM AM/PM
    const time = now.toLocaleTimeString('nl-NL', {
        hour: '2-digit',
        minute: '2-digit',
    });

    // Get full URL
    const url = window.location.href;

    // Set values to corresponding hidden fields
    const dateField = document.getElementById('form-field-submission_date');
    const timeField = document.getElementById('form-field-submission_time');
    const urlField = document.getElementById('form-field-page_url');

    if (dateField) dateField.value = date;
    if (timeField) timeField.value = time;
    if (urlField) urlField.value = url;
});


// cstom gallery slider

const gallery = document.querySelector('.custom_gallery');
const leftBtn = document.querySelector('.left_btn');
const rightBtn = document.querySelector('.right_btn');
const galleryItems = gallery.querySelectorAll('.e-gallery-item');
const galleryContainer = gallery.querySelector('.elementor-gallery__container');

let sumWidth = 0;

galleryItems.forEach((item) => {
    const itemWidth = item.offsetWidth + 10;
    sumWidth += itemWidth;
});

const visibleWidth = gallery.offsetWidth;
const totalWidth = sumWidth / 2;
const maxScroll = totalWidth - visibleWidth;

let currentScroll = 0;
const scrollStep = 200;

function updateGalleryPosition() {
    galleryContainer.style.transform = `translateX(-${currentScroll}px)`;

    leftBtn.style.display = currentScroll > 0 ? 'block' : 'none';
    rightBtn.style.display = currentScroll < maxScroll ? 'block' : 'none';
}
updateGalleryPosition();

rightBtn.addEventListener('click', () => {
    currentScroll = Math.min(currentScroll + scrollStep, maxScroll);
    updateGalleryPosition();
});

leftBtn.addEventListener('click', () => {
    currentScroll = Math.max(currentScroll - scrollStep, 0);
    updateGalleryPosition();
});


// menu item bar

const menuLis = document.querySelectorAll('.custom_menu .elementor-nav-menu--main .elementor-nav-menu > .menu-item');
menuLis.forEach((item) => {
    const activeLink = item.querySelector('.current_page_item');
    if (activeLink) {
        const link = item.querySelector('a');
        link.classList.add('elementor-item-active');
    }
})

// card sticky and scroll animation
if (window.innerWidth >= 768) {
    const mainCon = document.querySelector('.main_con');
    const cardWraper = document.querySelector('.card_wraper');
    const cards = cardWraper.querySelectorAll('.card');
    let cardWidth = 0;
    let sectionHeight = 0;

    const gap = parseInt(window.getComputedStyle(cardWraper).getPropertyValue('gap'));
    cards.forEach((card, i) => {
        sectionHeight += card.offsetWidth + gap;
        if (i > 0) {
            cardWidth += card.offsetWidth + gap;
        }
    });
    mainCon.style.height = `${sectionHeight}px`;

    document.addEventListener('scroll', () => {
        const rect = mainCon.getBoundingClientRect();
        const topOffset = rect.top;
        if (-topOffset > 0 && -topOffset < cardWidth) {
            cardWraper.style.transform = `translateX(${topOffset}px)`;
            console.log(-topOffset);

        }
    });
}

// custom heading animation
const h2Element = document.querySelector('.custom_heading span');
const imgWrape = document.querySelector('.image_wrape');
const img = imgWrape.querySelector('img');
const text = h2Element.innerText;
const words = text.split(' ');
h2Element.innerHTML = '';

words.forEach((word) => {
    const wordSpan = document.createElement('span');
    wordSpan.classList.add('word');

    for (const char of word) {
        const charSpan = document.createElement('span');
        charSpan.classList.add('char');
        charSpan.textContent = char;
        wordSpan.appendChild(charSpan);
    }

    const space = document.createTextNode(' ');
    h2Element.appendChild(wordSpan);
    h2Element.appendChild(space);
});

const chars = document.querySelectorAll('.char');

chars.forEach((char, i) => {
    setTimeout(() => {
        char.classList.add('active');
        if (i === chars.length - 1) {
            setTimeout(() => {
                imgWrapeUpdate();
            }, 100);
        }
    }, 100 * i);
});

function imgUpdate() {
    img.classList.add('active');
}

function imgWrapeUpdate() {
    imgWrape.classList.add('active');
    setTimeout(() => {
        imgUpdate();
    }, 1000);
}

// menus fntionality
const menuIcon = document.querySelector('.modal-close-wrapper');
const menuPopup = document.querySelector('.menu_popup');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menuPopup.classList.toggle('active');
});

//

const menu = document.querySelectorAll('.custom_menu ul li a');
menu.forEach((item, i) => {
    const itemSpan = document.createElement('span');
    itemSpan.classList.add('list_text');
    itemSpan.textContent = `0${i + 1}.`;
    item.appendChild(itemSpan);
});

// bar efect on scroll
const barSection = document.querySelector('.bar_con');
const bar = document.querySelector('.custom_bar');

document.addEventListener('scroll', () => {
    const rect = barSection.getBoundingClientRect();
    const topOffset = rect.top;
    if (topOffset < 0 && topOffset > -1830) {
        bar.style.height = `${Math.abs(topOffset)}px`;
        console.log(Math.abs(topOffset));

    }
})
//
const cards = document.querySelectorAll('.profile-toggle-header');
const cardDatas = document.querySelectorAll('.profile-bio-content');
const icons = document.querySelectorAll('.arrow-icon');

cards.forEach((card, i) => {
    card.addEventListener('click', () => {
        const isActive = cardDatas[i].classList.contains('active');

        // Close all
        cardDatas.forEach(data => data.classList.remove('active'));
        icons.forEach(icon => icon.classList.remove('rotate'));

        // Only open if it wasn't already active
        if (!isActive) {
            cardDatas[i].classList.add('active');
            icons[i].classList.add('rotate');
        }
    });
});



//  mega menu
const menu = window.innerWidth <= 767
    ? document.querySelectorAll('.phone_menu .elementor-nav-menu--main ul li')
    : document.querySelectorAll('.custom_menu .elementor-nav-menu--main ul li');
const menuInfo = document.querySelectorAll('.info');
const closeMenuBtn = document.querySelectorAll('.close_menu');
const subMenuBtns = document.querySelectorAll('[data-type="sub-menu"]');
const subInfos = document.querySelectorAll('.sub_info');
const defaultInfo = document.querySelectorAll('.default-info');
const colorMenus = document.querySelectorAll('.sub_menu ul li');
const megaPopup = document.querySelector('.mega_popup');
const customHeader = document.querySelector('.custom_header');
const oneStepBack = document.querySelectorAll('.back_btn.step_one');
const twoStepBack = document.querySelectorAll('.back_btn.step_two');
const menuIcon = document.querySelector('.menu_icon');
const phoneMenu = document.querySelector('.phone_main-popup');
const closeMenuBtnPhone = document.querySelector('.menu_icon-close');



menu.forEach((item, i) => {
    item.addEventListener('click', () => {
        menuInfo.forEach((info) => {
            info.style.display = 'none'; // for reset
            info.classList.remove('active'); // for reset
        });
        menuInfo[i].style.display = 'flex';
        menuInfo[i].classList.add('active');
        megaPopup.style.top = `${customHeader.offsetHeight}px`;
        megaPopup.style.height = `calc(100vh - ${customHeader.offsetHeight}px)`;

        stopScroling();
    });
});

//menu colose function
function closeMenu() {
    menuInfo.forEach((info) => {
        info.style.display = 'none';
    });
    defaultInfo.forEach((info) => {
        window.innerWidth <= 767
            ? info.style.display = 'none'
            : info.style.display = 'flex';
    });
    subInfos.forEach((info) => {
        info.style.display = 'none';
    });
    colorMenus.forEach((menu) => {
        menu.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
    megaPopup.style.height = 'auto';
};

closeMenuBtn.forEach((close) => {
    close.addEventListener('click', closeMenu);
});

function stopScroling() {
    document.body.style.overflow = 'hidden';
    // megaPopup.style.height = '100vh';

}

subMenuBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.getAttribute('target');
        menuInfo.forEach((info) => {
            if (info.classList.contains('active')) {

                window.innerWidth <= 767
                    ? info.querySelector('.info_list').style.display = 'none'
                    : info.querySelector('.info_list').style.display = 'flex';

                info.querySelector('.default-info').style.display = 'none';
                info.querySelectorAll('.sub_info').forEach((subInfo) => {
                    subInfo.style.display = 'none';
                });
                subInfos.forEach((subInfo) => {
                    if (subInfo.getAttribute('sub_info') === target) {
                        subInfo.style.display = 'flex';
                    }
                });
            }
        });
    });
});

colorMenus.forEach((menu) => {
    menu.addEventListener('click', () => {
        colorMenus.forEach((menu) => {
            menu.classList.remove('active');
        });
        menu.classList.add('active');
    });
});

oneStepBack.forEach((btn) => {
    btn.addEventListener('click', () => {
        closeMenu();
    });
});

twoStepBack.forEach((btn) => {
    btn.addEventListener('click', () => {
        const parent = btn.closest('.sub_info');
        parent.style.display = 'none';
        const infoLists = document.querySelectorAll('.info_list');
        infoLists.forEach((list) => {
            list.style.display = 'flex';
        });
    });
});

menuIcon.addEventListener('click', () => {
    phoneMenu.classList.add('active');
    closeMenuBtnPhone.classList.add('active');
    menuIcon.classList.add('close');
    stopScroling();
});


closeMenuBtnPhone.addEventListener('click', () => {
    phoneMenu.classList.remove('active');
    closeMenuBtnPhone.classList.remove('active');
    menuIcon.classList.remove('close');
    closeMenu();
});



// add checkbox to filter buttons
const btns = document.querySelectorAll('.search-catag .e-filter-item');

btns.forEach((btn) => {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('filter-checkbox');
    btn.appendChild(input);
});

btns.forEach(btn => {
    const checkbox = btn.querySelector('.filter-checkbox');
    btn.addEventListener('click', (e) => {
        if (e.target === checkbox) return;
        checkbox.checked = !checkbox.checked;
        btn.setAttribute('aria-pressed', checkbox.checked.toString());
    });
});





// load more list

const loadMoreLists = document.querySelectorAll('.custom_list ol li');
const loadMoreBtn = document.querySelector('.load-more');

loadMoreLists.forEach((list, i) => {
    if (i > 1) {
        list.style.display = 'none';
    }
});

let visibleItems = 2;

loadMoreBtn.addEventListener('click', () => {
    const hiddenItems = Array.from(loadMoreLists).filter(item => item.style.display === 'none');
    if (hiddenItems.length > 0) {
        hiddenItems.slice(0, visibleItems).forEach(item => {
            item.style.display = 'block';
        });
        if (hiddenItems.length <= visibleItems) {
            loadMoreBtn.style.display = 'none';
        }
    }
});


const customItems = document.querySelectorAll('.custom_item a');
const itemLordMoreBtn = document.querySelector('.Item_load-more');

customItems.forEach((item, i) => {
    if (i > 2) {
        item.style.display = 'none';
    }
});
let visibleItemCount = 4;

itemLordMoreBtn.addEventListener('click', () => {
    const hiddenItems = Array.from(customItems).filter(item => item.style.display === 'none');
    if (hiddenItems.length > 0) {
        hiddenItems.slice(0, visibleItemCount).forEach(item => {
            item.style.display = 'flex';
        });
        if (hiddenItems.length <= visibleItemCount) {
            itemLordMoreBtn.style.display = 'none';
        }
    }
});


// menu animation 
const mainPopupMenu = document.querySelector('.main_popup');
const LeftSite = mainPopupMenu.querySelector('.left_site');
const rightSite = mainPopupMenu.querySelector('.right_site');
const menuIconOpen = document.querySelector('.menu_icon-open');
const menuIconClose = document.querySelector('.menu_icon-close');
const allContents = mainPopupMenu.querySelectorAll('.all_content');
const menuBarItems = document.querySelectorAll('.menu_bar .Item');
const theHeader = document.querySelector('.the_header');

const brandContent = document.querySelector('.brand_content');
const brandBtn = document.querySelector('.brands_btn');
// const brandCloseBtn = brandContent.querySelector('.brands_close');

let isAnimating = false; // Prevent rapid clicks

menuIconOpen.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    mainPopupMenu.style.display = 'flex';
    menuIconOpen.style.display = 'none';
    menuIconClose.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling

    setTimeout(() => {
        LeftSite.style.transform = 'translateX(0%)';
        rightSite.style.transform = 'translateX(0%)';
        allContents.forEach(content => {
            setTimeout(() => {
                content.style.transform = 'translateY(0)';
                content.style.opacity = '1';
            }, 300);
        });
    }, 50);

    setTimeout(() => {
        isAnimating = false;
    }, 600); // Match with your CSS transition duration
});

menuIconClose.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    LeftSite.style.transform = 'translateX(100%)';
    rightSite.style.transform = 'translateX(-100%)';
    allContents.forEach(content => {
        setTimeout(() => {
            content.style.transform = 'translateY(30px)';
            content.style.opacity = '0';
        }, 300);
    });

    setTimeout(() => {
        mainPopupMenu.style.display = 'none';
        menuIconOpen.style.display = 'block';
        menuIconClose.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
        isAnimating = false;
    }, 1000); // Match with your CSS transition duration
});

menuBarItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        const itemContent = item.querySelector('.item_content');
        itemContent.classList.add('active');
    });
    item.addEventListener('mouseout', () => {
        const itemContent = item.querySelector('.item_content');
        itemContent.classList.remove('active');
    });
});

brandBtn.addEventListener('click', () => {
    brandContent.classList.add('active');
});

document.addEventListener('click', (e) => {
    if (!brandContent.contains(e.target) && !brandBtn.contains(e.target)) {
        brandContent.classList.remove('active');
    }
});



// loop condition
const allItems = document.querySelectorAll('.elementor-loop-container.elementor-grid .e-loop-item');

allItems.forEach((item) => {
    if (notSubscribe = item.querySelector('.hide-this-when-not-subscribe')) {
        const isSubscribe = item.querySelectorAll('.hide-this-when-subscribe');
        isSubscribe.forEach((sub) => {
            sub.style.display = 'none';
        });
    }
});


//@ts-check
const CustomPopup = document.querySelector('.popop_slider');
const popupOpenBtn = document.querySelector('.popup_btn');
const closeBtn = document.querySelector('.close_popup_btn');

popupOpenBtn.addEventListener('click', () => {
    CustomPopup.classList.toggle('active');
});
closeBtn.addEventListener('click', () => {
    CustomPopup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (!CustomPopup.contains(e.target)) {
        CustomPopup.classList.remove('active');
    }
});

//

const stickyPopup = document.querySelector('.sticy_popup')
const stickyPopupClose = document.querySelector('.sticy_close')

stickyPopupClose.addEventListener('click', () => {
    stickyPopup.style.display = 'none'
})



if (window.innerWidth > 1024) {
    function parallax() {
        var parallax = document.querySelectorAll(".parallax");
        var speed = 0.1;
        for (var i = 0; i < parallax.length; i++) {
            var windowHalfY = window.innerHeight / 7;
            var parallaxY = parallax[i].getBoundingClientRect().top + windowHalfY;
            var pos = parallaxY * -speed;
            parallax[i].style.backgroundPosition = "50% " + pos + "px";
        }
    }
    window.addEventListener("scroll", parallax);

}


// filter

const filterBtns = document.querySelectorAll('.custom_filter_btn .e-filter .e-filter-item');
const currentLoop = document.querySelector('.current_loop')
const letestLoop = document.querySelector('.letest_loop')

filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        currentLoop.style.display = 'none'
        letestLoop.style.display = 'block'
    })
})



//
const mainPopup = document.querySelector('.main_popup')
const stickyBtn = mainPopup.querySelector('.sticky_btn');
const stickyPopup = mainPopup.querySelector('.sticky_popup');


stickyBtn.addEventListener('click', () => {
    stickyPopup.classList.toggle('open')
})

document.addEventListener('scroll', () => {
    const rect = mainPopup.getBoundingClientRect();
    console.log(rect.top);
    if (rect.top <= 600) {
        stickyPopup.classList.add('attatched')
    } else {
        stickyPopup.classList.remove('attatched')
    }

})

// music feature
const musicCards = document.querySelectorAll('.music_card')
const musics = document.querySelectorAll('.music')
const playIcons = document.querySelectorAll('.play_icon p')

musicCards.forEach((card, i) => {
    card.addEventListener('click', () => {
        if (musics[i].paused) {
            reset()
            musics[i].play()
            playIcons[i].textContent = '⏸️'
        } else {
            reset()
        }
    })
})

function reset() {
    musics.forEach((music, i) => {
        music.pause()
        playIcons[i].textContent = '▶'
    })
}

reset()

// menu popup
const menuPopup = document.querySelector('.menu_popup')
const menuIcons = document.querySelector('.menu_icons')

menuIcons.addEventListener('click', () => {
    menuIcons.classList.toggle('active')
    menuPopup.classList.toggle('active')
})



const mainPopup = document.querySelector('.main_popup')
const stickyBtn = mainPopup.querySelector('.sticky_btn');
const stickyPopup = mainPopup.querySelector('.sticky_popup');
const popupCloseIcon = mainPopup.querySelector('.close_icon')


stickyBtn.addEventListener('click', () => {
    stickyPopup.classList.toggle('open')
})

document.addEventListener('scroll', () => {
    const rect = mainPopup.getBoundingClientRect();
    console.log(rect.top);
    if (rect.top <= 600) {
        stickyPopup.classList.add('attatched')
    } else {
        stickyPopup.classList.remove('attatched')
    }

})

popupCloseIcon.addEventListener('click', () => {
    stickyPopup.classList.remove('open');
});


// transform style
const efect = [
    { current: 100, to: 0 },
    { current: 70, to: 0 },
    { current: 40, to: 0 }
];

const review = document.querySelector('.review_section');
const cards = review.querySelectorAll('.card');

// Set initial transform
function applyInitialPosition() {
    if (window.innerWidth > 1024) {
        cards.forEach((card, i) => {
            card.style.transform = `translateX(${efect[i].current}px)`;
        });
    } else {
        // Reset transform on smaller screens (optional)
        cards.forEach(card => {
            card.style.transform = '';
        });
    }
}
// Run on load
applyInitialPosition();
document.addEventListener('resize', applyInitialPosition)

document.addEventListener('scroll', () => {
    if (window.innerWidth <= 1024) return;

    const rect = review.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > -300) {
        const progress = 1 - rect.top / windowHeight;

        cards.forEach((card, i) => {
            const start = efect[i].current;
            const end = efect[i].to;

            // Compute value from start to end based on progress
            let value = start + (end - start) * progress;

            // Prevent translating left (no negative values)
            value = Math.max(0, value);

            card.style.transform = `translateX(${value}vw)`;
        });
    }
});





// custom menu
const customMenus = document.querySelectorAll('.custom_menu .elementor-nav-menu--main .menu-item');
const menuTabs = document.querySelectorAll('.items_popup .item');
const menuIcons = document.querySelector('.menu_icons')
const tabMenu = document.querySelector('.tab_popup')
const menuBar = document.querySelector('.menu_bar');
const textboxs = document.querySelectorAll('.text_box')
const textBoxImgs = document.querySelectorAll('.text_box-img')


customMenus.forEach((menu, i) => {
    menu.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent this click from triggering document click
        customMenus.forEach((item) => {
            item.classList.remove('active')
        });
        menu.classList.add('active')

        menuTabs.forEach((tab) => {
            tab.style.display = 'none';
        });
        menuTabs[i].style.display = 'block';

        imageHover(menuTabs[i])
    });
});

// Hide menu tab if clicked outside
document.addEventListener('click', (e) => {
    const isMenu = e.target.closest('.custom_menu');
    const isPopup = e.target.closest('.items_popup');

    if (!isMenu && !isPopup) {
        menuTabs.forEach((tab) => {
            tab.style.display = 'none';
        });
        customMenus.forEach((item) => {
            item.classList.remove('active')
        });
    }
});

menuIcons.addEventListener('click', () => {
    menuIcons.classList.toggle('active');
    tabMenu.classList.toggle('active');

    if (menuIcons.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// function tabMenuTop() {
//     tabMenu.style.top = `${menuBar.offsetHeight}px`
// }



function imageHover(currentItem) {
    const textboxs = currentItem.querySelectorAll('.text_box')
    const textBoxImgs = currentItem.querySelectorAll('.text_box-img')

    textboxs.forEach((text, i) => {
        text.addEventListener('mouseenter', () => {
            textBoxImgs.forEach((img) => img.classList.remove('active'));
            textBoxImgs[i].classList.add('active');
        });
    });

}

// tabMenuTop()
// window.addEventListener('resize', tabMenuTop)






setTimeout(() => {


    var rad = Math.PI / 180;
    var requestId = null;
    var r = 300;
    var n = 16; // num slices
    var a = 360 * rad / n; // angle slice
    var W = 2 * Math.abs(Math.sin(a / 2)) * r;
    var H = Math.abs(Math.cos(a / 2)) * r;
    var rot = 0;
    var speed = .5;

    var dropzone = document.querySelector("#dropzone");
    var N = 16;
    // var Nspan = document.querySelector("#N span");
    var htmlImg = document.querySelector(".song-image");
    var w = htmlImg.getAttribute("width");
    var h = htmlImg.getAttribute("height");
    var canvas = document.querySelector("#canvas");
    var _canvas = document.querySelector("#_canvas");
    var ctx = canvas.getContext("2d");
    var _ctx = _canvas.getContext("2d");

    var cw = canvas.width = r * 2,
        cx = cw / 2;
    var ch = canvas.height = r * 2,
        cy = ch / 2;
    var _cw = _canvas.width = W,
        _cx = _cw / 2;
    var _ch = _canvas.height = H,
        _cy = _ch / 2;

    // DRAG & DROP IMAGE---------------------------------
    dropzone.addEventListener("dragenter", dragenter, false);
    dropzone.addEventListener("dragover", dragover, false);
    dropzone.addEventListener("drop", drop, false);

    function dragenter(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function dragover(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function drop(e) {
        e.stopPropagation();
        e.preventDefault();

        var data = e.dataTransfer;
        var files = data.files;

        handleFiles(files);
    }

    function handleFiles(files) {
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var isImage = /^image\//;

            if (!isImage.test(file.type)) {
                continue;
            }

            var img = new Image();
            img.src = window.URL.createObjectURL(file);
            img.onload = function () {
                w = img.width;
                h = img.height;

                htmlImg.setAttribute("src", img.src);
                htmlImg.setAttribute("width", w);
                htmlImg.setAttribute("height", h);
                window.URL.revokeObjectURL(this.src);
            }
        }
    }
    // END DRAG & DROP IMAGE---------------------------------

    // define the clipping path
    oPath(_ctx, W, H);
    // clip the canvas
    _ctx.clip();
    //
    var canvImg = _canvas;

    function Draw() {
        requestId = window.requestAnimationFrame(Draw);
        rot += speed * rad;
        //ctx.clearRect(0, 0, cw, ch);
        rotateImg(htmlImg, rot)

        for (var i = 0; i < n; i++) {
            var sc = i % 2 == 0 ? -1 : 1;
            ctx.save();
            ctx.translate(cx, cy);
            ctx.scale(sc, 1);
            ctx.rotate(a * i);

            ctx.drawImage(canvImg, -_cx, 0);
            ctx.restore();
        }
    }
    var Init = function () {
        if (requestId) {
            window.cancelAnimationFrame(requestId);
            requestId = null;
        }

        n = parseInt(N); // num slices
        // Nspan.innerHTML = n;
        a = 360 * rad / n; // angle slice
        W = 2 * Math.abs(Math.sin(a / 2)) * r;
        H = Math.abs(Math.cos(a / 2)) * r;

        cw = canvas.width = r * 2,
            cx = cw / 2;
        ch = canvas.height = r * 2,
            cy = ch / 2;
        _cw = _canvas.width = W,
            _cx = _cw / 2;
        _ch = _canvas.height = H,
            _cy = _ch / 2;
        // define the clipping path
        oPath(_ctx, W, H);
        // clip the canvas
        _ctx.clip();

        Draw();
    }

    Init(); //PLAY ANIMATION
    setTimeout(() => {

        window.cancelAnimationFrame(requestId); //pused THE ANIMATION EMIDIATE
    }, 300);
    // N.addEventListener('input', Init, false);

    function rotateImg(img, rot) {
        _ctx.save();
        _ctx.translate(_cx, _cy);
        _ctx.rotate(rot);
        //_ctx.translate(-_cx, -_cy);
        _ctx.drawImage(img, -w / 2, -h / 2);
        _ctx.restore();
    }

    function oPath(ctx, W, H) {
        // define the clipping path
        ctx.beginPath()
        ctx.moveTo(W / 2, 0);
        ctx.lineTo(W, H);
        ctx.lineTo(0, H);
        ctx.closePath();
    }


    // music player
    const musicData = [
        {
            postId: "1",
            title: "First Song",
            subTitle: 'First title',
            image: "https://setsomnisdegaudi.com/wp-content/uploads/2025/05/241226-050©A-Bofill-Orfeo-Catala-Sant-Esteve-2024.jpg",
            songUrl: "https://setsomnisdegaudi.com/wp-content/uploads/2024/05/fast-dirty-rap-vocals.mp3"
        },
        {
            postId: "2",
            title: "Second Song",
            subTitle: 'Second title',
            image: "https://setsomnisdegaudi.com/wp-content/uploads/2025/05/241226-075©A-Bofill-1.jpg",
            songUrl: "https://setsomnisdegaudi.com/wp-content/uploads/2024/05/rap-vocals-bouncy-radio-song.mp3"
        },
        {
            postId: "3",
            title: "Third Song",
            subTitle: 'Third title',
            image: "https://setsomnisdegaudi.com/wp-content/uploads/2025/05/foto_header_3-1.png",
            songUrl: "https://setsomnisdegaudi.com/wp-content/uploads/2024/05/urban-boom-bap-hip-hop.mp3"
        }
    ];

    let currentIndex = 0;
    const audio = document.querySelector('.audio');
    const songTitle = document.querySelector('.song-title h5');
    const songImage = document.querySelector('.song-image');
    const playBtn = document.querySelector('.play-btn');
    const muteBtn = document.querySelector('.mute-btn');

    function loadSong(index) {
        const song = musicData[index];
        songTitle.textContent = song.title;
        songImage.src = song.image;
        audio.src = song.songUrl;
        audio.load();
    }

    function togglePlay() {
        if (audio.paused) {
            audio.play();
            playBtn.classList.add('pused')
            Init() // PLAY THE ANIMAION
        } else {
            audio.pause();
            playBtn.classList.remove('pused')
            window.cancelAnimationFrame(requestId); // pused THE ANIMATION
        }
    }

    function toggleMute() {
        if (audio.muted) {
            audio.muted = false;
            muteBtn.classList.add('muted')
        } else {
            audio.muted = true;
            muteBtn.classList.remove('muted')
        }
    }

    function nextSong() {
        currentIndex = (currentIndex + 1) % musicData.length;
        loadSong(currentIndex);
        audio.play();
        playBtn.classList.remove('pused')
        Init()  // PLAY THE ANIMAION
    }

    function prevSong() {
        currentIndex = (currentIndex - 1 + musicData.length) % musicData.length;
        loadSong(currentIndex);
        audio.play();
        playBtn.classList.remove('pused')
        Init() // PLAY THE ANIMAION
    }

    // Event Listeners
    playBtn.addEventListener('click', togglePlay);
    muteBtn.addEventListener('click', toggleMute);
    document.querySelector('.next-btn').addEventListener('click', nextSong);
    document.querySelector('.prev-btn').addEventListener('click', prevSong);

    // Auto play next on song end
    audio.addEventListener('ended', nextSong);

    // Initial load
    loadSong(currentIndex);


}, 1000)



//
setTimeout(() => {
    const theSliders = document.querySelectorAll('.custom_slider');

    theSliders.forEach((slider) => {
        const funtionSliderSection = slider.querySelectorAll('.funtion_slider');
        const theSliderDots = slider.querySelectorAll('.swiper-pagination-bullet')

        funtionSliderSection.forEach((section) => {
            const artistnames = section.querySelectorAll('.artist_name');
            const artistImg = section.querySelectorAll('.artist_img');
            artistnames.forEach((item, i) => {
                item.addEventListener('click', () => {
                    theSliderDots[i + 1].click();
                })
            });
            artistnames.forEach((item, i) => {
                item.addEventListener('mouseenter', () => {
                    artistImg.forEach((img) => img.classList.remove('active'));
                    artistImg[i].classList.add('active');
                })
            });
        });
    })
}, 100);


const theSliders = document.querySelectorAll('.custom_slider');

theSliders.forEach((slider) => {
    const funtionSliderSection = slider.querySelectorAll('.funtion_slider');
    const theSliderDots = slider.querySelectorAll('.swiper-pagination-bullet')

    funtionSliderSection.forEach((section) => {
        const artistnames = section.querySelectorAll('.artist_name');
        const artistImg = section.querySelectorAll('.artist_img');
        artistnames.forEach((item, i) => {
            item.addEventListener('click', () => {
                theSliderDots[i + 1].click();
            })
        });
        artistnames.forEach((item, i) => {
            item.addEventListener('mouseenter', () => {
                artistImg.forEach((img) => img.classList.remove('active'));
                artistImg[i].classList.add('active');
            })
        });
    });
})


// transform style
const efect = [
    { current: 100, to: 0 },
    { current: 70, to: 0 },
    { current: 40, to: 0 }
];

const reviews = document.querySelectorAll('.review_section');

reviews.forEach(review => {
    const cards = review.querySelectorAll('.card');

    function applyInitialPosition() {
        if (window.innerWidth > 1024) {
            cards.forEach((card, i) => {
                card.style.transform = `translateX(${efect[i].current}px)`;
            });
        } else {
            cards.forEach(card => {
                card.style.transform = '';
            });
        }
    }
    applyInitialPosition();
    document.addEventListener('resize', applyInitialPosition)

    document.addEventListener('scroll', () => {
        if (window.innerWidth <= 1024) return;

        const rect = review.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > -300) {
            const progress = 1 - rect.top / windowHeight;

            cards.forEach((card, i) => {
                const start = efect[i].current;
                const end = efect[i].to;
                let value = start + (end - start) * progress;

                value = Math.max(0, value);
                card.style.transform = `translateX(${value}vw)`;
            });
        }
    });
});


// loading animation
const loader = document.querySelector(".pageLoader");
loader.classList.add("active");
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        loader.classList.add("fade-out");

        setTimeout(() => {
            loader.remove();
        }, 1000);
    }, 500);
});


//
const cards = document.querySelectorAll('.custom_loop .e-loop-item');

cards.forEach((card) => {
    const random = Math.floor(Math.random() * 25);
    card.style.order = random;
});

//

const reviews = document.querySelector('.review_section');
const reviewWraper = document.querySelector('.review_wraper');
const reviewCards = document.querySelectorAll('.card');

let totalWidth = 0;

reviewCards.forEach((card) => {
    cardWidth = card.offsetWidth + 25;
    totalWidth += cardWidth;
});

reviews.style.height = totalWidth + 'px';

document.addEventListener('scroll', () => {
    const rect = reviews.getBoundingClientRect();
    console.log(rect.top);

});


// card sticky and scroll animation
if (window.innerWidth >= 360) {
    const mainCon = document.querySelector('.review_section');
    const cardWraper = document.querySelector('.review_wraper');
    const cardAll = cardWraper.querySelectorAll('.card');
    let cardWidth = 0;
    let sectionHeight = 0;

    const gap = parseInt(window.getComputedStyle(cardWraper).getPropertyValue('gap'));
    cardAll.forEach((card, i) => {
        sectionHeight += card.offsetWidth + gap;
        if (i > 2) {
            cardWidth += card.offsetWidth + gap;
        }
    });
    mainCon.style.height = `${sectionHeight}px`;

    document.addEventListener('scroll', () => {
        const rect = mainCon.getBoundingClientRect();
        const topOffset = rect.top;
        if (-topOffset > 0 && -topOffset < cardWidth) {
            cardWraper.style.transform = `translateX(${topOffset}px)`;
            console.log(-topOffset);

        }
    });
}


// header
const menuBtn = document.querySelectorAll('.menu_tab_btn');
const menuTabContent = document.querySelectorAll('.menu_contant');

menuBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        menuBtn.forEach((item) => item.classList.remove('active'));
        btn.classList.add('active');
        menuTabContent.forEach((content) => content.classList.remove('active'));
        menuTabContent[i].classList.add('active');
    });
});

// after 3 item disply none funtion
const allMenuItems = document.querySelectorAll('.mega_menu .e-n-menu-heading .e-n-menu-item');
const mediaQuery = window.matchMedia('(min-width: 767px) and (max-width: 1490px)');

// Show first 3, hide the rest
function applyMenuLimit() {
    allMenuItems.forEach((item, i) => {
        item.style.display = i > 2 ? 'none' : '';
    });
}

// Reset all items (show everything)
function resetMenu() {
    allMenuItems.forEach(item => {
        item.style.display = '';
    });
}

// Handle screen size
function handleMenuDisplay(e) {
    if (e.matches) {
        applyMenuLimit();
    } else {
        resetMenu();
    }
}

// Initial run
handleMenuDisplay(mediaQuery);

// Watch for screen changes
mediaQuery.addEventListener('change', handleMenuDisplay);

// menu toggole funtion
const menuOpenIcon = document.querySelector('.menu_open_icon');
const menuCloseIcon = document.querySelector('.menu_close_icon');
const menuPopup = document.querySelector('.menu_popup');
const menuWraper = menuPopup.querySelector('.menu_wraper');
const customMenus = document.querySelector('.custom_menu');
const megaPopup = document.querySelectorAll('.mega_popup');
const menuItems = document.querySelectorAll('.elementor-nav-menu--main .mega_menu_popup');

menuOpenIcon.addEventListener('click', () => {
    menuOpenIcon.style.display = 'none';
    menuCloseIcon.style.display = 'block';
    menuWraper.style.display = 'block';
    megaPopup.forEach((popup) => {
        popup.style.display = 'none';
    });
    openMenu();
});

menuCloseIcon.addEventListener('click', () => {
    menuOpenIcon.style.display = 'block';
    menuCloseIcon.style.display = 'none';
    menuWraper.style.display = 'none';
    closeMenu();
});

// open menu popup  
function openMenu() {
    menuPopup.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable scroll
}

// Close menu function
function closeMenu() {
    menuPopup.style.display = 'none';
    document.body.style.overflow = ''; // Re-enable scroll
}


// mega menu popup
menuItems.forEach((item, i) => {
    item.addEventListener('click', () => {
        menuItems.forEach((menu) => {
            menu.classList.remove('active');
        });
        item.classList.add('active');
        const itemRect = item.getBoundingClientRect();

        megaPopup.forEach((popup) => {
            popup.style.display = 'none';
        });
        openMenu();
        megaPopup[i].style.display = 'block';
        if (i > 0) {
            megaPopup[i].style.left = `${itemRect.left}px`;
        }
        menuWraper.style.display = 'none';
        menuOpenIcon.style.display = 'block';
        menuCloseIcon.style.display = 'none';
    });
});


// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const isClickInsideMenu = menuWraper.contains(e.target);
    const isClickOnIcons = menuOpenIcon.contains(e.target) || menuCloseIcon.contains(e.target);
    const isClickCustomMenus = customMenus.contains(e.target);
    const isClickMegaPopup = Array.from(megaPopup).some(popup => popup.contains(e.target));

    if (!isClickInsideMenu && !isClickOnIcons && !isClickCustomMenus && !isClickMegaPopup) {
        menuOpenIcon.style.display = 'block';
        menuCloseIcon.style.display = 'none';
        megaPopup.forEach((popup) => {
            popup.style.display = 'none';
        });
        menuItems.forEach((menu) => {
            menu.classList.remove('active');
        });
        closeMenu();

    }
});


// update_attribute

const customMenu = document.querySelectorAll('.update_attribute');
const theAttribute = 'data-click-id'
customMenu.forEach((menu) => {
    const menuItem = menu.querySelectorAll('ul li a');
    menuItem.forEach((item) => {
        const menuAttribute = item.getAttribute('title');
        item.setAttribute(theAttribute, menuAttribute);
        item.removeAttribute('title')
    })
})




//

const menuItemsList = document.querySelectorAll('.your-menu-class ul li');
menuItemsList.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('.e-off-canvas__overlay').click();
    });
});





// header

let currentIndex = 0;
const audio = document.querySelector('.audio');
const musicSection = document.querySelector('.the_music-section')
const songTitle = document.querySelector('.song-title h5');
const songContent = document.querySelector('.song-content h5');
const songImage = document.querySelector('.song-image');
const playBtn = document.querySelector('.play-btn');
const muteBtn = document.querySelector('.mute-btn');
const songNav = document.querySelector('.song_nav .e-con-inner');
const currentTimeEl = document.querySelector('.current-time p');

musicData.forEach((song, i) => {
    const item = document.createElement('div');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    const number = document.createElement('p');

    h4.textContent = song.title;
    p.textContent = song.subTitle;
    number.textContent = i + 1

    item.classList.add('song_item');
    h4.classList.add('song_title');
    p.classList.add('song_subtitle');
    number.classList.add('item_number')

    item.appendChild(h4);
    item.appendChild(p);
    item.appendChild(number);
    songNav.appendChild(item);
});

const songItem = document.querySelectorAll('.song_item')

function loadSong(index) {
    const song = musicData[index];
    musicSection.style.backgroundColor = song.backgroundColor
    songTitle.textContent = song.title;
    songContent.textContent = song.subTitle
    songImage.src = song.image;
    audio.src = song.songUrl;
    audio.load();

    //reset nev
    songItem.forEach((song) => {
        song.classList.remove('active')
    })
    songItem[index].classList.add('active');
}

songItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        loadSong(i)
        // audio.play();
        playBtn.classList.remove('paused');
        Init();
        currentIndex = i;
    })
})



function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.classList.add('paused');
        Init();
    } else {
        audio.pause();
        playBtn.classList.remove('paused');
        // cancelAnimationFrame(requestId);
    }
}

function toggleMute() {
    audio.muted = !audio.muted;
    muteBtn.classList.toggle('muted', audio.muted);
}

function nextSong() {
    currentIndex = (currentIndex + 1) % musicData.length;
    loadSong(currentIndex);
    // audio.play();
    playBtn.classList.remove('paused');
    Init();
}

function prevSong() {
    currentIndex = (currentIndex - 1 + musicData.length) % musicData.length;
    loadSong(currentIndex);
    // audio.play();
    playBtn.classList.remove('paused');
    Init();
}

// Event Listeners
playBtn.addEventListener('click', togglePlay);
muteBtn.addEventListener('click', toggleMute);
document.querySelector('.next-btn').addEventListener('click', nextSong);
document.querySelector('.prev-btn').addEventListener('click', prevSong);
audio.addEventListener('ended', nextSong);

// Initial Load
loadSong(currentIndex);

Init();



function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function updateTime() {
    if (!isNaN(audio.duration)) {
        const remaining = audio.duration - audio.currentTime;
        currentTimeEl.textContent = formatTime(remaining);
    }
}

audio.addEventListener('timeupdate', updateTime);
audio.addEventListener('loadedmetadata', updateTime);

// setTimeout(() => {
//     cancelAnimationFrame(requestId);
// }, 100);




const headerText = document.querySelector('.header_text');
const firstSection = document.querySelector('.first_section');

window.addEventListener('scroll', () => {
    const sectionBottom = firstSection.getBoundingClientRect().bottom;
    console.log(sectionBottom);

    if (sectionBottom <= 0) {
        headerText.classList.add('hidden');
    } else {
        headerText.classList.remove('hidden');
    }
});

//



let yearsData = [
    {
        "title": "2005",
        "content": "\n<p>Began Bachelor’s degree in Theater, Film, and Literature at Xiamen<br>University, China, building expertise in storytelling.</p>\n"
    },
    {
        "title": "2009",
        "content": "\n<p>Graduated and planned to pursue advanced studies in Germany.</p>\n"
    },
    {
        "title": "2010",
        "content": "\n<p>Relocated to Germany, developing a cross-cultural filmmaking<br>perspective.</p>\n"
    },
    {
        "title": "2016",
        "content": "",
        subPosts: [
            {
                "title": "Feb 2016",
                "content": "\n<p>Completed a Master’s thesis on the impact of digital technology on<br>cinema, exploring the evolution of film production and distribution in the<br>digital age.</p>\n"
            },
            {
                "title": "Jun 2016",
                "content": "\n<p>Worked as a freelance editor and producer, collaborating with various<br>production companies in Germany, honing technical skills and understanding<br>the local film industry.</p>\n",
            }
        ]
    },
    {
        "title": "2023",
        "content": "\n<p>Worked as inhouse producer at a German production company, managing<br>post-production for projects tailored for German public broadcasters, gaining<br>deep insight into their technical requirements and operational needs.</p>\n"
    },
    {
        "title": "2024",
        "content": "\n<p>Initiated independent film projects focused on global issues and<br>cross-cultural narratives, leveraging deep insights into Eastern and Western<br>cultures, refined editing expertise, and strong post-production leadership while<br>delivering impactful freelance work.</p>\n"
    }
]


const barWraper = document.querySelector('.bar_wraper');
const bar = document.querySelector('.bar');
const theContent = document.querySelector('.the_content h2');
const yearTitle = document.querySelector('.year_title h2');
const nextBtn = document.querySelector('.next_btn');
const prevBtn = document.querySelector('.prev_btn');
const innerBar = document.querySelector('.bar_inner');

let currentIndexDot = 0;


// Month lookup for partial dates
const monthMap = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
};

// Convert string title to date object
function parseDate(title) {
    if (typeof (title) !== 'string') {
        title = title.toString();
    }
    const parts = title.split(' ');
    if (parts.length === 2) {
        const month = monthMap[parts[0]] ?? 0;
        const year = parseInt(parts[1]);
        return new Date(year, month);
    } else {
        return new Date(parseInt(title), 0); // January
    }
}

// Convert to months since start
const startDate = parseDate(yearsData[0].title);
const monthDiffs = yearsData.map(item => {
    const date = parseDate(item.title);
    return (date.getFullYear() - startDate.getFullYear()) * 12 + (date.getMonth() - startDate.getMonth());
});

const maxMonths = Math.max(...monthDiffs); // for % calculation

yearsData.forEach((year, i) => {
    const percent = (monthDiffs[i] / maxMonths) * 100;


    // Generate subPost title blocks if they exist
    const subPostTitles = year.subPosts
        ? year.subPosts.map(sub => `<p class="monthly_post">${sub.title}</p>`).join('')
        : '';

    const monthlyPosts = year.subPosts
        ? `<div class="monthly_posts">${subPostTitles}</div>`
        : '';

    const dotHTML = `
        <div class="dot_wraper" style="position: absolute; left: ${percent}%;">
            <div class="dot"></div>
            <h2 class="year_text">${year.title}</h2>
            ${monthlyPosts}
        </div>
    `;

    barWraper.insertAdjacentHTML('beforeend', dotHTML);
});



const dotWraper = document.querySelectorAll('.dot_wraper');
dotWraper.forEach((wraper, i) => {
    wraper.querySelector(".dot").addEventListener('click', () => {
        stopAutoplayIfActive();
        dotWraper.forEach((item) => {
            item.classList.remove('active');
        });
        wraper.classList.add('active');
        theContent.innerHTML = yearsData[i].content.replace(/<\/?p>/g, '').replace(/<br>/g, '').replace(/\n/g, '');
        yearTitle.textContent = yearsData[i].title;
        innerbarUpdate(i)
        currentIndexDot = i;
        isSubPost()
    });
});

nextBtn.addEventListener('click', () => {
    stopAutoplayIfActive();
    currentIndexDot = (currentIndexDot + 1) % dotWraper.length;
    dotWraper.forEach((item) => {
        item.classList.remove('active');
    });
    theContent.innerHTML = yearsData[currentIndexDot].content.replace(/<\/?p>/g, '').replace(/<br>/g, '').replace(/\n/g, '');
    yearTitle.textContent = yearsData[currentIndexDot].title;
    innerbarUpdate(currentIndexDot)
    dotWraper[currentIndexDot].classList.add('active');
    isSubPost();
});
prevBtn.addEventListener('click', () => {
    stopAutoplayIfActive();
    currentIndexDot = (currentIndexDot - 1 + dotWraper.length) % dotWraper.length;
    dotWraper.forEach((item) => {
        item.classList.remove('active');
    });
    theContent.innerHTML = yearsData[currentIndexDot].content.replace(/<\/?p>/g, '').replace(/<br>/g, '').replace(/\n/g, '');
    yearTitle.textContent = yearsData[currentIndexDot].title;
    innerbarUpdate(currentIndexDot)
    dotWraper[currentIndexDot].classList.add('active');
    isSubPost();
});

const months = document.querySelectorAll('.monthly_post');

months.forEach((month, i) => {
    month.addEventListener('click', () => {
        months.forEach((m) => m.classList.remove('active'));
        month.classList.add('active');

        const currentYear = yearsData[currentIndexDot];
        if (currentYear.subPosts && currentYear.subPosts[i]) {
            theContent.innerHTML = currentYear.subPosts[i].content.replace(/<\/?p>/g, '').replace(/<br>/g, '').replace(/\n/g, '');
            yearTitle.textContent = currentYear.subPosts[i].title;
        }
    });
});


function innerbarUpdate(i) {
    const barPresent = (monthDiffs[i] / maxMonths) * 100;
    innerBar.style.width = `${barPresent}%`;
}

function isSubPost() {
    if (yearsData[currentIndexDot].subPosts !== undefined) {
        theContent.innerHTML = yearsData[currentIndexDot].subPosts[0].content.replace(/<\/?p>/g, '').replace(/<br>/g, '').replace(/\n/g, '');
        yearTitle.textContent = yearsData[currentIndexDot].subPosts[0].title;
    }
    const monthDovs = document.querySelectorAll('.monthly_posts');
    monthDovs.forEach((month) => {
        const monthTitle = month.querySelectorAll('p');
        monthTitle.forEach((title) => {
            title.classList.remove('active');
        });
        monthTitle[0].classList.add('active');
    })
}



const playBtn = document.querySelector('.play_btn');
const playing = document.querySelector('.playing');
let isPlaying = false;
let playIndex = 0;
let subIndex = 0;
let currentTimeout = null;

// Handle year dot click with optional subPost skip
function handleDotClick(index, skipSubPost = false) {
    dotWraper.forEach((item) => item.classList.remove('active'));
    dotWraper[index].classList.add('active');

    theContent.innerHTML = yearsData[index].content.replace(/<\/?p>/g, '').replace(/<br>/g, '').replace(/\n/g, '');
    yearTitle.textContent = yearsData[index].title;
    innerbarUpdate(index);
    currentIndexDot = index;

    if (!skipSubPost) {
        isSubPost();
    }
}

// Play timeline step-by-step
function playTimeline() {
    if (playIndex >= yearsData.length) {
        isPlaying = false;
        playBtn.classList.toggle('Play');
        playing.classList.toggle('active');
        return;
    }

    const currentYear = yearsData[playIndex];
    const currentDot = dotWraper[playIndex];

    // First load the year (without subPost auto-click)
    handleDotClick(playIndex, true);

    // If subPosts exist, go through them first
    if (currentYear.subPosts && subIndex < currentYear.subPosts.length) {
        const monthlyPosts = currentDot.querySelectorAll('.monthly_post');
        if (monthlyPosts[subIndex]) {
            monthlyPosts[subIndex].click(); // Manually click each subPost
        }
        subIndex++;
        currentTimeout = setTimeout(playTimeline, 3000); // Wait 5 sec for next subPost
    } else {
        // Move to next year
        playIndex++;
        subIndex = 0;
        currentTimeout = setTimeout(playTimeline, 3000); // Wait 5 sec for next year
    }
}

// Pause playback
function pauseTimeline() {
    clearTimeout(currentTimeout);
    isPlaying = false;
    playBtn.classList.toggle('Play');
    playing.classList.toggle('active');
}

// Button click toggle
playBtn.addEventListener('click', () => {
    if (!isPlaying) {
        isPlaying = true;
        playBtn.classList.toggle('Play');
        playing.classList.toggle('active');
        playIndex = 0;
        subIndex = 0;
        playTimeline();
    } else {
        pauseTimeline();
    }
});

function stopAutoplayIfActive() {
    if (isPlaying) {
        clearTimeout(currentTimeout);
        isPlaying = false;
        playBtn.classList.toggle('Play');
        playing.classList.toggle('active');
    }
}



// slider animation
const sliderWrapper = document.querySelector('.slider_wrapper');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next_btn');
const prevBtn = document.querySelector('.prev_btn');
const slidDors = document.querySelectorAll('.slider_dot');

let currentSlide = 0;
let isDragging = false;
let startX = 0;
let currentX = 0;
let threshold = 100; // px
let wrapperRect;

updateSlides();

function updateSlides() {
    if (currentSlide === 0) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }
    if (currentSlide === slides.length - 1) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
    // Update slide positions
    slides.forEach((slide, index) => {
        const offset = index - currentSlide;
        slide.style.transition = isDragging ? 'none' : 'transform 0.5s ease-in-out';
        slide.style.transform = `
            translate3d(${offset * 7.25}% , 0, ${-Math.abs(offset) * 100}px) 
            rotateZ(${offset * 2}deg) scale(1)`;
        slide.style.zIndex = `${-Math.abs(offset)}`;
        slidDors.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === currentSlide) {
                dot.classList.add('active');
            }
        });
    });
}

// dot navigation
slidDors.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlides();
    });
});
// Buttons
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
});
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
});

// Drag
sliderWrapper.addEventListener('mousedown', startDrag);
sliderWrapper.addEventListener('touchstart', startDrag, { passive: true });

function startDrag(e) {
    isDragging = true;
    wrapperRect = sliderWrapper.getBoundingClientRect();
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;

    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchmove', onDrag, { passive: false });
    document.addEventListener('touchend', endDrag);
}

function onDrag(e) {
    if (!isDragging) return;

    currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const deltaX = currentX - startX;

    // Only apply drag to current slide
    const current = slides[currentSlide];
    const dragOffset = (deltaX / wrapperRect.width) * 100;

    current.style.transition = 'none';
    current.style.transform = `
        translate3d(${dragOffset}%, 0, 0px) 
        rotateZ(0deg) scale(1)`;

    e.preventDefault();
}

function endDrag() {
    if (!isDragging) return;
    isDragging = false;

    const deltaX = currentX - startX;

    if (deltaX > threshold) {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    } else if (deltaX < -threshold) {
        currentSlide = (currentSlide + 1) % slides.length;
    }

    updateSlides();

    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', endDrag);
    document.removeEventListener('touchmove', onDrag);
    document.removeEventListener('touchend', endDrag);
}




// section slide and scale
const feaSliderWraper = document.querySelector('.section_wraper');
const stickySection = document.querySelector('.sticky_section');
const barInner = document.querySelector('.bar_inner');
const webflowSec = document.querySelector('.webflow_sec');
const scaleSection = document.querySelector('.scale_section');
const sectionContent = document.querySelector('.section_content')

// Define scroll ranges
const scrollRange = window.innerHeight;         // 100vh (translate)
const opacityRange = window.innerHeight * 0.1;  // 10vh (fade)
const scaleRange = window.innerHeight * 1.9;    // 190vh (scale from 110vh to 300vh)

function onScroll() {
    const rect = stickySection.getBoundingClientRect();
    const scrollY = -rect.top; // now scrollY is negative when section is not sticky yet

    if (rect.top > 0) {
        // Before everything
        feaSliderWraper.style.transform = 'translateX(0%)';
        barInner.style.width = '0%';
        webflowSec.style.opacity = '1';
        sectionContent.style.opacity = '0';
        scaleSection.style.transform = `scale3d(0.36, 0.36, 1)`; // reset
        console.log('Before everything');
        return;
    }

    // Slide animation from 0vh to 100vh
    if (scrollY >= 0 && scrollY <= scrollRange) {
        const percentage = (scrollY / scrollRange) * 100;

        feaSliderWraper.style.transform = `translateX(${-percentage}%)`;
        barInner.style.width = `${percentage}%`;
        webflowSec.style.opacity = '1';
        sectionContent.style.opacity = '0';
        scaleSection.style.transform = `scale3d(0.36, 0.36, 1)`; // initial scale
        console.log('0vh to 100vh');
    }

    // Fade from 100vh to 110vh
    else if (scrollY > scrollRange && scrollY <= scrollRange + opacityRange) {
        feaSliderWraper.style.transform = `translateX(-100%)`;
        barInner.style.width = `100%`;
        const opacityProgress = (scrollY - scrollRange) / opacityRange;
        webflowSec.style.opacity = `${1 - opacityProgress}`;
        sectionContent.style.opacity = `${opacityProgress}`;
        scaleSection.style.transform = `scale3d(0.36, 0.36, 1)`; // still initial
        console.log('100vh to 110vh');
    }

    // Scale from 110vh to 300vh
    else if (scrollY > scrollRange + opacityRange && scrollY <= scrollRange + opacityRange + scaleRange) {
        feaSliderWraper.style.transform = `translateX(-100%)`;
        barInner.style.width = `100%`;
        webflowSec.style.opacity = '0';
        sectionContent.style.opacity = '1';

        const scaleProgress = (scrollY - scrollRange - opacityRange) / scaleRange;
        const scaleValue = 0.36 + scaleProgress * (1 - 0.36); // 0.36 → 1
        scaleSection.style.transform = `scale3d(${scaleValue}, ${scaleValue}, 1)`;
        console.log('110vh to 300vh');
    }

    // After 300vh
    else if (scrollY > scrollRange + opacityRange + scaleRange) {
        barInner.style.width = `100%`;
        webflowSec.style.opacity = '0';
        scaleSection.style.transform = `scale3d(1, 1, 1)`; // final scale
        console.log('After 300vh');
    }
}


// Optimize scroll performance
document.addEventListener('scroll', () => {
    requestAnimationFrame(onScroll);
});

let yearsData = [
    {
        "title": "year",
        "content": "",
        "postDate": "2019-08-08 10:13:00",
        "video_url": "",
        "poster_image": "https://weidenhuegelfilms.de/wp-content/uploads/2025/08/MV5BNzhkN2EzMGQtMjVhOS00MWJlLWIxMDktZjUwZjhmZTRiZjJhXkEyXkFqcGc@._V1_.jpg"
    },
    {
        "title": "The Rest (Post-Production Coordinator and Trailer editor)",
        "content": "",
        "postDate": "2018-01-08 10:10:00",
        "video_url": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Ax5L-cLPJwY?si=ddK-yQSoMuqJELwe\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
        "poster_image": false
    },
    {
        "title": "Human Flow (Post-Production Coordinator)",
        "content": "",
        "postDate": "2017-01-08 10:08:00",
        "video_url": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/DVZGyTdk_BY?si=6kXfww-omFkBT4be\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
        "poster_image": false
    }
]

[
    [
        projectName: "",
        projectDescription: "",
        items: [
            {
                "title": "",
                "content": "",
                "video_url": "",
                "poster_image": ""
            },
            {
                "title": "",
                "content": "",
                "video_url": "",
                "poster_image": ""
            }
        ]
    ],
    [
        projectName: "",
        projectDescription: "",
        items: [
            {
                "title": "",
                "content": "",
                "video_url": "",
                "poster_image": ""
            },
            {
                "title": "",
                "content": "",
                "video_url": "",
                "poster_image": ""
            }
        ]
    ]

]



//

//
const barWraper = document.querySelector('.bar_wraper');
const bar = document.querySelector('.bar');
const theContent = document.querySelector('.the_content h2');
const yearTitle = document.querySelector('.year_title h2');
const nextBtn = document.querySelector('.next_btn');
const prevBtn = document.querySelector('.prev_btn');
const innerBar = document.querySelector('.bar_inner');
const postVideoWrapper = document.querySelector('.post_videos')
const postVideo = postVideoWrapper.querySelector('iframe')
const PostImage = document.querySelector('.post_image img')

let currentIndexDot = 0;


// Month lookup for partial dates
const monthMap = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
};

// Reverse lookup function
function getMonthByNumber(num) {
    return Object.keys(monthMap).find(key => monthMap[key] === num);
}

// Convert string title to date object
function parseDate(title) {
    if (typeof (title) !== 'string') {
        title = title.toString();
    }
    const parts = title.split(' ');
    if (parts.length === 2) {
        const month = monthMap[parts[0]] ?? 0;
        const year = parseInt(parts[1]);
        return new Date(year, month);
    } else {
        return new Date(parseInt(title), 0); // January
    }
}

// Convert to months since start
const startDate = parseDate(new Date(yearsData[0].postDate).getFullYear());

const monthDiffs = yearsData.map(item => {
    const date = parseDate(new Date(item.postDate).getFullYear());
    return (date.getFullYear() - startDate.getFullYear()) * 12 + (date.getMonth() - startDate.getMonth());
});


const maxMonths = Math.max(...monthDiffs); // for % calculation

yearsData.forEach((year, i) => {
    const percent = (monthDiffs[i] / maxMonths) * 100;


    // Generate subPost title blocks if they exist
    const subPostTitles = year.subPosts
        ? year.subPosts.map(sub => `<p class="monthly_post">${new Date(sub.postDate).getDate()} - ${getMonthByNumber(new Date(sub.postDate).getMonth())}</p>`).join('')
        : '';

    const monthlyPosts = year.subPosts
        ? `<div class="monthly_posts">${subPostTitles}</div>`
        : '';

    const yearValue = year.postDate
        ? new Date(year.postDate).getFullYear()
        : new Date(year.subPosts?.[0]?.postDate).getFullYear();

    // Check if year.content is non-empty (remove HTML tags and trim)
    const cleanContent = year.content
        ? year.content.replace(/<\/?p>/g, '').trim()
        : '';

    const yearContent = cleanContent
        ? `<div class='year_content'><p>${cleanContent}</p></div>`
        : '';

    const dotHTML = `
        <div class="dot_wraper" style="position: absolute; left: ${percent}%;">
            <div class="dot"></div>
            <h2 class="year_text">${yearValue}</h2>
            ${monthlyPosts}
            ${yearContent}
        </div>
    `;

    barWraper.insertAdjacentHTML('beforeend', dotHTML);
});

// embed the youteb src
function extractYouTubeEmbedSrc(perPost) {
    if (perPost.videoUrl === undefined) {
        const subPostVideoUrl = perPost.subPosts[0].videoUrl;
        let srcMatch = subPostVideoUrl.match(/src="([^"]*)"/);
        return srcMatch ? srcMatch[1] : '';
    }
    let srcMatch = perPost.videoUrl.match(/src="([^"]*)"/);
    return srcMatch ? srcMatch[1] : '';
}


const dotWraper = document.querySelectorAll('.dot_wraper');
dotWraper.forEach((wraper, i) => {
    wraper.querySelector(".dot").addEventListener('click', () => {
        stopAutoplayIfActive();
        dotWraper.forEach((item) => {
            item.classList.remove('active');
        });
        wraper.classList.add('active');
        theContent.innerHTML = yearsData[i].content.replace(/<\/?p>/g, '').replace(/<br>/g, '').replace(/\n/g, '');
        yearTitle.textContent = yearsData[i].title;
        innerbarUpdate(i)
        if (extractYouTubeEmbedSrc(yearsData[i]) !== '') {
            postVideo.src = extractYouTubeEmbedSrc(yearsData[i]);
            postVideoWrapper.style.display = 'block';
            PostImage.style.display = 'none';

        } else {
            PostImage.src = yearsData[i].posterImage;
            PostImage.style.display = 'block';
            postVideoWrapper.style.display = 'none';
        }
        currentIndexDot = i;
        isSubPost()
    });
});

nextBtn.addEventListener('click', () => {
    stopAutoplayIfActive();
    currentIndexDot = (currentIndexDot + 1) % dotWraper.length;
    dotWraper.forEach((item) => {
        item.classList.remove('active');
    });
    theContent.innerHTML = yearsData[currentIndexDot].content.replace(/<\/?p>/g, '').replace(/<br>/g, '').replace(/\n/g, '');
    yearTitle.textContent = yearsData[currentIndexDot].title;

    if (extractYouTubeEmbedSrc(yearsData[currentIndexDot]) !== '') {
        postVideo.src = extractYouTubeEmbedSrc(yearsData[currentIndexDot]);
        postVideoWrapper.style.display = 'block';
        PostImage.style.display = 'none';

    } else {
        PostImage.src = yearsData[currentIndexDot].posterImage;
        PostImage.style.display = 'block';
        postVideoWrapper.style.display = 'none';
    }

    innerbarUpdate(currentIndexDot)
    dotWraper[currentIndexDot].classList.add('active');
    isSubPost();
});
prevBtn.addEventListener('click', () => {
    stopAutoplayIfActive();
    currentIndexDot = (currentIndexDot - 1 + dotWraper.length) % dotWraper.length;
    dotWraper.forEach((item) => {
        item.classList.remove('active');
    });
    theContent.innerHTML = yearsData[currentIndexDot].content.replace(/<\/?p>/g, '').replace(/<br>/g, '').replace(/\n/g, '');
    yearTitle.textContent = yearsData[currentIndexDot].title;

    if (extractYouTubeEmbedSrc(yearsData[currentIndexDot]) !== '') {
        postVideo.src = extractYouTubeEmbedSrc(yearsData[currentIndexDot]);
        postVideoWrapper.style.display = 'block';
        PostImage.style.display = 'none';

    } else {
        PostImage.src = yearsData[currentIndexDot].posterImage;
        PostImage.style.display = 'block';
        postVideoWrapper.style.display = 'none';
    }

    innerbarUpdate(currentIndexDot)
    dotWraper[currentIndexDot].classList.add('active');
    isSubPost();
});

const months = document.querySelectorAll('.monthly_post');

months.forEach((month, i) => {
    month.addEventListener('click', () => {
        months.forEach((m) => m.classList.remove('active'));
        month.classList.add('active');
        const currentYear = yearsData[currentIndexDot];
        if (currentYear.subPosts && currentYear.subPosts[i]) {
            theContent.innerHTML = currentYear.subPosts[i].content.replace(/<\/?p>/g, '').replace(/<br>/g, '').replace(/\n/g, '');
            yearTitle.textContent = currentYear.subPosts[i].title;
            if (extractYouTubeEmbedSrc(currentYear.subPosts[i]) !== '') {
                postVideo.src = extractYouTubeEmbedSrc(currentYear.subPosts[i]);
                postVideoWrapper.style.display = 'block';
                PostImage.style.display = 'none';
            } else {
                PostImage.src = currentYear.subPosts[i].posterImage;
                PostImage.style.display = 'block';
                postVideoWrapper.style.display = 'none';
            }
        }
    });
});


function innerbarUpdate(i) {
    const barPresent = (monthDiffs[i] / maxMonths) * 100;
    innerBar.style.width = `${barPresent}%`;
}

function isSubPost() {
    if (yearsData[currentIndexDot].subPosts !== undefined) {
        theContent.innerHTML = yearsData[currentIndexDot].subPosts[0].content.replace(/<\/?p>/g, '').replace(/<br>/g, '').replace(/\n/g, '');
        yearTitle.textContent = yearsData[currentIndexDot].subPosts[0].title;
        if (extractYouTubeEmbedSrc(yearsData[currentIndexDot].subPosts[0]) !== '') {
            postVideo.src = extractYouTubeEmbedSrc(yearsData[currentIndexDot].subPosts[0]);
            postVideoWrapper.style.display = 'block';
            PostImage.style.display = 'none';

        } else {
            PostImage.src = yearsData[currentIndexDot].subPosts[0].posterImage;
            PostImage.style.display = 'block';
            postVideoWrapper.style.display = 'none';
        }
    }
    const monthDovs = document.querySelectorAll('.monthly_posts');
    monthDovs.forEach((month) => {
        const monthTitle = month.querySelectorAll('p');
        monthTitle.forEach((title) => {
            title.classList.remove('active');
        });
        monthTitle[0].classList.add('active');
    })
}



const playBtn = document.querySelector('.play_btn');
const playing = document.querySelector('.playing');
let isPlaying = false;
let playIndex = 0;
let subIndex = 0;
let currentTimeout = null;

// Handle year dot click with optional subPost skip
function handleDotClick(index, skipSubPost = false) {
    dotWraper.forEach((item) => item.classList.remove('active'));
    dotWraper[index].classList.add('active');

    theContent.innerHTML = yearsData[index].content.replace(/<\/?p>/g, '').replace(/<br>/g, '').replace(/\n/g, '');
    yearTitle.textContent = yearsData[index].title;
    innerbarUpdate(index);
    currentIndexDot = index;

    if (!skipSubPost) {
        isSubPost();
    }
}

// Play timeline step-by-step
function playTimeline() {
    if (playIndex >= yearsData.length) {
        isPlaying = false;
        playBtn.classList.toggle('Play');
        playing.classList.toggle('active');
        return;
    }

    const currentYear = yearsData[playIndex];
    const currentDot = dotWraper[playIndex];

    // First load the year (without subPost auto-click)
    handleDotClick(playIndex, true);

    // If subPosts exist, go through them first
    if (currentYear.subPosts && subIndex < currentYear.subPosts.length) {
        const monthlyPosts = currentDot.querySelectorAll('.monthly_post');
        if (monthlyPosts[subIndex]) {
            monthlyPosts[subIndex].click(); // Manually click each subPost
        }
        subIndex++;
        currentTimeout = setTimeout(playTimeline, 3000); // Wait 5 sec for next subPost
    } else {
        // Move to next year
        playIndex++;
        subIndex = 0;
        currentTimeout = setTimeout(playTimeline, 3000); // Wait 5 sec for next year
    }
}

// Pause playback
function pauseTimeline() {
    clearTimeout(currentTimeout);
    isPlaying = false;
    playBtn.classList.toggle('Play');
    playing.classList.toggle('active');
}

// Button click toggle
playBtn.addEventListener('click', () => {
    if (!isPlaying) {
        isPlaying = true;
        playBtn.classList.toggle('Play');
        playing.classList.toggle('active');
        playIndex = 0;
        subIndex = 0;
        playTimeline();
    } else {
        pauseTimeline();
    }
});

function stopAutoplayIfActive() {
    if (isPlaying) {
        clearTimeout(currentTimeout);
        isPlaying = false;
        playBtn.classList.toggle('Play');
        playing.classList.toggle('active');
    }
}


dotWraper[0].querySelector(".dot").click();



// menu popup

const menuPopup = document.querySelector('.menu_popup');
const menuBtn = document.querySelector('.menu_btn .hamburger');
const body = document.body;

menuBtn.addEventListener('click', () => {
    menuPopup.classList.toggle('active');
    menuBtn.classList.toggle('active');

    // Toggle body scroll
    if (menuPopup.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});

// Close on outside click
document.addEventListener('click', (e) => {
    ~
    if (
        menuPopup.classList.contains('active') &&
        !menuPopup.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        menuPopup.classList.remove('active');
        menuBtn.classList.remove('active');
        body.style.overflow = '';
    }
});


// final blog post timline

const barWraper = document.querySelector('.bar_wraper');
const bar = document.querySelector('.bar');
const theContent = document.querySelector('.the_content h2');
const yearTitle = document.querySelector('.year_title h2');
const nextBtn = document.querySelector('.next_btn');
const prevBtn = document.querySelector('.prev_btn');
const playBtn = document.querySelector('.play_btn'); // added play button
const innerBar = document.querySelector('.bar_inner');
const PostImage = document.querySelector('.post_image img');

let postVideoWrapper = document.querySelector('.post_videos'); // safe early query
let postVideo = postVideoWrapper ? postVideoWrapper.querySelector('iframe') : null;

document.addEventListener('DOMContentLoaded', () => {
    // Ensure variables exist if iframe is added later
    postVideoWrapper = document.querySelector('.post_videos');
    postVideo = postVideoWrapper ? postVideoWrapper.querySelector('iframe') : null;
});

let currentIndexDot = 0;
let currentYearIndex = 0;
let currentSubIndex = null; // null = year view

let autoplayInterval = null; // autoplay timer

// Month lookup
const monthMap = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
};

// Parse date helpers
function parseDate(title) {
    if (typeof title !== 'string') title = title.toString();
    const parts = title.split(' ');
    if (parts.length === 2) {
        const month = monthMap[parts[0]] ?? 0;
        const year = parseInt(parts[1]);
        return new Date(year, month);
    }
    return new Date(parseInt(title), 0);
}

const startDate = parseDate(yearsData[0].projectName);
const monthDiffs = yearsData.map(item => {
    const date = parseDate(item.projectName);
    return (date.getFullYear() - startDate.getFullYear()) * 12 + (date.getMonth() - startDate.getMonth());
});
const maxMonths = Math.max(...monthDiffs);

// Build timeline dots
yearsData.forEach((year, i) => {
    const percent = (monthDiffs[i] / maxMonths) * 100;
    const subPostTitles = year.subPosts ? year.subPosts.map(() => `<div class="monthly_post"></div>`).join(' ') : '';
    const dotWraperCon = (year.subPosts && year.subPosts.length > 0) ? `<div class="dot_wraper">${subPostTitles}</div>` : '';
    const yearValue = year.projectName || '';
    const cleanContent = year.projectDescription ? year.projectDescription.replace(/<[^>]*>/g, '').trim() : '';
    const yearContent = cleanContent ? `<div class='year_content'><p>${cleanContent}</p></div>` : '';

    const dotHTML = `
    <div class="years" style="position: absolute; left: ${percent}%; width: 16px; height: 16px;">
        <div class="year_dot"></div>
        <h2 class="year_text">${yearValue}</h2>
        <div class="project_content">
            ${dotWraperCon}
            ${yearContent}
        </div>
    </div>
    `;
    barWraper.insertAdjacentHTML('beforeend', dotHTML);
});

function innerbarUpdate(i) {
    const barPresent = (monthDiffs[i] / maxMonths) * 100;
    innerBar.style.width = `${barPresent}%`;
}

const years = document.querySelectorAll('.years');
const months = document.querySelectorAll('.monthly_post');

function extractYouTubeEmbedSrc(perPost) {
    let srcMatch = perPost.video_url.match(/src="([^"]*)"/);
    return srcMatch ? srcMatch[1] : '';
}

function yearEvent(yearIndex) {
    years.forEach(item => item.classList.remove('active'));
    years[yearIndex].classList.add('active');
}

function resetData() {
    yearTitle.textContent = '';
    if (postVideoWrapper) postVideoWrapper.style.display = 'none';
    if (postVideo) postVideo.src = '';
    if (PostImage) {
        PostImage.src = '';
        PostImage.style.display = 'none';
    }
}

// Helpers
function showYearView(yIndex) {
    resetData();
    months.forEach(m => m.classList.remove('active'));
    yearEvent(yIndex);
    innerbarUpdate(yIndex);
}

function showSubpost(yIndex, sIndex) {
    const yearData = yearsData[yIndex];
    const sub = (yearData && yearData.subPosts) ? yearData.subPosts[sIndex] : null;
    if (!sub) return;

    months.forEach(m => m.classList.remove('active'));
    const posts = years[yIndex].querySelectorAll('.monthly_post');
    if (posts[sIndex]) posts[sIndex].classList.add('active');

    yearTitle.textContent = sub.title || '';

    const videoSrc = extractYouTubeEmbedSrc(sub);
    if (videoSrc && postVideo) {
        postVideo.src = videoSrc;
        postVideoWrapper.style.display = 'block';
        PostImage.style.display = 'none';
    } else {
        PostImage.src = sub.poster_image;
        PostImage.style.display = 'block';
        if (postVideoWrapper) postVideoWrapper.style.display = 'none';
    }

    yearEvent(yIndex);
    innerbarUpdate(yIndex);
}

// Navigation
function next() {
    const totalYears = yearsData.length;
    if (!totalYears) return;

    if (currentSubIndex === null) {
        const yearData = yearsData[currentYearIndex];
        const hasSubs = yearData && Array.isArray(yearData.subPosts) && yearData.subPosts.length > 0;

        if (hasSubs) {
            currentSubIndex = 0;
            showSubpost(currentYearIndex, currentSubIndex);
        } else {
            currentYearIndex = (currentYearIndex + 1) % totalYears;
            currentSubIndex = null;
            showYearView(currentYearIndex);
        }
        return;
    }

    currentSubIndex += 1;
    const yearData = yearsData[currentYearIndex];
    if (yearData.subPosts && currentSubIndex < yearData.subPosts.length) {
        showSubpost(currentYearIndex, currentSubIndex);
        return;
    }

    if (currentYearIndex === totalYears - 1) {
        stopAutoplay();
        return;
    }

    currentYearIndex++;
    currentSubIndex = null;
    showYearView(currentYearIndex);
}

function prev() {
    const totalYears = yearsData.length;
    if (!totalYears) return;

    if (currentSubIndex !== null) {
        currentSubIndex -= 1;
        if (currentSubIndex >= 0) {
            showSubpost(currentYearIndex, currentSubIndex);
        } else {
            currentSubIndex = null;
            showYearView(currentYearIndex);
        }
        return;
    }

    currentYearIndex -= 1;
    if (currentYearIndex < 0) currentYearIndex = totalYears - 1;

    const prevYear = yearsData[currentYearIndex];
    const hasSubs = prevYear && Array.isArray(prevYear.subPosts) && prevYear.subPosts.length > 0;

    if (hasSubs) {
        currentSubIndex = prevYear.subPosts.length - 1;
        showSubpost(currentYearIndex, currentSubIndex);
    } else {
        currentSubIndex = null;
        showYearView(currentYearIndex);
    }
}

// Autoplay
function startAutoplay() {
    playBtn.classList.add('active');
    stopAutoplay();
    autoplayInterval = setInterval(() => {
        next();
    }, 5000);
}

function stopAutoplay() {
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
        playBtn.classList.remove('active');
        autoplayInterval = null;
    }
}

// Event Listeners
years.forEach((yearDot, i) => {
    yearDot.querySelector('.year_dot').addEventListener('click', () => {
        stopAutoplay();
        years.forEach(item => item.classList.remove('active'));
        years[i].classList.add('active');
        months.forEach(m => m.classList.remove('active'));
        innerbarUpdate(i);
        resetData();
        currentYearIndex = i;
        currentSubIndex = null;
    });
});

years.forEach((yearElement, yearIndex) => {
    const monthlyPosts = yearElement.querySelectorAll('.monthly_post');
    monthlyPosts.forEach((month, monthIndex) => {
        month.addEventListener('click', () => {
            stopAutoplay();
            resetData();
            months.forEach(m => m.classList.remove('active'));
            month.classList.add('active');

            const currentYear = yearsData[yearIndex];
            if (currentYear.subPosts && currentYear.subPosts[monthIndex]) {
                yearTitle.textContent = currentYear.subPosts[monthIndex].title;
                const videoSrc = extractYouTubeEmbedSrc(currentYear.subPosts[monthIndex]);
                if (videoSrc && postVideo) {
                    postVideo.src = videoSrc;
                    postVideoWrapper.style.display = 'block';
                    PostImage.style.display = 'none';
                } else {
                    PostImage.src = currentYear.subPosts[monthIndex].poster_image;
                    PostImage.style.display = 'block';
                    if (postVideoWrapper) postVideoWrapper.style.display = 'none';
                }
            }

            innerbarUpdate(yearIndex);
            yearEvent(yearIndex);
            currentYearIndex = yearIndex;
            currentSubIndex = monthIndex;
        });
    });
});

// Default start
if (years[0].querySelector('.monthly_post')) {
    years[0].querySelector('.monthly_post').click();
} else {
    showYearView(0);
}

// Button events
nextBtn.addEventListener('click', () => { stopAutoplay(); next(); });
prevBtn.addEventListener('click', () => { stopAutoplay(); prev(); });
playBtn.addEventListener('click', () => { startAutoplay(); });





// custom slider
const slides = document.querySelectorAll('.slide_image');
let currentIndex = 0;
let isAnimating = false;

// Setup initial classes and backgrounds
slides.forEach((item, i) => {
    const classes = ['left', 'right', 'top'];
    const URL = item.querySelector('img').src;
    item.style.setProperty('--before-bg', `url("${URL}")`);
    item.classList.add(classes[i % classes.length]);
    item.style.zIndex = 0; // default z-index
});

// Initial active slide
slides[currentIndex].classList.add('active');
slides[currentIndex].style.zIndex = 2; // current on top

function sliderUpdate(nextIndex) {
    if (isAnimating) return; // prevent overlapping animations
    isAnimating = true;

    const currentSlide = slides[nextIndex];
    const previousSlide = slides[currentIndex];

    // Set z-index: current slide on top
    currentSlide.style.zIndex = 2;
    previousSlide.style.zIndex = 1;

    // Activate next slide
    currentSlide.style.transition = "all 1s ease";
    currentSlide.classList.add('active');

    // 🔹 Add "revars" class 0.4s later
    setTimeout(() => {
        currentSlide.classList.add('revars');
    }, 500);

    // Remove previous slide after transition completes
    const removePrev = () => {
        previousSlide.classList.remove('active', 'revars'); // cleanup
        previousSlide.style.transition = "none";
        previousSlide.style.zIndex = 0; // reset z-index
        previousSlide.removeEventListener('transitionend', removePrev);
        isAnimating = false;
    };

    currentSlide.addEventListener('transitionend', removePrev);
    // Fallback if transitionend doesn’t fire
    setTimeout(() => {
        if (previousSlide.classList.contains('active')) {
            removePrev();
        }
    }, 2000);
    currentIndex = nextIndex;
}

// Auto slide every 2 seconds
setInterval(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    sliderUpdate(nextIndex);
}, 3000);


//

const popupBtn = document.querySelector('.lines');
const mainPopup = document.querySelector('.menu_popup');
const sosalLogos = mainPopup.querySelectorAll('.custom_logo .elementor-grid-item');
const listBtns = mainPopup.querySelectorAll('.popup_btn-list');
const closebtn = mainPopup.querySelector('.popup_close-btn');
const menuList = mainPopup.querySelectorAll('.custom_menu-list .elementor-nav-menu--main .elementor-nav-menu > .menu-item')

popupBtn.addEventListener('click', () => {
    mainPopup.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // logo animation
    sosalLogos.forEach((logo, i) => {
        setTimeout(() => {
            logo.classList.add('animated');
        }, 200 * i);
    });

    // list animation
    listBtns.forEach((list, i) => {
        setTimeout(() => {
            list.classList.add('animated');
        }, 200 * i);
    });

    //close btn animation 
    setTimeout(() => {
        closebtn.classList.add('animated')
    }, 300);

    // menu animation
    menuList.forEach((item, i) => {
        setTimeout(() => {
            item.classList.add('animated')
        }, 200 * i);
    })
});


closebtn.addEventListener('click', () => {
    // logo animation
    sosalLogos.forEach((logo, i) => {
        setTimeout(() => {
            logo.classList.remove('animated');
        }, 200 * i);
    });

    // list animation
    listBtns.forEach((list, i) => {
        setTimeout(() => {
            list.classList.remove('animated');
        }, 200 * i);
    });

    //close btn animation 
    setTimeout(() => {
        closebtn.classList.remove('animated')
    }, 300);

    // menu animation
    menuList.forEach((item, i) => {
        setTimeout(() => {
            item.classList.remove('animated')
        }, 200 * i);
    })

    setTimeout(() => {
        mainPopup.style.display = 'none';
        document.body.style.overflow = 'scroll';
    }, 1000);
})



popupBtn.click()



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




// mayling website



const barWraper = document.querySelector('.bar_wraper');
const bar = document.querySelector('.bar');
const theContent = document.querySelector('.the_content h2');
const yearTitle = document.querySelector('.year_title h2');
const nextBtn = document.querySelector('.next_btn');
const prevBtn = document.querySelector('.prev_btn');
const playBtn = document.querySelector('.play_btn'); // added play button
const innerBar = document.querySelector('.bar_inner');
const postVideoWrapper = document.querySelector('.post_videos');
const postVideo = postVideoWrapper.querySelector('iframe');
const PostImage = document.querySelector('.post_image img');

let currentIndexDot = 0;
let currentYearIndex = 0;
let currentSubIndex = null; // null = year view

let autoplayInterval = null; // autoplay timer

// Month lookup
const monthMap = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
};

// Parse date helpers
function parseDate(title) {
    if (typeof title !== 'string') title = title.toString();
    const parts = title.split(' ');
    if (parts.length === 2) {
        const month = monthMap[parts[0]] ?? 0;
        const year = parseInt(parts[1]);
        return new Date(year, month);
    }
    return new Date(parseInt(title), 0);
}

const startDate = parseDate(yearsData[0].projectName);
const monthDiffs = yearsData.map(item => {
    const date = parseDate(item.projectName);
    return (date.getFullYear() - startDate.getFullYear()) * 12 + (date.getMonth() - startDate.getMonth());
});
const maxMonths = Math.max(...monthDiffs);

// Build timeline dots
yearsData.forEach((year, i) => {
    const percent = (monthDiffs[i] / maxMonths) * 100;
    const subPostTitles = year.subPosts ? year.subPosts.map(() => `<div class="monthly_post"></div>`).join(' ') : '';
    const dotWraperCon = (year.subPosts && year.subPosts.length > 0) ? `<div class="dot_wraper">${subPostTitles}</div>` : '';
    const yearValue = year.projectName || '';
    const cleanContent = year.projectDescription ? year.projectDescription.replace(/<[^>]*>/g, '').trim() : '';
    const yearContent = cleanContent ? `<div class='year_content'><p>${cleanContent}</p></div>` : '';

    const dotHTML = `
    <div class="years" style="position: absolute; left: ${percent}%; width: 16px; height: 16px;">
      <div class="year_dot"></div>
      <h2 class="year_text">${yearValue}</h2>
      <div class="project_content">
        ${dotWraperCon}
        ${yearContent}
      </div>
    </div>
  `;
    barWraper.insertAdjacentHTML('beforeend', dotHTML);
});

function innerbarUpdate(i) {
    const barPresent = (monthDiffs[i] / maxMonths) * 100;
    innerBar.style.width = `${barPresent}%`;
}

const years = document.querySelectorAll('.years');
const months = document.querySelectorAll('.monthly_post');

function extractYouTubeEmbedSrc(perPost) {
    let srcMatch = perPost.video_url.match(/src="([^"]*)"/);
    return srcMatch ? srcMatch[1] : '';
}

function yearEvent(yearIndex) {
    years.forEach(item => item.classList.remove('active'));
    years[yearIndex].classList.add('active');
}

function resetData() {
    yearTitle.textContent = '';
    postVideo.src = '';
    postVideoWrapper.style.display = 'none';
    PostImage.src = '';
    PostImage.style.display = 'none';
}

// Helpers
function showYearView(yIndex) {
    resetData();
    months.forEach(m => m.classList.remove('active'));
    yearEvent(yIndex);
    innerbarUpdate(yIndex);
}

function showSubpost(yIndex, sIndex) {
    const yearData = yearsData[yIndex];
    const sub = (yearData && yearData.subPosts) ? yearData.subPosts[sIndex] : null;
    if (!sub) return;

    months.forEach(m => m.classList.remove('active'));
    const posts = years[yIndex].querySelectorAll('.monthly_post');
    if (posts[sIndex]) posts[sIndex].classList.add('active');

    yearTitle.textContent = sub.title || '';

    const videoSrc = extractYouTubeEmbedSrc(sub);
    if (videoSrc) {
        postVideo.src = videoSrc;
        postVideoWrapper.style.display = 'block';
        PostImage.style.display = 'none';
    } else {
        PostImage.src = sub.poster_image;
        PostImage.style.display = 'block';
        postVideoWrapper.style.display = 'none';
    }

    yearEvent(yIndex);
    innerbarUpdate(yIndex);
}

// Navigation
function next() {
    const totalYears = yearsData.length;
    if (!totalYears) return;

    if (currentSubIndex === null) {
        const yearData = yearsData[currentYearIndex];
        const hasSubs = yearData && Array.isArray(yearData.subPosts) && yearData.subPosts.length > 0;

        if (hasSubs) {
            currentSubIndex = 0;
            showSubpost(currentYearIndex, currentSubIndex);
        } else {
            currentYearIndex = (currentYearIndex + 1) % totalYears;
            currentSubIndex = null;
            showYearView(currentYearIndex);
        }
        return;
    }

    currentSubIndex += 1;
    const yearData = yearsData[currentYearIndex];
    if (yearData.subPosts && currentSubIndex < yearData.subPosts.length) {
        showSubpost(currentYearIndex, currentSubIndex);
        return;
    }

    // Stop autoplay at end
    if (currentYearIndex === totalYears - 1) {
        stopAutoplay();
        return;
    }

    currentYearIndex++;
    currentSubIndex = null;
    showYearView(currentYearIndex);
}

function prev() {
    const totalYears = yearsData.length;
    if (!totalYears) return;

    if (currentSubIndex !== null) {
        currentSubIndex -= 1;
        if (currentSubIndex >= 0) {
            showSubpost(currentYearIndex, currentSubIndex);
        } else {
            currentSubIndex = null;
            showYearView(currentYearIndex);
        }
        return;
    }

    currentYearIndex -= 1;
    if (currentYearIndex < 0) currentYearIndex = totalYears - 1;

    const prevYear = yearsData[currentYearIndex];
    const hasSubs = prevYear && Array.isArray(prevYear.subPosts) && prevYear.subPosts.length > 0;

    if (hasSubs) {
        currentSubIndex = prevYear.subPosts.length - 1;
        showSubpost(currentYearIndex, currentSubIndex);
    } else {
        currentSubIndex = null;
        showYearView(currentYearIndex);
    }
}

// Autoplay
function startAutoplay() {
    playBtn.classList.add('active')
    stopAutoplay();
    autoplayInterval = setInterval(() => {
        next();
    }, 5000);
}

function stopAutoplay() {
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
        playBtn.classList.remove('active')
        autoplayInterval = null;
    }
}

// Event Listeners
years.forEach((yearDot, i) => {
    yearDot.querySelector('.year_dot').addEventListener('click', () => {
        stopAutoplay();
        years.forEach(item => item.classList.remove('active'));
        years[i].classList.add('active');
        months.forEach(m => m.classList.remove('active'));
        innerbarUpdate(i);
        resetData();
        currentYearIndex = i;
        currentSubIndex = null;
    });
});

years.forEach((yearElement, yearIndex) => {
    const monthlyPosts = yearElement.querySelectorAll('.monthly_post');
    monthlyPosts.forEach((month, monthIndex) => {
        month.addEventListener('click', () => {
            stopAutoplay();
            resetData();
            months.forEach(m => m.classList.remove('active'));
            month.classList.add('active');

            const currentYear = yearsData[yearIndex];
            if (currentYear.subPosts && currentYear.subPosts[monthIndex]) {
                yearTitle.textContent = currentYear.subPosts[monthIndex].title;
                const videoSrc = extractYouTubeEmbedSrc(currentYear.subPosts[monthIndex]);
                if (videoSrc) {
                    postVideo.src = videoSrc;
                    postVideoWrapper.style.display = 'block';
                    PostImage.style.display = 'none';
                } else {
                    PostImage.src = currentYear.subPosts[monthIndex].poster_image;
                    PostImage.style.display = 'block';
                    postVideoWrapper.style.display = 'none';
                }
            }

            innerbarUpdate(yearIndex);
            yearEvent(yearIndex);
            currentYearIndex = yearIndex;
            currentSubIndex = monthIndex;
        });
    });
});

// Default start
if (years[0].querySelector('.monthly_post')) {
    years[0].querySelector('.monthly_post').click();
} else {
    showYearView(0);
}

// Button events
nextBtn.addEventListener('click', () => { stopAutoplay(); next(); });
prevBtn.addEventListener('click', () => { stopAutoplay(); prev(); });
playBtn.addEventListener('click', () => { startAutoplay(); });



// contact

const contactForm = document.querySelector('.contact_popup')
const popupClose = document.querySelector('.popup_close')
const popupOpen = document.querySelector('[type="popup_open"]')

popupOpen.addEventListener('click', () => {
    contactForm.classList.add('active')
})

popupClose.addEventListener('click', () => {
    contactForm.classList.remove('active')
})


// scroll animation
const scrollSec = document.querySelector('.scroll_section');
const imgWrapper = scrollSec.querySelector('.img_slide_wrap');

document.addEventListener('scroll', () => {
    const screenSize = window.innerHeight;
    const rect = scrollSec.getBoundingClientRect();
    const screenMid = screenSize / 2;

    if (rect.top < screenMid && rect.bottom > screenMid) {
        // progress: 0 → 1 while scrolling one full viewport height
        const progress = Math.min(Math.max((screenMid - rect.top) / screenSize, 0), 1);

        const start = 100;
        const end = 33;
        const theWidth = start - progress * (start - end);

        imgWrapper.style.width = `${theWidth}vw`;
        imgWrapper.style.insetInlineStart = "auto";
    }
});


const menuPopup = document.querySelector('.menu_popup');
const menuBtn = document.querySelector('.menu_btn .hubbargen');

menuBtn.addEventListener('click', () => {
    console.log('ok');

    menuPopup.classList.toggle('active');
    menuBtn.classList.toggle('active');

    if (menuPopup.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});




const targetBefore = document.querySelector('.twentytwenty-before');
const targetAfter = document.querySelector('.twentytwenty-after');

// Create observer
const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            callbackFunction();
        }
    }
});

observer.observe(targetBefore, {
    attributes: true,
    attributeFilter: ['style']
});

function callbackFunction() {
    let match = targetBefore.style.clip.match(/rect\([^,]+,\s*([0-9.]+)px/);
    let rightValue = parseFloat(match[1]);

    setTimeout(() => {
        targetBefore.style.clipPath = `polygon(0 0, ${rightValue + 100}px 0, ${rightValue - 100}px 100%, 0 100%)`;
        targetAfter.style.clipPath = `polygon(${rightValue - 100}px 0, 100% 0, 100% 100%, ${rightValue + 100}px 100%)`;
        targetBefore.style.clip = 'none'; // remove old clip
        targetAfter.style.clip = 'none'; // remove old clip
    }, 100);
}

setTimeout(() => {
    document.querySelectorAll('.twentytwenty-handle').forEach(lithing => {
        lithing.style = 'border: none !important; box-shadow: none !important';
    });
}, 200);


// xml to json and display data
// fach the xml data
fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("http://rpsandbox.airpear.net:8080/NewDevApi/api/properties?address=111"))
    .then(res => res.text())
    .then(str => {
        // Parse XML string into DOM
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(str, "application/xml");

        // Convert XML → JS object
        let json = xmlToJson(xmlDoc);
        console.log(json);

        const buildingWrap = document.querySelector('.building_wrap');
        const template = buildingWrap.querySelector('.buildings');

        json.list.properties.forEach((p, i) => {
            const building = template.cloneNode(true);

            building.querySelector('.building_type').textContent = p.buildingtype?.['#text'] || ' ';
            building.querySelector('.building_name').textContent = p.buildingname?.['#text'] || ' ';

            let address = building.href;
            building.href = `${address}?id=${p.id?.['#text'] || ''}`;

            buildingWrap.appendChild(building);

        });

        template.remove(); // remove template after use
        return json;

    }).then(x => window.bi = x);



function xmlToJson(xml) {
    // Return text node
    if (xml.nodeType === 3) {
        return xml.nodeValue.trim();
    }

    let obj = {};
    if (xml.attributes && xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (let attr of xml.attributes) {
            obj["@attributes"][attr.nodeName] = attr.nodeValue;
        }
    }

    // Process child nodes
    if (xml.hasChildNodes()) {
        for (let child of xml.childNodes) {
            let name = child.nodeName;
            let value = xmlToJson(child);

            if (value !== "") {
                if (obj[name] === undefined) {
                    obj[name] = value;
                } else {
                    // Turn into array if multiple children with same name
                    if (!Array.isArray(obj[name])) {
                        obj[name] = [obj[name]];
                    }
                    obj[name].push(value);
                }
            }
        }
    }

    return obj;
}



//
const customPopup = document.querySelector('.custom_popup');
const popupMenu = customPopup.querySelector('.popup_menu');
const subMenuItems = popupMenu.querySelectorAll(
    '.elementor-nav-menu--main .elementor-nav-menu .sub-menu.elementor-nav-menu--dropdown'
);

// Build custom submenus
subMenuItems.forEach((subMenu) => {
    const subMenuDiv = document.createElement('div');
    subMenuDiv.classList.add('sub_menu_con');

    // Back button
    const backBtn = document.createElement('h3');
    backBtn.classList.add('back_btn');
    backBtn.textContent = 'Back';
    subMenuDiv.appendChild(backBtn);

    // Move submenu items into custom container
    subMenu.querySelectorAll('li.menu-item').forEach((item) => {
        const itemHeading = document.createElement('h3');
        itemHeading.classList.add('menu_item_heading');
        itemHeading.innerHTML = item.innerHTML; // keep inner link structure
        subMenuDiv.appendChild(itemHeading);
        item.remove(); // remove original
    });
    customPopup.appendChild(subMenuDiv);
});

// Event bindings
const eventItems = popupMenu.querySelectorAll('.elementor-nav-menu--main .menu-item-has-children');
const subMenus = customPopup.querySelectorAll('.sub_menu_con');
const backBtns = customPopup.querySelectorAll('.back_btn');

eventItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // stop link navigation
        subMenus.forEach((sm) => sm.classList.remove('active'));
        if (subMenus[index]) {
            subMenus[index].classList.add('active');
        }
    });
});

backBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        subMenus.forEach((sm) => sm.classList.remove('active'));
    });
});



const menuIcon = document.querySelector('.menu_icon');
menuIcon.addEventListener('click', () => {
    customPopup.classList.toggle('active');
    menuIcon.classList.toggle('active');
    subMenus.forEach((sm) => sm.classList.remove('active'));
    if (customPopup.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});


//  custom accordion feature

const accordionsContainer = document.querySelectorAll('._actodian-con');
accordionsContainer.forEach(container => {
    const accordions = container.querySelectorAll('._actodian .e-n-accordion-item');
    const accordionImages = container.querySelectorAll('._actodian-images');
    console.log(accordions);

    accordions.forEach((accordion, index) => {
        accordion.addEventListener('click', () => {
            accordionImages.forEach(img => img.classList.remove('active'));
            accordionImages[index].classList.add('active');
        });
    });
});



// hero section feature
const sliderOneData = [
    { id: 1, img: '/wp-content/uploads/2025/09/remote-camp-modular-buildings-exterior-2-1.jpg', content: 'The most flexible camp<br> management system<br> on the market' },
    { id: 2, img: '/wp-content/uploads/2025/09/aerial-large-remote-lodge-civeo-oil-sands.jpg', content: 'Maximize room<br> utilization before<br> you buy, build or rent' },
    { id: 3, img: '/wp-content/uploads/2025/09/camp-room-bed-side-table-chair-1.jpg', content: 'Easy-to-use tools<br> to book and assign<br> rooms at your camp' },
    { id: 4, img: '/wp-content/uploads/2025/09/camp-attendant-with-towels-in-hallway-1.jpg', content: 'Technology to help<br> your staff turn rooms<br> faster than ever' },
    { id: 5, img: '/wp-content/uploads/2025/09/man-walking-down-row-between-camp-buildings.png', content: 'Designed to manage<br> camps large or small,<br> in any location' }
];

const sliderTwoData = [
    { id: 1, img: '/wp-content/uploads/2025/09/fifo-workers-boarding-charter-plane-tarmac-1-1.jpg', content: 'A single system to book and manage all your FIFO transport' },
    { id: 2, img: '/wp-content/uploads/2025/09/charter-bus-fifo-workers-passengers-1-1.jpg', content: 'Book and manage<br> charter flights,<br> buses and more' },
    { id: 3, img: '/wp-content/uploads/2025/09/man-camp-plane-parked-fbo-1-1.jpg', content: 'Manage travel and rooms for your workers in one platform' },
    { id: 4, img: '/wp-content/uploads/2025/09/aisle-commercial-full-plane-1-scaled.jpg', content: 'Book rich GDS content, all within policy' }
];

const sliders = document.querySelectorAll('._slide');
const sliderWrap = document.querySelector('.slide_wraper');
const sliderOne = document.querySelector('._slide._one');
const sliderTwo = document.querySelector('._slide._two');
const SliderBtns = document.querySelectorAll('._btn');
const sliderCount = document.querySelector('.slider_count');
const sliderCountBullets = sliderCount.querySelectorAll('._bulet');
const tabBtnsCon = document.querySelector('.tab_btns');
const tabBtns = document.querySelectorAll('.tab_btn');
const tabCons = document.querySelector('._tab_con');


// reusable slider logic
function startSlider(sliderEl, data) {
    const contentBox = sliderEl.querySelector('._content');
    const bullets = sliderEl.querySelectorAll('.bullet');

    let index = 0;
    let interval;

    function showSlide(i) {
        const item = data[i];
        bullets.forEach(b => b.classList.remove('active'));
        if (bullets[i]) bullets[i].classList.add('active');

        sliderEl.style.backgroundImage = `url(${item.img})`;
        setTimeout(() => {
            contentBox.classList.add('active');
        }, 1000);
        contentBox.querySelector('h2').innerHTML = item.content;
    }

    function startAuto() {
        interval = setInterval(() => {
            index = (index + 1) % data.length;
            contentBox.classList.remove('active');
            setTimeout(() => showSlide(index), 100);
        }, 4000);
    }

    // bullet click → manual control
    bullets.forEach((b, i) => {
        b.addEventListener('click', () => {
            clearInterval(interval); // stop auto when clicked
            index = i;
            showSlide(index);
            startAuto(); // restart auto
        });
    });
    // init
    showSlide(index);
    startAuto();
}
function updateTarget(target) {
    [sliderWrap, sliderCount, tabBtnsCon, tabCons].forEach(el => el.classList.remove('_left', '_right'));
    [sliderWrap, sliderCount, tabBtnsCon, tabCons].forEach(el => el.classList.add(target));
}
SliderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        updateTarget(btn.getAttribute('act'));
    });
});
sliderCountBullets.forEach((bulet, i) => {
    bulet.addEventListener('click', () => {
        updateTarget(bulet.getAttribute('act'));
    });
});

tabBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        updateTarget(btn.getAttribute('act'));
    });
});
startSlider(sliderOne, sliderOneData);
startSlider(sliderTwo, sliderTwoData);



// 
const cards = document.querySelectorAll('._card');

cards.forEach((card,) => {
    const texts = card.querySelectorAll('._text');
    card.addEventListener('mouseenter', () => {
        texts.forEach((text, i) => {
            setTimeout(() => {
                text.classList.add('active')
            }, i * 100);
        })
    })
    card.addEventListener('mouseleave', () => {
        texts.forEach((text) => {
            text.classList.remove('active')
        })
    })
})


// custom slider
const customSlider = document.querySelector('.scale_slider');
const tsSlides = customSlider.querySelectorAll('.swiper-slide');

const content = document.createElement('div');
content.classList.add('slider_content');
customSlider.appendChild(content);

const sliderObserver = new MutationObserver((mutationsList) => {
    mutationsList.forEach(mutation => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
            const target = mutation.target;

            if (target.classList.contains("swiper-slide-next")) {
                // console.log("Slide became active:", target);

                // Find elementor widget inside this slide
                const widget = target.querySelector('.elementor-widget-image');
                if (widget) {
                    const shortTitle = widget.getAttribute('short-title') || '';
                    const title = widget.getAttribute('title') || '';
                    const textContent = widget.getAttribute('content') || '';
                    const url = widget.getAttribute('url') || '';

                    // Inject into content div
                    content.innerHTML = `
            <h4>${shortTitle}</h4>
            <h2>${title}</h2>
            <p>${textContent}</p>
            ${url ? `<a href="${url}" target="_blank">Learn More</a>` : ''}`
                }
            } else {
                console.log("Slide is no longer active:", target);
            }
        }
    });
});

tsSlides.forEach((item) => {
    sliderObserver.observe(item, {
        attributes: true,
        attributeFilter: ["class"]
    });
});




// popup
const popupBtn = document.querySelector('.popup_btn');
const popupContent = document.querySelector('._popup');

popupBtn.addEventListener('click', () => {
    popupBtn.classList.toggle('active');
    popupContent.classList.toggle('active')
    if (popupBtn.classList.contains('active') && popupContent.classList.contains('active')) {
        document.body.style.overflow = 'hiden'
    } else {
        document.body.style.overflow = ''
    }
})


const slider = document.querySelector('.custom_slider');
const slides = slider.querySelectorAll('.swiper-slide');
const current = document.querySelector('.current-num span');
const total = document.querySelector('.total-num span');
const slideLeftBtn = document.querySelector('.slide_left');
const slideRightBtn = document.querySelector('.slide_right');

function updateSlideNumbers() {
    const activeSlide = slider.querySelector('.swiper-slide-active');
    if (!activeSlide) return;

    const ariaLabel = activeSlide.getAttribute('aria-label');
    if (!ariaLabel) return;

    const parts = ariaLabel.split('/').map(part => part.trim());
    const currentNum = parts[0].padStart(2, '0');
    const totalNum = parts[1].padStart(2, '0');

    current.textContent = currentNum;
    total.textContent = totalNum;
}

function delayedUpdate() {
    setTimeout(updateSlideNumbers, 150);
}

const SliderObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const target = mutation.target;
            if (target.classList.contains('swiper-slide-active')) {
                delayedUpdate();
            }
        }
    });
});

slides.forEach((item) => {
    SliderObserver.observe(item, { attributes: true });
});
slideLeftBtn.addEventListener('click', () => {
    const prevBtn = slider.querySelector('.elementor-swiper-button-prev');
    if (prevBtn) prevBtn.click();
});

slideRightBtn.addEventListener('click', () => {
    const nextBtn = slider.querySelector('.elementor-swiper-button-next');
    if (nextBtn) nextBtn.click();
});

updateSlideNumbers();



window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const lines = document.querySelectorAll('.line');

    lines.forEach((line, i) => {
        const speed = parseFloat(line.dataset.speed);
        const moveY = scrollY * (speed / 100); // speed controls movement ratio

        line.style.transform = `translateY(${moveY}px)`;

        if (moveY > 1500) {
            line.style.opacity = 0;
        } else {
            line.style.opacity = 1;
        }
        if (i === 0 && moveY > 550) {
            line.style.opacity = 0;
        } else {
            line.style.opacity = 1;
        }
        if (i === 2 && moveY > 1350) {
            line.style.opacity = 0;
        } else {
            line.style.opacity = 1;
        }
    });
});




const slider = document.querySelector('.custom_slider');
const slides = slider.querySelectorAll('.swiper-slide');
const titleContent = document.querySelector('.slider_title h2')
const descriptionContent = document.querySelector('.slider_description h2')
const slideLeftBtn = document.querySelector('.slide_left');
const slideRightBtn = document.querySelector('.slide_right');

function updateSlideNumbers() {
    const activeSlide = slider.querySelector('.swiper-slide-active');
    if (!activeSlide) return;

    titleContent.innerHTML = activeSlide.querySelector('.elementor-slide-heading').innerHTML
    descriptionContent.innerHTML = activeSlide.querySelector('.elementor-slide-description').innerHTML
}

function delayedUpdate() {
    setTimeout(updateSlideNumbers, 150);
}

const SliderObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const target = mutation.target;
            if (target.classList.contains('swiper-slide-active')) {
                delayedUpdate();
            }
        }
    });
});

slides.forEach((item) => {
    SliderObserver.observe(item, { attributes: true });
});
slideLeftBtn.addEventListener('click', () => {
    const prevBtn = slider.querySelector('.elementor-swiper-button-prev');
    if (prevBtn) prevBtn.click();
});

slideRightBtn.addEventListener('click', () => {
    const nextBtn = slider.querySelector('.elementor-swiper-button-next');
    if (nextBtn) nextBtn.click();
});

updateSlideNumbers();


// input type date acrodian 
const showOriginalFieldForDemo = true;
const isAndroid = true;
const fieldDateOfBirth = document.querySelector('.dob');
const fieldStyle = window.getComputedStyle(fieldDateOfBirth);
let month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// use localized month names
if (window.Intl && window.Intl.DateTimeFormat) {
    try {
        var formatter = new window.Intl.DateTimeFormat([], { month: 'long', timeZone: 'UTC' });
        var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => {
            var mm = month < 10 ? '0' + month : month;
            return new Date('0000-' + mm + '-01T00:00:00+00:00');
        });
        month_names = months.map(date => formatter.format(date));
    } catch (e) { }
}

if (isAndroid) {
    const dateWrapper = document.createElement('div');
    dateWrapper.id = 'date-select-wrapper';
    fieldDateOfBirth.parentNode.appendChild(dateWrapper);

    const dateFieldDay = document.createElement('select');
    const dateFieldMonth = document.createElement('select');
    const dateFieldYear = document.createElement('select');

    const dateFields = [dateFieldYear, dateFieldMonth, dateFieldDay];

    // copy over styles from text input
    if (fieldStyle) {
        var styleOptions = ['boxSizing', 'backgroundColor', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'height', 'font', 'verticalAlign'];
        styleOptions.forEach(function (s) {
            if (fieldStyle[s]) {
                dateFields.forEach(function (f) {
                    f.style[s] = fieldStyle[s];
                });
            }
        });
    }

    const emptyDayOption = document.createElement('option');
    emptyDayOption.value = '';
    emptyDayOption.textContent = 'Day';
    dateFieldDay.add(emptyDayOption);
    const emptyMonthOption = document.createElement('option');
    emptyMonthOption.value = '';
    emptyMonthOption.textContent = 'Month';
    dateFieldMonth.add(emptyMonthOption);
    const emptyYearOption = document.createElement('option');
    emptyYearOption.value = '';
    emptyYearOption.textContent = 'Year';
    dateFieldYear.add(emptyYearOption);

    const dayOptions = [emptyDayOption];
    for (var i = 1; i <= 31; i++) {
        var newOption = document.createElement('option');
        newOption.value = (i < 10 ? '0' : '') + i;
        newOption.textContent = i;
        dayOptions.push(newOption);
        dateFieldDay.add(newOption);
    }

    const monthOptions = [emptyMonthOption];
    for (var i = 0; i < month_names.length; i++) {
        var newOption = document.createElement('option');
        newOption.value = (i < 9 ? '0' : '') + (i + 1);
        newOption.textContent = month_names[i];
        monthOptions.push(newOption);
        dateFieldMonth.add(newOption);
    }

    const yearEnd = new Date().getFullYear();
    const yearStart = yearEnd - 120;
    const yearOptions = [emptyYearOption];
    for (var i = yearEnd; i >= yearStart; i--) {
        var newOption = document.createElement('option');
        newOption.value = i;
        newOption.textContent = i;
        yearOptions.push(newOption);
        dateFieldYear.add(newOption);
    }

    dateWrapper.appendChild(dateFieldDay);
    dateWrapper.appendChild(dateFieldMonth);
    dateWrapper.appendChild(dateFieldYear);

    const dateChangeHandler = function () {
        // var day = parseInt( dateFieldDay.value, 10 );
        const month = parseInt(dateFieldMonth.value, 10);
        const year = parseInt(dateFieldYear.value, 10);
        let maxDays = 31;

        if (month === 2) {
            const isLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
            maxDays = isLeapYear ? 29 : 28;
        } else if ([2, 4, 6, 9, 11].indexOf(month) >= 0) {
            maxDays = 30;
        }

        dayOptions.filter(function (o, i) {
            o.hidden = i > maxDays;
            if (o.hidden && o.selected) {
                emptyDayOption.selected = true;
            }
        });

        let allSet = true;
        dateFields.forEach(field => {
            const isEmpty = !field.value;
            if (isEmpty) {
                allSet = false;
            }
            field.classList[isEmpty ? 'add' : 'remove']('show-placeholder');
        });

        if (allSet) {
            fieldDateOfBirth.value = dateFields.map(function (field) {
                return field.value;
            }).join('-');
        } else {
            fieldDateOfBirth.value = '';
        }
    };

    // if the original input already has a value, set the selected options accordingly
    if (fieldDateOfBirth.value) {
        const ymd = fieldDateOfBirth.value.split('-');
        yearOptions.filter(function (o) {
            if (o.value === ymd[0]) {
                o.selected = true;
            }
        });
        monthOptions[parseInt(ymd[1], 10)].selected = true;
        dayOptions[parseInt(ymd[2], 10)].selected = true;
    }

    dateFieldDay.addEventListener('change', dateChangeHandler);
    dateFieldMonth.addEventListener('change', dateChangeHandler);
    dateFieldYear.addEventListener('change', dateChangeHandler);
    dateChangeHandler();

    if (!showOriginalFieldForDemo) {
        fieldDateOfBirth.type = 'hidden';
    }
}

(() => {
    const customSlider = document.querySelector('.custom_slider')
    const sliderWrap = customSlider.querySelector('.slider_wrap');
    const slides = sliderWrap.querySelectorAll('.slide');
    const slideNext = customSlider.querySelector('.slide_next')
    const slidePrev = customSlider.querySelector('.slide_prev')

    let currentSlide = 0;

    function update() {
        slides.forEach((item) => item.classList.remove('active'));
        slides[currentSlide].classList.add('active');

        const bgUrl = slides[currentSlide].getAttribute('ima-data');
        customSlider.style.backgroundImage = `url(${bgUrl})`;

        const slideWidth = slides[0].offsetWidth;
        const gap = 3.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        const middleWidth = window.innerWidth / 2;
        const totalSlideWidth = slideWidth + gap;
        const activeCenter = (currentSlide * totalSlideWidth) + (slideWidth / 2);
        const translateX = middleWidth - activeCenter;
        sliderWrap.style.transform = `translateX(${translateX}px)`;
    }
    update();
    slideNext.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        update();

    });

    slidePrev.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = slides.length - 1;
        }
        update();
    });
    document.addEventListener('resize', update)
})()

//

const svg = document.querySelector('.lend-map svg');
const paths = svg.querySelectorAll('path');
const allStates = document.querySelector('.states h2')
const stats = []

paths.forEach((item) => {
    const stat = item.getAttribute('data-url') && item.getAttribute('data-url') !== 'false' ? item.id : ''
    if (stat) stats.push({
        id: item.id,
        url: item.getAttribute('data-url')
    });
})
stats.sort((a, b) => a.id.localeCompare(b.id, undefined, { sensitivity: 'base' }));

allStates.textContent = '';
stats.forEach((item, index) => {
    const span = document.createElement('span');
    span.classList.add('local-stats')
    span.textContent = item.id;
    allStates.appendChild(span);

    if (index < stats.length - 1) {
        allStates.append(', ');
    }
});

paths.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        const statSpan = Array.from(document.querySelectorAll('.local-stats'))
            .find(span => span.textContent === item.id);
        if (statSpan) statSpan.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
        const statSpan = Array.from(document.querySelectorAll('.local-stats'))
            .find(span => span.textContent === item.id);
        if (statSpan) statSpan.classList.remove('active');
    });
});


// custom slider and grab funtionality
const sliderCon = document.querySelector('.slider_continer')
const items = document.querySelectorAll('.carousel-item');
const leftBtn = document.querySelector('.nav.left');
const rightBtn = document.querySelector('.nav.right');
const carousel = document.querySelector('.custom_carousel');
const dotsWrap = document.querySelector('.slider_dots')
let current = 0;
let autoplay;


// navigator 
items.forEach((item) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsWrap.appendChild(dot);
});
const dots = dotsWrap.querySelectorAll('.dot')


// Update classes
function update() {
    items.forEach(i => i.className = 'carousel-item');
    dots.forEach(dot => dot.className = 'dot')
    const total = items.length;
    const prev1 = (current - 1 + total) % total;
    const prev2 = (current - 2 + total) % total;
    const next1 = (current + 1) % total;
    const next2 = (current + 2) % total;
    items[current].classList.add('active');
    items[prev1].classList.add('prev1');
    items[prev2].classList.add('prev2');
    items[next1].classList.add('next1');
    items[next2].classList.add('next2');

    dots[current].classList.add('active');
}

dots.forEach((item, i) => {
    item.addEventListener('click', () => {
        current = i;
        stopAutoplay()
        update()
        startAutoplay()
    })
})

function next() {
    current = (current + 1) % items.length;
    update();
}
function prev() {
    current = (current - 1 + items.length) % items.length;
    update();
}



// rightBtn.addEventListener('click',()=>{stopAutoplay();next();startAutoplay();});
// leftBtn.addEventListener('click',()=>{stopAutoplay();prev();startAutoplay();});

// Autoplay
function startAutoplay() { autoplay = setInterval(next, 4000); }
function stopAutoplay() { clearInterval(autoplay); }

// Drag/Grab
let startX = 0, currentX = 0, isDragging = false;
const getX = e => e.type.includes('touch') ? e.touches[0].clientX : e.clientX;

function dragStart(e) {
    startX = getX(e);
    isDragging = true;
    stopAutoplay();
}
function dragMove(e) {
    if (!isDragging) return;
    currentX = getX(e);
    const diff = currentX - startX;
    items.forEach(i => i.style.transform += ` translateX(${diff / 50}px)`);
}
function dragEnd(e) {
    if (!isDragging) return;
    const diff = currentX - startX;
    isDragging = false;
    if (diff > 60) prev();
    else if (diff < -60) next();
    items.forEach(i => i.style.transform = '');
    startAutoplay();
}


carousel.addEventListener('pointerdown', dragStart);
window.addEventListener('pointermove', dragMove);
window.addEventListener('pointerup', dragEnd);

carousel.addEventListener('touchstart', dragStart, { passive: true });
window.addEventListener('touchmove', dragMove, { passive: true });
window.addEventListener('touchend', dragEnd);

sliderCon.addEventListener('mouseenter', stopAutoplay);
sliderCon.addEventListener('mouseleave', startAutoplay);

update();
startAutoplay();

// hero section
const videos = document.querySelector('.videos_con');
const videoText = document.querySelector('.video_text');
const iconBox = document.querySelector('.icon_box')

const minScroll = 150;
const maxScroll = 1000;

// Video scaling
const minScale = window.innerWidth < 1024 ? 0.9 : 0.6;
const maxScale = 1;

// Text transform
const startY = 0;      // starting translateY in %
const endY = 400;      // ending translateY in %
const startScale = window.innerWidth < 1024 ? 1.2 : 1.5;
const endScale = 1;

document.addEventListener('scroll', () => {
    let scroll = window.scrollY;

    if (scroll < minScroll) scroll = minScroll;
    if (scroll > maxScroll) scroll = maxScroll;

    // progress between 0 and 1
    const progress = (scroll - minScroll) / (maxScroll - minScroll);

    // scale video progressively
    const videoScale = minScale + (maxScale - minScale) * progress;
    videos.style.transform = `scale3d(${videoScale}, ${videoScale}, 1)`;

    // translate & scale text progressively
    const textY = startY + (endY - startY) * progress;
    const textScale = startScale + (endScale - startScale) * progress;
    videoText.style.transform = `translate3d(0%, ${textY}%, 0) scale3d(${textScale}, ${textScale}, 1)`;
    iconBox.style.transform = `scale3d(${textScale}, ${textScale}, 1)`;
});

///

const marginBtn = document.querySelector('.switch');
const marginBox = document.querySelector('.cm_in');

marginBtn.addEventListener('click', () => {
    marginBtn.classList.toggle('active');
    marginBox.classList.toggle('active');
});


//
const popupBtn = document.querySelector('.menu_icon ')
const menuPopup = document.querySelector('.setion_popup')

popupBtn.addEventListener('click', () => {
    popupBtn.classList.toggle('active')
    menuPopup.classList.toggle('active');
    if (popupBtn.classList.classes('active') && popupBtn.classList.classes('active')) {
        window.body.style.overflow = 'hiden';
    } else {
        window.body.style.overflow = 'auto';
    }
})



    (() => {
        const showOriginalFieldForDemo = true;
        const isAndroid = true;
        const fieldDateOfBirth = document.querySelector('.dob input');
        const fieldStyle = window.getComputedStyle(fieldDateOfBirth);
        let month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // use localized month names
        if (window.Intl && window.Intl.DateTimeFormat) {
            try {
                var formatter = new window.Intl.DateTimeFormat([], { month: 'long', timeZone: 'UTC' });
                var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => {
                    var mm = month < 10 ? '0' + month : month;
                    return new Date('0000-' + mm + '-01T00:00:00+00:00');
                });
                month_names = months.map(date => formatter.format(date));
            } catch (e) { }
        }

        if (isAndroid) {
            const dateWrapper = document.createElement('div');
            dateWrapper.id = 'date-select-wrapper';
            fieldDateOfBirth.parentNode.appendChild(dateWrapper);

            const dateFieldDay = document.createElement('select');
            const dateFieldMonth = document.createElement('select');
            const dateFieldYear = document.createElement('select');

            const dateFields = [dateFieldYear, dateFieldMonth, dateFieldDay];

            // copy over styles from text input
            if (fieldStyle) {
                var styleOptions = ['boxSizing', 'backgroundColor', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'height', 'font', 'verticalAlign'];
                styleOptions.forEach(function (s) {
                    if (fieldStyle[s]) {
                        dateFields.forEach(function (f) {
                            f.style[s] = fieldStyle[s];
                        });
                    }
                });
            }

            const emptyDayOption = document.createElement('option');
            emptyDayOption.value = '';
            emptyDayOption.textContent = 'Day';
            dateFieldDay.add(emptyDayOption);
            const emptyMonthOption = document.createElement('option');
            emptyMonthOption.value = '';
            emptyMonthOption.textContent = 'Month';
            dateFieldMonth.add(emptyMonthOption);
            const emptyYearOption = document.createElement('option');
            emptyYearOption.value = '';
            emptyYearOption.textContent = 'Year';
            dateFieldYear.add(emptyYearOption);

            const dayOptions = [emptyDayOption];
            for (var i = 1; i <= 31; i++) {
                var newOption = document.createElement('option');
                newOption.value = (i < 10 ? '0' : '') + i;
                newOption.textContent = i;
                dayOptions.push(newOption);
                dateFieldDay.add(newOption);
            }

            const monthOptions = [emptyMonthOption];
            for (var i = 0; i < month_names.length; i++) {
                var newOption = document.createElement('option');
                newOption.value = (i < 9 ? '0' : '') + (i + 1);
                newOption.textContent = month_names[i];
                monthOptions.push(newOption);
                dateFieldMonth.add(newOption);
            }

            const yearEnd = new Date().getFullYear();
            const yearStart = yearEnd - 120;
            const yearOptions = [emptyYearOption];
            for (var i = yearEnd; i >= yearStart; i--) {
                var newOption = document.createElement('option');
                newOption.value = i;
                newOption.textContent = i;
                yearOptions.push(newOption);
                dateFieldYear.add(newOption);
            }

            dateWrapper.appendChild(dateFieldDay);
            dateWrapper.appendChild(dateFieldMonth);
            dateWrapper.appendChild(dateFieldYear);

            const dateChangeHandler = function () {
                // var day = parseInt( dateFieldDay.value, 10 );
                const month = parseInt(dateFieldMonth.value, 10);
                const year = parseInt(dateFieldYear.value, 10);
                let maxDays = 31;

                if (month === 2) {
                    const isLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
                    maxDays = isLeapYear ? 29 : 28;
                } else if ([2, 4, 6, 9, 11].indexOf(month) >= 0) {
                    maxDays = 30;
                }

                dayOptions.filter(function (o, i) {
                    o.hidden = i > maxDays;
                    if (o.hidden && o.selected) {
                        emptyDayOption.selected = true;
                    }
                });

                let allSet = true;
                dateFields.forEach(field => {
                    const isEmpty = !field.value;
                    if (isEmpty) {
                        allSet = false;
                    }
                    field.classList[isEmpty ? 'add' : 'remove']('show-placeholder');
                });

                if (allSet) {
                    fieldDateOfBirth.value = dateFields.map(function (field) {
                        return field.value;
                    }).join('-');
                } else {
                    fieldDateOfBirth.value = '';
                }
            };

            // if the original input already has a value, set the selected options accordingly
            if (fieldDateOfBirth.value) {
                const ymd = fieldDateOfBirth.value.split('-');
                yearOptions.filter(function (o) {
                    if (o.value === ymd[0]) {
                        o.selected = true;
                    }
                });
                monthOptions[parseInt(ymd[1], 10)].selected = true;
                dayOptions[parseInt(ymd[2], 10)].selected = true;
            }

            dateFieldDay.addEventListener('change', dateChangeHandler);
            dateFieldMonth.addEventListener('change', dateChangeHandler);
            dateFieldYear.addEventListener('change', dateChangeHandler);
            dateChangeHandler();

            if (!showOriginalFieldForDemo) {
                fieldDateOfBirth.type = 'hidden';
            }
        }
    })()

// image bg change
const imgBackground = document.querySelector('.image_container')
const imgBtn = document.querySelectorAll('.img_btn')

imgBtn.forEach((btn, i) => {
    btn.addEventListener('mouseenter', () => {
        const imgUrl = btn.getAttribute('img-url')
        imgBackground.style.backgroundImage = `url(${imgUrl})`
    });
    btn.addEventListener('mouseleave', () => {
        const imgUrl = imgBtn[0].getAttribute('img-url')
        imgBackground.style.backgroundImage = `url(${imgUrl})`
    });
})


// image bg change
const imgBackground = document.querySelector('.image_container')
const imgBtn = document.querySelectorAll('.img_btn')
const imageTitle = document.querySelector('.image_title h2')

imgBtn.forEach((btn, i) => {
    const imgUrl = btn.getAttribute('img-url')
    const imgTitle = btn.getAttribute('title')
    btn.addEventListener('mouseenter', () => {
        imgBackground.style.backgroundImage = `url(${imgUrl})`
        imageTitle.textContent = imgTitle
    });
    btn.addEventListener('mouseleave', () => {
        imgBackground.style.backgroundImage = `url(${imgBtn[0].getAttribute('img-url')})`
        imageTitle.textContent = imgBtn[0].getAttribute('title')
    });
})



const sliders = document.querySelectorAll('.custom_slider');

sliders.forEach((customSlider) => {
    const sliderWrap = customSlider.querySelector('.slider_wrap');
    const slides = sliderWrap.querySelectorAll('.slide');
    const slideNext = customSlider.querySelector('.slide_next');
    const slidePrev = customSlider.querySelector('.slide_prev');

    let currentSlide = 0;

    function update() {
        slides.forEach((item) => item.classList.remove('active'));
        slides[currentSlide].classList.add('active');

        const bgUrl = slides[currentSlide].getAttribute('ima-data');
        customSlider.style.backgroundImage = `url(${bgUrl})`;

        const slideWidth = slides[0].offsetWidth;
        // const gap = gapvale * parseFloat(getComputedStyle(document.documentElement).fontSize);
        const gap = window.innerWidth > 1024 ? 50 : 25
        const middleWidth = window.innerWidth / 2;
        const totalSlideWidth = slideWidth + gap;
        const activeCenter = (currentSlide * totalSlideWidth) + (slideWidth / 2);
        const translateX = middleWidth - activeCenter;

        sliderWrap.style.transform = `translateX(${translateX}px)`;
    }

    // Initialize
    update();

    // Next/Prev buttons
    slideNext.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0; // wrap-around
        }
        update();
    });

    slidePrev.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = slides.length - 1; // wrap-around
        }
        update();
    });

    // Resize
    window.addEventListener('resize', update);
});


// flid popup

const popupData = [
    {
        title: 'lorem10',
        disciption: 'lorem 10 lorem 10 lorem 10 '
    }
]
const fildPopup = document.querySelectorAll('.fild_popup')
fildPopup.forEach((item, i) => {
    const popupHTML = `
    <div class="popup_btn">!</div>
    <div class="custom_fild-popup">
        <div class="popup_arrow"></div>
        <div class="popup_content">
            <h2>${popupData[i].title}</h2>
            <hr>
            <p>${popupData[i].disciption}</p>
            <button>Close button</button>
        </div>
    </div>
    `
    item.insertAdjacentHTML('beforeend', popupHTML)
})

if (window.innerWidth >= 1024) return;

fildPopup.forEach((item, i) => {
    item.querySelector('.popup_btn').addEventListener('click', () => {
        item.querySelector('.custom_fild-popup').classList.add('active')
    })
    item.querySelector('button').addEventListener('click', () => {
        item.querySelector('.custom_fild-popup').classList.remove('active')
    })
})


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const BG = document.querySelector('._cus_BG');
        if (BG) {
            BG.classList.add('active');
        }
    }, 500);
});

const allBarsSections = document.querySelectorAll('.bars');

window.addEventListener('scroll', () => {
    allBarsSections.forEach(section => {
        const bars = section.querySelectorAll('.bar');
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the section is visible in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
            // Calculate scroll progress relative to viewport
            const visibleRatio = 1 - rect.top / windowHeight;

            bars[0].style.transform = `translateY(${visibleRatio * -90}px)`;  // -9 * 10
            bars[1].style.transform = `translateY(${visibleRatio * -130}px)`; // -13 * 10
            bars[2].style.transform = `translateY(${visibleRatio * -210}px)`; // -21 * 10
            bars[3].style.transform = `translateY(${visibleRatio * -130}px)`;
            bars[4].style.transform = `translateY(${visibleRatio * -90}px)`;
        }
    });
});


const gap =
    window.innerWidth >= 1024 // Desktop
        ? 50
        : window.innerWidth >= 768 // Tablet
            ? 25
            : 20; // Phone


const btns = document.querySelectorAll('.custom_btn');
btns.forEach((item) => {
    const button = item.querySelector('a')
    const theText = item.querySelector('.elementor-button-text').textcontent;
    button.innerHTML = ''
    const theStacture = `
            <div class="btn_inre"></div>
            <div class="logo_wrap">
                <div class="custm_logo">
                    <div class="logo-1"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 30" id="svg10004993011" width="31"  height="30" ><path d="M 14.031 19.808 L 14.031 4.746 L 16.969 4.746 L 16.969 19.808 L 24.033 12.972 L 26.096 15 L 15.5 25.254 L 4.904 15 L 6.967 12.972 Z" fill="#F9F9F9"></path></svg></div>
                    <div class="logo-2"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 30" id="svg10004993011" width="31"  height="30" ><path d="M 14.031 19.808 L 14.031 4.746 L 16.969 4.746 L 16.969 19.808 L 24.033 12.972 L 26.096 15 L 15.5 25.254 L 4.904 15 L 6.967 12.972 Z" fill="#F9F9F9"></path></svg></div>
                </div>
            </div>
            <div class="btn_text">
                <div class="text_1">${theText}</div>
                <div class="text_2">${theText}</div>
            </div>
    `
    button.insertAdjacentHTML('beforeend', theStacture)
})




let observTarget = document.querySelector('body');

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
                updateContent();
            });
        }
    }
});

observer.observe(observTarget, {
    childList: true,
    subtree: true
});


function updateContent() {
    const lightBox = document.querySelector('.dialog-lightbox-widget');
    const LightBoxTitleEl = lightBox.querySelector('.elementor-slideshow__title');
    const LightBoxTitleParts = LightBoxTitleEl.textContent.split('|');

    const Url = LightBoxTitleParts[0].trim();
    const TitleText = LightBoxTitleParts[1].trim() ? LightBoxTitleParts[1].trim() : '';

    LightBoxTitleEl.innerHTML = `<a href="${Url}" target="_blank">${TitleText}</a>`;

}




const selectInputs = document.querySelectorAll(
    '#form-field-field_select_1, #form-field-field_select_2, #form-field-field_select_3, #form-field-field_select_4'
);
const discribes = document.querySelectorAll(
    '.elementor-field-group-field_value_1, .elementor-field-group-field_value_2, .elementor-field-group-field_value_3, .elementor-field-group-field_value_4'
);

function updateForm(select, discribe) {
    const value = select.value.trim().toLowerCase();
    const inputField = discribe.querySelector('input, textarea, select');

    if (value === 'yes') {
        discribe.style.display = 'flex';
        if (inputField) inputField.setAttribute('required', 'required');
    } else {
        discribe.style.display = 'none';
        if (inputField) {
            inputField.removeAttribute('required');
            inputField.value = ''; // clear old value
        }
    }
}

// Loop through all pairs
selectInputs.forEach((select, i) => {
    const discribe = discribes[i];
    if (!select || !discribe) return;

    select.addEventListener('change', () => updateForm(select, discribe));
    updateForm(select, discribe); // run once on load
});

const DragImage = document.querySelector('.drag_image');
const box = document.querySelector('.drag-box');

let isDragging = false;
let startX = 0;
let offsetX = 0;

function getClientX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
}

// Start drag (mouse + touch)
function startDrag(e) {
    isDragging = true;
    startX = getClientX(e) - offsetX;
    box.style.cursor = 'grabbing';
}

// Move drag (mouse + touch)
function moveDrag(e) {
    if (!isDragging) return;
    const clientX = getClientX(e);
    offsetX = clientX - startX;
    const perspective = window.offsetWidth > 767 ? 700 : 400
    box.style.transform = `perspective(${perspective}px) rotateY(${offsetX}deg)`;
    console.log('Dragged:', offsetX.toFixed(2), 'px');
}

// End drag (mouse + touch)
function endDrag() {
    isDragging = false;
    box.style.cursor = 'grab';
}

// Mouse events
DragImage.addEventListener('mousedown', startDrag);
window.addEventListener('mousemove', moveDrag);
window.addEventListener('mouseup', endDrag);

// Touch events
DragImage.addEventListener('touchstart', startDrag);
window.addEventListener('touchmove', moveDrag);
window.addEventListener('touchend', endDrag);



const fadeSections = document.querySelectorAll('.background_section');

window.addEventListener('scroll', () => {
    fadeSections.forEach(section => {
        const bgImage = section.querySelector('.background_image');
        if (!bgImage) return;

        const rect = section.getBoundingClientRect();
        const fadeDistance = 800; 

        let opacity = 1 - (0 - rect.top) / fadeDistance;
        opacity = Math.max(Math.min(opacity, 1), 0);

        bgImage.style.opacity = opacity;
    });

});


//

const customPopup = document.querySelector('.custom_popup ');
const openPopup = document.querySelector('.open_menu')
const closePopup = document.querySelector('.close_menu')

openPopup.addEventListener('click', () => {
    customPopup.classList.add('active');
    if (customPopup.classList.contains('active')){
        window.body.overflow = 'headen'
    }
})
closePopup.addEventListener('click', () => {
    customPopup.classList.remove('active');
    if (customPopup.classList.contains('active')){
        window.body.overflow = 'visible'
    }
})

document.addEventListener('click', (e) => {
    if (!e.target.customPopup){
        customPopup.classList.remove('active');
        window.body.overflow = 'visible'
    }
})