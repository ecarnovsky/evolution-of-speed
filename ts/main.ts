let paused = true

document.getElementById('start-pause-btn').addEventListener('click', togglePause)

const canvas = document.querySelector('canvas')
canvas.height = 730
canvas.width = 730 


function togglePause(){
    if(paused){
        this.innerText = "Pause"
        paused = false
    } else {
        this.innerText = "Resume"
        paused = true
    }
}