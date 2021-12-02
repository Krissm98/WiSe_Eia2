var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    var Animal = /** @class */ (function () {
        function Animal(_type, _name, _food, _amountFood, _sound) {
            console.log("constructor");
            this.type = _type;
            this.name = _name;
            this.food = _food;
            this.amountFood = _amountFood;
            this.sound = _sound;
        }
        Animal.prototype.eat = function (_food) {
            console.log("eat");
            // For- Schleife darin If-Bedinung checken, ob gleiche Bezeichnung
        };
        Animal.prototype.draw = function () {
            console.log("draw");
        };
        Animal.prototype.sing = function (_sound) {
            console.log("sing");
        };
        return Animal;
    }());
    L09_1_OldMacDonaldsFarm.Animal = Animal;
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=9.1_Animal_Class.js.map