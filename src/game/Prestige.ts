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
    15_000_000_000_000.0,
    1_000_000_000_000_000.0,
    1_000_000_000_000_000_000.0,
    1_000_000_000_000_000_000_000.0,
    1_000_000_000_000_000_000_000_000.0,
    1_000_000_000_000_000_000_000_000_000.0,
    1_000_000_000_000_000_000_000_000_000_000.0,
    1_000_000_000_000_000_000_000_000_000_000_000.0
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
