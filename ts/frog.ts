/**
 * This class represents frogs in the simulation.
 */
class Frog extends SimulatedObject {

    static radius: number = 10
    static lifespan: number = 100
    static energyGainedFromFood: number = 30
    static energyLostFromBirth: number = 30
    static energyWhenSeekFood: number = 60
    static color: string = 'green'


    age: number
    energy: number
    alive: boolean
    focus: SimulatedObject
    jumpDistance1: number
    jumpDistance2: number
    likelihoodJump1: number

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


        if(this.energy < Frog.energyWhenSeekFood){
            this.focus = food[0]
        }

        const positionOfFocus = this.focus.getPosition()
        const doJump1: boolean = (Math.random() * 100 < this.likelihoodJump1) ? true : false

        if(Math.abs(this.positionX - positionOfFocus.x) > Math.abs(this.positionY - positionOfFocus.y)){
            if(this.positionX < positionOfFocus.x){
                this.positionX += doJump1 ? this.jumpDistance1 : this.jumpDistance2
            } else {
                this.positionX -= doJump1 ? this.jumpDistance1 : this.jumpDistance2
            }
        } else {
            if(this.positionY < positionOfFocus.y){
                this.positionY += doJump1 ? this.jumpDistance1 : this.jumpDistance2
            } else {
                this.positionY -= doJump1 ? this.jumpDistance1 : this.jumpDistance2
            }
        }





        this.age += 1
        this.energy -= 1
        
    }

}