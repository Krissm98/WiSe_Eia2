namespace Aufgabe9_1 {

    class Animal {
        animal: string;
        animalName: string;
        sound: string;
        foodType: string;
        foodEaten: number;
        foodAmount: number;

        constructor(_animal: string, _animalName: string, _sound: string, _foodType: string, _foodEaten: number, _foodAmount: number) {
            this.animal = _animal;
            this.animalName = _animalName;
            this.sound = _sound;
            this.foodType = _foodType;
            this.foodEaten = _foodEaten;
            this.foodAmount = _foodAmount;
        }

        food() {
            return `${this.foodType} : ${this.foodAmount} Kg//  `;
        }

        format() {
            return `<br>The ${this.animal} named ${this.animalName} makes "${this.sound}", and eats ${this.foodEaten} Kg of ${this.foodType}.<br>`;
        }
    }

    window.addEventListener("load", handleLoad);
    let animal_1 = new Animal("Cow", "Gertrud", "Moo", "Grass", 25, 150);
    let animal_2 = new Animal("Chicken", "Becky", "Cluck", "Grains", 4, 24);
    let animal_3 = new Animal("Dog", "Mr.Woofers", "woof", "Meat", 10, 100);
    let animal_4 = new Animal("Horse", "Dale", "Neigh", "Hay", 20, 160);
    let animal_5 = new Animal("Cat", "Findus", "Miau", "Fish", 8, 72);

    let foodDisplay: HTMLDivElement;
    let animalDisplay: HTMLDivElement;
    let restartDay: HTMLButtonElement;

    function handleLoad(_event: Event): void {


        animalDisplay = <HTMLDivElement>document.getElementById("animals");
        foodDisplay = <HTMLDivElement>document.getElementById("food");
        restartDay = <HTMLButtonElement>document.getElementById("restart");
        foodDisplay.innerHTML = animal_1.food() + animal_2.food() + animal_3.food() + animal_4.food() + animal_5.food();
        document.getElementById("restart").addEventListener("click", cow);
        setTimeout(cow, 1500);

        function cow(): void {
            restartDay.style.display = "none";
            animal_1.foodAmount = animal_1.foodAmount - animal_1.foodEaten;
            animalDisplay.innerHTML = animal_1.format();
            updateFoodCount();
            setTimeout(chicken, 1500);
        }

        function chicken(): void {
            animal_2.foodAmount = animal_2.foodAmount - animal_2.foodEaten;
            animalDisplay.innerHTML += animal_2.format();
            updateFoodCount();
            setTimeout(dog, 1000);
        }
        function dog(): void {
            animal_3.foodAmount = animal_3.foodAmount - animal_3.foodEaten;
            animalDisplay.innerHTML += animal_3.format();
            updateFoodCount();
            setTimeout(horse, 1500);
        }
        function horse(): void {
            animal_4.foodAmount = animal_4.foodAmount - animal_4.foodEaten;
            animalDisplay.innerHTML += animal_4.format();
            updateFoodCount();
            setTimeout(cat, 1500);
        }

        function cat(): void {
            animal_5.foodAmount = animal_5.foodAmount - animal_5.foodEaten;
            animalDisplay.innerHTML += animal_5.format();
            restartDay.style.display = "inline";
            updateFoodCount();
        }

        function updateFoodCount(): void {
            foodDisplay.innerHTML = animal_1.food() + animal_2.food() + animal_3.food() + animal_4.food() + animal_5.food();
        }


    }


}
