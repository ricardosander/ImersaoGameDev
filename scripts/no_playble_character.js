class NoPlaybleCharacter extends Character {

    constructor(frame, coordinates, spriteMap) {
        super(frame, coordinates, spriteMap);
    }

    move() {
        this.coordinates.move(-20)
    }

    isGone() {
        return this.coordinates.isGone();
    }

    restart() {
        return this.coordinates.restart();
    }

}