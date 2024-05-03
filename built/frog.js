/**
 * This class represents frogs in the simulation.
 */
class Frog extends SimulatedObject {
    /**
     * @constructor
     * This constructor is intended to be used for frogs born into the simulation,
     * not the random frogs generated when the simulation very first begins.
     * @param age - The age of the frog.
     * @param energy - The energy the frog currently has. Can be 0 to 100.
     * @param jumpDistance1 - Jump 1's distance.
     * @param jumpDistance2 - Jump 2's distance.
     * @param likelihoodJump1 - The likelihood that a jump will be jump 1 vs jump 2.
     * @param positionX - The x-coordinate of the frog's current position.
     * @param positionY - The y-coordinate of the frog's current position.
     */
    constructor(age, energy, jumpDistance1, jumpDistance2, likelihoodJump1, positionX, positionY) {
        super();
        this.age = age;
        this.energy = energy;
        this.jumpDistance1 = jumpDistance1;
        this.jumpDistance2 = jumpDistance2;
        this.likelihoodJump1 = likelihoodJump1;
        this.positionX = positionX;
        this.positionY = positionY;
        this.alive = true;
        this.focus = null;
    }
    /**
     * This function is intended to be used for the frogs
     * that are randomly generated at the start of the simulation,
     * not frogs born into the simulation.
     * @returns The newly generated frog.
     */
    static generateStarterFrog() {
        const age = 0;
        const energy = 59;
        const jumpDistance1 = Math.floor(Math.random() * (100 - 5)) + 5;
        const jumpDistance2 = Math.floor(Math.random() * (100 - 5)) + 5;
        const likelihoodJump1 = Math.floor(Math.random() * 100);
        const positionX = Math.floor(Math.random() * canvas.width);
        const positionY = Math.floor(Math.random() * canvas.height);
        return new Frog(age, energy, jumpDistance1, jumpDistance2, likelihoodJump1, positionX, positionY);
    }
    doAction(frogs, food) {
        if (this.age > Frog.lifespan) {
            const index = frogs.findIndex(x => x === this);
            frogs[index] = undefined;
            return;
        }
        if (!food.includes(this.focus) || !frogs.includes(this.focus)) {
            this.focus = undefined;
        }
        if (this.energy < Frog.energyWhenSeekFood) {
            this.focus = this.findClosestObject(food);
        }
        else if (this.focus === undefined) {
            this.focus = this.findClosestObject(food);
        }
        if (this.focus !== undefined) {
            const positionOfFocus = this.focus.getPosition();
            const doJump1 = (Math.random() * 100 < this.likelihoodJump1) ? true : false;
            if (Math.abs(this.positionX - positionOfFocus.x) > Math.abs(this.positionY - positionOfFocus.y)) {
                if (this.positionX < positionOfFocus.x) {
                    this.positionX += doJump1 ? this.jumpDistance1 : this.jumpDistance2;
                }
                else {
                    this.positionX -= doJump1 ? this.jumpDistance1 : this.jumpDistance2;
                }
            }
            else {
                if (this.positionY < positionOfFocus.y) {
                    this.positionY += doJump1 ? this.jumpDistance1 : this.jumpDistance2;
                }
                else {
                    this.positionY -= doJump1 ? this.jumpDistance1 : this.jumpDistance2;
                }
            }
            if (Math.abs(this.positionX - positionOfFocus.x) < 15 && Math.abs(this.positionY - positionOfFocus.y) < 15) {
                this.energy += Frog.energyGainedFromFood;
                const index = food.findIndex(x => x === this.focus);
                food.splice(index, 1);
            }
        }
        this.age += 1;
        this.energy -= 1;
    }
    /**
     * This methods takes in an array that is looped through to find
     * which object is closest to the frog on the canvas.
     * @param array - An array of SimulatedObjects, such as frogs or food.
     * @returns The object in the array that is closest to the frog.
     */
    findClosestObject(array) {
        if (array.length === 0) {
            return undefined;
        }
        else {
            let closestObject;
            let distanceToClosestObject = 0;
            for (let i = 0; i < array.length; i++) {
                let positionOfObject = array[i].getPosition();
                let distance = Math.abs(this.positionX - positionOfObject.x) + Math.abs(this.positionY - positionOfObject.y);
                if (distance < distanceToClosestObject || i === 0) {
                    closestObject = array[i];
                    distanceToClosestObject = distance;
                }
            }
            return closestObject;
        }
    }
}
Frog.radius = 10;
Frog.lifespan = 70;
Frog.energyGainedFromFood = 30;
Frog.energyLostFromBirth = 30;
Frog.energyWhenSeekFood = 60;
Frog.color = 'green';
