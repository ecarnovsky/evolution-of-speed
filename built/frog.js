var Frog = /** @class */ (function () {
    function Frog(age, energy, jumpDistance1, jumpDistance2, likelihoodJump1, positionX, positionY) {
        this.age = age;
        this.energy = energy;
        this.jumpDistance1 = jumpDistance1;
        this.jumpDistance2 = jumpDistance2;
        this.likelihoodJump1 = likelihoodJump1;
        this.positionX = positionX;
        this.positionY = positionY;
        this.alive = true;
        this.focus = null;
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
    Frog.prototype.getPosition = function () {
        return { x: this.positionX, y: this.positionY };
    };
    Frog.prototype.doAction = function () {
        this.positionX += 1;
    };
    Frog.width = 10;
    Frog.lifespan = 100;
    Frog.energyGainedFromFood = 30;
    Frog.energyLostFromBirth = 20;
    Frog.energyWhenSeekFood = 60;
    return Frog;
}());
