var Aufgabe_9_2;
(function (Aufgabe_9_2) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addtoend) {
            this.x += _addtoend.x;
            this.y += _addtoend.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    Aufgabe_9_2.Vector = Vector;
})(Aufgabe_9_2 || (Aufgabe_9_2 = {}));
//# sourceMappingURL=Vector.js.map