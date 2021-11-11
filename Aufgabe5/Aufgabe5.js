var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", handleLoad);
    var eingabe;
    var nodeList;
    var font;
    var cardSize;
    var backgroundColor1;
    var selectField;
    var body = document.getElementById("body1");
    function handleLoad(_event) {
        eingabe = document.getElementById("kartenName");
        var form = document.querySelector("div#formSettings");
        form.addEventListener("change", handleChange);
        document.getElementById("startButton").addEventListener("click", gameStart);
    }
    function handleChange(_event) {
        var formData = new FormData(document.forms[0]);
        var nodeList = document.querySelectorAll("input");
        var font = document.querySelector("select");
        var cardSize = nodeList[0].value;
        var backgroundColor1 = nodeList[1].value;
        console.log(font.value);
        // for (let entry of formData) {
        //     console.log(formData);
        // }
        //console.log(_event);
        console.log(nodeList);
        eingabe = document.getElementById("kartenName");
        // console.log(backgroundColor1);
        // console.log(font.value);
        console.log(nodeList);
    }
    function gameStart() {
        var formData = new FormData(document.forms[0]);
        var nodeList = document.querySelectorAll("input");
        var font = document.querySelector("select");
        var cardSize = nodeList[0].value;
        var backgroundColor1 = nodeList[1].value;
        var cardBackgroundColor = nodeList[2].value;
        var fontColor = nodeList[3].value;
        var timer = nodeList[4].value;
        var timerNumber = parseInt(timer);
        document.getElementById("formSettings").classList.add("ishidden");
        var array1 = eingabe.value.split("");
        var eingabe2 = eingabe.value;
        var arrayCards2 = eingabe2.split("");
        var arrayCards3 = [];
        var _loop_1 = function (index) {
            var zufallsZahl = Math.floor(Math.random() * (array1.length));
            var card = document.createElement("div");
            card.classList.add("Card" + index);
            document.body.appendChild(card);
            card.innerHTML = array1[zufallsZahl];
            //console.log(array1[zufallsZahl]);
            array1.splice(zufallsZahl, 1);
            //console.log(array1);
            card.style.width = cardSize + "px";
            card.style.height = cardSize + "px";
            document.body.style.backgroundColor = backgroundColor1;
            card.style.backgroundColor = cardBackgroundColor;
            card.style.fontFamily = font.value.toString();
            card.style.color = fontColor;
            card.style.fontSize = "font-size: fit-width | fit-height | fit-height-precise;";
            card.style.textAlign = "center";
            card.style.display = "grid";
            card.style.borderStyle = "solid";
            card.style.borderWidth = "5px";
            card.style.borderColor = "black";
            selectField = document.getElementById("formSettings");
            selectField.classList.add("isHidden");
            setTimeout(hideCards2, (arrayCards2.length * 1000));
            function hideCards2() {
                card.classList.add("hide");
            }
            setTimeout(youLost, (arrayCards2.length + timerNumber * 1000));
            function youLost() {
                alert("you lost");
            }
            card.addEventListener("click", startGame);
            function startGame() {
                card.classList.remove("hide");
                arrayCards3.push(card.innerHTML);
                if ((arrayCards2.length === arrayCards3.length)) {
                    if (JSON.stringify(arrayCards2) == JSON.stringify(arrayCards3)) {
                        alert("you won");
                    }
                    else {
                        alert("you lost");
                    }
                }
            }
        };
        //let bla: string = eingabe;
        // console.log(array1);
        //debugger;
        for (var index = 0; index < eingabe.value.length; index++) {
            _loop_1(index);
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.js.map