const barWraper = document.querySelector('.bar_wraper');
const bar = document.querySelector('.bar');
const yearTitle = document.querySelector('.year_title h2');
const nextBtn = document.querySelector('.next_btn');
const prevBtn = document.querySelector('.prev_btn');
const playBtn = document.querySelector('.play_btn'); // added play button
const innerBar = document.querySelector('.bar_inner');
const PostImage = document.querySelector('.post_image img');
const imdb = document.querySelector('.imdb a');

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

  // description (cleaning HTML)
  const cleanDescription = year.projectDescription
    ? year.projectDescription.replace(/<[^>]*>/g, '').trim()
    : '';


  // project list
  const projectItems = (year.subPosts && year.subPosts.length > 0)
    ? year.subPosts.map((item) => `<li class="subpost_title"><p>${item.title}</p></li>`).join('')
    : '';

  // get project or projects
  const projectQuantity = year.subPosts ? year.subPosts.length : 0;
  console.log(projectQuantity);


  const projectBlock = projectItems
    ? `<li class="year_project">
                <p>Project${projectQuantity !== 1 ? 's' : ''}</p>
                <ul>${projectItems}</ul>
            </li>`
    : '';


  const descriptionBlock = cleanDescription && projectItems ? `<li class="year_description"> <p>Description</p> <span>${cleanDescription}</span> </li>`
    : cleanDescription ? `<span>${cleanDescription}</span>`
      : '';

  // final HTML
  const dotHTML = `
    <div class="years" style="position: absolute; left:${percent}%; width: 16px; height: 16px;">
        <div class="year_dot"></div>
        <h2 class="year_text">${year.projectName || ''}</h2>
        <div class="post-content">
            <ul>
                ${descriptionBlock}
                ${projectBlock}
            </ul>
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
  if (window.innerWidth < 767) {
    years[yearIndex].classList.add('active');
  }
}

function resetData() {
  yearTitle.innerHTML = '';
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
  const posts = years[yIndex].querySelectorAll('.subpost_title');
  if (posts[sIndex]) posts[sIndex].classList.add('active');

  yearTitle.innerHTML = `<span>${sub.title}</span>` || '';

  const videoSrc = extractYouTubeEmbedSrc(sub);
  if (videoSrc && postVideo) {
    postVideo.src = videoSrc;
    setTimeout(() => {
      postVideoWrapper.style.display = 'block';
    }, 200);
    PostImage.style.display = 'none';
  } else {
    PostImage.src = sub.poster_image;
    PostImage.setAttribute('srcset', sub.poster_image);
    setTimeout(() => {
      PostImage.style.display = 'block';
    }, 200);
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
  yearDot.querySelector('.year_text').addEventListener('click', () => {
    stopAutoplay();
    imdb.style.display = 'none';
    months.forEach(m => m.classList.remove('active'));
    if (window.innerWidth < 767) {
      years.forEach(item => item.classList.remove('active'));
      years[i].classList.add('active');
    }
    innerbarUpdate(i);
    resetData();
    currentYearIndex = i;
    currentSubIndex = null;
  });
});

years.forEach((yearElement, yearIndex) => {
  const monthlyPosts = yearElement.querySelectorAll('.subpost_title');
  monthlyPosts.forEach((month, monthIndex) => {
    month.addEventListener('click', () => {
      stopAutoplay();
      resetData();
      months.forEach(m => m.classList.remove('active'));
      month.classList.add('active');

      const currentYear = yearsData[yearIndex];
      if (currentYear.subPosts && currentYear.subPosts[monthIndex]) {
        yearTitle.innerHTML = `<span>${currentYear.subPosts[monthIndex].title}</span>`;
        const videoSrc = extractYouTubeEmbedSrc(currentYear.subPosts[monthIndex]);
        if (videoSrc === '' && currentYear.subPosts[monthIndex].poster_image === '') {
          PostImage.style.display = 'none';
          postVideoWrapper.style.display = 'none';
        } else if (videoSrc && postVideo) {
          postVideo.src = videoSrc;
          setTimeout(() => {
            postVideoWrapper.style.display = 'block';

          }, 200);
          PostImage.style.display = 'none';
        } else {
          PostImage.src = currentYear.subPosts[monthIndex].poster_image;
          PostImage.setAttribute('srcset', currentYear.subPosts[monthIndex].poster_image);
          setTimeout(() => {
            PostImage.style.display = 'block';
          }, 200);
          if (postVideoWrapper) postVideoWrapper.style.display = 'none';
        }
        if (currentYear.subPosts[monthIndex].imdb_link) {
          imdb.href = currentYear.subPosts[monthIndex].imdb_link;
          imdb.style.display = 'block';
        } else {
          imdb.style.display = 'none';
          imdb.href = '';
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
// if (years[0].querySelector('.subpost_title')) {
//     years[0].querySelector('.subpost_title').click();
// } else {
//     showYearView(0);
// }

// Button events
nextBtn.addEventListener('click', () => { stopAutoplay(); next(); });
prevBtn.addEventListener('click', () => { stopAutoplay(); prev(); });
playBtn.addEventListener('click', () => { startAutoplay(); });




const lists = document.querySelectorAll('.year_description, .year_project');


lists.forEach((list) => {
  list.addEventListener('mouseover', () => {
    list.classList.add('hover');
  });
  list.addEventListener('mouseout', () => {
    list.classList.remove('hover');
  });
});


document.addEventListener('click', (event) => {
  if (!event.target.closest('.post-content') && !event.target.closest('.years')) {
    document.querySelectorAll('.years').forEach(item => item.classList.remove('active'));
  }
});