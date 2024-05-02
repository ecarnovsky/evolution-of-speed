class Frog extends SimulatedObject {

    static radius: number = 10
    static lifespan: number = 100
    static energyGainedFromFood: number = 30
    static energyLostFromBirth: number = 20
    static energyWhenSeekFood: number = 60
    static color: string = 'green'


    age: number
    energy: number
    alive: boolean
    focus: object
    jumpDistance1: number
    jumpDistance2: number
    likelihoodJump1: number

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

    static generateStarterFrog(){

        const age = 0
        const energy = 90
        const jumpDistance1 = Math.floor(Math.random() * (50 - 5)) + 5
        const jumpDistance2 = Math.floor(Math.random() * (50 - 5)) + 5
        const likelihoodJump1 = Math.floor(Math.random() * 100)
        const positionX =  Math.floor(Math.random() * canvas.width)
        const positionY = Math.floor(Math.random() * canvas.height)

        return new Frog(age, energy, jumpDistance1, jumpDistance2, likelihoodJump1, positionX, positionY)
    }


    doAction(){
        this.positionX += 1
    }


}