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
