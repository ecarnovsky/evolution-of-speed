var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * This class represents pieces of food in the simulation.
 */
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    /**
     * @constructor
     * The position of the food is randomly generated.
     */
    function Food() {
        var _this = _super.call(this) || this;
        _this.positionX = Math.floor(Math.random() * canvas.width);
        _this.positionY = Math.floor(Math.random() * canvas.height);
        return _this;
    }
    Food.color = 'orange';
    Food.radius = 4;
    return Food;
}(SimulatedObject));
