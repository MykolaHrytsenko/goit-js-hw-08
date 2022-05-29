// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// const onPlay = function (seconds) {
//     localStorage.setItem('videoplayer-current-time', seconds)
// }

// player.on('timeupdate');

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
// player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function (duration) {
//     // seconds = the actual time that the player seeked to
// }).catch(function (error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });

// import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const savedTime = localStorage.getItem('videoplayer-current-time');
console.log(savedTime);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds)
};

player.setCurrentTime(savedTime);