let click = true;
let game;

function preload() {

    const imageRepository = new ImageRepository();
    imageRepository.preload();

    const soundRepository = new SoundRepository();
    soundRepository.preload();

    game = new Game(imageRepository, soundRepository);
}

function setup() {

    let screenWidth =  windowWidth;
    let screenHeight =  windowHeight;

    if (screenHeight > screenWidth) {
        screenHeight = screenWidth;
    }

    frameRate(40);
    createCanvas(screenWidth, screenHeight);
    game.setup();
}

function touchStarted(event) {
    click = false;
    game.keyPressed(UP_ARROW);
}

function mousePressed(event) {
    if (click) {
        game.keyPressed(UP_ARROW);
    }
}

function keyPressed(event) {
    game.keyPressed(keyCode);
}

function draw() {
    game.draw();
}

