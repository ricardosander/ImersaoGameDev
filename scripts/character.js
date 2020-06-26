class Character {
    
    constructor(spriteMap, coordinates) {
        this.coordinates = coordinates;
        this.spriteMap = spriteMap;
    }

    draw() {
        image(
            this.spriteMap.spriteImage, 
            this.coordinates.positionX, 
            this.coordinates.positionY, 
            this.coordinates.width, 
            this.coordinates.height, 
            this.spriteMap.currentFrameX, 
            this.spriteMap.currentFrameY,
            this.spriteMap.spriteWidth, 
            this.spriteMap.spriteHeight
        );
        
        this.coordinates.drawRects();
        
        this.animate();
    }

    animate() {
        this.spriteMap.animate()
    }
}