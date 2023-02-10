namespace L09_Classes {
    class Vector {
        x: number; 
        y: number;
        
        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        
    }

    let v1: Vector = new Vector();
    v1.set(5, 6);
    v1.scale(4);
    console.log(v1);
}