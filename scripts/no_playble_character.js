class NoPlaybleCharacter extends Character {

    constructor(spriteMap, coordinates) {
        super(spriteMap, coordinates);
    }

    move() {
        this.coordinates.move(-20)
    }

}