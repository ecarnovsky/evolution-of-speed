document.getElementById('start-pause-btn').addEventListener('click', togglePause);
var canvas = document.querySelector('canvas');
canvas.height = 730;
canvas.width = 730;
var ctx = canvas.getContext('2d');
var paused = true;
var frogs = [];
var food = [];
var numberOfTicks = 0;
var simulationInProgress = false;
function togglePause() {
    if (paused) {
        this.innerText = "Pause";
        paused = false;
        if (simulationInProgress) {
            loopSimulation();
        }
        else {
            startNewSimulation();
        }
    }
    else {
        this.innerText = "Resume";
        paused = true;
    }
}
function startNewSimulation() {
    simulationInProgress = true;
    var INITIAL_POPULATION = 10;
    var INITIAL_FOOD = 20;
    for (var i = 0; i < INITIAL_POPULATION; i++) {
        var newFrog = Frog.generateStarterFrog();
        frogs.push(newFrog);
    }
    for (var i = 0; i < INITIAL_FOOD; i++) {
        var newFood = new Food();
        food.push(newFood);
    }
    loopSimulation();
}
function loopSimulation() {
    if (!paused) {
        oneTick();
        setTimeout(loopSimulation, 1000);
    }
}
function oneTick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < food.length; i++) {
        var position = food[i].getPosition();
        ctx.beginPath();
        ctx.arc(position.x, position.y, Food.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = Food.color;
        ctx.fill();
    }
    for (var i = 0; i < frogs.length; i++) {
        frogs[i].doAction();
        var position = frogs[i].getPosition();
        ctx.beginPath();
        ctx.arc(position.x, position.y, Frog.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = Frog.color;
        ctx.fill();
    }
}
