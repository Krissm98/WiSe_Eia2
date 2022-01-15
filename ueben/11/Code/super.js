var Modis;
(function (Modis) {
    var Animal = /** @class */ (function () {
        function Animal(_rasse, _noise) {
            Animal.noise = _noise;
            this.rasse = _rasse;
        }
        Animal.statischeFunktion = function () {
            console.log("test");
        };
        return Animal;
    }());
    Modis.Animal = Animal;
})(Modis || (Modis = {}));
//# sourceMappingURL=super.js.map