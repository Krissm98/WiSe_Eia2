namespace Aufgabe_9_2 {
    export class Wolke {
        position: Vector;
        velocity: Vector;
        size: number;


        constructor(_size: number) {
            console.log("Wolkeconstructor");
            // this.position = new Vector (0, 0);   

        }

        moveBy(_timeslice: number): void {
            console.log("Wolke move");
        }

        draw(): void {
            console.log("Draw Wolke");




        }
    }

}


