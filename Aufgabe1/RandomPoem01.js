var aufgabe1RandomPoem;
(function (aufgabe1RandomPoem) {
    //in Zusammenarbeit mit Liz, Lea und Amelie
    var namenArray = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    var aktionenArray = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    var objekteArray = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(namenArray, aktionenArray, objekteArray);
    for (var index = namenArray.length; index > 0; index--) {
        getverse(namenArray, aktionenArray, objekteArray);
        //console.log(index);    
    }
    function getverse(_namenArrayStelle, _aktionenArrayStelle, _objekteArrayStelle) {
        var verse = "";
        var randomSubject = Math.floor(Math.random() * _namenArrayStelle.length);
        var randomAction = Math.floor(Math.random() * _aktionenArrayStelle.length);
        var randomObject = Math.floor(Math.random() * _objekteArrayStelle.length);
        verse = verse + _namenArrayStelle.splice(randomSubject, 1)[0] + " " + _aktionenArrayStelle.splice(randomAction, 1)[0] + " " + _objekteArrayStelle.splice(randomObject, 1)[0];
        console.log(verse);
        return ("was Bruder?");
    }
})(aufgabe1RandomPoem || (aufgabe1RandomPoem = {}));
//# sourceMappingURL=RandomPoem01.js.map