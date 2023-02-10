namespace L08_Canvas_Alley{
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden;

        drawBackground();
        drawSun({ x: 100, y: 75});
        drawCloud({ x: 500, y: 125}, { x: 250, y: 75});
        drawStreet({ x: crc2.canvas.width / 2, y: crc2.canvas.height * golden}, 100, 600);
        drawMountains({ x: 0, y: horizon}, 100, 250, "lightgrey", "white" );
        drawMountains({ x: 0, y: horizon}, 50, 150, "grey", "lightgrey" );
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "hsl(210, 100%, 60%)");
        gradient.addColorStop(golden, "hsl(0, 0%, 100%)");
        gradient.addColorStop(1, "hsl(120, 60%, 50%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
        console.log("Sun");

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "hsl(60, 100%, 90%)");
        gradient.addColorStop(1, "hsl(60, 100%, 70%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI); //Kreis bauen
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("drawCLoud");

        let nParticles: number = 130;
        let radiusParticle: number = 30; 
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "hsla(0, 0%, 100%, 1)");
        gradient.addColorStop(1, "hsl(0, 0%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;
        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            //forSchleife durchlaufen bis nParticles erreicht wird(jeder durchlauf +1)
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();

        }
        crc2.restore();
        
    }

    function drawStreet (_position: Vector, widthBack: number, widthFront: number): void {
        console.log("Street");
        crc2.beginPath();
        crc2.moveTo(_position.x + widthBack / 2, _position.y);
        crc2.lineTo(crc2.canvas.width / 2 + widthFront / 2, crc2.canvas.height);
        crc2.lineTo(crc2.canvas.width / 2 - widthFront / 2, crc2.canvas.height);
        crc2.lineTo(_position.x - widthBack / 2,_position.y);
        crc2.closePath();
        

        let gradient: CanvasGradient = crc2.createLinearGradient(0, _position.y, 0, crc2.canvas.height);
        gradient.addColorStop(0, "white");
        
        gradient.addColorStop(0.4, "black");

        crc2.fillStyle = gradient;
        crc2.fill();
       
    }
    
    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");
        let stepMin: number = 30;
        let stepMax: number = 100;
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

        crc2.strokeStyle = "black";
        crc2.stroke();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 0 - _max);

        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.6, _colorLow);
        gradient.addColorStop(0.8, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }
}