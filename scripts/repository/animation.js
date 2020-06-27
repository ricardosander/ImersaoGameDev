class AnimationRepository {

    getSimpleImageAnimation() {
        if (this.simpleImageAnimation == undefined) {
            this.simpleImageAnimation = new SimpleImageAnimation();
        }
        return this.simpleImageAnimation;
    }

    getMultipleImagesAnimation() {
        if (this.multipleImagesAnimation == undefined) {
            this.multipleImagesAnimation = new MultipleImagesAnimation();
        }
        return this.multipleImagesAnimation;
    }

}