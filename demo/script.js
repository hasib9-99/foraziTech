

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