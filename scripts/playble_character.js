class PlaybleCharacter extends Character {

    constructor(characterImage, characterWidth, characterHeight, spriteWidth, spriteHeight, startPositionX) {
        super(characterImage, characterWidth, characterHeight, spriteWidth, spriteHeight, startPositionX);

        this.speedPositionY = 0;
        this.gravity = 3;

        this.jumpingCount = 0
    }

    jump() {
        this.speedPositionY = -30;
        this.jumpingCount++;
    }

    canJump() {
        return this.jumpingCount < 2;
    }

    applyGravity() {

        this.positionY += this.speedPositionY;
        this.speedPositionY += this.gravity;
        
        
        if (this.positionY > this.startPositionY) {
            this.positionY = this.startPositionY;
            this.speedPositionY = 0;
            this.jumpingCount = 0;
        }
    }

    isColliding(foe) {

        const isColliding = collideRectRect(
            this.positionX + 40, 
            this.positionY + 50, 
            this.characterWidth * 0.5, 
            this.characterHeight * 0.7, 
            foe.positionX + 20, 
            foe.positionY + 10, 
            foe.characterWidth * 0.9, 
            foe.characterHeight * 0.8
            );

        if (isColliding) {
            this.drawRects(foe);
        }


        return isColliding;
    }

    drawRects(foe) {
        noFill();
        rect(
            this.positionX + 40,
            this.positionY + 50,
            this.characterWidth * 0.5,
            this.characterHeight * 0.7
        );

        rect(
            foe.positionX + 20,
            foe.positionY + 10,
            foe.characterWidth * 0.9,
            foe.characterHeight * 0.8
        );
    }
}