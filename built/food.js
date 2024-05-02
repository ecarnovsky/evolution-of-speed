var Food = /** @class */ (function () {
    function Food() {
        this.positionX = Math.floor(Math.random() * canvas.width);
        this.positionY = Math.floor(Math.random() * canvas.height);
    }
    return Food;
}());
