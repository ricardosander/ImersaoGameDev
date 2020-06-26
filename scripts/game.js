class Game {

    constructor(imageRepository, soundRepository) {
        
        this.imageRepository = imageRepository;
        this.soundRepository = soundRepository;

        this.characterRepository = new CharacterRepository(this.imageRepository);
        this.scenarioRepository = new ScenarioRepository(this.imageRepository);

        this.soundtrack = this.soundRepository.getSoundtrack();
        this.jumpSound = this.soundRepository.getJumpSound();
        
        this.status = new Status();
        this.score = new Score();
        
        this.currentFoes = [];
        this.currentFoesStartIndex = 0;
    }

    setup() {

        this.scenario = this.scenarioRepository.createScenario();
        this.character = this.characterRepository.createPlaybleCharacter();
        this.heart = this.characterRepository.createHeart();
        this.foes = this.characterRepository.createFoes();

        this.currentFoes = [];
        this.currentFoesStartIndex = 0;
        
        this.soundtrack.setVolume(0.1);
    }

    keyPressed(keyCode) {

        if (keyCode == UP_ARROW && !this.status.isOver() && !this.status.isPaused() && this.status.isStarted()) {
            if (this.character.canJump()) {
                this.character.jump()
                this.jumpSound.play();
            }
        }
    
        if (keyCode == RETURN && this.status.isStarted() && this.status.isOver()) {
            setup();
            this.soundtrack.play();
            this.status.restart();
            loop();
            return;
        }
    
        if (keyCode == RETURN && this.status.isStarted() && !this.status.isPaused()) {
            this.status.pause()
            this.character.coordinates.jumpingCount = 0;
            this.soundtrack.pause();
            return;
        }
    
        if (keyCode == RETURN && this.status.isStarted() && this.status.isPaused()) {
            this.status.resume();
            this.soundtrack.play();
            loop();
            return;
        }
    
        if (keyCode == RETURN && !this.status.isStarted()) {
            this.status.start();
            setup();
            this.soundtrack.loop();
            loop();
        }
    
    }

    draw() {
        if (this.currentFoes.length == 0) {
            this.foes.slice(this.currentFoesStartIndex, this.currentFoesStartIndex + 1).forEach(foe => {
            foe.restart();
            this.currentFoes.push(foe);
        });
        this.currentFoesStartIndex++;
        if (this.currentFoesStartIndex >= this.foes.length) {
            this.currentFoesStartIndex = 0;
        }
    }

    if (!this.status.isStarted()) {
        
        image(this.imageRepository.homeScreenImage, 0, 0, width, height);

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

    if (this.status.isPaused()) {

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

    this.scenario.draw();
    this.score.draw();

    this.currentFoes.forEach((foe, index) => {
        foe.move();
        foe.draw();
        if (foe.isGone()) {
            this.currentFoes.splice(index, 1);
        }
    });

    this.character.applyGravity();
    this.character.draw();

    this.heart.draw();
    this.heart.move();

    if (this.currentFoes.filter(foe => this.character.isColliding(foe)).length > 0) {
        this.soundtrack.stop();

        fill(0);
        textSize(32);
        text('Pressione ENTER para tentar novamente.', width * 0.7, height * 0.5);

        image(
            this.imageRepository.gameOverImage, 
            (width - this.imageRepository.gameOverImage.width) * 0.5 , 
            (height - this.imageRepository.gameOverImage.height) * 0.3
        );

        this.status.over();
        this.soundtrack.stop();
        noLoop();
        return;
    } 

    if (this.character.isColliding(this.heart)) {
        this.score.increase(25);    
        this.heart.coordinates.positionX = width * 2;
        this.jumpSound.play();
    }

    if (this.heart.isGone()) {
        this.heart.coordinates.positionX = width * 3;
    }

    this.score.increase(0.1);
    }
}