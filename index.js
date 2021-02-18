

let btns = document.querySelectorAll('.btn');
let levelTitle = document.querySelector('#level-title');
let keyPressed = false;
let computerArr = [];
let playerArr = [];
let level;
let gameStart = true;
const hasTouchscreen = 'ontouchstart' in window;
hasTouchscreen ? document.body.innerHTML = `<h1 style="font-size: 3rem; color: white">Please open in desktop browser</h1>`: 

document.addEventListener('keydown', () => {
    if (gameStart === true) {
        // delay effect
        setTimeout(function () {
            level = 1;
            levelTitle.textContent = `Level ${level}`;
            computerPlay();
            gameStart = false;
            keyPressed = true;
        }, 200);

    }
});

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (keyPressed === true) {
            playGame(btn);
        } else {
            gameEnd(btn);
        }
    });
});

function playGame(btn) {

    if (playerArr.length < computerArr.length) {
        playerArr.push(btn.id);

        playerEffect(btn);
        console.log('Player: ' + playerArr);

        for (let i = 0; i < computerArr.length, i < playerArr.length; i++) {
            if (computerArr[i] === playerArr[i]) {
                console.log(true);

            } else {
                console.log(false);
                gameEnd(btn);
            }
        }

    }

    if (playerArr.length === computerArr.length && levelTitle.textContent !== 'Game Over, Press Any Key to Restart') {
        setTimeout(function () {
            computerPlay();
        }, 1500);
        level++;
        setTimeout(function () {
            levelTitle.textContent = `Level ${level}`;
        }, 2000);

    }
}

function gameEnd(btn) {
    keyPressed = false;
    computerArr = [];
    playerArr = [];
    level = 1;
    playerEffect(btn);
    gameOverEffect();
    gameStart = true;
}

function computerPlay() {
    let randomBtn = Math.floor(Math.random() * 4) + 1;
    let compItem;

    //make sound
    switch (randomBtn) {
        case 1:
            let green = document.querySelector('.green');
            pressed(green);
            compItem = green.id;
            sound(green.id);
            console.log(green.id);
            break;

        case 2:
            let red = document.querySelector('.red');
            pressed(red);
            compItem = red.id;
            sound(red.id);
            console.log(red.id);
            break;

        case 3:
            let yellow = document.querySelector('.yellow');
            pressed(yellow);
            compItem = yellow.id;
            sound(yellow.id);
            console.log(yellow.id);
            break;

        case 4:
            let blue = document.querySelector('.blue');
            pressed(blue);
            compItem = blue.id;
            sound(blue.id);
            console.log(blue.id);
            break;
        default:
            console.log('error');
            break;
    }

    //push result to computer array
    computerArr.push(compItem);
    console.log(computerArr);

    //prepare player array for next round
    for (let i = 0; i < computerArr.length; i++) {
        playerArr.shift();
    }
}

//player effect
function playerEffect(btn) {
    pressed(btn);
    sound(btn.id);
    console.log(btn.id);
}

//pressed effect
function pressed(btn) {
    btn.classList.add('pressed');
    setTimeout(function () {
        btn.classList.remove('pressed');
    }, 100);
}

//sound effect
function sound(btnID) {
    let sound = new Audio(`sounds/${btnID}.mp3`)
    sound.play();
}

//game over effect
function gameOverEffect() {
    //text
    levelTitle.textContent = 'Game Over, Press Any Key to Restart';
    //sound
    let gameOverSound = new Audio('sounds/wrong.mp3');
    gameOverSound.play();
    //effect
    document.body.classList.add('game-over');
    setTimeout(function () {
        document.body.classList.remove('game-over');
    }, 100);
}






