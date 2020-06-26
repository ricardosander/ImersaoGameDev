class ScenarioFactory {
    
    constructor(imageFactory) {
        this.imageFactory = imageFactory;
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
                this.imageFactory.skyImage, 
                this.imageFactory.forestImage5, 
                this.imageFactory.forestImage4, 
                this.imageFactory.forestImage3, 
                this.imageFactory.forestImage2, 
                this.imageFactory.particlesImage2, 
                this.imageFactory.forestImage1, 
                this.imageFactory.particlesImage1, 
                this.imageFactory.mistImage
            ],
            [skySpeed, forest5Speed, forest4Speed, forest3Speed, forest2Speed, particles2Speed, forest1Speed, particles1Speed, mistSpeed],
            scenarioPositionX1,
            scenarioPositionX2,
            scenarioPositionY
        );
    }
}