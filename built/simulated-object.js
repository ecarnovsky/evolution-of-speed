var SimulatedObject = /** @class */ (function () {
    function SimulatedObject() {
    }
    SimulatedObject.prototype.getPosition = function () {
        return { x: this.positionX, y: this.positionY };
    };
    return SimulatedObject;
}());
