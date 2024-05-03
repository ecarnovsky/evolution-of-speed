/**
 * This is a class that other classes, such as Food and Frog, can
 * inherit from. It contains fields and methods relating to
 * an object's position on the canvas.
 */
var SimulatedObject = /** @class */ (function () {
    function SimulatedObject() {
    }
    /**
     * This function returns an object containing the x and y coordinates of the instance on the canvas.
     * @returns {Object} - An object containing an x and y field that contain coordinates.
     */
    SimulatedObject.prototype.getPosition = function () {
        return { x: this.positionX, y: this.positionY };
    };
    return SimulatedObject;
}());
