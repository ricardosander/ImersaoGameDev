class CharacterSelection {
  constructor(imageRepository, game, pcs) {
    this.imageRepository = imageRepository;
    this.game = game;
    this.pcs = pcs;

    this.font = toMoveFont;
    this.currentPc = this.pcs[0];
  }

  setup() {
    this.buttons = [
      new Button(
        () => {
          selectCharacter(game);
        },
        device.width * 0.45,
        device.height * 0.8,
        "Iniciar"
      ),
    ];

    this.buttons.forEach((button) => {
      button.setup();
    });
    loop();
  }

  keyPressed(keyCode) {
    return this;
  }

  draw() {
    image(this.imageRepository.homeScreenImage, 0, 0, width, height);

    fill("#000");

    textFont(this.font);
    textAlign(CENTER);

    textSize(50);
    text("Quem e voce?", width / 2, height * 0.2);

    textSize(40);
    text(this.currentPc.name, width / 2, height * 0.3);

    image(
      this.imageRepository["hipsta"]["run"][0],
      width * 0.4,
      height * 0.35,
      this.currentPc.width,
      this.currentPc.height
    );

    textSize(30);
    text(this.currentPc.description, width / 2, height * 0.7);

    noLoop();
    return this;
  }

  clear() {
    this.buttons.forEach((button) => {
      button.clear();
    });
  }
}
