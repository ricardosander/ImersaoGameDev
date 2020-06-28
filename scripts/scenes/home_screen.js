class HomeScreen {

    constructor(imageRepository, game, button) {
        this.imageRepository = imageRepository;
        this.game = game;
        this.button = button;

        this.font = toMoveFont;
    }

    setup() {
        this.button.setup();
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
        text('PERDIDOS NA FLORESTA DAS FADAS', width / 2, height * 0.2);

        textSize(30);
        text('Voce foi transportado para o mundo das fadas.', width / 2, height * 0.3);
        text('Os habitantes deste mundo magico nao sao nada amistosos.', width / 2, height * 0.4);
        text('Para voltar ao seu mundo voce precisa primeiro sobreviver.', width / 2 , height * 0.5);

        this.button.button.center('horizontal');

        noLoop();
        return this
    }

    clear() {
        this.button.clear();
    }

}