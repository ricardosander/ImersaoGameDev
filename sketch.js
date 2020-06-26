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

let gameOverImage;

let soundtrack;
let jumpSound;

let scenario;
let score;
let character;
let droplet;
let flyngDroplet;
let troll;
let foes;

let gameOver;
let paused;

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

    gameOverImage = loadImage('assets/images/assets/game-over.png');

    soundtrack = loadSound('assets/sounds/soundtrack.mp3');
    jumpSound = loadSound('assets/sounds/jump.mp3');
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

    score = new Score();

    const defaultDeltaY = 100;

    const characterWidth = 220;
    const characterHeight = 270;
    const characterSpriteWidth = 220;
    const characterSpriteHeight = 270;
    const characterStartX = 0;
    const characterDeltaY = defaultDeltaY;
    character = new PlaybleCharacter(
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
            characterHeight
        ),
        
    );

    const dropletWidth = 104;
    const dropletHeight = 104;
    const dropletSpriteWidth = 104;
    const dropletSpriteHeight = 104;
    const dropletStartX = 3 * width;
    const dropletDeltaY = defaultDeltaY;
    droplet = new NoPlaybleCharacter(
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
            dropletHeight
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
    flyngDroplet = new NoPlaybleCharacter(
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
            flyingDropletHeight
        ),
    );

    const trollWidth = 400;
    const trollHeight = 400;
    const trollLastSpriteX = 800;
    const trollLastSpriteY = 2000;
    const trollStartX = width * 2;
    const trollDeltaY = defaultDeltaY;
    troll = new NoPlaybleCharacter(
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
            trollHeight
        ),
    );

    foes = [droplet, flyngDroplet, troll];

    soundtrack.setVolume(0.1);
    soundtrack.loop();

    gameOver = false;
    paused = false;
}

function keyPressed() {

    if (keyCode == UP_ARROW) {
        if (character.canJump()) {
            character.jump()
            jumpSound.play();
        }
    }

    if (keyCode == RETURN && gameOver) {
        setup();
        loop();
        return;
    }

    if (keyCode == RETURN && !paused) {
        paused = true;
        soundtrack.pause();
        return;
    }

    if (keyCode == RETURN && paused) {
        paused = false;
        soundtrack.play();
        loop();
        return;
    }

}

function draw() {

    if (paused) {

        fill(255, 0, 0);
        textSize(50);
        text('PAUSED', width / 3, height / 3);
        noLoop();

        fill(0);
        textSize(32);
        text('Pressione ENTER novamente para continuar.', width / 4, height / 2);

        return;
    }

    background(255);

    scenario.draw();
    score.draw();

    foes.forEach(foe => {
        foe.move();
        foe.draw();
    });

    character.applyGravity();
    character.draw();

    if (foes.filter(foe => character.isColliding(foe)).length > 0) {
        soundtrack.stop();

        fill(0);
        textSize(32);
        text('Pressione ENTER para tentar novamente.', width * 0.7, height * 0.5);

        image(gameOverImage, (width - gameOverImage.width) * 0.5 , (height - gameOverImage.height) * 0.3);

        gameOver = true;
        noLoop();
        return;
    } 
    score.increase(0.1);
}