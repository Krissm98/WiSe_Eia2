namespace L09_1_OldMacDonaldsFarm {
    export class Animal {
        type: string;
        name: string;
        food: string;
        amountFood: number;
        sound: string;
    
        constructor (_type: string, _name: string, _food: string, _amountFood: number, _sound: string) {
            console.log("constructor");
            this.type = _type;
            this.name = _name;
            this.food = _food;
            this.amountFood = _amountFood;
            this.sound = _sound; 
        }
        
        eat(_food: string): void {
            console.log("eat");
            // For- Schleife darin If-Bedinung checken, ob gleiche Bezeichnung


        }   
    
        draw(): void {
            console.log("draw");
        }

        sing(_sound: string): void {
            console.log("sing");
        }
    }
    

}