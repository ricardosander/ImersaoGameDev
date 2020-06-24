let scenarioImage;
let characterImage;

let scenario;
let character;

function preload() {
    scenarioImage = loadImage('assets/images/set/forest.png');
    characterImage = loadImage('assets/images/character/running.png');
}

function setup() {
    frameRate(29);

    createCanvas(windowWidth, windowHeight);

    let speed = 5;

    let scenarioPositionX1 = 0;
    let scenarioPositionX2 = width;
    let scenarioPositionY = 0;
    scenario = new Scenario(scenarioImage, scenarioPositionX1, scenarioPositionX2, scenarioPositionY, speed);

    let characterWidth = 2 * 110;
    let characterHeight = 2 * 135;
    character = new Character(characterImage, characterWidth, characterHeight);
}

function draw() {
    scenario.draw()
    character.draw();
}