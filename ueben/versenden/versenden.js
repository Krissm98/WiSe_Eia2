var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var versenden;
(function (versenden) {
    let url = "https://jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt";
    function communicate(_url) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(_url);
            console.log("Response", response);
            let responseTwo = yield (yield response.text());
            console.log(responseTwo);
        });
    }
    console.log("Start");
    communicate(url);
    console.log("End");
})(versenden || (versenden = {}));
//# sourceMappingURL=versenden.js.map