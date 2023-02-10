var L09_Classes;
(function (L09_Classes) {
    class Vector {
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    let v1 = new Vector();
    v1.set(5, 6);
    v1.scale(4);
    console.log(v1);
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=main.js.map