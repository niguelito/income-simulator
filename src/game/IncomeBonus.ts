import { Exclude, Expose } from "class-transformer";
import GameState from "./GameState";
import BigNumber from "bignumber.js";
import NumberFormatter from "../util/NumberFormatter";

@Exclude()
export default class IncomeBonus {
    @Expose()
    amount: number;
    
    prices: BigNumber[] = [
        new BigNumber("10000"),
        new BigNumber("50000"),
        new BigNumber("100000"),
        new BigNumber("1000000"),
        new BigNumber("10000000"),
        new BigNumber("100000000"),
        new BigNumber("1000000000"),
        new BigNumber("10000000000"),
        new BigNumber("100000000000"),
        new BigNumber("1000000000000"),
        new BigNumber("10000000000000"),
        new BigNumber("100000000000000"),
        new BigNumber("1000000000000000"),
        new BigNumber("10000000000000000"),
        new BigNumber("100000000000000000"),
        new BigNumber("1000000000000000000"),
        new BigNumber("5000000000000000000"),
        new BigNumber("10000000000000000000"),
        new BigNumber("100000000000000000000"),
        new BigNumber("1000000000000000000000"),
        new BigNumber("10000000000000000000000"),
        new BigNumber("100000000000000000000000"),
        new BigNumber("1000000000000000000000000"),
        new BigNumber("10000000000000000000000000"),
        new BigNumber("100000000000000000000000000"),
        new BigNumber("1e28"),
        new BigNumber("1e29"),
        new BigNumber("1e30"),
        new BigNumber("1e31"),
        new BigNumber("1e32"),
        new BigNumber("1e33"),
        new BigNumber("1e34"),
        new BigNumber("1e35"),
        new BigNumber("1e36"),
        new BigNumber("1e37"),
        new BigNumber("1e38"),
        new BigNumber("1e39"),
        new BigNumber("1e40"),
        new BigNumber("1e41"),
        new BigNumber("1e42"),
        new BigNumber("1e43"),
        new BigNumber("1e44"),
        new BigNumber("1e45"),
        new BigNumber("1e46"),
        new BigNumber("1e47"),
        new BigNumber("1e48"),
        new BigNumber("1e49"),
        new BigNumber("1e50"),
        new BigNumber("1e60"),
        new BigNumber("1e70"),
        new BigNumber("1e80"),
        new BigNumber("1e90"),
        new BigNumber("1e100"),
        new BigNumber("1e110"),
        new BigNumber("1e120"),
        new BigNumber("1e130"),
        new BigNumber("1e140"),
        new BigNumber("1e150"),
        new BigNumber("1e160"),
        new BigNumber("1e170"),
        new BigNumber("1e180"),
        new BigNumber("1e190"),
        new BigNumber("1e200"),
        new BigNumber("1e210"),
        new BigNumber("1e220"),
        new BigNumber("1e230"),
        new BigNumber("1e240"),
        new BigNumber("1e250"),
        new BigNumber("1e260"),
        new BigNumber("1e270"),
        new BigNumber("1e280"),
        new BigNumber("1e290"),
        new BigNumber("1e300"),
    ]

    constructor(amount: number) {
        this.amount = amount;
    }

    get price() {
        const price = this.prices[this.amount];
        if (price === undefined) {
            return null;
        }
        return price;
    }

    public canAfford(amount: BigNumber) {
        return this.price !== null && this.price.lessThanOrEqualTo(amount);
    }

    public buy(state: GameState) {
        if (this.price === null) return;
        if (state.money.amount.greaterThan(this.price)) {
            state.money.spend(this.price);
            this.amount++;
        }
    }

    public hasPurchasedAll() {
        return this.price == null;
    }

    public applyMultiplier(amount: BigNumber): BigNumber {
        return amount.mul(this.getMultiplier());
    }

    public getMultiplier(): number {
        return 1 + NumberFormatter.fix(this.amount * 0.1);
    }

    public getDisplayMultiplier(): number {
        return Math.round((this.getMultiplier() - 1) * 100);
    }

    public reset() {
        this.amount = 0;
    }
}