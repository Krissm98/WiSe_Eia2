var Aufgabe_9_2;
(function (Aufgabe_9_2) {
    var Wolke = /** @class */ (function () {
        function Wolke() {
            this.startingPosition = new Aufgabe_9_2.Vector(550, 100);
            this.size = new Aufgabe_9_2.Vector(200, 75);
            this.velocity = new Aufgabe_9_2.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        Wolke.prototype.move = function (_timeslice) {
            var offset = new Aufgabe_9_2.Vector(this.velocity.x, 0);
            offset.scale(_timeslice);
            this.startingPosition.add(offset);
            console.log(this.startingPosition);
            if (this.startingPosition.x < 0) {
                this.startingPosition.x += Aufgabe_9_2.crc2.canvas.width;
            }
            if (this.startingPosition.x > Aufgabe_9_2.crc2.canvas.width) {
                this.startingPosition.x -= Aufgabe_9_2.crc2.canvas.width;
            }
        };
        Wolke.prototype.draw = function () {
            //console.log("wolke zeichnen");
            var nParticles = 30;
            var radiusParticle = 50;
            var particle = new Path2D();
            var gradient = Aufgabe_9_2.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            Aufgabe_9_2.crc2.save();
            Aufgabe_9_2.crc2.translate(this.startingPosition.x, this.startingPosition.y);
            Aufgabe_9_2.crc2.fillStyle = gradient;
            for (var drawn = 0; drawn < nParticles; drawn++) {
                Aufgabe_9_2.crc2.save();
                var x = (Math.random() - 0.5) * this.size.x;
                var y = -(Math.random()) * this.size.y;
                Aufgabe_9_2.crc2.translate(x, y);
                Aufgabe_9_2.crc2.fill(particle);
                Aufgabe_9_2.crc2.restore();
            }
            Aufgabe_9_2.crc2.restore();
        };
        return Wolke;
    }());
    Aufgabe_9_2.Wolke = Wolke;
})(Aufgabe_9_2 || (Aufgabe_9_2 = {}));
//# sourceMappingURL=Wolke.js.map