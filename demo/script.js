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

//Form step nevigator
setTimeout(() => {
  const Steps = document.querySelectorAll('.e-form__indicators__indicator');
  const stepBtns = document.querySelectorAll('.e-form__buttons__wrapper');
  const navigator = document.querySelector('.navigator h2')
  stepBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const activeIndex = Array.from(Steps).findIndex(step => step.classList.contains('e-form__indicators__indicator--state-active'));
      navigator.textContent = `${activeIndex + 1} / ${Steps.length}`
    })
  })
}, 300);



setTimeout(() => {
  const inputField = document.getElementById('Field-cvcInput');
  inputField.placeholder = '123';
}, 500);



//Update Form step nevigator
setTimeout(() => {
  const Steps = document.querySelectorAll('.e-form__indicators__indicator');
  const stepBtns = document.querySelectorAll('.e-form__buttons__wrapper');
  const customBackBtn = document.querySelector('.back_btn');
  const stepBackBtns = document.querySelectorAll('.e-form__buttons__wrapper__button-previous');
  const navigator = document.querySelector('.navigator h2');
  
  function FindIndex() {
    return Array.from(Steps).findIndex(step =>
      step.classList.contains('e-form__indicators__indicator--state-active') // find wich index active 
    );
  }
  
  function updateNevigatror() {
    const activeIndex = FindIndex();
    navigator.textContent = `Schritte ${activeIndex + 1} / ${Steps.length}`;
  }
  
  stepBtns.forEach((btn) => {
    btn.addEventListener('click', updateNevigatror);
  });
  
  // Add event listener to the custom back button
  customBackBtn.addEventListener('click', () => {
    const activeIndex = FindIndex();
    if (stepBackBtns[activeIndex] && activeIndex !== 0) {  // check frist index
      console.log(activeIndex);
      stepBackBtns[activeIndex].click();
  
    }
  });
}, 300);
