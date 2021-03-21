class Game {
  constructor(imageRepository, soundRepository, settings) {
    this.imageRepository = imageRepository;
    this.soundRepository = soundRepository;

    this.characterRepository = new CharacterRepository(this.imageRepository);
    this.scenarioRepository = new ScenarioRepository(this.imageRepository);

    this.soundtrack = this.soundRepository.getSoundtrack();
    this.jumpSound = this.soundRepository.getJumpSound();

    this.score = new Score();
    this.life = new Life(
      this.imageRepository.heartImage,
      settings.life.max,
      settings.life.start
    );

    this.npcMap = settings.npcs.map;
    this.npcs = [];
    this.currentNpcs = [];
    this.currentNpcsIndex = 0;

    this.running = false;
  }

  setup() {
    if (this.running) {
      // this.soundtrack.play();
      loop();
      return;
    }

    this.scenario = this.scenarioRepository.createScenario();
    this.character = this.characterRepository.createPlaybleCharacter();

    const heart = this.characterRepository.createHeart();
    const foes = this.characterRepository.createFoes();

    this.npcs = [heart];
    foes.forEach((foe) => this.npcs.push(foe));

    this.currentNpcs = [];
    this.currentNpcsIndex = 0;

    this.score.restart();
    this.life.setup();

    this.soundtrack.setVolume(0.1);
    // this.soundtrack.loop();

    this.running = true;
    loop();
  }

  keyPressed(keyCode) {
    if (keyCode == "ArrowUp" || keyCode == "Click") {
      if (this.character.canJump()) {
        this.character.jump();
        // this.jumpSound.play();
      }
    }

    if (keyCode == "Enter") {
      return pauseGame;
    }

    return this;
  }

  draw() {
    if (this.currentNpcs.length == 0) {
      const mapNpc = this.npcMap[this.currentNpcsIndex];
      let aNpc;
      mapNpc.forEach((npc) => {
        aNpc = this.npcs[npc.index];
        aNpc.setSpeed(npc.speed);
        this.currentNpcs.push(aNpc);
      });

      this.currentNpcsIndex++;
      if (this.currentNpcsIndex >= this.npcMap.length) {
        this.currentNpcsIndex = 0;
      }
    }

    background(255);

    this.scenario.draw();
    this.score.draw();
    this.life.draw();

    this.currentNpcs.forEach((npc, index) => {
      npc.move();
      npc.draw();
      if (npc.isGone()) {
        this.currentNpcs.splice(index, 1);
        npc.restart();
      }
    });

    this.character.applyGravity();
    this.character.draw();

    let isGameOver = false;
    this.currentNpcs.forEach((npc, index) => {
      if (this.character.isColliding(npc)) {
        if (npc.isEnemy) {
          this.life.lose();
          // this.jumpSound.play();
          this.character.makesInvincible();
          if (!this.life.isAlive()) {
            this.running = false;
            isGameOver = true;
          }
        } else {
          npc.coordinates.positionX = width * 2;
          // this.jumpSound.play();

          const lastLifeCount = this.life.current;
          this.life.gain();
          if (lastLifeCount == this.life.current) {
            this.score.increase(50);
          }
          this.currentNpcs.splice(index, 1);
        }
      }
    });

    if (isGameOver) {
      return gameOver;
    }

    this.score.increase(0.1);
    return this;
  }

  clear() {}
}
