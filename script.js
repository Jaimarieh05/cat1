const cartoonAudio = new Audio('./music/only.mp3');
const forceAudio = new Audio('./music/love of my life.mp3');
const squeakyAudio = new Audio('./music/day and night.mp3');
const hopeAudio = new Audio('./music/the only one.mp3');


// selecting elements
const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');


const trackList = [
  {
      name: "Only",
      artist: "Lee Hi",
      path: "./music/only.mp3",
  },
  {
      name: "Day & Night",
      artist: "Jung Seung Hwan",
      path: "./music/day and night.mp3",
  },
  {
      name: "Love of my Life",
      artist: "Reyne",
      path: "./music/love of my life.mp3",
  },
  {
      name: "The Only One",
      artist: "Reyne",
      path: "./music/the only one.mp3",
  },
];

for(const song of songs) {
  song.ele.addEventListener('ended', ()=> {
    updateSong('next');
    playPauseSong();
  })
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click',()=> {
  playPauseSong();
})

nextBtn.addEventListener('click', () => {
  updateSong('next');
  playPauseSong();
});

prevBtn.addEventListener('click', () => {
  updateSong('prev');
  playPauseSong();
});

const updateSong = (action)=> {
  currentSong.pause();
  currentSong.currentTime = 0;

  if(action === 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action === 'prev'){
    current--;
    if(current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
}

const playPauseSong = ()=> {
  if(currentSong.paused){
    currentSong.play();
    playPauseIcon.className = 'ph-bold ph-pause';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'ph-bold ph-play';
  }
}

