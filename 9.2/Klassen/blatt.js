var Aufgabe_9_2;
(function (Aufgabe_9_2) {
    class Leaf {
        constructor(_positionYOfLeaf, _positionXOfLeaf) {
            console.log("Blattconstructor");
            this.positionYOfLeaf = _positionYOfLeaf;
            this.positionXOfLeaf = _positionXOfLeaf;
            this.position = new Aufgabe_9_2.Vector(0, 0);
            this.velocity = new Aufgabe_9_2.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        move(_timeslice) {
            // console.log("Asteroid move");
            let offset = new Aufgabe_9_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Aufgabe_9_2.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Aufgabe_9_2.crc2.canvas.height;
            if (this.position.x > Aufgabe_9_2.crc2.canvas.width)
                this.position.x -= Aufgabe_9_2.crc2.canvas.width;
            if (this.position.y > Aufgabe_9_2.crc2.canvas.height)
                this.position.y -= Aufgabe_9_2.crc2.canvas.height;
        }
        draw() {
            console.log("Blatt Draw");
            Aufgabe_9_2.crc2.save();
            Aufgabe_9_2.crc2.beginPath();
            Aufgabe_9_2.crc2.fillStyle = "red";
            Aufgabe_9_2.crc2.ellipse(this.position.x, this.position.x, 8, 20, 10, 10, 20);
            Aufgabe_9_2.crc2.fill();
            Aufgabe_9_2.crc2.stroke();
            Aufgabe_9_2.crc2.closePath();
            Aufgabe_9_2.crc2.restore();
        }
    }
    Aufgabe_9_2.Leaf = Leaf;
})(Aufgabe_9_2 || (Aufgabe_9_2 = {}));
//# sourceMappingURL=blatt.js.map