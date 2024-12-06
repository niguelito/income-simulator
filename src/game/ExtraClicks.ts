import { Exclude, Expose } from 'class-transformer';
import GameState from './GameState';

@Exclude()
export default class ExtraClicks {
  @Expose()
  public clicks: number = 0;

  @Expose()
  public multiplier: number = 0.0;

  prices: number[] = [
    1000.0,
    5000.0,
    7500.0,
    10000.0,
    20000.0,
    50000.0,
    100000.0,
    250000.0,
    500000.0,
    1000000.0,
    2500000.0,
    5000000.0,
    10000000.0,
    25000000.0,
    50000000.0,
    100000000.0,
    250000000.0,
    500000000.0,
    1000000000.0,
    2500000000.0,
    5000000000.0,
    10000000000.0,
    25000000000.0,
    50000000000.0,
    100000000000.0,
    250000000000.0,
    500000000000.0,
    1000000000000.0,
    2500000000000.0,
    5000000000000.0,
    10000000000000.0,
    25000000000000.0,
    50000000000000.0,
    100000000000000.0,
    250000000000000.0,
    500000000000000.0,
    1000000000000000.0,
    2500000000000000.0,
    5000000000000000.0,
    10000000000000000.0,
    25000000000000000.0,
    50000000000000000.0,
    100000000000000000.0,
    250000000000000000.0,
    500000000000000000.0,
    1000000000000000000.0,
    2500000000000000000.0,
    5000000000000000000.0,
    10000000000000000000.0,
    100000000000000000000.0,
    1e21,
    1e22,
    1e23,
    1e24,
    1e25,
    1e26,
    1e27,
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
  ];

  get price() {
    const price = this.prices[Math.floor(this.multiplier * 10)];
    if (price === undefined) {
        return null;
    }
    return price;
  }

  constructor(c: number, m: number) {
    this.clicks = c;
    this.multiplier = m;
  }

  public canAfford(amount: number) {
    return this.price !== null && this.price <= amount;
  }

  public buy(state: GameState) {
    if (this.price === null) return;
    if (state.money.amount > this.price) {
      state.money.spend(this.price);  
      this.multiplier += 0.1;
    }
  }

  public hasPurchasedAll() {
    return this.price == null;
  }

  public earn() {
    this.clicks += this.multiplier;
  }

  public use(state: GameState) {
    const using = Math.floor(this.clicks);
    this.clicks -= using;
    console.log(`Using ${using} extra clicks!`);
    state.money.add(using * state.money.income);
  }

  public canUse() {
    return this.clicks >= 1;
  }

  public toString(): string {
    return this.clicks.toString();
  }

  public reset() {
    this.clicks = 0;
    this.multiplier = 0;
  }
}
