class Character {
    
    constructor(characterImage, characterWidth, characterHeight, spriteWidth, spriteHeight, startPositionX) {
        this.characterImage = characterImage;
        this.characterWidth = characterWidth;
        this.characterHeight = characterHeight;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        
        this.currentFrameX = 0;
        this.currentFrameY = 0;
        
        this.startPositionX = startPositionX;
        this.startPositionY = height - this.characterHeight;

        this.positionX = this.startPositionX;
        this.positionY = this.startPositionY;
    }

    draw() {
        image(
            this.characterImage, 
            this.positionX, 
            this.positionY, 
            this.characterWidth, 
            this.characterHeight, 
            this.currentFrameX, 
            this.currentFrameY,
            this.spriteWidth, 
            this.spriteHeight
        );
        
        this.animate();
    }

    animate() {
        this.currentFrameX += this.spriteWidth;
        if (this.currentFrameX > this.characterImage.width - this.spriteWidth) {
            this.currentFrameX = 0;
            this.currentFrameY += this.spriteHeight;
        }

        if (this.currentFrameY > this.characterImage.height - this.spriteHeight) {
            this.currentFrameX = 0;
            this.currentFrameY = 0;
        }
    }
}