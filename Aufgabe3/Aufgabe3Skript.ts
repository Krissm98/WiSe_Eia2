namespace Aufgabe3 {




    let span: HTMLElement = document.getElementById("span01");



    window.addEventListener("load", handleLoad);
    function handleLoad(_event: Event): void {
        let div0: HTMLElement = document.createElement("div");
        div0.classList.add("div0");
        document.body.appendChild(div0);
        let div1: HTMLElement = document.createElement("div");
        div1.classList.add("div1");
        document.body.appendChild(div1);
        /*let span: HTMLElement = document.createElement("span");
        span.classList.add("span01");
        document.body.appendChild(span);*/
        document.addEventListener("mousemove", setInfoBox);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        let button: HTMLElement = document.createElement("button");
        button.classList.add("button01");
        div0.appendChild(button);
        
        



        //console.log(_event);
        //window.addEventListener("mousemove", handleLoad);
    }



    function setInfoBox(_event: MouseEvent): void {
        //console.log("hallo");
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let target: EventTarget = _event.target;
        span.style.left = x + "px";
        span.style.top = y + "px";
        span.innerHTML = "X: " + x + "px" + "<br>" + "Y: " + y + "px" + "<br>" + target ;
        
    }


    function logInfo(_event: Event): void {
        //console.log("hallo2");
        //console.log(span);

        console.log(_event);
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
    }









}