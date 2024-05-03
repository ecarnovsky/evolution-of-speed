document.getElementById('start-pause-btn').addEventListener('click', togglePause)

const canvas = document.querySelector('canvas')
canvas.height = 730
canvas.width = 730 
const ctx = canvas.getContext('2d')

const MAX_FOOD: number = 100

let paused: boolean = true
let frogs: Frog[] = []
let food: Food[] = []
let numberOfTicks: number = 0
let simulationInProgress: boolean = false

/**
 * This function controls what to do when the start/pause/resume
 * button is clicked. Things like changing the value of the 
 * paused varible, changing the text of the button, and 
 * starting the simulation loop are part of this function.
 */
function togglePause(){
    if(paused){
        this.innerText = "Pause"
        paused = false
        if(simulationInProgress){
            loopSimulation()
        } else {
            startNewSimulation()
        }
    } else {
        this.innerText = "Resume"
        paused = true
    }
}

/**
 * This function populates the food and frogs arrays 
 * with random food and frogs. It then starts the simulation loop.
 */
function startNewSimulation(){

    simulationInProgress = true
    const INITIAL_POPULATION: number = 10
    const INITIAL_FOOD: number = 20

    for(let i = 0; i < INITIAL_POPULATION; i++){

        const newFrog = Frog.generateStarterFrog()
        frogs.push(newFrog)

    }

    for(let i = 0; i < INITIAL_FOOD; i++){

        const newFood = new Food()
        food.push(newFood)

    }

    loopSimulation()
}

/**
 * This function contains the logic needed 
 * to run the simulation. The frogs and food arrays are
 * looped through so each can be rendered to the screen, and
 * frogs preform actions.
 */
function loopSimulation(){

    // Stops the loop if the simulation is paused
    if(paused){
        return
    }

    // Clears the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if(numberOfTicks % 5 === 0 && food.length < MAX_FOOD){
        food.push(new Food())
    }

    // Renders food to the canvas
    for(let i = 0; i < food.length; i++){

        let position = food[i].getPosition()
        ctx.beginPath()
        ctx.arc(position.x, position.y, Food.radius, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fillStyle = Food.color
        ctx.fill()
    }

    // Renders frogs to the canvas
    for(let i = 0; i < frogs.length; i++){

        frogs[i].doAction(frogs, food)
        
        if(frogs[i] === undefined){
            continue
        }
        let position = frogs[i].getPosition()
        ctx.beginPath()
        ctx.arc(position.x, position.y, Frog.radius, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fillStyle = Frog.color
        ctx.fill()

    }

    frogs = frogs.filter( el => el !== undefined) 

     // Calls the loop to be run again after a set delay
    setTimeout(loopSimulation, 1000)

}
