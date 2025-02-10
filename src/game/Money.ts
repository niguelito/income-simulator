import { Exclude, Expose } from 'class-transformer';
import { StateCache } from './GameState';
import BigNumber from 'bignumber.js';

@Exclude()
export default class Money {
  @Expose()
  public amount: BigNumber = new BigNumber(0);

  @Expose()
  public earnedAllTime: BigNumber = new BigNumber(0);

  get income(): BigNumber {
    try {
      const s = StateCache.getState();

      // base income is $1
      let d = new BigNumber(1);
      d = s.upgrades.applyUpgrades(d);
      d = s.incomeBonus.applyMultiplier(d);
      d = s.prestige.applyMultiplier(d);

      return d;
    } catch (err) {
      console.error('Error while calculating income!');
      console.error(err);
      return new BigNumber(0);
    }
  }

  constructor(a: BigNumber, e: BigNumber) {
    this.amount = a;
    this.earnedAllTime = e;
  }

  public earn() {
    this.amount = this.amount.add((this.income));
    this.earnedAllTime = this.earnedAllTime.add(this.income);
    StateCache.getState().prestige.checkPrestiege(this.amount);
  }

  public add(amount: BigNumber) {
    this.amount = this.amount.add(amount);
    this.earnedAllTime = this.earnedAllTime.add(amount);
  }

  public spend(inc: BigNumber): boolean {
    if (inc.greaterThan(this.amount)) return false;

    this.amount = this.amount.sub(inc);

    return true;
  }

  public resetAmount() {
    this.amount = new BigNumber(0);
  }

  public isEnough(requiredAmount: BigNumber): boolean {
    return this.amount.greaterThanOrEqualTo(requiredAmount);
  }

  public toString(): string {
    return this.amount.toString();
  }
}
