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

        this.characters = [];

        this.characters['hipsta'] = [];
        this.characters['hipsta']['run'] = [loadImage('assets/images/character/idle.png')];

        this.characters['knight'] = [];
        this.characters['knight']['run'] = [];
        this.load('knight', 10);

        this.characters['boy'] = [];
        this.characters['boy']['run'] = [];
        this.load('boy', 15);

        this.characters['cat'] = [];
        this.characters['cat']['run'] = [];
        this.load('cat', 8);

        this.characters['cowboy'] = [];
        this.characters['cowboy']['run'] = [];
        this.load('cowboy', 10);

        this.characters['cowgirl'] = [];
        this.characters['cowgirl']['run'] = [];
        this.load('cowgirl', 8);

        this.characters['dino'] = [];
        this.characters['dino']['run'] = [];
        this.load('dino', 8);

        this.characters['dog'] = [];
        this.characters['dog']['run'] = [];
        this.load('dog', 8);

        this.characters['girl'] = [];
        this.characters['girl']['run'] = [];
        this.load('girl', 20);

        this.characters['jack'] = [];
        this.characters['jack']['run'] = [];
        this.load('jack', 8);

        this.characters['ninjaboy'] = [];
        this.characters['ninjaboy']['run'] = [];
        this.load('ninjaboy', 10);

        this.characters['ninjagirl'] = [];
        this.characters['ninjagirl']['run'] = [];
        this.load('ninjagirl', 10);

        this.characters['robot'] = [];
        this.characters['robot']['run'] = [];
        this.load('robot', 8);

        this.characters['santa'] = [];
        this.characters['santa']['run'] = [];
        this.load('santa', 11);

        this.characters['zombieboy'] = [];
        this.characters['zombieboy']['run'] = [];
        this.load('zombieboy', 10);

        this.characters['zombiegirl'] = [];
        this.characters['zombiegirl']['run'] = [];
        this.load('zombiegirl', 10);

        this.dropletImage = loadImage('assets/images/foes/droplet.png');
        this.flyingDropletImage = loadImage('assets/images/foes/flying_droplet.png');
        this.trollImage = loadImage('assets/images/foes/troll.png');

        this.heartImage = loadImage('assets/images/assets/heart.png');

        this.gameOverImage = loadImage('assets/images/assets/game-over.png');
        this.homeScreenImage = loadImage('assets/images/assets/homescreen.png');
    }

    load(characterName, sprites) {
        for (var i = 1; i < sprites + 1; i++) {
            this.characters[characterName]['run'].push(loadImage('assets/images/character/' + characterName + '/run/character' + i + '.png'));
        }
    }

}