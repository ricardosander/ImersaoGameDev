let game;

function preload() {

    const imageFactory = new ImageFactory();
    imageFactory.preload();

    const soundFactory = new SoundFactory();
    soundFactory.preload();

    game = new Game(imageFactory, soundFactory);
}

function setup() {
    frameRate(40);
    createCanvas(windowWidth, windowHeight);
    game.setup();
}

function keyPressed() {
    game.keyPressed(keyCode);
}

function draw() {
    game.draw();
}