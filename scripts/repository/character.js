class CharacterRepository {

    constructor(imageRepository) {
        this.imageRepository = imageRepository;
        this.animationRepository = new AnimationRepository();
        this.defaultDeltaY = device.getHeightByParts(10);
    }

    createPlaybleCharacter(name) {
        if (name == undefined) {
            name = settings.pcs.default;
        }
        return this.createPC(name);
    }

    createPC(name) {

        const pc = settings.pcs.pcs.filter(pc => pc.code == name)[0];
        
        const characterWidth = device.getWidthByParts(pc.parts, pc.width, pc.height);
        const characterHeight = device.getHeightByParts(pc.parts);
        
        const characterStartX = 50;
        const characterDeltaY = this.defaultDeltaY + device.getHeightByParts(pc.deltaY);

        const character = new PlaybleCharacter(
            new Frame(
                this.getPcImage(pc.animation, pc.code),
                pc.width,
                pc.height,
                pc.lastSpriteX,
                pc.lastSpriteY,
            ),
            new Coordinates(
                characterStartX,
                characterDeltaY,
                characterWidth,
                characterHeight,
                1,//1.11,
                1,//0.9
            ),
            this.getPcAnimation(pc.animation)
        );

        return character;
    }

    getPcImage(animation, code) {

        switch (animation) {

            case 'simple':
                return this.imageRepository.characterImage;

            case 'multiple':
                return this.imageRepository.characters[code]['run'];

            default: return null;
        }
    }

    getPcAnimation(animation) {

        switch (animation) {

            case 'simple':
                return this.animationRepository.getSimpleImageAnimation();

            case 'multiple':
                return this.animationRepository.getMultipleImagesAnimation();

            default: return null;
        }
    }

    createNpcs() {
        
        const npcs = [];

        settings.npcs.npcs.forEach(npc => npcs.push(this.createNpc(npc.code)));

        return npcs;
    }

    createNpc(code) {

        const npc = settings.npcs.npcs.filter(npc => npc.code == code)[0];

        const dropletWidth = device.getWidthByParts(npc.parts, npc.width, npc.height);
        const dropletHeight = device.getHeightByParts(npc.parts);
        const lastSpriteX = npc.lastSpriteX;
        const lastSpriteY = npc.lastSpriteY;

        const dropletStartX = width;
        const dropletDeltaY = this.defaultDeltaY + device.getHeightByParts(npc.deltaY);

        return new NoPlaybleCharacter(
            new Frame(
                this.getNpcImage(code),
                npc.width,
                npc.height,
                lastSpriteX,
                lastSpriteY
            ),
            new Coordinates(
                dropletStartX,
                dropletDeltaY,
                dropletWidth,
                dropletHeight,
                1,//1.03,
                1,//0.7
            ),
            this.animationRepository.getSimpleImageAnimation(),
            npc.isEnemy
        );
    }

    getNpcImage(code) {

        switch(code) {

            case "heart":
                return this.imageRepository.heartImage;

            case "troll":
                return this.imageRepository.trollImage;

            case "flyingdroplet":
                return this.imageRepository.flyingDropletImage;
            
            case "droplet":
                return this.imageRepository.dropletImage;
        }

        return null;
    }

}