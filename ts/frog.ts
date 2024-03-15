class Frog {

    age: number
    energy: number
    alive: boolean
    jumpDistance1: number
    jumpDistance2: number
    likelihoodJump1: number

    constructor(age: number, energy: number, jumpDistance1: number, jumpDistance2: number, likelihoodJump1: number){
        this.age = age
        this.energy = energy
        this.jumpDistance1 = jumpDistance1
        this.jumpDistance2 = jumpDistance1
        this.likelihoodJump1 = likelihoodJump1

        this.alive = true
    }

}