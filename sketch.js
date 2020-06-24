let scenarioImage1;
let scenarioImage2;
let scenarioImage3;
let scenarioImage4;
let scenarioImage5;
let scenarioImage6;
let scenarioImage7;
let scenarioImage8;
let scenarioImage9;
let scenarioImage10;
let characterImage;
let soundtrack;

let scenario4;
let scenario6;
let character;

function preload() {
    scenarioImage1 = loadImage('assets/images/set/parallax/01_Mist.png');
    scenarioImage2 = loadImage('assets/images/set/parallax/02_Bushes.png');
    scenarioImage3 = loadImage('assets/images/set/parallax/03_Particles.png');
    scenarioImage4 = loadImage('assets/images/set/parallax/04_Forest.png');
    scenarioImage5 = loadImage('assets/images/set/parallax/05_Particles.png');
    scenarioImage6 = loadImage('assets/images/set/parallax/06_Forest.png');
    scenarioImage7 = loadImage('assets/images/set/parallax/07_Forest.png');
    scenarioImage8 = loadImage('assets/images/set/parallax/08_Forest.png');
    scenarioImage9 = loadImage('assets/images/set/parallax/09_Forest.png');
    scenarioImage10 = loadImage('assets/images/set/parallax/10_Sky.png');
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
    scenario1 = new Scenario(scenarioImage1, scenarioPositionX1, scenarioPositionX2, scenarioPositionY, speed * 0.80);
    scenario2 = new Scenario(scenarioImage2, scenarioPositionX1, scenarioPositionX2, scenarioPositionY, speed * 0.71);
    scenario3 = new Scenario(scenarioImage3, scenarioPositionX1, scenarioPositionX2, scenarioPositionY, speed * 0.62);
    scenario4 = new Scenario(scenarioImage4, scenarioPositionX1, scenarioPositionX2, scenarioPositionY, speed * 0.53);
    scenario5 = new Scenario(scenarioImage5, scenarioPositionX1, scenarioPositionX2, scenarioPositionY, speed * 0.44);
    scenario6 = new Scenario(scenarioImage6, scenarioPositionX1, scenarioPositionX2, scenarioPositionY, speed * 0.35);
    scenario7 = new Scenario(scenarioImage7, scenarioPositionX1, scenarioPositionX2, scenarioPositionY, speed * 0.26);
    scenario8 = new Scenario(scenarioImage8, scenarioPositionX1, scenarioPositionX2, scenarioPositionY, speed * 0.17);
    scenario9 = new Scenario(scenarioImage9, scenarioPositionX1, scenarioPositionX2, scenarioPositionY, speed * 0.08);
    scenario10 = new Scenario(scenarioImage10, scenarioPositionX1, scenarioPositionX2, scenarioPositionY, speed * 0.99);

    let characterWidth = 220;
    let characterHeight = 270;
    character = new Character(characterImage, characterWidth, characterHeight, characterWidth, characterHeight);

    soundtrack.loop();
}

function draw() {
    
    background(255);

    scenario10.draw();
    scenario9.draw();
    scenario8.draw();
    scenario7.draw();
    scenario6.draw();
    scenario5.draw();
    scenario4.draw();
    scenario3.draw();
    scenario2.draw();
    scenario1.draw();

    character.draw();
}