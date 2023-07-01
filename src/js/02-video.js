import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const videoEl = document.querySelector('iframe');
const video = new Player(videoEl);
video.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
video.on('timeupdate', throttle(onCurrentTime, 1000));
function onCurrentTime(data) {
  console.log(data.seconds);
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
