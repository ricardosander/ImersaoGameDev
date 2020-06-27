class PlaybleCharacter extends Character {

    constructor(frame, coordinates, spriteMap) {
        super(frame, coordinates, spriteMap);
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