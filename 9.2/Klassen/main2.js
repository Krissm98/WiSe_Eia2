var Aufgabe_9_2;
(function (Aufgabe_9_2) {
    let imageTree;
    let imageMountains;
    let imageBackground;
    window.addEventListener("load", handleLoad);
    let golden = 0.62;
    let randomNumber = Math.random() * 100;
    let leaves = [];
    let treeNumber = 0;
    let cloud;
    function handleLoad(_evet) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Aufgabe_9_2.crc2 = canvas.getContext("2d");
        Aufgabe_9_2.crc2 = canvas.getContext("2d");
        Aufgabe_9_2.crc2.fillStyle = "black";
        Aufgabe_9_2.crc2.strokeStyle = "white";
        let horizon = Aufgabe_9_2.crc2.canvas.height * golden;
        drawBackground();
        drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        drawTrees({ x: 50, y: 450 }, { x: 75, y: 150 });
        createCloud();
        createLeaf();
        window.setInterval(update, 20);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = Aufgabe_9_2.crc2.createLinearGradient(0, 0, 0, Aufgabe_9_2.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "green");
        Aufgabe_9_2.crc2.fillStyle = gradient;
        Aufgabe_9_2.crc2.fillRect(0, 0, Aufgabe_9_2.crc2.canvas.width, Aufgabe_9_2.crc2.canvas.height);
        imageBackground = Aufgabe_9_2.crc2.getImageData(0, 0, Aufgabe_9_2.crc2.canvas.width, Aufgabe_9_2.crc2.canvas.height);
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        Aufgabe_9_2.crc2.save();
        Aufgabe_9_2.crc2.translate(_position.x, _position.y);
        Aufgabe_9_2.crc2.beginPath();
        Aufgabe_9_2.crc2.moveTo(0, 0);
        Aufgabe_9_2.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            Aufgabe_9_2.crc2.lineTo(x, y);
        } while (x < Aufgabe_9_2.crc2.canvas.width);
        Aufgabe_9_2.crc2.lineTo(x, 0);
        Aufgabe_9_2.crc2.closePath();
        let gradient = Aufgabe_9_2.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        Aufgabe_9_2.crc2.fillStyle = gradient;
        Aufgabe_9_2.crc2.fill();
        Aufgabe_9_2.crc2.restore();
        imageMountains = Aufgabe_9_2.crc2.getImageData(0, 0, Aufgabe_9_2.crc2.canvas.width, Aufgabe_9_2.crc2.canvas.height);
    }
    function drawTrees(_positionX, _positionY) {
        for (let i = 0; i < 30; i++) {
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
    function createLeaf() {
        for (let i = 0; i < 10; i++) {
            let positionXOfLeaf = Math.random() * Aufgabe_9_2.crc2.canvas.width;
            let positionYOfLeaf = Math.random() * Aufgabe_9_2.crc2.canvas.height;
            let leaf = new Aufgabe_9_2.Leaf(positionXOfLeaf, positionYOfLeaf);
            leaves.push(leaf);
            console.log(leaves);
            leaf.draw();
        }
    }
    function createCloud() {
        cloud = new Aufgabe_9_2.Wolke();
    }
    function update() {
        console.log("Update");
        Aufgabe_9_2.crc2.putImageData(imageBackground, 0, 0);
        Aufgabe_9_2.crc2.putImageData(imageMountains, 0, 0);
        Aufgabe_9_2.crc2.putImageData(imageTree, 0, 0);
        for (let leaf of leaves) {
            leaf.move(1 / 60);
            leaf.draw();
        }
        cloud.draw();
        cloud.move(1 / 20);
    }
})(Aufgabe_9_2 || (Aufgabe_9_2 = {}));
//# sourceMappingURL=main2.js.map