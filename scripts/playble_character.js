class PlaybleCharacter extends Character {

    constructor(spriteMap, coordinates) {
        super(spriteMap, coordinates);
    }

    jump() {
        this.coordinates.jump(-50);
    }

    canJump() {
        return this.coordinates.canJump();
    }

    applyGravity() {
        this.coordinates.applyGravity();
    }

    isColliding(foe) {
        return this.coordinates.isColliding(foe.coordinates);
    }
}