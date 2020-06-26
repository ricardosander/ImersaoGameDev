let game;

function preload() {

    const imageRepository = new ImageRepository();
    imageRepository.preload();

    const soundRepository = new SoundRepository();
    soundRepository.preload();

    game = new Game(imageRepository, soundRepository);
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