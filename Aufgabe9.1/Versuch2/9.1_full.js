var Aufgabe9_1;
(function (Aufgabe9_1) {
    var Animal = /** @class */ (function () {
        function Animal(_animal, _animalName, _sound, _foodType, _foodEaten, _foodAmount) {
            this.animal = _animal;
            this.animalName = _animalName;
            this.sound = _sound;
            this.foodType = _foodType;
            this.foodEaten = _foodEaten;
            this.foodAmount = _foodAmount;
        }
        Animal.prototype.food = function () {
            return this.foodType + " : " + this.foodAmount + " Kg//  ";
        };
        Animal.prototype.format = function () {
            return "<br>The " + this.animal + " named " + this.animalName + " makes \"" + this.sound + "\", and eats " + this.foodEaten + " Kg of " + this.foodType + ".<br>";
        };
        return Animal;
    }());
    window.addEventListener("load", handleLoad);
    var animal_1 = new Animal("Cow", "Gertrud", "Moo", "Grass", 25, 150);
    var animal_2 = new Animal("Chicken", "Becky", "Cluck", "Grains", 4, 24);
    var animal_3 = new Animal("Dog", "Mr.Woofers", "woof", "Meat", 10, 100);
    var animal_4 = new Animal("Horse", "Dale", "Neigh", "Hay", 20, 160);
    var animal_5 = new Animal("Cat", "Findus", "Miau", "Fish", 8, 72);
    var foodDisplay;
    var animalDisplay;
    var restartDay;
    function handleLoad(_event) {
        animalDisplay = document.getElementById("animals");
        foodDisplay = document.getElementById("food");
        restartDay = document.getElementById("restart");
        foodDisplay.innerHTML = animal_1.food() + animal_2.food() + animal_3.food() + animal_4.food() + animal_5.food();
        document.getElementById("restart").addEventListener("click", cow);
        setTimeout(cow, 1500);
        function cow() {
            restartDay.style.display = "none";
            animal_1.foodAmount = animal_1.foodAmount - animal_1.foodEaten;
            animalDisplay.innerHTML = animal_1.format();
            updateFoodCount();
            setTimeout(chicken, 1500);
        }
        function chicken() {
            animal_2.foodAmount = animal_2.foodAmount - animal_2.foodEaten;
            animalDisplay.innerHTML += animal_2.format();
            updateFoodCount();
            setTimeout(dog, 1000);
        }
        function dog() {
            animal_3.foodAmount = animal_3.foodAmount - animal_3.foodEaten;
            animalDisplay.innerHTML += animal_3.format();
            updateFoodCount();
            setTimeout(horse, 1500);
        }
        function horse() {
            animal_4.foodAmount = animal_4.foodAmount - animal_4.foodEaten;
            animalDisplay.innerHTML += animal_4.format();
            updateFoodCount();
            setTimeout(cat, 1500);
        }
        function cat() {
            animal_5.foodAmount = animal_5.foodAmount - animal_5.foodEaten;
            animalDisplay.innerHTML += animal_5.format();
            restartDay.style.display = "inline";
            updateFoodCount();
        }
        function updateFoodCount() {
            foodDisplay.innerHTML = animal_1.food() + animal_2.food() + animal_3.food() + animal_4.food() + animal_5.food();
        }
    }
})(Aufgabe9_1 || (Aufgabe9_1 = {}));
//# sourceMappingURL=9.1_full.js.map