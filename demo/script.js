const stickySections = [...document.querySelectorAll(".cus_sticky")];

window.addEventListener("scroll", () => {
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i]);
  }
});

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector(".scroll_section");

  console.log(scrollSection);
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 200 ? 200 : percentage;
  scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}

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
