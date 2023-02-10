var Aufgabe6;
(function (Aufgabe6) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        let cvs = document.querySelector("canvas");
        let crc2 = cvs.getContext("2d");
        let randomNumber = Math.random() * 100;
        for (let index = 0; index < randomNumber; index++) {
            let x = Math.random() * 800;
            let y = Math.random() * 600;
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x, y + 70);
            crc2.lineTo(x + 70, y);
            crc2.lineTo(x, y - 70);
            crc2.lineTo(x - 70, y);
            crc2.closePath();
            crc2.fillStyle = "#0044FF";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 0;
            crc2.stroke();
            crc2.fill();
        }
    }
    // window.addEventListener("load", handleload);
    // let cvs: HTMLCanvasElement = document.querySelector("canvas");
    // let crc2: CanvasRenderingContext2D = cvs.getContext("2d");
    // function handleload(_event: Event): void {
    //     for (let index: number = 0; index < 50; index++) {
    //         let x: number = Math.random() * 800;
    //         let y: number = Math.random() * 600;
    //         triangle(x, y);
    //     }
    // }
    // function triangle(_x: number, _y: number): void {
    //     crc2.beginPath();
    //     crc2.moveTo(_x, _y);
    //     crc2.lineTo(_x, _y + 70);
    //     crc2.lineTo(_x + 80, _y + 35);
    //     crc2.closePath();
    //     crc2.fillStyle = "#0044FF";
    //     crc2.strokeStyle = "black";
    //     crc2.lineWidth = 3;
    //     crc2.stroke();
    //     crc2.fill();
    // }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Aufgabe6.js.map