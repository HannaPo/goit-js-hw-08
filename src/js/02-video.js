import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function getCurrentTime (e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

