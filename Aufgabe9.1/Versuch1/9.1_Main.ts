namespace L09_1_OldMacDonaldsFarm {
    window.addEventListener("load", handleLoad);

    let animals: Animal [] = [];
    let stock: Stock [] = [];
    let index: number = 0;

    function handleLoad(_event: Event): void {
        console.log("handleLoad");
        
    }
    let cow: Animal = new Animal ("cow", "Paula", "wheat", 10, "muuuh");
    let chicken: Animal = new Animal ("chicken", "Darcy", "seeds", 5, "gack");
    let dog: Animal = new Animal ("dog", "Peanut", "treat", 3, "woof");
    let donkey: Animal = new Animal ("donkey", "Elisabeth", "grass", 50, "iaia");
    let pig: Animal = new Animal ("pig", "Peppa", "grains", 20, "oink");
    animals.push(cow, chicken, dog, donkey, pig);

    let wheat: Stock = new Stock ("wheat", 300);
    let seeds: Stock = new Stock ("seeds", 300);
    let treat: Stock = new Stock ("treat", 300);
    let grass: Stock = new Stock ("grass", 300);
    let grains: Stock = new Stock ("grains", 300);
    stock.push(wheat, seeds, treat, grass, grains);

    
}