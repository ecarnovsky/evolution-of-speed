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
var Frog = /** @class */ (function (_super) {
    __extends(Frog, _super);
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
