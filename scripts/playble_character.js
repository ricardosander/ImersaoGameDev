class PlaybleCharacter extends Character {

    constructor(frame, coordinates, spriteMap) {
        super(frame, coordinates, spriteMap);
        this.invincible = false;
    }

    makesInvincible() {
        this.invincible = true;
        setTimeout(
            () => { this.invincible = false }, 
            1000
        );
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

    isColliding(npc) {
        return (!npc.isEnemy || !this.invincible) && this.coordinates.isColliding(npc.coordinates);
    }
}