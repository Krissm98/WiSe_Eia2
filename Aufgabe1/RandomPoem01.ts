namespace aufgabe1RandomPoem {

    //in Zusammenarbeit mit Liz, Lea und Amelie
    
let namenArray: string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let aktionenArray: string [] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objekteArray: string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

//console.log(namenArray, aktionenArray, objekteArray);

for (let index: number = namenArray.length; index > 0; index--) {
    
    getverse(namenArray, aktionenArray, objekteArray);
    //console.log(index);
    
}

function getverse(_namenArrayStelle: string[], _aktionenArrayStelle: string[], _objekteArrayStelle: string[]): string {

let verse: string = "";
let randomSubject: number = Math.floor(Math.random() * _namenArrayStelle.length);
let randomAction: number = Math.floor(Math.random() * _aktionenArrayStelle.length);
let randomObject: number = Math.floor(Math.random() * _objekteArrayStelle.length);
verse = verse + _namenArrayStelle.splice(randomSubject, 1)[0] + " " +  _aktionenArrayStelle.splice(randomAction, 1)[0] + " " + _objekteArrayStelle.splice(randomObject, 1)[0];
console.log(verse);
return("was Bruder?");
}

}