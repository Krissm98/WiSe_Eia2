namespace Aufgabe_1_Uebung {

let namenArray: string[] = ["Peter", "Rolf", "Rüdiger"];
let aktionArray: string[] = ["schlägt", "nimmt" , "schaut"];
let objektArray: string[] = ["Häuser" , "Bier", "Ehre"];
for (let index: number = namenArray.length; index >= 1; index--) {
    console.log(index);
    
}

function getverse(_namenArrayStelle: string, _aktionenArrayStelle: string, _objekteArrayStelle: string): string {return("Aloha"); }

console.log(getverse);
}
