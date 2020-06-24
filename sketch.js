let scenarioImage;
let characterImage;
let soundtrack;

let scenario;
let character;

function preload() {
    scenarioImage = loadImage('assets/images/set/forest.png');
    characterImage = loadImage('assets/images/character/running.png');
    soundtrack = loadSound('assets/sounds/soundtrack.mp3');
}

function setup() {
    frameRate(40);

    createCanvas(windowWidth, windowHeight);

    let speed = 5;

    let scenarioPositionX1 = 0;
    let scenarioPositionX2 = width;
    let scenarioPositionY = 0;
    scenario = new Scenario(scenarioImage, scenarioPositionX1, scenarioPositionX2, scenarioPositionY, speed);

    let characterWidth = 220;
    let characterHeight = 270;
    character = new Character(characterImage, characterWidth, characterHeight, characterWidth, characterHeight);

    soundtrack.loop();
}

function draw() {
    scenario.draw()
    character.draw();
}