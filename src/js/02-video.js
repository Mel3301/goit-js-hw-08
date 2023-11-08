import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

function playerTime(evt) {
  const evtTime = evt.seconds;
  localStorage.setItem('videoplayer-current-time', evtTime);
}

player.on('timeupdate', throttle(playerTime, 1000));
window.addEventListener('DOMContentLoaded', setTime);

function setTime() {
  const getStorage = localStorage.getItem('videoplayer-current-time');
  if (getStorage) {
    player.setCurrentTime(getStorage);
  }
}
