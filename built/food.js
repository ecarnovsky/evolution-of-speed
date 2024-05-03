/**
 * This class represents pieces of food in the simulation.
 */
class Food extends SimulatedObject {
    /**
     * @constructor
     * The position of the food is randomly generated.
     */
    constructor() {
        super();
        this.positionX = Math.floor(Math.random() * canvas.width);
        this.positionY = Math.floor(Math.random() * canvas.height);
    }
}
Food.color = 'orange';
Food.radius = 4;
