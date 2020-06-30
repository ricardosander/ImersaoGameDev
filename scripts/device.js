class Device {

    constructor(deviceWidth, deviceHeight) {

        this.width = deviceWidth;
        this.height =  deviceHeight;
    
        if (this.height > this.width) {
            this.height = this.width;
        }

        this.isTouch = false;
    }

}