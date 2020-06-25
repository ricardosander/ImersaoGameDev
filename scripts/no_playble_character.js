class NoPlaybleCharacter extends Character {

    constructor(characterImage, characterWidth, characterHeight, spriteWidth, spriteHeight, startPositionX) {
        super(characterImage, characterWidth, characterHeight, spriteWidth, spriteHeight, startPositionX);
    }

    move() {
        this.positionX -= 20;
        if (this.positionX < -this.characterWidth) {
            this.positionX = this.startPositionX;
        }
    }

}