class Game {

    constructor(imageRepository, soundRepository, gameOver, pauseGame) {

        this.imageRepository = imageRepository;
        this.soundRepository = soundRepository;
        this.gameOver = gameOver;
        this.pauseGame = pauseGame;

        this.characterRepository = new CharacterRepository(this.imageRepository);
        this.scenarioRepository = new ScenarioRepository(this.imageRepository);

        this.soundtrack = this.soundRepository.getSoundtrack();
        this.jumpSound = this.soundRepository.getJumpSound();

        this.status = new Status();
        this.score = new Score();

        this.currentFoes = [];
        this.currentFoesStartIndex = 0;

        this.playbleCharacter = Math.floor(random(0, 16))

        this.running = false;
    }

    setup(selectCharacter) {

        if (this.running) {
            this.soundtrack.play();
            loop();
            return;
        }

        this.selectCharacter = selectCharacter;

        this.scenario = this.scenarioRepository.createScenario();
        this.character = this.characterRepository.createPlaybleCharacter(this.selectCharacter);
        this.heart = this.characterRepository.createHeart();
        this.foes = this.characterRepository.createFoes();

        this.score.restart();

        this.currentFoes = [];
        this.currentFoesStartIndex = 0;
        this.foeSpeed = 0;
        this.heartSpeed = 20;

        this.soundtrack.setVolume(0.1);
        
        this.status.start();
        this.soundtrack.loop();

        this.running = true;
        loop();
    }

    keyPressed(keyCode) {

        if (keyCode == 'ArrowUp' || keyCode == 'Touch') {
            if (this.character.canJump()) {
                this.character.jump()
                this.jumpSound.play();
            }
        }

        if (keyCode == 'Enter') {
            return this.pauseGame;
        }

        return this;
    }

    draw() {

        if (this.currentFoes.length == 0) {

            this.foeSpeed = random(10, 40);
            this.currentFoesStartIndex = Math.floor(random(0, 3));

            this.foes.slice(this.currentFoesStartIndex, this.currentFoesStartIndex + 1).forEach(foe => {
                foe.restart();
                this.currentFoes.push(foe);
            });
        }

        background(255);

        this.scenario.draw();
        this.score.draw();

        this.currentFoes.forEach((foe, index) => {
            foe.move(this.foeSpeed);
            foe.draw();
            if (foe.isGone()) {
                this.currentFoes.splice(index, 1);
            }
        });

        this.character.applyGravity();
        this.character.draw();

        this.heart.draw();
        this.heart.move(this.heartSpeed);

        if (this.currentFoes.filter(foe => this.character.isColliding(foe)).length > 0) {
            this.running = false;
            return this.gameOver;
        }

        if (this.character.isColliding(this.heart)) {
            this.score.increase(25);
            this.heart.coordinates.positionX = width * 2;
            this.jumpSound.play();
        }

        if (this.heart.isGone()) {
            this.heart.coordinates.positionX = width * Math.floor(random(3, 10));
            this.heartSpeed = Math.floor(random(5, 50));
        }

        this.score.increase(0.1);
        return this
    }

    clear() {

    }
}