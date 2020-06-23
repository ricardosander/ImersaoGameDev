let setImage;

let x1;
let x2;
let y;
let speed;

function preload() {
    setImage = loadImage('assets/images/set/forest.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    x1 = 0;
    x2 = width;
    y = 0;
    speed = 10;
}

function draw() {
    image(setImage, x1, y, width, height);
    image(setImage, x2, y, width, height);
    
    x1 -= speed;
    x2 -= speed;

    if (x1 <= -width) {
        x1 = width;
    }

    if (x2 <= -width) {
        x2 = width;
    }
}