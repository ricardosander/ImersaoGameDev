class GamePause {

    constructor(imageRepository, soundRepository) {
        this.imageRepository = imageRepository;
        this.soundtrack = soundRepository.soundtrack;
    }

    setup() {
        this.soundtrack.stop();
    }

    keyPressed(keyCode) {

        if (keyCode == 'Enter') {
            return this.lastScene;
        }

        return this;
    }

    draw() {

        fill('#F00');
        textSize(100);
        textAlign(CENTER);
        text('Pause', width * 0.5, height * 0.2);

        fill('#000');
        textSize(60);
        text('Voce esta temporariamente a salvo...', width * 0.5, height * 0.3);
        text('mas nao esta mais perto de voltar ao seu mundo.', width * 0.5, height * 0.4);
        text('Pressione ENTER para continuar.', width * 0.5, height * 0.6);

        noLoop();
        return this;
    }

    clear() {
        
    }
}