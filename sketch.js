let imageRepository;
let soundRepository;
let toMoveFont;

let click = true;

let homeScreen;
let game;

let currentScene;

let selectedCharacter;

let settings;

function preload() {

    settings = loadJSON("settings.json");
    console.log(settings);

    imageRepository = new ImageRepository();
    imageRepository.preload();

    soundRepository = new SoundRepository();
    soundRepository.preload();
    
    toMoveFont = loadFont('assets/images/assets/fontHomeScreen.otf');
}

function setup() {

    selectedCharacter = 'hipsta';

    let screenWidth =  windowWidth;
    let screenHeight =  windowHeight;

    if (screenHeight > screenWidth) {
        screenHeight = screenWidth;
    }

    frameRate(40);
    createCanvas(screenWidth, screenHeight);

    const button1 = new Button(() => { changeScene(characterSelection) }, screenWidth * 0.5, screenHeight * 0.6, 'Continuar');
    const continuar = new Button(() => { keyPressed({ code: 'Enter' }) }, width * 0.5, height * 0.6, 'Continuar');
    const button2 = new Button(() => { changeScene(characterSelection) }, screenWidth * 0.5, screenHeight * 0.7, 'Trocar Personagem');

    const gameOver = new GameOver(imageRepository, soundRepository, button2, continuar);
    const gamePause = new GamePause(imageRepository, soundRepository, button2);
    game = new Game(imageRepository, soundRepository, gameOver, gamePause, settings);

    const buttons = [];

    let x = 1;
    let y = 25;

    const maxX = 7;
    const maxY = 75;

    settings.pcs.forEach((pc, index) => {
        
        buttons.push(new Button(() => { selectCharacter(pc.code, game) }, screenWidth * (x / 10), screenHeight * ( y / 100), pc.name));
        x += 3;
        if (x > maxX) {
            x = 1;
            y += 10;
        }
        if (y > maxY) {
            return;
        }
    });

    characterSelection = new CharacterSelection(imageRepository, game, buttons);
    homeScreen = new HomeScreen(imageRepository, characterSelection, button1);

    currentScene = eval(settings.startScene);

    currentScene.setup();
}

function touchStarted(event) {
    click = false;
    event.code = 'Touch';
    keyPressed(event);
}

function mousePressed(event) {
    if (click) {//solves mobile problem where a touch triggers touchStarted and mousePressed event.
        keyPressed(event);
    }
}

function keyPressed(event) {
    let scene = currentScene.keyPressed(event.code);
    if (scene != currentScene) {
        changeScene(scene);
    }
}

function selectCharacter(character, scene) {
    selectedCharacter = character;
    changeScene(scene);
}

function changeScene(scene) {
    
    console.log('trocando cena de ' + (currentScene.constructor.name) + ' para ' + (scene.constructor.name));

    currentScene.clear();
    scene.lastScene = currentScene;
    currentScene = scene;
    currentScene.setup(selectedCharacter);
}

function draw() {
    let scene = currentScene.draw();
    if (scene != currentScene) {
        changeScene(scene);
    }
}

