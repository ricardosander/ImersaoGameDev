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

let soundtrack;
let jumpSound;

let scenario;
let character;
let droplet;

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

    const characterWidth = 220;
    const characterHeight = 270;
    const characterStartX = 0;
    character = new PlaybleCharacter(characterImage, characterWidth, characterHeight, characterWidth, characterHeight, characterStartX);

    const dropletWidth = 104;
    const dropletHeight = 104;
    const dropletStartX = width;
    droplet = new NoPlaybleCharacter(dropletImage, dropletWidth, dropletHeight, dropletWidth, dropletHeight, dropletStartX);

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

    droplet.move();
    droplet.draw();

    character.applyGravity();
    character.draw();

    if (character.isColliding(droplet)) {
        soundtrack.stop();

        fill(255, 0, 0);
        textSize(50);
        text('GAME OVER', width / 3, height / 3);
        
        fill(0);
        textSize(32);
        text('Pressione ENTER para tentar novamente.', width / 4, height / 2);

        gameOver = true;
        noLoop();
    }
}