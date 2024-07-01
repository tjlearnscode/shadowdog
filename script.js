const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImg = new Image;
playerImg.src = "shadow_dog.png";/*image is 6876px wide containing 12cols
and 5230px in height with 10rows*/


const SPRITE_WIDTH = 573; //sprite sheet width/12(cols)
const SPRITE_HEIGHT = 523; //sprite sheet height/10rows
let frameX = 1;
let frameY = 6;
const PLAYER_W = 50;
const PLAYER_H = 50;
let maxCol;

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    //ctx.fillRect(100,50,100,100);
    //ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)
    ctx.drawImage(playerImg,frameX * SPRITE_WIDTH,frameY * SPRITE_HEIGHT,SPRITE_WIDTH,SPRITE_HEIGHT,0,0,PLAYER_W,PLAYER_H);
    switch (frameY) {
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
    }
    requestAnimationFrame(animate);
    };

animate();
