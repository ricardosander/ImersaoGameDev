class NoPlaybleCharacter extends Character {

    constructor(frame, coordinates, spriteMap, isEnemy) {
        super(frame, coordinates, spriteMap);
        this.speed = 0;
        this.isEnemy = isEnemy;
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    move() {
        this.coordinates.move(-this.speed)
    }

    isGone() {
        return this.coordinates.isGone();
    }

    restart() {
        return this.coordinates.restart();
    }

}