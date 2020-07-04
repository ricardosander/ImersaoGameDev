let imageRepository;
let soundRepository;
let toMoveFont;

let homeScreen;
let game;
let gameOver;
let pauseGame;

let currentScene;

let selectedCharacter;

let pcsSettings;
let npcsSettings;
let gameSettings;
let settings;

let device;
let scenes;

function preload() {

    game = loadJSON("settings/game.json");
    pcs = loadJSON("settings/pcs.json");
    npcs = loadJSON("settings/npcs.json");

    imageRepository = new ImageRepository();
    imageRepository.preload();

    soundRepository = new SoundRepository();
    soundRepository.preload();
    
    toMoveFont = loadFont('assets/images/assets/fontHomeScreen.otf');

    window.addEventListener('resize', function () { console.log('resized'); window.location.reload(); });
}

function setup() {

    settings = {
        game: game,
        pcs: pcs,
        npcs: npcs.npcs
    };

    console.log(settings);

    selectedCharacter = 'hipsta';

    device = new Device(windowWidth, windowHeight);

    frameRate(40);
    createCanvas(device.width, device.height);

    gameOver = new GameOver(imageRepository, soundRepository);
    pauseGame = new GamePause(imageRepository, soundRepository);
    game = new Game(imageRepository, soundRepository, settings);
    characterSelection = new CharacterSelection(imageRepository, game);
    homeScreen = new HomeScreen(imageRepository, characterSelection);

    scenes = {
        'homeScreen': homeScreen,
        'characterSelection': characterSelection,
        'game': game,
        'pauseGame': pauseGame,
        'gameOver': gameOver
    }

    currentScene = scenes[settings.game.startScene];
    currentScene.setup();
}

function touchStarted(event) {
    device.isTouch = true;
    event.code = 'Click';
    keyPressed(event);
}

function mousePressed(event) {
    if (!device.isTouch) {//solves mobile problem where a touch triggers touchStarted and mousePressed event.
        event.code = 'Click';
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

    device.drawParts();
}

