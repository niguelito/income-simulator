import { Exclude, Expose } from 'class-transformer';
import GameState from './GameState';
import BigNumber from 'bignumber.js';
import NumberFormatter from '../util/NumberFormatter';

@Exclude()
export default class ExtraClicks {
    @Expose()
    public clicks: BigNumber = new BigNumber(0);

    @Expose()
    public multiplier: number = 0.0;

    prices: BigNumber[] = [
        new BigNumber("1000"),
        new BigNumber("5000"),
        new BigNumber("7500"),
        new BigNumber("10000"),
        new BigNumber("20000"),
        new BigNumber("50000"),
        new BigNumber("100000"),
        new BigNumber("250000"),
        new BigNumber("500000"),
        new BigNumber("1000000"),
        new BigNumber("2500000"),
        new BigNumber("5000000"),
        new BigNumber("10000000"),
        new BigNumber("25000000"),
        new BigNumber("50000000"),
        new BigNumber("100000000"),
        new BigNumber("250000000"),
        new BigNumber("500000000"),
        new BigNumber("1000000000"),
        new BigNumber("2500000000"),
        new BigNumber("5000000000"),
        new BigNumber("10000000000"),
        new BigNumber("25000000000"),
        new BigNumber("50000000000"),
        new BigNumber("100000000000"),
        new BigNumber("250000000000"),
        new BigNumber("500000000000"),
        new BigNumber("1000000000000"),
        new BigNumber("2500000000000"),
        new BigNumber("5000000000000"),
        new BigNumber("10000000000000"),
        new BigNumber("25000000000000"),
        new BigNumber("50000000000000"),
        new BigNumber("100000000000000"),
        new BigNumber("250000000000000"),
        new BigNumber("500000000000000"),
        new BigNumber("1000000000000000"),
        new BigNumber("2500000000000000"),
        new BigNumber("5000000000000000"),
        new BigNumber("10000000000000000"),
        new BigNumber("25000000000000000"),
        new BigNumber("50000000000000000"),
        new BigNumber("100000000000000000"),
        new BigNumber("250000000000000000"),
        new BigNumber("500000000000000000"),
        new BigNumber("1000000000000000000"),
        new BigNumber("2500000000000000000"),
        new BigNumber("5000000000000000000"),
        new BigNumber("10000000000000000000"),
        new BigNumber("100000000000000000000"),
        new BigNumber("1e21"),
        new BigNumber("1e22"),
        new BigNumber("1e23"),
        new BigNumber("1e24"),
        new BigNumber("1e25"),
        new BigNumber("1e26"),
        new BigNumber("1e27"),
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
        new BigNumber("1e55"),
        new BigNumber("1e60"),
        new BigNumber("1e65"),
        new BigNumber("1e70"),
        new BigNumber("1e75"),
        new BigNumber("1e80"),
        new BigNumber("1e85"),
        new BigNumber("1e90"),
        new BigNumber("1e95"),
        new BigNumber("1e100"),
        new BigNumber("1e110"),
        new BigNumber("1e120"),
        new BigNumber("1e150"),
        new BigNumber("1e175"),
        new BigNumber("1e200"),
        new BigNumber("1e225"),
        new BigNumber("1e250"),
        new BigNumber("1e275"),
        new BigNumber("1e300"),
        new BigNumber("1e350"),
        new BigNumber("1e400"),
    ];

    get price() {
        const price = this.prices[Math.floor(this.multiplier * 10)];
        if (price === undefined) {
            return null;
        }
        return price;
    }

    constructor(c: BigNumber, m: number) {
        this.clicks = c;
        this.multiplier = m;
    }

    public canAfford(amount: BigNumber) {
        return this.price !== null && this.price.lessThanOrEqualTo(amount);
    }

    public buy(state: GameState) {
        if (this.price === null) return;
        if (state.money.amount.greaterThanOrEqualTo(this.price)) {
            state.money.spend(this.price);
            this.multiplier += 0.1;
        }
    }

    public hasPurchasedAll() {
        return this.price == null;
    }

    public earn() {
        this.clicks = this.clicks.add(NumberFormatter.fix(this.multiplier));
    }

    public use(state: GameState) {
        const using = this.clicks.floor();
        this.clicks = this.clicks.sub(using);
        console.log(`Using ${using} extra clicks!`);
        state.money.add(state.money.income.mul(using));
    }

    public canUse() {
        return this.clicks.greaterThanOrEqualTo(1);
    }

    public toString(): string {
        return this.clicks.toString();
    }

    public reset() {
        this.clicks = new BigNumber(0);
        this.multiplier = 0;
    }
}
