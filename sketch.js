let imageRepository;
let soundRepository;
let toMoveFont;

let click = true;

let homeScreen;
let game;

let currentScene;

let selectedCharacter;

function preload() {

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
    game = new Game(imageRepository, soundRepository, gameOver, gamePause);

    const buttons = [
        new Button(() => { selectCharacter('hipsta', game) }, screenWidth * 0.1, screenHeight * 0.25, 'Bruxinha Emilly'),
        new Button(() => { selectCharacter('boy', game) }, screenWidth * 0.4, screenHeight * 0.25, 'Arthur'),
        new Button(() => { selectCharacter('girl', game) }, screenWidth * 0.7, screenHeight * 0.25, 'Alice'),

        new Button(() => { selectCharacter('knight', game) }, screenWidth * 0.1, screenHeight * 0.35, 'Cavaleiro Samuel'),
        new Button(() => { selectCharacter('cowboy', game) }, screenWidth * 0.4, screenHeight * 0.35, 'Nathan Drake'),
        new Button(() => { selectCharacter('cowgirl', game) }, screenWidth * 0.7, screenHeight * 0.35, 'Lara Croft'),

        new Button(() => { selectCharacter('santa', game) }, screenWidth * 0.1, screenHeight * 0.45, 'Papai Noel'),
        new Button(() => { selectCharacter('jack', game) }, screenWidth * 0.4, screenHeight * 0.45, 'Jack Lanterna'),
        
        new Button(() => { selectCharacter('ninjaboy', game) }, screenWidth * 0.4, screenHeight * 0.55, 'Kakashi'),
        new Button(() => { selectCharacter('ninjagirl', game) }, screenWidth * 0.7, screenHeight * 0.55, 'Sakura'),

        new Button(() => { selectCharacter('dino', game) }, screenWidth * 0.1, screenHeight * 0.65, 'Dino'),
        new Button(() => { selectCharacter('dog', game) }, screenWidth * 0.4, screenHeight * 0.65, 'Berillo'),
        new Button(() => { selectCharacter('cat', game) }, screenWidth * 0.7, screenHeight * 0.65, 'Sr. Whiskas'),

        new Button(() => { selectCharacter('robot', game) }, screenWidth * 0.1, screenHeight * 0.75, 'Optimus'),
        new Button(() => { selectCharacter('zombieboy', game) }, screenWidth * 0.4, screenHeight * 0.75, 'Zumbi Henzo'),
        new Button(() => { selectCharacter('zombiegirl', game) }, screenWidth * 0.7, screenHeight * 0.75, 'Zumbi Juliana'),
    ];

    characterSelection = new CharacterSelection(imageRepository, game, buttons);
    homeScreen = new HomeScreen(imageRepository, characterSelection, button1);

    currentScene = homeScreen;

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

