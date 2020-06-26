class Score {

    constructor() {
        this.score = 0;
    }

    increase(score) {
        this.score += score;
    }

    draw() {
        textAlign(RIGHT);
        fill('#000');
        textSize(50);
        text(parseInt(this.score), width * 0.9, height * 0.1);
    }
}