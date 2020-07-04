class Life {

    constructor(image, max, start) {
        this.image = image;
        this.max = max;
        this.start = start;
        this.current = this.start;

        const parts = 6;
        this.width = device.getWidthByParts(parts, this.image.width, this.image.height);
        this.height = device.getHeightByParts(parts);

        this.margin = device.getHeightByParts(2);
    }

    setup() {
        this.current = this.start;
    }

    isAlive() {
        return this.current >= 0;
    }

    gain() {
        if (this.max > this.current) {
            this.current++;
        }
    }

    lose() {
        this.current--;
    }

    draw() {

        for (let i = 0; i < this.current; i++) {
            image(
                this.image,
                (i * this.width) + ((i + 1) * this.margin),
                0 + this.margin,
                this.width,
                this.height
            );
        }
    }

}