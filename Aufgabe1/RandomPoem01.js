var aufgabe1RandomPoem;
(function (aufgabe1RandomPoem) {
    //in Zusammenarbeit mit Liz, Lea und Amelie
    let namenArray = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let aktionenArray = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekteArray = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(namenArray, aktionenArray, objekteArray);
    for (let index = namenArray.length; index > 0; index--) {
        getverse(namenArray, aktionenArray, objekteArray);
        //console.log(index);    
    }
    function getverse(_namenArrayStelle, _aktionenArrayStelle, _objekteArrayStelle) {
        let verse = "";
        let randomSubject = Math.floor(Math.random() * _namenArrayStelle.length);
        let randomAction = Math.floor(Math.random() * _aktionenArrayStelle.length);
        let randomObject = Math.floor(Math.random() * _objekteArrayStelle.length);
        verse = verse + _namenArrayStelle.splice(randomSubject, 1)[0] + " " + _aktionenArrayStelle.splice(randomAction, 1)[0] + " " + _objekteArrayStelle.splice(randomObject, 1)[0];
        console.log(verse);
        return ("was Bruder?");
    }
})(aufgabe1RandomPoem || (aufgabe1RandomPoem = {}));
//# sourceMappingURL=RandomPoem01.js.map