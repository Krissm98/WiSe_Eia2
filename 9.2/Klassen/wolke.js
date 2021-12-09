var Aufgabe_9_2;
(function (Aufgabe_9_2) {
    var Wolke = /** @class */ (function () {
        function Wolke(_size) {
            console.log("Wolkeconstructor");
            // this.position = new Vector (0, 0);   
        }
        Wolke.prototype.moveBy = function (_timeslice) {
            console.log("Wolke move");
        };
        Wolke.prototype.draw = function () {
            console.log("Draw Wolke");
        };
        return Wolke;
    }());
    Aufgabe_9_2.Wolke = Wolke;
})(Aufgabe_9_2 || (Aufgabe_9_2 = {}));
//# sourceMappingURL=wolke.js.map