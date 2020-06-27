class ImageRepository {

    preload() {

        this.mistImage = loadImage('assets/images/set/parallax/01_Mist.png');
        this.bushesImage = loadImage('assets/images/set/parallax/02_Bushes.png');
        this.particlesImage1 = loadImage('assets/images/set/parallax/03_Particles.png');
        this.forestImage1 = loadImage('assets/images/set/parallax/04_Forest.png');
        this.particlesImage2 = loadImage('assets/images/set/parallax/05_Particles.png');
        this.forestImage2 = loadImage('assets/images/set/parallax/06_Forest.png');
        this.forestImage3 = loadImage('assets/images/set/parallax/07_Forest.png');
        this.forestImage4 = loadImage('assets/images/set/parallax/08_Forest.png');
        this.forestImage5 = loadImage('assets/images/set/parallax/09_Forest.png');
        this.skyImage = loadImage('assets/images/set/parallax/10_Sky.png');

        this.characterImage = loadImage('assets/images/character/running.png');

        const names = [
            'attack',
            'dead',
            'idle',
            'jump',
            'jump_attack',
            'run',
            'walk'
        ];

        this.test = [];

        names.forEach((name, index) => {
            this.test[name] = [];
            this.test[name].push(loadImage('assets/images/character/knight/' + name + '/character1.png'));
            this.test[name].push(loadImage('assets/images/character/knight/' + name + '/character2.png'));
            this.test[name].push(loadImage('assets/images/character/knight/' + name + '/character3.png'));
            this.test[name].push(loadImage('assets/images/character/knight/' + name + '/character4.png'));
            this.test[name].push(loadImage('assets/images/character/knight/' + name + '/character5.png'));
            this.test[name].push(loadImage('assets/images/character/knight/' + name + '/character6.png'));
            this.test[name].push(loadImage('assets/images/character/knight/' + name + '/character7.png'));
            this.test[name].push(loadImage('assets/images/character/knight/' + name + '/character8.png'));
            this.test[name].push(loadImage('assets/images/character/knight/' + name + '/character9.png'));
            this.test[name].push(loadImage('assets/images/character/knight/' + name + '/character10.png'));
        });


        this.dropletImage = loadImage('assets/images/foes/droplet.png');
        this.flyingDropletImage = loadImage('assets/images/foes/flying_droplet.png');
        this.trollImage = loadImage('assets/images/foes/troll.png');

        this.heartImage = loadImage('assets/images/assets/heart.png');

        this.gameOverImage = loadImage('assets/images/assets/game-over.png');
        this.homeScreenImage = loadImage('assets/images/assets/homescreen.png');
    }

}