class Scenario {

    constructor(scenarioImage, positionX1, positionX2, positionY, speed) {
        this.scenarioImage = scenarioImage;
        this.positionX1 = positionX1;
        this.positionX2 = positionX2;
        this.positionY = positionY;
        this.speed = speed;
    }

    draw() {
        image(this.scenarioImage, this.positionX1, this.positionY, width, height);
        image(this.scenarioImage, this.positionX2, this.positionY, width, height);
        this.move();
    }

    move() {

        this.positionX1 -= this.speed;
        this.positionX2 -= this.speed;

        if (this.positionX1 <= -width) {
            this.positionX1 = width;
        }

        if (this.positionX2 <= -width) {
            this.positionX2 = width;
        }
    }

}