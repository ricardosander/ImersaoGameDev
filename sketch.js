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
let soundtrack;

let scenario;
let character;

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
    
    soundtrack = loadSound('assets/sounds/soundtrack.mp3');
}

function setup() {
    frameRate(40);

    createCanvas(windowWidth, windowHeight);

    const skySpeed = 0.5
    const forest5Speed = 1;
    const forest4Speed = 2;
    const forest3Speed = 3;
    const forest2Speed = 4;
    const particles2Speed = 4.5;
    const forest1Speed = 5;
    const particles1Speed = 6;
    const mistSpeed = 5;

    const scenarioPositionX1 = 0;
    const scenarioPositionX2 = width;
    const scenarioPositionY = 0;
    
    scenario = new Scenario(
        [skyImage, forestImage5, forestImage4, forestImage3, forestImage2, particlesImage2, forestImage1, particlesImage1, mistImage], 
        [skySpeed, forest5Speed, forest4Speed, forest3Speed, forest2Speed, particles2Speed, forest1Speed, particles1Speed, mistSpeed],
        scenarioPositionX1, 
        scenarioPositionX2, 
        scenarioPositionY
    );

    const characterWidth = 220;
    const characterHeight = 270;
    character = new Character(characterImage, characterWidth, characterHeight, characterWidth, characterHeight);

    soundtrack.loop();
}

function draw() {
    
    background(255);

    scenario.draw();
    character.draw();
}