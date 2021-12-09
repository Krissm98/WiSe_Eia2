var Aufgabe_9_2;
(function (Aufgabe_9_2) {
    var imageTree;
    var imageMountains;
    var imageBackground;
    window.addEventListener("load", handleLoad);
    var golden = 0.62;
    var randomNumber = Math.random() * 100;
    var leaves = [];
    var treeNumber = 0;
    function handleLoad(_evet) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Aufgabe_9_2.crc2 = canvas.getContext("2d");
        Aufgabe_9_2.crc2 = canvas.getContext("2d");
        Aufgabe_9_2.crc2.fillStyle = "black";
        Aufgabe_9_2.crc2.strokeStyle = "white";
        var horizon = Aufgabe_9_2.crc2.canvas.height * golden;
        drawBackground();
        var wolke = new Aufgabe_9_2.Wolke(1);
        console.log(wolke);
        // let blatt: Leaf = new Leaf(1);
        // console.log(blatt);
        drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        drawTrees({ x: 50, y: 450 }, { x: 75, y: 150 });
        // drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        createLeaf();
        window.setInterval(update, 20);
    }
    function drawBackground() {
        console.log("Background");
        var gradient = Aufgabe_9_2.crc2.createLinearGradient(0, 0, 0, Aufgabe_9_2.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "green");
        Aufgabe_9_2.crc2.fillStyle = gradient;
        Aufgabe_9_2.crc2.fillRect(0, 0, Aufgabe_9_2.crc2.canvas.width, Aufgabe_9_2.crc2.canvas.height);
        imageBackground = Aufgabe_9_2.crc2.getImageData(0, 0, Aufgabe_9_2.crc2.canvas.width, Aufgabe_9_2.crc2.canvas.height);
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        var stepMin = 50;
        var stepMax = 150;
        var x = 0;
        Aufgabe_9_2.crc2.save();
        Aufgabe_9_2.crc2.translate(_position.x, _position.y);
        Aufgabe_9_2.crc2.beginPath();
        Aufgabe_9_2.crc2.moveTo(0, 0);
        Aufgabe_9_2.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            var y = -_min - Math.random() * (_max - _min);
            Aufgabe_9_2.crc2.lineTo(x, y);
        } while (x < Aufgabe_9_2.crc2.canvas.width);
        Aufgabe_9_2.crc2.lineTo(x, 0);
        Aufgabe_9_2.crc2.closePath();
        var gradient = Aufgabe_9_2.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        Aufgabe_9_2.crc2.fillStyle = gradient;
        Aufgabe_9_2.crc2.fill();
        Aufgabe_9_2.crc2.restore();
        imageMountains = Aufgabe_9_2.crc2.getImageData(0, 0, Aufgabe_9_2.crc2.canvas.width, Aufgabe_9_2.crc2.canvas.height);
    }
    function drawTrees(_positionX, _positionY) {
        for (var i = 0; i < 30; i++) {
            if (i >= 1) {
                treeNumber = treeNumber + 50 + randomNumber;
            }
            Aufgabe_9_2.crc2.beginPath();
            Aufgabe_9_2.crc2.moveTo(25 + treeNumber, 650);
            Aufgabe_9_2.crc2.lineTo(25 + treeNumber, 625);
            Aufgabe_9_2.crc2.lineTo(0 + treeNumber, 625);
            Aufgabe_9_2.crc2.lineTo(25 + treeNumber, 600);
            Aufgabe_9_2.crc2.lineTo(0 + treeNumber, 600);
            Aufgabe_9_2.crc2.lineTo(25 + treeNumber, 575);
            Aufgabe_9_2.crc2.lineTo(0 + treeNumber, 575);
            Aufgabe_9_2.crc2.lineTo(35 + treeNumber, 520);
            Aufgabe_9_2.crc2.lineTo(70 + treeNumber, 575);
            Aufgabe_9_2.crc2.lineTo(45 + treeNumber, 575);
            Aufgabe_9_2.crc2.lineTo(70 + treeNumber, 600);
            Aufgabe_9_2.crc2.lineTo(45 + treeNumber, 600);
            Aufgabe_9_2.crc2.lineTo(70 + treeNumber, 625);
            Aufgabe_9_2.crc2.lineTo(45 + treeNumber, 625);
            Aufgabe_9_2.crc2.lineTo(45 + treeNumber, 650);
            Aufgabe_9_2.crc2.closePath();
            Aufgabe_9_2.crc2.save();
            Aufgabe_9_2.crc2.fillStyle = "green";
            Aufgabe_9_2.crc2.strokeStyle = "black";
            Aufgabe_9_2.crc2.lineWidth = 2;
            Aufgabe_9_2.crc2.stroke();
            Aufgabe_9_2.crc2.fill();
            console.log(treeNumber);
            console.log(i);
            imageTree = Aufgabe_9_2.crc2.getImageData(0, 0, Aufgabe_9_2.crc2.canvas.width, Aufgabe_9_2.crc2.canvas.height);
        }
    }
    // function drawCloud(_position: Vector, _size: Vector): void {
    //     console.log("Cloud", _position, _size);
    //     let numberParticles: number = 20;
    //     let radiusParticles: number = 50;
    //     let particle: Path2D = new Path2D();
    //     let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
    //     particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
    //     gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
    //     gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
    //     crc2.save();
    //     crc2.translate(_position.x, _position.y);
    //     crc2.fillStyle = gradient;
    //     for (let i: number = 0; i < numberParticles; i++) {
    //         crc2.save();
    //         let x: number = (Math.random() - 0.5) * _size.x;
    //         let y: number = - (Math.random() * _size.y);
    //         crc2.translate(x, y);
    //         crc2.fill(particle);
    //         crc2.restore();
    //     }
    //     crc2.restore();
    // }
    function createLeaf() {
        for (var i = 0; i < 10; i++) {
            var positionXOfLeaf = Math.random() * Aufgabe_9_2.crc2.canvas.width;
            var positionYOfLeaf = Math.random() * Aufgabe_9_2.crc2.canvas.height;
            var leaf = new Aufgabe_9_2.Leaf(positionXOfLeaf, positionYOfLeaf);
            leaves.push(leaf);
            console.log(leaves);
            leaf.draw();
        }
    }
    function update() {
        console.log("Update");
        Aufgabe_9_2.crc2.putImageData(imageBackground, 0, 0);
        Aufgabe_9_2.crc2.putImageData(imageMountains, 0, 0);
        Aufgabe_9_2.crc2.putImageData(imageTree, 0, 0);
        for (var _i = 0, leaves_1 = leaves; _i < leaves_1.length; _i++) {
            var leaf = leaves_1[_i];
            leaf.move(1 / 60);
            leaf.draw();
        }
    }
})(Aufgabe_9_2 || (Aufgabe_9_2 = {}));
//# sourceMappingURL=main2.js.map