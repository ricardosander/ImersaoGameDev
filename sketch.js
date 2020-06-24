let scenarioImage;

let scenarioPositionX1;
let scenarioPositionX2;
let scenarioPositionY;
let speed;
let scenario;

function preload() {
    scenarioImage = loadImage('assets/images/set/forest.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    speed = 5;

    scenarioPositionX1 = 0;
    scenarioPositionX2 = width;
    scenarioPositionY = 0;
    scenario = new Scenario(scenarioImage, scenarioPositionX1, scenarioPositionX2, scenarioPositionY, speed);
}

function draw() {
    scenario.draw()
}