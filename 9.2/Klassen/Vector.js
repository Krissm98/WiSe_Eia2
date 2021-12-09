var Aufgabe_9_2;
(function (Aufgabe_9_2) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.set(_x, _y);
        }
        Vector.prototype.set = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        Vector.prototype.scale = function (_factor) {
            this.x *= _factor;
            this.y *= _factor;
        };
        Vector.prototype.add = function (_addtoend) {
            this.x += _addtoend.x;
            this.y += _addtoend.y;
        };
        Vector.prototype.random = function (_minLength, _maxLength) {
            var length = _minLength + Math.random() * (_maxLength - _minLength);
            var direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        };
        return Vector;
    }());
    Aufgabe_9_2.Vector = Vector;
})(Aufgabe_9_2 || (Aufgabe_9_2 = {}));
//# sourceMappingURL=Vector.js.map