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
let homeScreenImage;

let soundtrack;
let jumpSound;

let scenario;
let score;
let character;
let droplet;
let flyngDroplet;
let troll;
let foes;

let currentFoesStartIndex;
let currentFoes;

let gameStart;
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
    homeScreenImage = loadImage('assets/images/assets/homescreen.png');

    soundtrack = loadSound('assets/sounds/soundtrack.mp3');
    jumpSound = loadSound('assets/sounds/jump.mp3');

    gameStart = false;
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
    const characterStartX = 50;
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
            trollHeight,
            1.10,
            0.7
        ),
    );

    foes = [
        droplet, 
        flyngDroplet, 
        troll
    ];

    soundtrack.setVolume(0.1);

    gameOver = false;
    paused = false;

    currentFoes = [];
    currentFoesStartIndex = 0;
}

function keyPressed() {

    if (!gameOver && !paused && gameStart && keyCode == UP_ARROW) {
        if (character.canJump()) {
            character.jump()
            jumpSound.play();
        }
    }

    if (gameStart && keyCode == RETURN && gameOver) {
        setup();
        soundtrack.play();
        loop();
        return;
    }

    if (gameStart && keyCode == RETURN && !paused) {
        paused = true;
        character.coordinates.jumpingCount = 0;
        soundtrack.pause();
        return;
    }

    if (gameStart && keyCode == RETURN && paused) {
        paused = false;
        soundtrack.play();
        loop();
        return;
    }

    if (!gameStart && keyCode == RETURN) {
        gameStart = true;
        setup();
        soundtrack.loop();
        loop();
    }

}

function draw() {

    if (currentFoes.length == 0) {
        foes.slice(currentFoesStartIndex, currentFoesStartIndex+1).forEach(foe => {
            foe.restart();
            currentFoes.push(foe);
        });
        currentFoesStartIndex++;
        if (currentFoesStartIndex >= foes.length) {
            currentFoesStartIndex = 0;
        }
    }

    if (!gameStart) {
        
        image(homeScreenImage, 0, 0, width, height);

        fill(0);
        textSize(50);
        text('AS AVENTURAS DA HIPSTA', width * 0.25, height * 0.2);

        textSize(20);
        text('Aqui deveria ter uma introdução legal feita por um não backender.', width * 0.25, height * 0.4);

        fill(255);
        textSize(30);
        text('Pressione ENTER para começar.', width * 0.29, height * 0.6);

        noLoop();
        return;
    }

    if (paused) {

        fill(255, 0, 0);
        textSize(50);
        text('PAUSED', width * 0.5, height * 0.2);
        noLoop();

        fill(0);
        textSize(32);
        text('Pressione ENTER novamente para continuar.', width * 0.6, height * 0.5);

        return;
    }

    background(255);

    scenario.draw();
    score.draw();

    currentFoes.forEach((foe, index) => {
        foe.move();
        foe.draw();
        if (foe.isGone()) {
            currentFoes.splice(index, 1);
        }
    });

    character.applyGravity();
    character.draw();

    if (currentFoes.filter(foe => character.isColliding(foe)).length > 0) {
        soundtrack.stop();

        fill(0);
        textSize(32);
        text('Pressione ENTER para tentar novamente.', width * 0.7, height * 0.5);

        image(gameOverImage, (width - gameOverImage.width) * 0.5 , (height - gameOverImage.height) * 0.3);

        gameOver = true;
        soundtrack.stop();
        noLoop();
        return;
    } 
    score.increase(0.1);
}