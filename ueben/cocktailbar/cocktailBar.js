var cocktailBar;
(function (cocktailBar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("started");
        let form = document.querySelector("div#createDrink");
        let slider = document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        function handleChange(_event) {
            //console.log(_event);
            //let input: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
            //console.log(input);
            let order = document.querySelector("div#order");
            order.innerHTML = "";
            let formData = new FormData(document.forms[0]);
            //console.log(formData);
            for (let entry of formData) {
                //console.log(entry);
                let item = document.querySelector("[value='" + entry[1] + "'");
                //console.log(item);
                let price = Number(item.getAttribute("price"));
                //console.log(price);
                console.log(item);
                order.innerHTML += item.value + "   " + price + " $  ";
            }
        }
        function displayAmount(_event) {
            let progress = document.querySelector("progress");
            let amount = _event.target.value;
            progress.value = parseFloat(amount);
        }
        function wholePrice(_event) {
            let amount2 = _event.target.value;
        }
    }
})(cocktailBar || (cocktailBar = {}));
//# sourceMappingURL=cocktailBar.js.map