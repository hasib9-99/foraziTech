const heroSection = document.querySelector('.hero_section');
const fristImage = heroSection.querySelector('.hero-img-card.first');
const secondImage = heroSection.querySelector('.hero-img-card.second');
const thirdImage = heroSection.querySelector('.hero-img-card.third');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Animation happens from scroll 0px to 600px, divided into 3 parts: 0-200, 200-400, 400-600px
    const startScroll = 0;
    const endScroll = 600;
    const progress = Math.min(Math.max((scrollY - startScroll) / (endScroll - startScroll), 0), 1);

    // === First Image Interpolation (Rotation + Opacity for 0 to 200px scroll) ===
    const firstTranslateX = -104.428 + (104.428 * Math.min(scrollY / 200, 1));
    const firstTranslateY = 41.7714 + ((40 - 41.7714) * Math.min(scrollY / 200, 1));
    const firstRotateZ = 43.1638 - (43.1638 * Math.min(scrollY / 200, 1));
    const firstOpacity = 0.37018 + ((1 - 0.37018) * Math.min(scrollY / 200, 1));

    fristImage.style.transform = `
    translate3d(${firstTranslateX}%, ${firstTranslateY}%, 0px)
    scale3d(1, 1, 1)
    rotateZ(${firstRotateZ}deg)
    skew(0deg, 0deg)
  `;
    fristImage.style.opacity = firstOpacity;

    // === Second Image Interpolation (Rotation + Opacity for 200 to 400px scroll) ===
    const secondProgress = Math.min(Math.max((scrollY - 200) / 200, 0), 1); // Progress for second image

    const secondTranslateX = 126.038 + (-126.038 * secondProgress);
    const secondTranslateY = 90.027 + ((60 - 90.027) * secondProgress);
    const secondScale = 0.09973 + ((1 - 0.09973) * secondProgress);
    const secondRotateZ = -39.6119 + (39.6119 * secondProgress);
    const secondOpacity = 0.09973 + ((1 - 0.09973) * secondProgress);

    secondImage.style.transform = `
    translate3d(${secondTranslateX}%, ${secondTranslateY}%, 0px)
    scale3d(${secondScale}, ${secondScale}, 1)
    rotateZ(${secondRotateZ}deg)
    skew(0deg, 0deg)
  `;
    secondImage.style.opacity = secondOpacity;

    // === Third Image Interpolation (Rotation + Opacity for 400 to 600px scroll) ===
    const thirdProgress = Math.min(Math.max((scrollY - 400) / 200, 0), 1); // Progress for third image

    const thirdTranslateX = -150 + (150 * thirdProgress);
    const thirdTranslateY = -70 + ((40 - (-70)) * thirdProgress);
    const thirdScale = 0 + (1 * thirdProgress);
    const thirdRotateZ = -131 + (131 * thirdProgress);
    const thirdOpacity = 0 + (1 * thirdProgress);

    thirdImage.style.transform = `
    translate3d(${thirdTranslateX}%, ${thirdTranslateY}%, 0px)
    scale3d(${thirdScale}, ${thirdScale}, 1)
    rotateZ(${thirdRotateZ}deg)
    skew(0deg, 0deg)
  `;
    thirdImage.style.opacity = thirdOpacity;
});


let fullHight = stickyWrapper.offsetHeight
perItemHight = fullHight / items.index
stayTime = perItemHight / 2
// other half hight will be the tranlsate
