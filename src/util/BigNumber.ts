import NumberFormatter from "./NumberFormatter";

export default class BigNumber {
    private i: number;
    private value: number;

    private readonly maxValue = 9999;

    constructor(value: number, i: number) {
        this.value = value;
        this.i = i;

        console.log(this.maxValue);
    }

    public format(): string {
        let a = NumberFormatter.formatRaw(this.value);
        for (let j = 0; j < this.i; j++) {
            a += " novemnonagintillion";
        }
        
        return a;
    }

    
}