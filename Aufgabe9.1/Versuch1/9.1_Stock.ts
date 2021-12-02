namespace L09_1_OldMacDonaldsFarm {
    export class Stock {
        type: string;
        amount: number;

        constructor (_type: string, _amount: number) {
            console.log("constructor");
            this.type = _type;
            this.amount = _amount;
        }
    }
}