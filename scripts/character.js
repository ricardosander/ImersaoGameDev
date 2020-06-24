class Character {
    
    constructor(characterImage, characterWidth, characterHeight) {
        this.characterImage = characterImage;
        this.characterWidth = characterWidth;
        this.characterHeight = characterHeight;

        this.matriz = [
            [0, 0],
            [220, 0],
            [440, 0],
            [660, 0],
            [0, 270],
            [220, 270],
            [440, 270],
            [660, 270],
            [0, 540],
            [220, 540],
            [440, 540],
            [660, 540], 
            [0, 810],
            [220, 810],
            [440, 810],
            [660, 810],
          ];
          this.currentFrame = 0;
    }

    draw() {
        image(
            this.characterImage, 
            0, 
            height - this.characterHeight, 
            this.characterWidth, 
            this.characterHeight, 
            this.matriz[this.currentFrame][0], 
            this.matriz[this.currentFrame][1],
            220, 
            270
        );
        
        this.animate();
    }

    animate() {
        this.currentFrame++;
        if (this.currentFrame >= this.matriz.length) {
            this.currentFrame = 0;
        }
    }
}