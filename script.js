let playerState = 'idle';
const DROPDOWN = document.getElementById('animations');
DROPDOWN.addEventListener('change', function(e) => {
playerState = e.target.value
});

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImg = new Image;
playerImg.src = "shadow_dog.png";/*image is 6876px wide containing 12cols
and 5230px in height with 10rows*/


const SPRITE_WIDTH = 573; //sprite sheet width/12(cols)
const SPRITE_HEIGHT = 523; //sprite sheet height/10rows
const SPRITE_COORDINATES = {
    "idle": {
        "frames": 6,
        "row": 0
    },
    "jump": {
        "frames": 6,
        "row": 1
    },
    "land": {
        "frames": 6,
        "row": 2
    },
    "run": {
        "frames": 8,
        "row": 3
    },
    "dizzy": {
        "frames": 10,
        "row": 4
    },
    "down": {
        "frames": 4,
        "row": 5
    },
    "roll": {
        "frames": 6,
        "row": 6
    },
    "bite": {
        "frames": 6,
        "row": 7
    },
    "faint": {
        "frames": 11,
        "row": 8
    },
    "hit": {
        "frames": 3,
        "row": 9
    }
}
let frameX = 0;
let frameY = 6;
const PLAYER_W = 50;
const PLAYER_H = 50;
const STAGGER_FRAMES = 5;
let gameFrame = 0;

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    //ctx.fillRect(100,50,100,100);
    //ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)
    let maxFrames = SPRITE_COORDINATES.playerState.frames;

    ctx.drawImage(playerImg,frameX * SPRITE_WIDTH,SPRITE_COORDINATES.state.row * SPRITE_HEIGHT,SPRITE_WIDTH,SPRITE_HEIGHT,0,0,PLAYER_W,PLAYER_H);
    
    if (gameFrame % STAGGER_FRAMES == 0) {
        if (frameX / maxFrames == 1) {
            frameX = 0;
        } else {
            frameX++;
        };
        /*switch (frameY) {
            case 0:
            case 1:
            case 2:
            case 6:
            case 7: {
                if (frameX / 6 == 1) {
                    frameX = 0
                } else {
                frameX++
                };
            };
                break;
            case 3: {
                if (frameX / 8 == 1) {
                    frameX = 0;
                } else {
                    frameX++;
                }
            };
                break;
            case 4: {
                if (frameX / 10 == 1) {
                    frameX = 0;
                } else {
                    frameX++;
                }
            };
                break;
            case 5: {
                if (frameX / 4 == 1) {
                    frameX = 0;
                } else {
                    frameX++;
                }
            };
                break;
            case 8: {
                if (frameX / 11 == 1) {
                    frameX = 0;
                } else {
                    frameX++;
                }
            };
                break;
            case 10: {
                if (frameX / 3 == 1) {
                    frameX = 0;
                } else {
                    frameX++;
                }
            };
                break;
        };*/
        };
        gameFrame++;

    requestAnimationFrame(animate);
    };

animate();
