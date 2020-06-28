class CharacterSelection {

    constructor(imageRepository, game, buttons) {
        this.imageRepository = imageRepository;
        this.game = game;
        this.buttons = buttons;

        this.font = toMoveFont;
    }

    setup() {
        this.buttons.forEach(button => { button.setup(); });
        loop();
    }

    keyPressed(keyCode) {
        return this;
    }

    draw() {

        image(this.imageRepository.homeScreenImage, 0, 0, width, height);

        fill('#000');

        textFont(this.font);
        textAlign(CENTER);

        textSize(50);
        text('Quem e voce?', width / 2, height * 0.2);

        noLoop();
        return this
    }

    clear() {
        this.buttons.forEach(button => { button.clear(); });
    }

}