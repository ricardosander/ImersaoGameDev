class NoPlaybleCharacter extends Character {

    constructor(frame, coordinates, spriteMap) {
        super(frame, coordinates, spriteMap);
    }

    move(speed) {
        this.coordinates.move(-speed)
    }

    isGone() {
        return this.coordinates.isGone();
    }

    restart() {
        return this.coordinates.restart();
    }

}