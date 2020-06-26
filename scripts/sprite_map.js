class SpriteMap {

    constructor(spriteImage, spriteWidth, spriteHeight, lastSpriteX, lastSpriteY) {
        this.spriteImage = spriteImage;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.lastSpriteX = lastSpriteX;
        this.lastSpriteY = lastSpriteY;

        this.currentFrameX = 0;
        this.currentFrameY = 0;
    }

    animate() {

        if (this.currentFrameX == this.lastSpriteX && this.currentFrameY == this.lastSpriteY) {
            this.currentFrameX = 0;
            this.currentFrameY = 0;
        } else {
            this.currentFrameX += this.spriteWidth;
        }


        if (this.currentFrameX > this.spriteImage.width - this.spriteWidth) {
            this.currentFrameX = 0;
            this.currentFrameY += this.spriteHeight;
        }

        if (this.currentFrameY > this.spriteImage.height - this.spriteHeight) {
            this.currentFrameX = 0;
            this.currentFrameY = 0;
        }
    }

}