var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    class Animal {
        constructor(_type, _name, _food, _amountFood, _sound) {
            console.log("constructor");
            this.type = _type;
            this.name = _name;
            this.food = _food;
            this.amountFood = _amountFood;
            this.sound = _sound;
        }
        eat(_food) {
            console.log("eat");
            // For- Schleife darin If-Bedinung checken, ob gleiche Bezeichnung
        }
        draw() {
            console.log("draw");
        }
        sing(_sound) {
            console.log("sing");
        }
    }
    L09_1_OldMacDonaldsFarm.Animal = Animal;
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=9.1_Animal_Class.js.map