let canvas: HTMLCanvasElement = document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
crc2.canvas.width = 400;
crc2.canvas.height = 400;
crc2.fillStyle = "#FF6002";

crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

crc2.beginPath();
//crc2.ellipse(100, 100, 10, 10, 10, 100, 205);
//crc2.arc(75, 100, 30, 3, 2 * Math.PI);
//crc2.closePath();
crc2.moveTo(100, 100);
crc2.quadraticCurveTo(80, 80, 100, 60);
crc2.quadraticCurveTo(120, 45, 140, 60);
//crc2.lineTo(100, 40);

//crc2.strokeText("Yeat is Trash", 100, 100);
//crc2.lineTo(120, 80);
//crc2.lineTo(140, 100);
//crc2.closePath();
crc2.strokeStyle = "#000000";

crc2.stroke();

let path: Path2D = new Path2D();
path.moveTo(140, 100);
path.quadraticCurveTo(160, 80, 140, 60);
path.moveTo(140, 100);
path.lineTo(120, 80);
path.lineTo(100, 100);
crc2.strokeStyle = "#FA8072";
crc2.stroke(path);

//let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);

//gradient.addColorStop(0, "black");
//gradient.addColorStop(0.3, "black");
//gradient.addColorStop(0.3109, "black");
///gradient.addColorStop(0.319, "black");
//gradient.addColorStop(0.32, "red");
//gradient.addColorStop(0.5, "red");
//gradient.addColorStop(0.709, "red");
//gradient.addColorStop(0.71, "gold");
//gradient.addColorStop(1, "gold");

//crc2.fillStyle = gradient;
//crc2.fillRect(0, 0, 200, 100);