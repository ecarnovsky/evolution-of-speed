class Food extends SimulatedObject{

    static color: string = 'pink'
    static radius: number = 4



    constructor(){
        super()
        this.positionX =  Math.floor(Math.random() * canvas.width)
        this.positionY = Math.floor(Math.random() * canvas.height)
    }

}