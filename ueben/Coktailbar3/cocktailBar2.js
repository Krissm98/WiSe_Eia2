var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var L05_CocktailBar;
(function (L05_CocktailBar) {
    window.addEventListener("load", handleLoad);
    let form;
    function handleLoad(_event) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log("started");
            let response = yield fetch("Data.json");
            let offer = yield response.text();
            let data = JSON.parse(offer);
            console.log(data);
            L05_CocktailBar.generateContent(data);
            form = document.querySelector("form");
            let slider = document.querySelector("input#amount");
            let submit = document.querySelector("button[type=button]");
            console.log(submit);
            form.addEventListener("change", handleChange);
            slider.addEventListener("input", displayAmount);
            submit.addEventListener("click", sendOrder);
            displayOrder();
        });
    }
    function sendOrder(_event) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log("order sent!");
            //let query: URLSearchParams = new URLSearchParams(<any>formData);
            //await fetch("cocktailBar2.html?" + query.toString());
            //let formData: FormData = new FormData(form);
            let formData = new FormData(form);
            let json = {};
            for (let key of formData.keys())
                if (!json[key]) {
                    let values = formData.getAll(key);
                    json[key] = values.length > 1 ? values : values[0];
                }
            let query = new URLSearchParams();
            query.set("command", "insert");
            query.set("collection", "Orders");
            query.set("data", JSON.stringify(json));
            console.log(json);
            yield fetch("https://webuser.hs-furtwangen.de/~muelle1k/Database/?" + query.toString());
            alert("oder sent!");
        });
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        //console.log(inputs);
        let price = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(form);
        //console.group("Order");
        for (let entry of formData) {
            //console.log(entry);
            let selector = "[value='" + entry[1] + "']"; //"[name='" + entry[0] + "'] [value='" + entry[?"]
            let item = document.querySelector(selector);
            let itemPrice = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "Amount":
                    break;
                case "Drink":
                    let amount = Number(formData.get("Amount"));
                    itemPrice = amount * itemPrice;
                    order.innerHTML += amount + " L " + item.value + " : € " + itemPrice + "<br>";
                    break;
                default:
                    order.innerHTML += item.value + " : €" + itemPrice.toFixed(2) + "<br>";
            }
            //console.log(item);
            price += itemPrice;
        }
        console.groupEnd();
        order.innerHTML += "<p><strong>Total:  : €" + price.toFixed(2);
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L05_CocktailBar || (L05_CocktailBar = {}));
//# sourceMappingURL=cocktailBar2.js.map