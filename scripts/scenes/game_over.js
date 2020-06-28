class GameOver {

    constructor(imageRepository, soundRepository, button, continar) {
        this.imageRepository = imageRepository;
        this.soundtrack = soundRepository.soundtrack;
        this.button = button;
        this.continnuar = continar;
    }

    setup() {
        this.soundtrack.stop();
        this.button.setup();
        this.continnuar.setup();
    }

    keyPressed(keyCode) {

        if (keyCode == 'Enter') {
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

        fill('#000');
        textSize(40);
        textAlign(CENTER);
        text('Uma criatura do mundo das fadas capturou voce.', width * 0.5, height * 0.45);
        text('O portal para o seu mundo se fechou para sempre.', width * 0.5, height * 0.55);

        this.button.button.center('horizontal');
        this.continnuar.button.center('horizontal');

        noLoop();
        return this
    }

    clear() {
        this.button.clear();
        this.continnuar.clear();
    }
}