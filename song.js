const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const playlist = document.getElementById('playlist');
const tracks = playlist.getElementsByTagName('li');

let currentTrackIndex = 0;

// Load the first track by default
loadTrack(tracks[currentTrackIndex]);

function loadTrack(track) {
    audioPlayer.src = track.getAttribute('data-src');
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].classList.remove('active');
    }
    track.classList.add('active');
}

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
});

audioPlayer.addEventListener('timeupdate', () => {
    const value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    seekBar.value = value;
});

seekBar.addEventListener('input', () => {
    const time = (seekBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = time;
});

for (let i = 0; i < tracks.length; i++) {
    tracks[i].addEventListener('click', function() {
        loadTrack(this);
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    });
}
        