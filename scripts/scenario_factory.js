class ScenarioFactory {
    
    constructor() {

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
            [skyImage, forestImage5, forestImage4, forestImage3, forestImage2, particlesImage2, forestImage1, particlesImage1, mistImage],
            [skySpeed, forest5Speed, forest4Speed, forest3Speed, forest2Speed, particles2Speed, forest1Speed, particles1Speed, mistSpeed],
            scenarioPositionX1,
            scenarioPositionX2,
            scenarioPositionY
        );
    }
}