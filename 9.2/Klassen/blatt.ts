namespace Aufgabe_9_2 {
    export class Leaf {
        position: Vector;
        velocity: Vector;
        positionYOfLeaf: number;
        positionXOfLeaf: number;


        constructor(_positionYOfLeaf: number, _positionXOfLeaf: number) {
            console.log("Blattconstructor");
            this.positionYOfLeaf = _positionYOfLeaf;
            this.positionXOfLeaf = _positionXOfLeaf;
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

        }

        move(_timeslice: number): void {
            // console.log("Asteroid move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw(): void {
            console.log("Blatt Draw");
            crc2.save();

            crc2.beginPath();
            crc2.fillStyle = "red";

            crc2.ellipse(this.position.x, this.position.x, 8, 20, 10, 10, 20);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.restore();
        }
    }

}