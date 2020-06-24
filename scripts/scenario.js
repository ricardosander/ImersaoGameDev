class Scenario {

    constructor(scenarioImage, speeds, startPositionX1, startPositionX2, positionY) {
        this.scenarioImage = scenarioImage;
        this.startPositionX1 = startPositionX1;
        this.startPositionX2 = startPositionX2;
        this.positionY = positionY;
        this.speeds = speeds;

        this.positionsX1 = [];
        this.positionsX2 = [];

        this.scenarioImage.forEach(element => {
            this.positionsX1.push(this.startPositionX1);
            this.positionsX2.push(this.startPositionX2);
        });
    }

    draw() {

        this.scenarioImage.forEach((element, index) => {
            image(element, this.positionsX1[index], this.positionY, width, height);
            image(element, this.positionsX2[index], this.positionY, width, height);    
        });
        
        this.move();
    }

    move() {
        this.movePositionX(this.positionsX1);
        this.movePositionX(this.positionsX2);
    }

    movePositionX(positionsX) {
        positionsX.forEach((element, index, array) => {
            array[index] -= this.speeds[index];
            if (array[index] <= -width) {
                array[index] = width;
            }
        });
    }

}