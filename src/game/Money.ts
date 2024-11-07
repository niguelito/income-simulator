import { Exclude, Expose } from 'class-transformer';
import { StateCache } from './GameState';

@Exclude()
export default class Money {
  @Expose()
  public amount: number = 0;

  @Expose()
  public earnedAllTime: number = 0;

  get income(): number {
    try {
      const s = StateCache.getState();

      // base income is $1
      let d = 1;
      d = s.upgrades.applyUpgrades(d);
      d = s.incomeBonus.applyMultiplier(d);
      d = s.prestige.applyMultiplier(d);

      return d;
    } catch (err) {
      console.error('Error while calculating income!');
      console.error(err);
      return 0;
    }
  }

  constructor(a: number, e: number) {
    this.amount = a;
    this.earnedAllTime = e;
  }

  public earn() {
    this.amount += this.income;
    this.earnedAllTime += this.income;
    StateCache.getState().prestige.checkPrestiege(this.amount);
  }

  public add(amount: number) {
    this.amount += amount;
    this.earnedAllTime += amount;
  }

  public spend(inc: number): boolean {
    const n = this.amount - inc;
    if (n < 0) return false;

    this.amount = n;

    return true;
  }

  public resetAmount() {
    this.amount = 0;
  }

  public isEnough(requiredAmount: number): boolean {
    return this.amount >= requiredAmount;
  }

  public toString(): string {
    return this.amount.toString();
  }
}
