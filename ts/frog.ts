/**
 * This class represents frogs in the simulation.
 */
class Frog extends SimulatedObject {

    static radius: number = 10
    static lifespan: number = 70
    static energyGainedFromFood: number = 30
    static energyLostFromBirth: number = 30
    static energyWhenSeekFood: number = 60
    static energyLostPerDay: number = 2
    static color: string = 'green'


    age: number
    energy: number
    alive: boolean
    focus: SimulatedObject
    jumpDistance1: number
    jumpDistance2: number
    likelihoodJump1: number
    lastDirection: Directions

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
    constructor(age: number, energy: number, jumpDistance1: number,
                 jumpDistance2: number, likelihoodJump1: number,
                 positionX: number, positionY: number){

        super()
        this.age = age
        this.energy = energy
        this.jumpDistance1 = jumpDistance1
        this.jumpDistance2 = jumpDistance2
        this.likelihoodJump1 = likelihoodJump1
        this.positionX = positionX
        this.positionY = positionY

        let num = Math.random() 
        if(num < .25){
            this.lastDirection = Directions.Up
        } else if (num < .5){
            this.lastDirection = Directions.Down
        } else if (num < .75){
            this.lastDirection = Directions.Right
        } else {
            this.lastDirection = Directions.Left
        }

        this.alive = true
        this.focus = null
    }

    /**
     * This function is intended to be used for the frogs
     * that are randomly generated at the start of the simulation,
     * not frogs born into the simulation.
     * @returns The newly generated frog.
     */
    static generateStarterFrog(){

        const age = 0
        const energy = 59
        const jumpDistance1 = Math.floor(Math.random() * (100 - 5)) + 5
        const jumpDistance2 = Math.floor(Math.random() * (100 - 5)) + 5
        const likelihoodJump1 = Math.floor(Math.random() * 100)
        const positionX =  Math.floor(Math.random() * canvas.width)
        const positionY = Math.floor(Math.random() * canvas.height)

        return new Frog(age, energy, jumpDistance1, jumpDistance2, likelihoodJump1, positionX, positionY)
    }


    doAction(frogs: Frog[], food: Food[]){

        if(this.age > Frog.lifespan || this.energy <= 0){
            const index = frogs.findIndex( x => x === this)
            frogs[index] = undefined
            return
        }

        if(!food.includes(this.focus) || !frogs.includes(this.focus as Frog)){
            this.focus = undefined
        }


        if(this.energy < Frog.energyWhenSeekFood){
            this.focus = this.findClosestObject(food)
        } else if (this.focus === undefined){
            this.focus = this.findClosestObject(food)
        }

        if(this.focus !== undefined){
        
            const positionOfFocus = this.focus.getPosition()
            const doJump1: boolean = (Math.random() * 100 < this.likelihoodJump1) ? true : false

            if(Math.abs(this.positionX - positionOfFocus.x) > Math.abs(this.positionY - positionOfFocus.y)){
                if(this.positionX < positionOfFocus.x){
                    this.positionX += doJump1 ? this.jumpDistance1 : this.jumpDistance2
                    this.lastDirection = Directions.Right
                } else {
                    this.positionX -= doJump1 ? this.jumpDistance1 : this.jumpDistance2
                    this.lastDirection = Directions.Left
                }
            } else {
                if(this.positionY < positionOfFocus.y){
                    this.positionY += doJump1 ? this.jumpDistance1 : this.jumpDistance2
                    this.lastDirection = Directions.Down
                } else {
                    this.positionY -= doJump1 ? this.jumpDistance1 : this.jumpDistance2
                    this.lastDirection = Directions.Up
                }
            }

            if(Math.abs(this.positionX - positionOfFocus.x) < 15 && Math.abs(this.positionY - positionOfFocus.y) < 15){
                this.energy = Frog.energyGainedFromFood > 100 ? 100 : this.energy + Frog.energyGainedFromFood
                const index = food.findIndex( x => x === this.focus)
                food.splice(index, 1)
            }

        }




        this.age += 1
        this.energy -= Frog.energyLostPerDay
        
    }


    /**
     * This methods takes in an array that is looped through to find
     * which object is closest to the frog on the canvas.
     * @param array - An array of SimulatedObjects, such as frogs or food.
     * @returns The object in the array that is closest to the frog.
     */
    findClosestObject(array: SimulatedObject[]){

        if(array.length === 0){
            return undefined
        }else{

            let closestObject: SimulatedObject
            let distanceToClosestObject: number = 0

            for(let i = 0; i < array.length; i++){

                let positionOfObject = array[i].getPosition()

                let distance: number = Math.abs(this.positionX - positionOfObject.x) + Math.abs(this.positionY - positionOfObject.y)

                if( distance < distanceToClosestObject || i === 0){
                    closestObject = array[i]
                    distanceToClosestObject = distance
                }
            }
            return closestObject
        }
    }

}


enum Directions {
    Up,
    Right,
    Left,
    Down
}