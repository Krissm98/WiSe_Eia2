var Modis;
(function (Modis) {
    class Chicken extends Modis.Animal {
        constructor() {
            super("chicken", "gock");
        }
        speak() {
            console.log("bla");
        }
    }
    Modis.Chicken = Chicken;
})(Modis || (Modis = {}));
//# sourceMappingURL=sub.js.map