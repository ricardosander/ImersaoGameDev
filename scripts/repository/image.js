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

        this.knight = [];
        this.knight['run'] = [];
        this.load(this.knight, 'knight', 10);

        this.boy = [];
        this.boy['run'] = [];
        this.load(this.boy, 'boy', 15);

        this.cat = [];
        this.cat['run'] = [];
        this.load(this.cat, 'cat', 8);

        this.cowboy = [];
        this.cowboy['run'] = [];
        this.load(this.cowboy, 'cowboy', 10);

        this.cowgirl = [];
        this.cowgirl['run'] = [];
        this.load(this.cowgirl, 'cowgirl', 8);

        this.dino = [];
        this.dino['run'] = [];
        this.load(this.dino, 'dino', 8);

        this.dog = [];
        this.dog['run'] = [];
        this.load(this.dog, 'dog', 8);

        this.girl = [];
        this.girl['run'] = [];
        this.load(this.girl, 'girl', 20);

        this.jack = [];
        this.jack['run'] = [];
        this.load(this.jack, 'jack', 8);

        this.ninjaBoy = [];
        this.ninjaBoy['run'] = [];
        this.load(this.ninjaBoy, 'ninjaboy', 10);

        this.ninjaGirl = [];
        this.ninjaGirl['run'] = [];
        this.load(this.ninjaGirl, 'ninjagirl', 10);

        this.robot = [];
        this.robot['run'] = [];
        this.load(this.robot, 'robot', 8);

        this.santa = [];
        this.santa['run'] = [];
        this.load(this.santa, 'santa', 11);

        this.zombieBoy = [];
        this.zombieBoy['run'] = [];
        this.load(this.zombieBoy, 'zombieboy', 10);

        this.zombieGirl = [];
        this.zombieGirl['run'] = [];
        this.load(this.zombieGirl, 'zombiegirl', 10);


        this.dropletImage = loadImage('assets/images/foes/droplet.png');
        this.flyingDropletImage = loadImage('assets/images/foes/flying_droplet.png');
        this.trollImage = loadImage('assets/images/foes/troll.png');

        this.heartImage = loadImage('assets/images/assets/heart.png');

        this.gameOverImage = loadImage('assets/images/assets/game-over.png');
        this.homeScreenImage = loadImage('assets/images/assets/homescreen.png');
    }

    load(array, characterName, sprites) {
        for (var i = 1; i < sprites + 1; i++) {
            array['run'].push(loadImage('assets/images/character/' + characterName + '/run/character' + i + '.png'));
        }
    }

}