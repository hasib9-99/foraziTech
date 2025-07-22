const rad = Math.PI / 180;
let requestId = null;
let r = window.innerWidth <= 1024 ? 150 : 300;
let n = 16;
let a = 360 * rad / n;
let W = 2 * Math.abs(Math.sin(a / 2)) * r;
let H = Math.abs(Math.cos(a / 2)) * r;
let rot = 0;
const speed = 0.5;

const dropzone = document.querySelector("#dropzone");
const htmlImg = document.querySelector(".song-image");
let w = htmlImg.getAttribute("width");
let h = htmlImg.getAttribute("height");

const canvas = document.querySelector("#canvas");
const _canvas = document.querySelector("#_canvas");
const ctx = canvas.getContext("2d");
const _ctx = _canvas.getContext("2d");

let cw = canvas.width = r * 2,
    cx = cw / 2;
let ch = canvas.height = r * 2,
    cy = ch / 2;
let _cw = _canvas.width = W,
    _cx = _cw / 2;
let _ch = _canvas.height = H,
    _cy = _ch / 2;

// Drag & Drop Handlers
dropzone.addEventListener("dragenter", e => {
    e.stopPropagation();
    e.preventDefault();
});
dropzone.addEventListener("dragover", e => {
    e.stopPropagation();
    e.preventDefault();
});
dropzone.addEventListener("drop", e => {
    e.stopPropagation();
    e.preventDefault();
    const data = e.dataTransfer;
    const files = data.files;
    handleFiles(files);
});

function handleFiles(files) {
    for (const file of files) {
        if (!/^image\//.test(file.type)) continue;

        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = function () {
            w = img.width;
            h = img.height;
            htmlImg.setAttribute("src", img.src);
            htmlImg.setAttribute("width", w);
            htmlImg.setAttribute("height", h);
            URL.revokeObjectURL(this.src);
        };
    }
}

// Draw sector clipping path
function oPath(ctx, W, H) {
    ctx.beginPath();
    ctx.moveTo(W / 2, 0);
    ctx.lineTo(W, H);
    ctx.lineTo(0, H);
    ctx.closePath();
}

// Rotate image and draw in _canvas
function rotateImg(img, rot) {
    _ctx.clearRect(0, 0, _cw, _ch);
    _ctx.save();
    _ctx.translate(_cx, _cy);
    _ctx.rotate(rot);
    _ctx.drawImage(img, -w / 2, -h / 2);
    _ctx.restore();
}

function Draw() {
    requestId = requestAnimationFrame(Draw);
    rot += speed * rad;
    rotateImg(htmlImg, rot);

    ctx.clearRect(0, 0, cw, ch);

    for (let i = 0; i < n; i++) {
        const sc = i % 2 === 0 ? -1 : 1;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(sc, 1);
        ctx.rotate(a * i);
        ctx.drawImage(_canvas, -_cx, 0);
        ctx.restore();
    }
}

function Init() {
    if (requestId) {
        cancelAnimationFrame(requestId);
        requestId = null;
    }

    a = 360 * rad / n;
    W = 2 * Math.abs(Math.sin(a / 2)) * r;
    H = Math.abs(Math.cos(a / 2)) * r;

    cw = canvas.width = r * 2;
    cx = cw / 2;
    ch = canvas.height = r * 2;
    cy = ch / 2;
    _cw = _canvas.width = W;
    _cx = _cw / 2;
    _ch = _canvas.height = H;
    _cy = _ch / 2;

    _ctx.clearRect(0, 0, _cw, _ch);
    oPath(_ctx, W, H);
    _ctx.clip();

    Draw();
}

// ---------------- Music Player ----------------
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
        audio.play();
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
        cancelAnimationFrame(requestId);
    }
}

function toggleMute() {
    audio.muted = !audio.muted;
    muteBtn.classList.toggle('muted', audio.muted);
}

function nextSong() {
    currentIndex = (currentIndex + 1) % musicData.length;
    loadSong(currentIndex);
    audio.play();
    playBtn.classList.add('paused');
    Init();
}

function prevSong() {
    currentIndex = (currentIndex - 1 + musicData.length) % musicData.length;
    loadSong(currentIndex);
    audio.play();
    playBtn.classList.add('paused');
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

setTimeout(() => {
    cancelAnimationFrame(requestId);
}, 100);