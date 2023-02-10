var Modis;
(function (Modis) {
    class Animal {
        constructor(_rasse, _noise) {
            Animal.noise = _noise;
            this.rasse = _rasse;
        }
        static statischeFunktion() {
            console.log("test");
        }
    }
    Modis.Animal = Animal;
})(Modis || (Modis = {}));
//# sourceMappingURL=super.js.map