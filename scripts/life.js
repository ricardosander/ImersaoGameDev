class Life {

    constructor(image, max, start) {
        this.image = image;
        this.max = max;
        this.start = start;
        this.current = this.start;

        this.width = this.image.width * 0.4;
        this.height = this.image.height * 0.4;

        this.margin = 20;
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