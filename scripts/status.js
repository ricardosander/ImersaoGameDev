class Status {

    constructor() {
        this.isGameOver = false;
        this.isGamePause = false;
        this.isGameStarted = false;
    }

    isPaused() {
        return this.isGamePause;
    }

    isStarted() {
        return this.isGameStarted;
    }

    isOver() {
        return this.isGameOver;
    }

    pause() {
        this.isGamePause = true;
    }

    resume() {
        this.isGamePause = false;
    }

    start() {
        this.isGameStarted = true;
    }

    over() {
        this.isGameOver = true;
    }

    restart() {
        this.isGameOver = false;
    }
}