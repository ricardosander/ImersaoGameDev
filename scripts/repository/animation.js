class AnimationRepository {
  getSimpleImageAnimation() {
    if (this.simpleImageAnimation == undefined) {
      this.simpleImageAnimation = new SimpleImageAnimation();
    }
    return this.simpleImageAnimation;
  }
}
