setTimeout(() => {
    const barWraper = document.querySelector('.bar_wraper');
    const bar = document.querySelector('.bar');
    const yearTitle = document.querySelector('.year_title h2');
    const nextBtn = document.querySelector('.next_btn');
    const prevBtn = document.querySelector('.prev_btn');
    const playBtn = document.querySelector('.play_btn');
    const playStop = playBtn.querySelector('.tow')
    const playRun = playBtn.querySelector('.one')
    const innerBar = document.querySelector('.bar_inner');
    const PostImage = document.querySelector('.post_image img');
    const imdb = document.querySelector('.imdb a');

    let postVideoWrapper = document.querySelector('.post_videos');
    let postVideo = postVideoWrapper ? postVideoWrapper.querySelector('iframe') : null;

    document.addEventListener('DOMContentLoaded', () => {
        postVideoWrapper = document.querySelector('.post_videos');
        postVideo = postVideoWrapper ? postVideoWrapper.querySelector('iframe') : null;
    });

    let currentYearIndex = -1;
    let currentSubIndex = null;
    let autoplayInterval = null;

    const monthMap = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };

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
        const cleanDescription = year.projectDescription ? year.projectDescription.replace(/<[^>]*>/g, '').trim() : '';
        const projectItems = (year.subPosts && year.subPosts.length > 0)
            ? year.subPosts.map(item => `<li class="subpost_title"><p>${item.title}</p></li>`).join('')
            : '';
        const projectQuantity = year.subPosts ? year.subPosts.length : 0;
        const projectBlock = projectItems
            ? `<li class="year_project"><p>Project${projectQuantity !== 1 ? 's' : ''}</p><ul>${projectItems}</ul></li>`
            : '';
        const descriptionBlock = cleanDescription && projectItems
            ? `<li class="year_description"><p>Description</p><span>${cleanDescription}</span></li>`
            : cleanDescription ? `<span>${cleanDescription}</span>` : '';

        const dotHTML = `
        <div class="years" style="position: absolute; left:${percent}%; width: 16px; height: 16px;">
            <div class="year_dot"></div>
            <h2 class="year_text">${year.projectName || ''}</h2>
            <div class="post-content">
                <ul>${descriptionBlock}${projectBlock}</ul>
            </div>
        </div>
        `;
        barWraper.insertAdjacentHTML('beforeend', dotHTML);
    });

    const years = document.querySelectorAll('.years');
    const months = document.querySelectorAll('.subpost_title');

    function getYouTubeEmbedSrc(perPost) {
        if (!perPost || !perPost.video_url) return '';
        const url = perPost.video_url.trim();
        const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        if (match) return `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1&playsinline=1`;
        const iframeMatch = url.match(/src="([^"]+)"/);
        if (iframeMatch) return iframeMatch[1];
        return '';
    }

    function resetData() {
        yearTitle.innerHTML = '';
        if (postVideoWrapper) postVideoWrapper.style.display = 'none';
        if (postVideo) postVideo.src = '';
        if (PostImage) { PostImage.src = ''; PostImage.style.display = 'none'; }
    }

    function innerbarUpdate(i) {
        const barPresent = (monthDiffs[i] / maxMonths) * 100;
        innerBar.style.width = `${barPresent}%`;
    }

    function yearEvent(yearIndex) {
        years.forEach(item => item.classList.remove('active'));
        if (window.innerWidth < 767) years[yearIndex].classList.add('active');
    }

    function showYearView(yIndex) {
        resetData();
        years.forEach(y => y.classList.remove('show'));
        years[yIndex].classList.add('show');
        const postsContent = document.querySelectorAll('.year_project');
        postsContent.forEach(pc => pc.classList.remove('hover'));
        yearEvent(yIndex);
        innerbarUpdate(yIndex);
        imdb.style.display = 'none';
        const yearTitleEl = years[yIndex].querySelector('.year_text');
        if (yearTitleEl) yearTitleEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    function showSubpost(yIndex, sIndex) {
        const yearData = yearsData[yIndex];
        const sub = (yearData && yearData.subPosts) ? yearData.subPosts[sIndex] : null;
        if (!sub) return;

        years.forEach(y => y.classList.remove('show'));
        years[yIndex].classList.add('show');

        const posts = years[yIndex].querySelectorAll('.subpost_title');
        const postsContent = document.querySelectorAll('.year_project');
        months.forEach(m => m.classList.remove('hover'));
        postsContent.forEach(pc => pc.classList.remove('hover'));

        if (posts[sIndex]) posts[sIndex].classList.add('hover');
        if (posts[sIndex]) posts[sIndex].closest('.year_project').classList.add('hover');

        const descEl = years[yIndex].querySelector('.year_description');
        if (descEl) descEl.classList.remove('hover');

        yearTitle.innerHTML = `<span>${sub.title}</span>` || '';

        const videoSrc = getYouTubeEmbedSrc(sub);
        if (videoSrc && postVideoWrapper) {
            const newIframe = document.createElement('iframe');
            newIframe.src = videoSrc;
            newIframe.width = '560';
            newIframe.height = window.matchMedia("(max-width: 767px)").matches
                ? '200' // mobile
                : window.matchMedia("(max-width: 1199px)").matches
                    ? '315' // tablet
                    : '500'; // desktop
            newIframe.setAttribute('title', 'YouTube video player');
            newIframe.setAttribute('frameborder', '0');
            newIframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            newIframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
            newIframe.allowFullscreen = true;
            newIframe.setAttribute('playsinline', 'true');
            postVideoWrapper.innerHTML = '';
            postVideoWrapper.appendChild(newIframe);
            postVideoWrapper.style.display = 'block';
            PostImage.style.display = 'none';
        } else if (sub.poster_image && sub.poster_image.trim() !== '') {
            postVideoWrapper.style.display = 'none';
            PostImage.src = sub.poster_image;
            PostImage.setAttribute('srcset', sub.poster_image);
            setTimeout(() => { PostImage.style.display = 'block' }, 200);
        } else {
            postVideoWrapper.style.display = 'none';
            PostImage.style.display = 'none';
        }

        if (sub.imdb_link) { imdb.href = sub.imdb_link; imdb.style.display = 'block'; }
        else { imdb.style.display = 'none'; imdb.href = ''; }

        yearEvent(yIndex);
        innerbarUpdate(yIndex);
    }

    function next() {
        const totalYears = yearsData.length;
        if (!totalYears) return;

        if (currentYearIndex > totalYears){            
            currentYearIndex = totalYears - 1
            return;
        }

        if (currentYearIndex === -1) {
            currentYearIndex = 0;
            currentSubIndex = null;
            showYearView(currentYearIndex);
            return;
        }

        const yearData = yearsData[currentYearIndex];
        if (!yearData) return;

        const desc = yearData.projectDescription ? yearData.projectDescription.trim() : "";

        if (currentSubIndex === null && desc !== "" && !yearData.descriptionShown && yearData.subPosts && yearData.subPosts.length > 0) {
            const descEl = years[currentYearIndex].querySelector('.year_description');
            if (descEl) descEl.classList.add('hover');
            yearData.descriptionShown = true;
            return;
        }

        if (currentSubIndex === null) {
            const hasSubs = yearData.subPosts && yearData.subPosts.length > 0;
            if (hasSubs) {
                currentSubIndex = 0;
                showSubpost(currentYearIndex, currentSubIndex);
                yearData.descriptionShown = true;
                return;
            }
            currentYearIndex = (currentYearIndex + 1) % totalYears;
            currentSubIndex = null;
            showYearView(currentYearIndex);
            return;
        }

        currentSubIndex++;
        if (yearData.subPosts && currentSubIndex < yearData.subPosts.length) {
            showSubpost(currentYearIndex, currentSubIndex);
            yearData.descriptionShown = true;
            return;
        }

        if (currentYearIndex === totalYears - 1) {
            currentSubIndex --
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

        // for subpost
        if (currentSubIndex !== null) {
            currentSubIndex--;
            if (currentSubIndex >= 0) {
                showSubpost(currentYearIndex, currentSubIndex);
                return;
            } else {
                currentSubIndex = null;
                // subpost end  → disciption or  year view 
                const yearData = yearsData[currentYearIndex];
                const desc = yearData.projectDescription ? yearData.projectDescription.trim() : "";
                if (desc) {
                    const descEl = years[currentYearIndex].querySelector('.year_description');
                    const thisYear = years[currentYearIndex].querySelector('.year_project');
                    if (thisYear) thisYear.classList.remove('hover')
                    if (descEl) descEl.classList.add('hover');
                    yearData.descriptionShown = false;
                    return;
                }
                showYearView(currentYearIndex);
                return;
            }
        }

        // no subpost → before year
        currentYearIndex--;
        if (currentYearIndex < 0) currentYearIndex = 0;

        const prevYear = yearsData[currentYearIndex];
        const prevHasSubs = prevYear.subPosts && prevYear.subPosts.length > 0;
        // const prevDesc = prevYear.projectDescription ? prevYear.projectDescription.trim() : "";

        if (prevHasSubs) {
            currentSubIndex = prevYear.subPosts.length - 1;
            showSubpost(currentYearIndex, currentSubIndex);
            return;
        }

        // if (prevDesc) {
        //     const descEl = years[currentYearIndex].querySelector('.year_description');
        //     if (descEl) descEl.classList.add('hover');
        //     yearTitle.innerHTML = `<span>${prevDesc}</span>`;
        //     prevYear.descriptionShown = true;
        //     currentSubIndex = null;
        //     return;
        // }

        // no subpost and no discription
        currentSubIndex = null;
        showYearView(currentYearIndex);
    }



    function startAutoplay() {
        stopAutoplay();
        playBtn.classList.add('active');
        if (currentYearIndex === -1) next();
        autoplayInterval = setInterval(() => { next(); }, 5000);
    }

    function stopAutoplay() {
        if (autoplayInterval) { clearInterval(autoplayInterval); playBtn.classList.remove('active'); autoplayInterval = null; }
    }

    // Event listeners
    years.forEach((yearDot, i) => {
        yearDot.querySelector('.year_text').addEventListener('click', () => {
            years.forEach(item => item.classList.remove('show'));
            stopAutoplay(); imdb.style.display = 'none'; months.forEach(m => m.classList.remove('active'));
            if (window.innerWidth < 767) { years.forEach(item => item.classList.remove('active', 'show')); years[i].classList.add('active'); }
            innerbarUpdate(i); resetData(); currentYearIndex = i; currentSubIndex = null;
        });
    });

    years.forEach((yearElement, yearIndex) => {
        const monthlyPosts = yearElement.querySelectorAll('.subpost_title');
        monthlyPosts.forEach((month, monthIndex) => {
            month.addEventListener('click', () => {
                stopAutoplay(); resetData(); months.forEach(m => m.classList.remove('active')); month.classList.add('active');
                const currentYear = yearsData[yearIndex];
                if (currentYear.subPosts && currentYear.subPosts[monthIndex]) {
                    showSubpost(yearIndex, monthIndex);
                    currentYearIndex = yearIndex;
                    currentSubIndex = monthIndex;
                }
            });
        });
    });

    function removeClass() {
        playBtn.classList.remove('active');
    }

    nextBtn.addEventListener('click', () => { stopAutoplay(); next(); });
    prevBtn.addEventListener('click', () => { stopAutoplay(); prev(); });
    playStop.addEventListener('click', () => { startAutoplay(); });
    playRun.addEventListener('click', () => { stopAutoplay(); removeClass() });

    const lists = document.querySelectorAll('.year_description,.year_project');
    lists.forEach(list => { list.addEventListener('mouseover', () => list.classList.add('hover')); list.addEventListener('mouseout', () => list.classList.remove('hover')); });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.post-content') && !event.target.closest('.years')) document.querySelectorAll('.years').forEach(item => item.classList.remove('active'));
    });

}, 1000);
