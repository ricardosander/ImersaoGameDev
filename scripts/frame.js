class Frame {
  constructor(image, widthFrame, heightFrame, lastX, lastY) {
    this.sprites = [image];
    this.image = image;

    this.startX = 0;
    this.startY = 0;
    this.width = widthFrame;
    this.height = heightFrame;

    this.lastX = lastX;
    this.lastY = lastY;

    if (lastX == undefined) {
      this.lastX = this.image.width;
    }

    if (lastY == undefined) {
      this.lastY = this.image.height;
    }

    this.current = 0;
  }
}
