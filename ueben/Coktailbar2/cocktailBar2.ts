namespace L04_CocktailBar {

    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement;

    function handleLoad(_event: Event): void {
        //console.log("started");

        generateContent(data);

        form = <HTMLFormElement>document.querySelector("form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        console.log(submit);

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        submit.addEventListener("click", sendOrder);
        

        displayOrder();
    }


    async function sendOrder(_event: Event): Promise<void> {
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("index.html?" + query.toString());
        alert("order sent!");

    }
    function handleChange(_event: Event): void {
        displayOrder();

    }


    function displayOrder(): void {
        //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        //console.log(inputs);
        let price: number = 0;
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(form);

        //console.group("Order");
        for (let entry of formData) {
            //console.log(entry);
            let selector: string = "[value='" + entry[1] + "']"; //"[name='" + entry[0] + "'] [value='" + entry[?"]
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            let itemPrice: number = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "Amount":
                    break;
                case "Drink":
                    let amount: number = Number(formData.get("Amount"));
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

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }

   

}