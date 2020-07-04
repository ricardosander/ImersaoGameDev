class ScenarioRepository {

    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }

    createScenario() {

        const skySpeed = 0.5
        const forest5Speed = 1;
        const forest4Speed = 2;
        const forest3Speed = 3;
        const forest2Speed = 4;
        const particles2Speed = 4.5;
        const forest1Speed = 5;
        const particles1Speed = 6;
        const mistSpeed = 5;

        const scenarioPositionX1 = 0;
        const scenarioPositionX2 = width;
        const scenarioPositionY = 0;

        return new Scenario(
            [
                // this.imageRepository.skyImage,
                this.imageRepository.forestImage5,
                this.imageRepository.forestImage4,
                this.imageRepository.forestImage3,
                this.imageRepository.forestImage2,
                // this.imageRepository.particlesImage2,
                this.imageRepository.forestImage1,
                // this.imageRepository.particlesImage1,
                // this.imageRepository.mistImage
            ],
            [skySpeed, forest5Speed, forest4Speed, forest3Speed, forest2Speed, particles2Speed, forest1Speed, particles1Speed, mistSpeed],
            scenarioPositionX1,
            scenarioPositionX2,
            scenarioPositionY
        );
    }
}