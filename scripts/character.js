class Character {

    constructor(frame, coordinates, spriteMap) {
        this.frame = frame;
        this.coordinates = coordinates;
        this.spriteMap = spriteMap;
    }

    draw() {
        
        image(
            this.frame.image,
            this.coordinates.positionX,
            this.coordinates.positionY,
            this.coordinates.width,
            this.coordinates.height,
            this.frame.startX,
            this.frame.startY,
            this.frame.width,
            this.frame.height
        );

        // this.coordinates.drawRects();

        this.animate();
    }

    animate() {
        this.spriteMap.animate(this.frame);
    }
}