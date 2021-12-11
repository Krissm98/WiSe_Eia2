namespace Aufgabe_9_2 {

    let imageTree: ImageData;
    let imageMountains: ImageData;
    let imageBackground: ImageData;

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);

    let golden: number = 0.62;
    let randomNumber: number = Math.random() * 100;
    let leaves: Leaf[] = [];
    let treeNumber: number = 0;
    let cloud: Wolke;

    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_evet: Event): void {

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        let horizon: number = crc2.canvas.height * golden;

        drawBackground();
        drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        drawTrees({ x: 50, y: 450 }, { x: 75, y: 150 });
        createCloud();
        createLeaf();
        window.setInterval(update, 20);
        



    }
    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "green");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        imageBackground = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;


        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();

        imageMountains = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawTrees(_positionX: Vector, _positionY: Vector): void {

        for (let i: number = 0; i < 30; i++) {

            if (i >= 1) { treeNumber = treeNumber + 50 + randomNumber; }


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

            imageTree = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);


        }
    }


    function createLeaf(): void {

        for (let i: number = 0; i < 10; i++) {

            let positionXOfLeaf: number = Math.random() * crc2.canvas.width;
            let positionYOfLeaf: number = Math.random() * crc2.canvas.height;
       

            let leaf: Leaf = new Leaf(positionXOfLeaf, positionYOfLeaf);
            leaves.push(leaf);
            console.log(leaves);
            leaf.draw();
        }
    }

    function createCloud(): void {
        cloud = new Wolke();
    }

    function update(): void {
        console.log("Update");

        crc2.putImageData(imageBackground, 0, 0);
        crc2.putImageData(imageMountains, 0, 0);
        crc2.putImageData(imageTree, 0, 0);
       
        for (let leaf of leaves) {
            leaf.move(1 / 60);
            leaf.draw();
        }
        cloud.draw();
        cloud.move(1 / 20);
        
    }

   
}