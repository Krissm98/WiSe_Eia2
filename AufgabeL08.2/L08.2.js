var Aufgabe_L082;
(function (Aufgabe_L082) {
    let treeNumber = 0;
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62;
    let randomNumber = Math.random() * 100;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        drawBackground();
        drawAnimal({ x: 300, y: 1000 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        drawTrees({ x: 50, y: 450 }, { x: 75, y: 150 });
        drawLeaf1({ x: 100, y: 800 });
        drawLeaf2({ x: 400, y: -100 });
        drawLeaf3({ x: 500, y: 30 });
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "green");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let numberParticles = 20;
        let radiusParticles = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
        particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let i = 0; i < numberParticles; i++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawTrees(_positionX, _positionY) {
        for (let i = 0; i < 30; i++) {
            if (i >= 1) {
                treeNumber = treeNumber + 50 + randomNumber;
            }
            crc2.beginPath();
            crc2.moveTo(25 + treeNumber, 650);
            crc2.lineTo(25 + treeNumber, 625);
            crc2.lineTo(0 + treeNumber, 625);
            crc2.lineTo(25 + treeNumber, 600);
            crc2.lineTo(0 + treeNumber, 600);
            crc2.lineTo(25 + treeNumber, 575);
            crc2.lineTo(0 + treeNumber, 575);
            crc2.lineTo(35 + treeNumber, 520);
            crc2.lineTo(70 + treeNumber, 575);
            crc2.lineTo(45 + treeNumber, 575);
            crc2.lineTo(70 + treeNumber, 600);
            crc2.lineTo(45 + treeNumber, 600);
            crc2.lineTo(70 + treeNumber, 625);
            crc2.lineTo(45 + treeNumber, 625);
            crc2.lineTo(45 + treeNumber, 650);
            crc2.closePath();
            crc2.save();
            crc2.fillStyle = "green";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.fill();
            console.log(treeNumber);
            console.log(i);
        }
    }
    function drawLeaf1(_position) {
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        // crc2.ellipse(100, 600, 30, 15, Math.PI / 100, 0, 2 * Math.PI);
        crc2.lineTo(0, 0);
        crc2.lineTo(50, 50);
        crc2.bezierCurveTo(5, 150, 120, 120, 150, 150);
        crc2.moveTo(50, 50);
        crc2.bezierCurveTo(150, 5, 120, 120, 150, 150);
        crc2.moveTo(50, 50);
        crc2.lineTo(150, 150);
        crc2.closePath();
        crc2.fillStyle = "#CF791D";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();
    }
    function drawLeaf2(_position) {
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.lineTo(0, 0);
        crc2.lineTo(25, 25);
        crc2.bezierCurveTo(5, 200, 120, 120, 100, 100);
        crc2.moveTo(25, 25);
        crc2.bezierCurveTo(200, 5, 120, 120, 100, 100);
        // crc2.closePath();
        crc2.fillStyle = "red";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();
    }
    function drawLeaf3(_position) {
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.lineTo(0, 0);
        crc2.lineTo(25, 25);
        crc2.bezierCurveTo(15, 100, 120, 120, 120, 120);
        crc2.moveTo(25, 25);
        crc2.bezierCurveTo(100, 15, 120, 120, 120, 120);
        // crc2.closePath();
        crc2.fillStyle = "#EFDF22";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();
    }
    function drawAnimal(_position) {
        crc2.beginPath();
        crc2.ellipse(300, 700, 15, 30, Math.PI / 100, 0, 2 * Math.PI);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();
        crc2.moveTo(300, 700);
        crc2.ellipse(280, 720, 10, 30, Math.PI / 2, 0, 2 * Math.PI);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();
        crc2.moveTo(300, 700);
        crc2.ellipse(310, 670, 13, 13, Math.PI / 2, 0, 2 * Math.PI);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();
        crc2.moveTo(300, 700);
        crc2.ellipse(305, 660, 5, 15, Math.PI / 1, 0, 2 * Math.PI);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();
    }
})(Aufgabe_L082 || (Aufgabe_L082 = {}));
//# sourceMappingURL=L08.2.js.map