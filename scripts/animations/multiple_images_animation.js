class MultipleImagesAnimation {

    animate(frame) {

        frame.current++;
        if (frame.current == frame.sprites.length){
            frame.current = 0;
        }

        frame.image = frame.sprites[frame.current];   
    }
}