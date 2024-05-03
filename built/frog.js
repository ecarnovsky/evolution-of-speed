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
 * This class represents frogs in the simulation.
 */
var Frog = /** @class */ (function (_super) {
    __extends(Frog, _super);
    /**
     * @constructor
     * This constructor is intended to be used for frogs born into the simulation,
     * not the random frogs generated when the simulation very first begins.
     * @param age - The age of the frog.
     * @param energy - The energy the frog currently has. Can be 0 to 100.
     * @param jumpDistance1 - Jump 1's distance.
     * @param jumpDistance2 - Jump 2's distance.
     * @param likelihoodJump1 - The likelihood that a jump will be jump 1 vs jump 2.
     * @param positionX - The x-coordinate of the frog's current position.
     * @param positionY - The y-coordinate of the frog's current position.
     */
    function Frog(age, energy, jumpDistance1, jumpDistance2, likelihoodJump1, positionX, positionY) {
        var _this = _super.call(this) || this;
        _this.age = age;
        _this.energy = energy;
        _this.jumpDistance1 = jumpDistance1;
        _this.jumpDistance2 = jumpDistance2;
        _this.likelihoodJump1 = likelihoodJump1;
        _this.positionX = positionX;
        _this.positionY = positionY;
        _this.alive = true;
        _this.focus = null;
        return _this;
    }
    /**
     * This function is intended to be used for the frogs
     * that are randomly generated at the start of the simulation,
     * not frogs born into the simulation.
     * @returns The newly generated frog.
     */
    Frog.generateStarterFrog = function () {
        var age = 0;
        var energy = 90;
        var jumpDistance1 = Math.floor(Math.random() * (50 - 5)) + 5;
        var jumpDistance2 = Math.floor(Math.random() * (50 - 5)) + 5;
        var likelihoodJump1 = Math.floor(Math.random() * 100);
        var positionX = Math.floor(Math.random() * canvas.width);
        var positionY = Math.floor(Math.random() * canvas.height);
        return new Frog(age, energy, jumpDistance1, jumpDistance2, likelihoodJump1, positionX, positionY);
    };
    Frog.prototype.doAction = function () {
        this.positionX += 1;
    };
    Frog.radius = 10;
    Frog.lifespan = 100;
    Frog.energyGainedFromFood = 30;
    Frog.energyLostFromBirth = 20;
    Frog.energyWhenSeekFood = 60;
    Frog.color = 'green';
    return Frog;
}(SimulatedObject));
