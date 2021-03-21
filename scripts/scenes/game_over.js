class GameOver {
  constructor(imageRepository, soundRepository) {
    this.imageRepository = imageRepository;
    this.soundtrack = soundRepository.soundtrack;
  }

  setup() {
    this.soundtrack.stop();

    this.changeCharacter = new Button(
      () => {
        changeScene(characterSelection);
      },
      device.width * 0.5,
      device.height * 0.7,
      "Voltar"
    );
    this.changeCharacter.setup();

    this.continnuar = new Button(
      () => {
        keyPressed({ code: "Enter" });
      },
      width * 0.5,
      height * 0.6,
      "Continuar"
    );
    this.continnuar.setup();
  }

  keyPressed(keyCode) {
    if (keyCode == "Enter") {
      return this.lastScene;
    }

    return this;
  }

  draw() {
    image(
      this.imageRepository.gameOverImage,
      (width - this.imageRepository.gameOverImage.width) * 0.5,
      (height - this.imageRepository.gameOverImage.height) * 0.3
    );

    fill("#000");
    textSize(40);
    textAlign(CENTER);
    text(
      "Uma criatura do mundo das fadas capturou voce.",
      width * 0.5,
      height * 0.45
    );
    text(
      "O portal para o seu mundo se fechou para sempre.",
      width * 0.5,
      height * 0.55
    );

    this.changeCharacter.button.center("horizontal");
    this.continnuar.button.center("horizontal");

    noLoop();
    return this;
  }

  clear() {
    this.changeCharacter.clear();
    this.continnuar.clear();
  }
}
