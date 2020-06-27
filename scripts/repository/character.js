class CharacterRepository {

    constructor(imageRepository) {
        this.imageRepository = imageRepository;
        this.animationRepository = new AnimationRepository();
        this.defaultDeltaY = 100;
    }

    createHipsta() {

        const characterWidth = 220;
        const characterHeight = 270;
        const characterSpriteWidth = 220;
        const characterSpriteHeight = 270;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.characterImage,
                characterSpriteWidth,
                characterSpriteHeight,
                this.imageRepository.characterImage.width,
                this.imageRepository.characterImage.height,
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getSimpleImageAnimation()
        );

        return character;
    }

    createBoy() {

        const characterWidth = 614 / 2;
        const characterHeight = 564 / 2;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.boy['run'],
                this.imageRepository.boy['run'][0].width,
                this.imageRepository.boy['run'][0].height
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getMultipleImagesAnimation()
        );

        return character;
    }

    createCat() {

        const characterWidth = 542 / 2;
        const characterHeight = 474 / 2;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.cat['run'],
                this.imageRepository.cat['run'][0].width,
                this.imageRepository.cat['run'][0].height
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getMultipleImagesAnimation()
        );

        return character;
    }

    createCowboy() {

        const characterWidth = 415 / 2;
        const characterHeight = 507 / 2;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.cowboy['run'],
                this.imageRepository.cowboy['run'][0].width,
                this.imageRepository.cowboy['run'][0].height
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getMultipleImagesAnimation()
        );

        return character;
    }

    createCowgirl() {

        const characterWidth = 641 / 2;
        const characterHeight = 542 / 2;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.cowgirl['run'],
                this.imageRepository.cowgirl['run'][0].width,
                this.imageRepository.cowgirl['run'][0].height
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getMultipleImagesAnimation()
        );

        return character;
    }

    createDino() {

        const characterWidth = 680 / 2;
        const characterHeight = 472 / 2;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.dino['run'],
                this.imageRepository.dino['run'][0].width,
                this.imageRepository.dino['run'][0].height
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getMultipleImagesAnimation()
        );

        return character;
    }

    createDog() {

        const characterWidth = 547 / 2;
        const characterHeight = 481 / 2;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.dog['run'],
                this.imageRepository.dog['run'][0].width,
                this.imageRepository.dog['run'][0].height
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getMultipleImagesAnimation()
        );

        return character;
    }

    createGirl() {

        const characterWidth = 416 / 2;
        const characterHeight = 454 / 2;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.girl['run'],
                this.imageRepository.girl['run'][0].width,
                this.imageRepository.girl['run'][0].height
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getMultipleImagesAnimation()
        );

        return character;
    }

    createJack() {

        const characterWidth = 579 / 3;
        const characterHeight = 763 / 3;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.jack['run'],
                this.imageRepository.jack['run'][0].width,
                this.imageRepository.jack['run'][0].height
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getMultipleImagesAnimation()
        );

        return character;
    }

    createKnight() {

        const characterWidth = 587 / 2.5;
        const characterHeight = 707 / 2.5;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.knight['run'],
                this.imageRepository.knight['run'][0].width,
                this.imageRepository.knight['run'][0].height
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getMultipleImagesAnimation()
        );

        return character;
    }

    createNinjaBoy() {

        const characterWidth = 363 / 2;
        const characterHeight = 458 / 2;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.ninjaBoy['run'],
                this.imageRepository.ninjaBoy['run'][0].width,
                this.imageRepository.ninjaBoy['run'][0].height
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getMultipleImagesAnimation()
        );

        return character;
    }

    createNinjaGirl() {

        const characterWidth = 376 / 2;
        const characterHeight = 520 / 2;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.ninjaGirl['run'],
                this.imageRepository.ninjaGirl['run'][0].width,
                this.imageRepository.ninjaGirl['run'][0].height
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getMultipleImagesAnimation()
        );

        return character;
    }

    createRobot() {

        const characterWidth = 567 / 2;
        const characterHeight = 556 / 2;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.robot['run'],
                this.imageRepository.robot['run'][0].width,
                this.imageRepository.robot['run'][0].height
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getMultipleImagesAnimation()
        );

        return character;
    }

    createSanta() {

        const characterWidth = 934 / 3;
        const characterHeight = 641 / 3;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.santa['run'],
                this.imageRepository.santa['run'][0].width,
                this.imageRepository.santa['run'][0].height
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getMultipleImagesAnimation()
        );

        return character;
    }

    createZombieBoy() {

        const characterWidth = 430 / 2;
        const characterHeight = 519 / 2;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.zombieBoy['run'],
                this.imageRepository.zombieBoy['run'][0].width,
                this.imageRepository.zombieBoy['run'][0].height
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getMultipleImagesAnimation()
        );

        return character;
    }

    createZombieGirl() {

        const characterWidth = 521 / 2;
        const characterHeight = 576 / 2;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.zombieGirl['run'],
                this.imageRepository.zombieGirl['run'][0].width,
                this.imageRepository.zombieGirl['run'][0].height
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1.11,
                0.9
            ),
            this.animationRepository.getMultipleImagesAnimation()
        );

        return character;
    }

    createFoes() {
        return [
            this.createDroplet(),
            this.createFlyngDroplet(),
            this.createTroll()
        ];
    }

    createHeart() {

        return new NoPlaybleCharacter(
            new Frame(
                this.imageRepository.heartImage,
                200,
                167
            ),
            new Coordinates(
                1.2 * width,
                this.defaultDeltaY + 400,
                100,
                80,
                1,
                1
            ),
            this.animationRepository.getSimpleImageAnimation()
        );
    }

    createDroplet() {

        const dropletWidth = 104;
        const dropletHeight = 104;
        const dropletSpriteWidth = 104;
        const dropletSpriteHeight = 104;
        const dropletStartX = width;
        const dropletDeltaY = this.defaultDeltaY;

        return new NoPlaybleCharacter(
            new Frame(
                this.imageRepository.dropletImage,
                dropletSpriteWidth,
                dropletSpriteHeight
            ),
            new Coordinates(
                dropletStartX,
                dropletDeltaY,
                dropletWidth,
                dropletHeight,
                1.03,
                0.7
            ),
            this.animationRepository.getSimpleImageAnimation()
        );
    }

    createFlyngDroplet() {

        const flyingDropletWidth = 200;
        const flyingDropletHeight = 150;
        const flyingDropletSpriteWidth = 200;
        const flyingDropletSpriteHeight = 150;
        const flyingDropletLastSpriteX = 0;
        const flyingDropletLastSpriteY = 750;
        const flyingDropletStartX = width;
        const flyingDropletDeltaY = this.defaultDeltaY + 150;

        return new NoPlaybleCharacter(
            new Frame(
                this.imageRepository.flyingDropletImage,
                flyingDropletSpriteWidth,
                flyingDropletSpriteHeight,
                flyingDropletLastSpriteX,
                flyingDropletLastSpriteY
            ),
            new Coordinates(
                flyingDropletStartX,
                flyingDropletDeltaY,
                flyingDropletWidth,
                flyingDropletHeight,
                1.05,
                0.6
            ),
            this.animationRepository.getSimpleImageAnimation()
        );
    }

    createTroll() {

        const trollWidth = 400;
        const trollHeight = 400;
        const trollLastSpriteX = 800;
        const trollLastSpriteY = 2000;
        const trollStartX = width;
        const trollDeltaY = this.defaultDeltaY - 50;

        return new NoPlaybleCharacter(
            new Frame(
                this.imageRepository.trollImage,
                trollWidth,
                trollHeight,
                trollLastSpriteX,
                trollLastSpriteY
            ),
            new Coordinates(
                trollStartX,
                trollDeltaY,
                trollWidth,
                trollHeight,
                1.10,
                0.7
            ),
            this.animationRepository.getSimpleImageAnimation()
        );
    }
}