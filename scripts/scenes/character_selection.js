class CharacterSelection {

    constructor(imageRepository, game, buttons, pcs) {
        this.imageRepository = imageRepository;
        this.game = game;
        this.buttons = buttons;
        this.pcs = pcs;

        this.font = toMoveFont;
        this.currentPcIndex = 0;
        this.currentPc = this.pcs[this.currentPcIndex];
    }

    setup() {
        this.buttons.forEach(button => { button.setup(); });
        loop();
    }

    keyPressed(keyCode) {
        return this;
    }

    draw() {

        if (this.currentPcIndex >= this.pcs.length) {
            this.currentPcIndex = 0;
        }

        if (this.currentPcIndex < 0) {
            this.currentPcIndex = this.pcs.length - 1;
        }
        
        this.currentPc = this.pcs[this.currentPcIndex];

        image(this.imageRepository.homeScreenImage, 0, 0, width, height);

        fill('#000');

        textFont(this.font);
        textAlign(CENTER);

        textSize(50);
        text('Quem e voce?', width / 2, height * 0.2);

        textSize(40);
        text(this.currentPc.name, width / 2, height * 0.3);

        image(
            this.imageRepository[this.currentPc.code]['run'][0], 
            width * 0.4, 
            height * 0.35, 
            this.currentPc.width, 
            this.currentPc.height
        );

        textSize(30);
        text(this.currentPc.description, width / 2, height * 0.7);

        noLoop();
        return this
    }

    clear() {
        this.buttons.forEach(button => { button.clear(); });
    }

}