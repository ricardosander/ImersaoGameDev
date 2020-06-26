let mistImage;
let bushesImage;
let particlesImage1;
let forestImage1;
let particlesImage2;
let forestImage2;
let forestImage3;
let forestImage4;
let forestImage5;
let skyImage;

let characterImage;
let dropletsImage;
let flyingDropletImage;
let trollImage;
let heatImage;

let gameOverImage;
let homeScreenImage;

let game;

function preload() {

    mistImage = loadImage('assets/images/set/parallax/01_Mist.png');
    bushesImage = loadImage('assets/images/set/parallax/02_Bushes.png');
    particlesImage1 = loadImage('assets/images/set/parallax/03_Particles.png');
    forestImage1 = loadImage('assets/images/set/parallax/04_Forest.png');
    particlesImage2 = loadImage('assets/images/set/parallax/05_Particles.png');
    forestImage2 = loadImage('assets/images/set/parallax/06_Forest.png');
    forestImage3 = loadImage('assets/images/set/parallax/07_Forest.png');
    forestImage4 = loadImage('assets/images/set/parallax/08_Forest.png');
    forestImage5 = loadImage('assets/images/set/parallax/09_Forest.png');
    skyImage = loadImage('assets/images/set/parallax/10_Sky.png');

    characterImage = loadImage('assets/images/character/running.png');
    dropletImage = loadImage('assets/images/foes/droplet.png');
    flyingDropletImage = loadImage('assets/images/foes/flying_droplet.png');
    trollImage = loadImage('assets/images/foes/troll.png');
    
    heartImage = loadImage('assets/images/assets/heart.png');

    gameOverImage = loadImage('assets/images/assets/game-over.png');
    homeScreenImage = loadImage('assets/images/assets/homescreen.png');

    const soundtrack = loadSound('assets/sounds/soundtrack.mp3');
    const jumpSound = loadSound('assets/sounds/jump.mp3');

    const characterFactory = new CharacterFactory();
    const scenarioFactory = new ScenarioFactory();
    game = new Game(characterFactory, scenarioFactory, soundtrack, jumpSound);
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