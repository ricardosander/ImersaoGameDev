class Button {

    constructor(action, posiotionX, posiotionY, text) {
        this.action = action;
        this.posiotionX = posiotionX;
        this.posiotionY = posiotionY;
        this.text = text;
    }

    setup() {
        this.button = createButton(this.text);
        this.button.addClass('botao-tela-inicial');
        this.button.position(this.posiotionX, this.posiotionY);
        this.button.mousePressed(this.action);
    }

    clear() {
        this.button.remove();
    }
}