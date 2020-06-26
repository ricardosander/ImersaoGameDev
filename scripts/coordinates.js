class Coordinates {
    
    constructor(startPositionX, deltaY, width, cHeight, positionPrecision, sizePrecision) {
        this.startPositionX = startPositionX;
        this.deltaY = deltaY;
        this.width = width;
        this.height = cHeight;
        this.positionPrecision = positionPrecision;
        this.sizePrecision = sizePrecision;

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
    }

    isGone() {
        return this.positionX < -this.width;
    }

    restart() {
        this.positionX = this.startPositionX;
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
            this.positionX * this.positionPrecision, 
            this.positionY * this.positionPrecision, 
            this.width * this.sizePrecision, 
            this.height * this.sizePrecision, 
            target.positionX * target.positionPrecision, 
            target.positionY* target.positionPrecision, 
            target.width * target.sizePrecision, 
            target.height * target.sizePrecision
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
            this.positionX * this.positionPrecision,
            this.positionY * this.positionPrecision,
            this.width * this.sizePrecision,
            this.height * this.sizePrecision
        );
    }
}