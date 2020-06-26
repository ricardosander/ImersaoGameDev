class SoundRepository {

    preload() {
        this.soundtrack = loadSound('assets/sounds/soundtrack.mp3');
        this.jumpSound = loadSound('assets/sounds/jump.mp3');
    }

    getSoundtrack() {
        return this.soundtrack;
    }

    getJumpSound() {
        return this.jumpSound;
    }

}