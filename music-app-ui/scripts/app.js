// developer console info

console.log(
    '%c Music App UI',
 `
    font-weight: bold;
    font-size: 50px;
    color: red;
    text-shadow: 3px 3px 0 rgb(217,31,38),
    6px 6px 0 rgb(226,91,14),
    9px 9px 0 rgb(245,221,8),
    12px 12px 0 rgb(5,148,68),
    15px 15px 0 rgb(2,135,206),
    18px 18px 0 rgb(4,77,145),
    21px 21px 0 rgb(42,21,113);
 `
);

// Music Player

// Variables

const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const audio = document.querySelector('audio');
const musicListBtn = document.querySelector('.m-list-btn');
const musicListBox = document.querySelector('.music-list-box');

// Music Info Variables

const musicImage = document.querySelector('.music-image-img');
const musicName = document.querySelector('.music-name-span');
const musicArtist = document.querySelector('.music-name-artist');

// Song Variables

const song1 = document.querySelector('.mavigri-alt');
const song2 = document.querySelector('.kum-dusm');
const song3 = document.querySelector('.maran-asik-oldum');
const song4 = document.querySelector('.kahraman-deniz-boyle-sever');
const song5 = document.querySelector('.manga-dunyanin');

// Back - Forward Button Variables

const backArrow = document.querySelector('.back-arrow');
const forwardArrow = document.querySelector('.forward-arrow');

// Media Buttons Click Events

playBtn.addEventListener('click', () => {
   playSong();
});

pauseBtn.addEventListener('click', () => {
   pauseSong();
});

musicListBtn.addEventListener('click', () => {
   musicList();
})

// Song Name Click Events

song1.addEventListener('click', song1Func = () => {
   audio.src = 'song/mavi-gri-altust-olmusum.mp3';
   musicImage.src = 'images/music1-image.jpg';
   musicName.textContent = 'Altüst Olmuşum';
   musicArtist.textContent = 'Mavi Gri';
   document.querySelector('title').textContent = musicName.textContent;
   backMusicArea();
   audio.pause();   
});

song2.addEventListener('click', song2Func = () => {
   audio.src = 'song/kum-dusmanlarima.mp3';
   musicImage.src = 'images/music2-image.jpg';
   musicName.textContent = 'Düşmanlarıma';
   musicArtist.textContent = 'Kum';
   document.querySelector('title').textContent = musicName.textContent;
   backMusicArea();
   audio.pause();
});

song3.addEventListener('click', song3Func = () => {
   audio.src = 'song/maran-marangoz-asik-oldum-ben-sana.mp3';
   musicImage.src = 'images/music3-image.jpg';
   musicName.textContent = 'Aşık Oldum Ben Sana';
   musicArtist.textContent = 'Maran Marangöz';
   document.querySelector('title').textContent = musicName.textContent;
   backMusicArea();
   audio.pause();
});

song4.addEventListener('click', song4Func = () => {
   audio.src = 'song/kahraman-deniz-boyle-sever-official-video.mp3';
   musicImage.src = 'images/music4-image.jpg';
   musicName.textContent = 'Böyle Sever';
   musicArtist.textContent = 'Kahraman Deniz';
   document.querySelector('title').textContent = musicName.textContent;
   backMusicArea();
   audio.pause();
});

song5.addEventListener('click', song5Func = () => {
   audio.src = 'song/manga-dunyanin-sonuna-dogmusum.mp3';
   musicImage.src = 'images/music5-image.jpg';
   musicName.textContent = 'Dünyanın Sonuna Doğmuşum';
   musicArtist.textContent = 'maNga';
   document.querySelector('title').textContent = musicName.textContent;
   backMusicArea();
   audio.pause();
});

// Dark Mode

const darkToggle = document.querySelector('.dark-toggle');

darkToggle.addEventListener('click', () => {
   document.body.classList.toggle('dark');
   localStorage.setItem('mode', document.body.classList);
});

if(localStorage.getItem('mode') != '') {
   document.body.classList = localStorage.getItem('mode');
}

// Back - Forward Button Events 

forwardArrow.addEventListener('click', () => {
   if(musicName.textContent == 'Dünyanın Sonuna Doğmuşum') {
      song1Func();
   } else if(musicName.textContent == 'Böyle Sever') {
      song5Func();
   } else if(musicName.textContent == 'Aşık Oldum Ben Sana') {
      song4Func();
   } else if(musicName.textContent == 'Düşmanlarıma') {
      song3Func();
   } else if(musicName.textContent = 'Altüst Olmuşum') {
      song2Func();
   } 
   playSong();
   audio.play();
});

backArrow.addEventListener('click', () => {
   if(musicName.textContent == 'Dünyanın Sonuna Doğmuşum') {
      song4Func();
   } else if(musicName.textContent == 'Böyle Sever') {
      song3Func();
   } else if(musicName.textContent == 'Aşık Oldum Ben Sana') {
      song2Func();
   } else if(musicName.textContent == 'Düşmanlarıma') {
      song1Func();
   } else if(musicName.textContent = 'Altüst Olmuşum') {
      song5Func();
   } 
   playSong();
   audio.play();
});

// Functions

const playSong = () => {
   playBtn.style.display = 'none';
   pauseBtn.style.display = 'block';
   audio.play();
}

const pauseSong = () => {
   pauseBtn.style.display = 'none';
   playBtn.style.display = 'block';
   audio.pause();
}

const musicList = () => {
   document.querySelector('.container').classList.toggle('show');
}

const backMusicArea = () => {
   document.querySelector('.container').classList.remove('show');
   playBtn.style.display = 'block';
   pauseBtn.style.display = 'none';
}