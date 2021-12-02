var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    window.addEventListener("load", handleLoad);
    var animals = [];
    var stock = [];
    var index = 0;
    function handleLoad(_event) {
        console.log("handleLoad");
    }
    var cow = new L09_1_OldMacDonaldsFarm.Animal("cow", "Paula", "wheat", 10, "muuuh");
    var chicken = new L09_1_OldMacDonaldsFarm.Animal("chicken", "Darcy", "seeds", 5, "gack");
    var dog = new L09_1_OldMacDonaldsFarm.Animal("dog", "Peanut", "treat", 3, "woof");
    var donkey = new L09_1_OldMacDonaldsFarm.Animal("donkey", "Elisabeth", "grass", 50, "iaia");
    var pig = new L09_1_OldMacDonaldsFarm.Animal("pig", "Peppa", "grains", 20, "oink");
    animals.push(cow, chicken, dog, donkey, pig);
    var wheat = new L09_1_OldMacDonaldsFarm.Stock("wheat", 300);
    var seeds = new L09_1_OldMacDonaldsFarm.Stock("seeds", 300);
    var treat = new L09_1_OldMacDonaldsFarm.Stock("treat", 300);
    var grass = new L09_1_OldMacDonaldsFarm.Stock("grass", 300);
    var grains = new L09_1_OldMacDonaldsFarm.Stock("grains", 300);
    stock.push(wheat, seeds, treat, grass, grains);
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=9.1_Main.js.map