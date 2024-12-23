import { Exclude, Expose } from "class-transformer";
import GameState from "./GameState";

@Exclude()
export default class IncomeBonus {
    @Expose()
    amount: number;
    
    prices: number[] = [
        10000.0,
        50000.0,
        100000.0,
        1000000.0,
        10000000.0,
        100000000.0,
        1000000000.0,
        10000000000.0,
        100000000000.0,
        1000000000000.0,
        10000000000000.0,
        100000000000000.0,
        1000000000000000.0,
        10000000000000000.0,
        100000000000000000.0,
        1000000000000000000.0,
        5000000000000000000.0,
        10000000000000000000.0,
        100000000000000000000.0,
        1000000000000000000000.0,
        10000000000000000000000.0,
        100000000000000000000000.0,
        1000000000000000000000000.0,
        10000000000000000000000000.0,
        100000000000000000000000000.0,
        1e28,
        1e29,
        1e30,
        1e31,
        1e32,
        1e33,
        1e34,
        1e35,
        1e36,
        1e37,
        1e38,
        1e39,
        1e40,
        1e41,
        1e42,
        1e43,
        1e44,
        1e45,
        1e46,
        1e47,
        1e48,
        1e49,
        1e50
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

    public canAfford(amount: number) {
        return this.price !== null && this.price <= amount;
    }

    public buy(state: GameState) {
        if (this.price === null) return;
        if (state.money.amount > this.price) {
            state.money.spend(this.price);
            this.amount++;
        }
    }

    public hasPurchasedAll() {
        return this.price == null;
    }

    public applyMultiplier(amount: number): number {
        return amount * this.getMultiplier();
    }

    public getMultiplier(): number {
        return 1 + this.amount * 0.1;
    }

    public getDisplayMultiplier(): number {
        return Math.round((this.getMultiplier() - 1) * 100);
    }

    public reset() {
        this.amount = 0;
    }
}