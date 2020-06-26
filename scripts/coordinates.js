class Coordinates {
    
    constructor(startPositionX, deltaY, width, cHeight) {
        this.startPositionX = startPositionX;
        this.deltaY = deltaY;
        this.width = width;
        this.height = cHeight;

        this.startPositionX = this.startPositionX;
        this.startPositionY = height - this.height - this.deltaY;

        this.positionX = this.startPositionX;
        this.positionY = this.startPositionY;

        this.speedPositionY = 0;
        this.gravity = 3;

        this.jumpingCount = 0
    }

    jump(speed) {
        this.speedPositionY = speed;
        this.jumpingCount++;
    }

    canJump() {
        return this.jumpingCount < 2;
    }

    move(speed) {
        this.positionX += speed;
        if (this.positionX < -this.width) {
            this.positionX = this.startPositionX;
        }
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

    isColliding(target) {

        const isColliding = collideRectRect(
            this.positionX + 40, 
            this.positionY + 50, 
            this.width * 0.5, 
            this.height * 0.7, 
            target.positionX + 20, 
            target.positionY + 10, 
            target.width * 0.9, 
            target.height * 0.8
        );

        if (isColliding) {
            this.drawRects();
            target.drawRects();
        }

        return isColliding;
    }

    drawRects() {
        noFill();
        rect(
            this.positionX,
            this.positionY,
            this.width,
            this.height
        );
    }
}