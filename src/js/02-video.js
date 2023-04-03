import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const TIME_PLYER = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe); 

player.on('timeupdate', throttle(checkTime, 500));

function checkTime ({seconds}){
    localStorage.setItem(TIME_PLYER, seconds)
};

const localStorageTime = JSON.parse(localStorage.getItem(TIME_PLYER));

player.setCurrentTime(localStorageTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log('Incorrect time plyer');
            break;

        default:
             console.log('Something happened');
            break;
    }
});







