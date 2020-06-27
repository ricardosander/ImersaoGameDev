class SimpleImageAnimation {

    animate(frame) {

        if (frame.startX == frame.lastX && frame.startY == frame.lastY) {
            frame.startX = 0;
            frame.startY = 0;
        } else {
            frame.startX += frame.width;
        }


        if (frame.startX > frame.image.width - frame.width) {
            frame.startX = 0;
            frame.startY += frame.height;
        }

        if (frame.startY > frame.image.height - frame.height) {
            frame.startX = 0;
            frame.startY = 0;
        }

    }

}