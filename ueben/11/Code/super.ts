
namespace Modis {
    export abstract class Animal {
        static noise: string;
        rasse: string;
        
        
        


        constructor(_rasse: string, _noise: string) {
            Animal.noise = _noise;
            this.rasse = _rasse;
        }
        
        static statischeFunktion(): void {
            console.log("test");

        }
        abstract speak(): void;





    }
}