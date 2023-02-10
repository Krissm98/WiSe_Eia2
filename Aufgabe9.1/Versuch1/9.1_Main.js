var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    window.addEventListener("load", handleLoad);
    let animals = [];
    let stock = [];
    let index = 0;
    function handleLoad(_event) {
        console.log("handleLoad");
    }
    let cow = new L09_1_OldMacDonaldsFarm.Animal("cow", "Paula", "wheat", 10, "muuuh");
    let chicken = new L09_1_OldMacDonaldsFarm.Animal("chicken", "Darcy", "seeds", 5, "gack");
    let dog = new L09_1_OldMacDonaldsFarm.Animal("dog", "Peanut", "treat", 3, "woof");
    let donkey = new L09_1_OldMacDonaldsFarm.Animal("donkey", "Elisabeth", "grass", 50, "iaia");
    let pig = new L09_1_OldMacDonaldsFarm.Animal("pig", "Peppa", "grains", 20, "oink");
    animals.push(cow, chicken, dog, donkey, pig);
    let wheat = new L09_1_OldMacDonaldsFarm.Stock("wheat", 300);
    let seeds = new L09_1_OldMacDonaldsFarm.Stock("seeds", 300);
    let treat = new L09_1_OldMacDonaldsFarm.Stock("treat", 300);
    let grass = new L09_1_OldMacDonaldsFarm.Stock("grass", 300);
    let grains = new L09_1_OldMacDonaldsFarm.Stock("grains", 300);
    stock.push(wheat, seeds, treat, grass, grains);
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=9.1_Main.js.map