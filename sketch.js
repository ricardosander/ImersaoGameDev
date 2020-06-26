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

    game = new Game(soundtrack, jumpSound);
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

    const scenario = new Scenario(
        [skyImage, forestImage5, forestImage4, forestImage3, forestImage2, particlesImage2, forestImage1, particlesImage1, mistImage],
        [skySpeed, forest5Speed, forest4Speed, forest3Speed, forest2Speed, particles2Speed, forest1Speed, particles1Speed, mistSpeed],
        scenarioPositionX1,
        scenarioPositionX2,
        scenarioPositionY
    );

    const defaultDeltaY = 100;

    const characterWidth = 220;
    const characterHeight = 270;
    const characterSpriteWidth = 220;
    const characterSpriteHeight = 270;
    const characterStartX = 50;
    const characterDeltaY = defaultDeltaY;
    const character = new PlaybleCharacter(
        new SpriteMap(
            characterImage,
            characterSpriteWidth,
            characterSpriteHeight,
            characterImage.width,
            characterImage.height,
        ),
        new Coordinates(
            characterStartX,
            characterDeltaY,
            characterWidth,
            characterHeight,
            1.11,
            0.9
        ),
        
    );

    const dropletWidth = 104;
    const dropletHeight = 104;
    const dropletSpriteWidth = 104;
    const dropletSpriteHeight = 104;
    const dropletStartX = width;
    const dropletDeltaY = defaultDeltaY;
    const droplet = new NoPlaybleCharacter(
        new SpriteMap(
            dropletImage,
            dropletSpriteWidth,
            dropletSpriteHeight,
            dropletImage.width,
            dropletImage.height
        ),
        new Coordinates(
            dropletStartX,
            dropletDeltaY,
            dropletWidth,
            dropletHeight,
            1.03,
            0.7
        ),
    );

    const flyingDropletWidth = 200;
    const flyingDropletHeight = 150;
    const flyingDropletSpriteWidth = 200;
    const flyingDropletSpriteHeight = 150;
    const flyingDropletLastSpriteX = 0;
    const flyingDropletLastSpriteY = 750;
    const flyingDropletStartX = width;
    const flyingDropletDeltaY = defaultDeltaY + 150;
    const flyngDroplet = new NoPlaybleCharacter(
        new SpriteMap(
            flyingDropletImage,
            flyingDropletSpriteWidth,
            flyingDropletSpriteHeight,
            flyingDropletLastSpriteX,
            flyingDropletLastSpriteY
        ),
        new Coordinates(
            flyingDropletStartX,
            flyingDropletDeltaY,
            flyingDropletWidth,
            flyingDropletHeight,
            1.05,
            0.6
        ),
    );

    const trollWidth = 400;
    const trollHeight = 400;
    const trollLastSpriteX = 800;
    const trollLastSpriteY = 2000;
    const trollStartX = width;
    const trollDeltaY = defaultDeltaY - 50;
    const troll = new NoPlaybleCharacter(
        new SpriteMap(
            trollImage,
            trollWidth,
            trollHeight,
            trollLastSpriteX,
            trollLastSpriteY
        ),
        new Coordinates(
            trollStartX,
            trollDeltaY,
            trollWidth,
            trollHeight,
            1.10,
            0.7
        ),
    );

    const heart = new NoPlaybleCharacter(
        new SpriteMap(
            heartImage,
            200,
            167,
            200,
            167
        ),
        new Coordinates(
            1.2 * width,
            defaultDeltaY + 400,
            100,
            80,
            1,
            1
        ),
    );

    const foes = [
        droplet, 
        flyngDroplet, 
        troll
    ];

    game.setup(scenario, character, foes, heart);
}

function keyPressed() {
    game.keyPressed(keyCode);
}

function draw() {
    game.draw();
}