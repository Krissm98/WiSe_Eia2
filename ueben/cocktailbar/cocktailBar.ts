namespace cocktailBar {
    
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("started");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#createDrink");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);

        function handleChange(_event: Event): void {
            
            //console.log(_event);

            //let input: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
            //console.log(input);

            let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
            order.innerHTML = "";

            let formData: FormData = new FormData(document.forms[0]);
            //console.log(formData);
            for (let entry of formData) {
                //console.log(entry);
                let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "'");
                //console.log(item);
                let price: number = Number(item.getAttribute("price"));
                //console.log(price);
                console.log(item);
                
                
                order.innerHTML += item.value + "   " + price + " $  ";
            }

            
            
            
        }   

        function displayAmount(_event: Event): void {
            let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
            let amount: string = (<HTMLInputElement>_event.target).value;
            progress.value = parseFloat(amount);
        }

        function wholePrice(_event: Event): void {
            let amount2: string = (<HTMLInputElement>_event.target).value;
           
        }
    }
}