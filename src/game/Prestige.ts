import { Exclude, Expose } from 'class-transformer';
import GameState from './GameState';

@Exclude()
export default class Prestige {
  @Expose()
  amount: number;

  @Expose()
  earning: number;
  
  prestigeAmounts: number[] = [
    3_000_000.0,
    300_000_000.0,
    10_000_000_000.0,
    15e12,
    1e15,
    1e18,
    1e21,
    1e24,
    1e27,
    1e30,
    1e43,
    1e56,
    1e69,
    1e72,
    1e85,
    1e97,
    1e110,
    1e120,
    1e135,
    1e150
  ];

  constructor(a: number, e: number) {
    this.amount = a;
    this.earning = e;
  }

  public checkPrestiege(amount: number) {
    let earning = 0;
    this.prestigeAmounts.forEach(a => {
      if (amount > a) earning++;
    });
    this.earning = Math.max(this.earning, earning);
  }

  public applyMultiplier(inc: number): number {
    // prestiege is worth +50% income per prestiege point
    const multiplier = this.amount * 0.5;
    const added = inc * multiplier;

    return inc + added;
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
