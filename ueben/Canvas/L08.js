// namespace uebung {
//     window.addEventListener("load", handleLoad);
//     let pattern: CanvasRenderingContext = document.createElement('canvas').getContext('2d');
//     function handleLoad(_event: Event): void {
//         let canvas: HTMLCanvasElement = document.querySelector("canvas");
//         let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
//         crc2.fillStyle = "Blue";
//         crc2.strokeStyle = "red";
//         crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
//         crc2.beginPath();
//         crc2.arc(100, 100, 25, 0, 1.5 * Math.PI);
//         crc2.closePath();
//         crc2.stroke();
//         let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);
//         gradient.addColorStop(0.5, "black");
//         gradient.addColorStop(0.7, "red");
//         gradient.addColorStop(1, "gold");
//         crc2.fillStyle = gradient;
//         crc2.fillRect(0, 20, 200, 100);
//         pattern.canvas.width = 40;
//         pattern.canvas.height = 20;
//         pattern.fillStyle = '#fec';
//         pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
//         pattern.moveTo(0, 10);
//         pattern.lineTo(10, 10);
//         pattern.lineTo(20, 0);
//         pattern.lineTo(30, 0);
//         pattern.lineTo(40, 10);
//         pattern.lineTo(30, 20);
//         pattern.lineTo(20, 20);
//         pattern.lineTo(10, 10);
//         pattern.stroke();
//         crc2.fillStyle = crc2.createPattern(pattern.canvas, 'repeat');
//         crc2.fillRect(0, 0, canvas.width, canvas.height);
//     }
// }
//# sourceMappingURL=L08.js.map