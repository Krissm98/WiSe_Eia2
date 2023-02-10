namespace versenden {

    let url: string = "https://jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt";

    async function communicate(_url: RequestInfo): Promise<void> {
        
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let responseTwo: String = await (await response.text());
        console.log(responseTwo);
    }
    console.log("Start");
    communicate(url);
    console.log("End");
    
    
}