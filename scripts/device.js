class Device {

    constructor(deviceWidth, deviceHeight) {

        this.width = deviceWidth;
        this.height =  deviceHeight;
    
        if (this.height > this.width) {
            this.height = this.width;
        }

        this.isTouch = false;
        this.parts = 100;
    }

    getHeightByParts(parts) {
        return parts * this.height / this.parts;
    }

    getWidthByParts(parts, originalWidth, originalHeight) {
        return (this.getHeightByParts(parts) * originalWidth) / originalHeight;
    }

    drawParts() {

        if (!settings.game.showScreenParts) {
            return;
        }

        noFill();
        for (let part = 0; part < this.parts; part++) {
            rect(
                0,
                part * (this.height / this.parts),
                this.width,
                this.height / this.parts
            );
        }

    }
}