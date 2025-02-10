import { Exclude, Expose } from 'class-transformer';
import GameState from './GameState';
import BigNumber from 'bignumber.js';
import NumberFormatter from '../util/NumberFormatter';

@Exclude()
export default class Prestige {
  @Expose()
  amount: number;

  @Expose()
  earning: number;
  
  prestigeAmounts: BigNumber[] = [
    new BigNumber("3000000"),
    new BigNumber("300000000"),
    new BigNumber("10000000000"),
    new BigNumber("15e12"),
    new BigNumber("1e15"),
    new BigNumber("1e18"),
    new BigNumber("1e21"),
    new BigNumber("1e24"),
    new BigNumber("1e27"),
    new BigNumber("1e30"),
    new BigNumber("1e43"),
    new BigNumber("1e56"),
    new BigNumber("1e69"),
    new BigNumber("1e72"),
    new BigNumber("1e85"),
    new BigNumber("1e97"),
    new BigNumber("1e110"),
    new BigNumber("1e120"),
    new BigNumber("1e135"),
    new BigNumber("1e150"),
    new BigNumber("1e165"),
    new BigNumber("1e180"),
    new BigNumber("1e195"),
    new BigNumber("1e210"),
    new BigNumber("1e240"),
    new BigNumber("1e270"),
    new BigNumber("1e300"),
    new BigNumber("1e330"),
    new BigNumber("1e360"),
    new BigNumber("1e390"),
    new BigNumber("1e420"),
    new BigNumber("1e450"),
    new BigNumber("1e480"),
    new BigNumber("1e510"),
    new BigNumber("1e540"),
    new BigNumber("1e570"),
    new BigNumber("1e600"),
    new BigNumber("1e630"),
    new BigNumber("1e660"),
    new BigNumber("1e690"),
    new BigNumber("1e720"),
    new BigNumber("1e750"),
    new BigNumber("1e780"),
    new BigNumber("1e810"),
    new BigNumber("1e840"),
    new BigNumber("1e870"),
    new BigNumber("1e900"),
    new BigNumber("1e930"),
    new BigNumber("1e960"),
    new BigNumber("1e990")
  ];

  constructor(a: number, e: number) {
    this.amount = a;
    this.earning = e;
  }

  public checkPrestiege(amount: BigNumber) {
    let earning = 0;
    this.prestigeAmounts.forEach(a => {
      if (amount.greaterThan(a)) earning++;
    });
    this.earning = Math.max(this.earning, earning);
  }

  public applyMultiplier(inc: BigNumber): BigNumber {
    // prestiege is worth +50% income per prestiege point
    const multiplier = NumberFormatter.fix(this.amount * 0.5);
    const added = inc.mul(multiplier);

    return inc.add(added);
  }

  public getDisplayMultiplier() {
    return Math.round(this.amount * 50);
  }

  public toString(): string {
    return this.amount.toString();
  }

  public prestige(state: GameState) {
    state.money.resetAmount();
    state.extraClicks.reset();
    state.incomeBonus.reset();
    state.upgrades.reset();
    state.prestige.amount += this.earning;
    state.prestige.earning = 0;
  }

  public canPrestige(): boolean {
    return this.earning > 0;
  }
}
