class Food {

    positionX: number
    positionY: number

    constructor(){
        this.positionX =  Math.floor(Math.random() * canvas.width)
        this.positionY = Math.floor(Math.random() * canvas.height)
    }

}