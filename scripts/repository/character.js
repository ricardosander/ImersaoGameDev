class CharacterRepository {

    constructor(imageRepository) {
        this.imageRepository = imageRepository;
        this.animationRepository = new AnimationRepository();
        this.defaultDeltaY = 100;
    }

    createPlaybleCharacter() {

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

    createTest() {

        const characterWidth = 220;
        const characterHeight = 270;
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY;

        const character = new PlaybleCharacter(
            new Frame(
                this.imageRepository.test['run'],
                this.imageRepository.test['run'][0].width,
                this.imageRepository.test['run'][0].height
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