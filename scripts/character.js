class Character {
    
    constructor(characterImage, characterWidth, characterHeight, spriteWidth, spriteHeight) {
        this.characterImage = characterImage;
        this.characterWidth = characterWidth;
        this.characterHeight = characterHeight;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        
        this.currentFrameX = 0;
        this.currentFrameY = 0;
    }

    draw() {
        image(
            this.characterImage, 
            0, 
            height - this.characterHeight, 
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