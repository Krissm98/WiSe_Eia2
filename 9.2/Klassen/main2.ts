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

        let wolke: Wolke = new Wolke(1);
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

    function update(): void {
        console.log("Update");

        crc2.putImageData(imageBackground, 0, 0);
        crc2.putImageData(imageMountains, 0, 0);
        crc2.putImageData(imageTree, 0, 0);
       
        for (let leaf of leaves) {
            leaf.move(1 / 60);
            leaf.draw();
        }


    }
}