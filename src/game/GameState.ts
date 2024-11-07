import crypto from 'crypto-js';
import ExtraClicks from './ExtraClicks';
import Money from './Money';
import Prestige from './Prestige';
import Upgrades from './Upgrade';
import { instanceToPlain } from 'class-transformer';
import IncomeBonus from './IncomeBonus';
import { I18n } from '../lang/Language';

export default interface GameState {
  money: Money;
  extraClicks: ExtraClicks;
  incomeBonus: IncomeBonus;
  prestige: Prestige;
  upgrades: Upgrades;

  lang: string;
}

export class StateCache {
  private static state: GameState | null = null;

  public static isStateResolved(): boolean {
    return this.state != null;
  }

  public static getState(): GameState {
    if (!this.state)
      throw new Error(
        'Attempting to access state cache when game state has not been set!'
      );
    return this.state as GameState;
  }

  public static updateState(state: GameState) {
    this.state = state;
    console.log('Game state cache has been updated!');
    I18n.getInstance().refresh();
  }
}

export class GameSaveHandler {
  private static SECRET_KEY = 'YmVzdCBnYW1lIGV2ZXIgbm8gY2Fw';

  public static createNewSave(): GameState {
    return {
      money: new Money(0, 0),
      extraClicks: new ExtraClicks(0, 0),
      incomeBonus: new IncomeBonus(0),
      prestige: new Prestige(0, 0),
      upgrades: new Upgrades(),

      lang: 'en_us',
    };
  }

  private static encrypt(d: string): string {
    const e = crypto.AES.encrypt(d, this.SECRET_KEY);
    return btoa(e.toString());
  }

  private static decrypt(d: string): string {
    const bytes = crypto.AES.decrypt(atob(d), this.SECRET_KEY);
    console.log('Decrypted data!');
    return bytes.toString(crypto.enc.Utf8);
  }

  public static export(state: GameState): string {
    const r = instanceToPlain(state)
    const json = JSON.stringify(r);
    return this.encrypt(json);
  }

  private static resolveOrZero(a: number | undefined): number {
    return a ? a : 0;
  }

  public static parseSave(s: string, willHandleError?: boolean): GameState {
    try {
      const r = this.decrypt(s);
      console.log(r);
      const a = JSON.parse(r);

      return {
        money: new Money(this.resolveOrZero(a.money.amount), this.resolveOrZero(a.money.earnedAllTime)),
        extraClicks: new ExtraClicks(
          this.resolveOrZero(a.extraClicks.clicks),
          this.resolveOrZero(a.extraClicks.multiplier)
        ),
        incomeBonus: new IncomeBonus(this.resolveOrZero(a.incomeBonus.amount)),
        prestige: new Prestige(this.resolveOrZero(a.prestige.amount), this.resolveOrZero(a.prestige.earning)),
        upgrades: new Upgrades().applyJson(a.upgrades),

        lang: a.lang ? a.lang : "en_us",
      };
    } catch (err) {
      console.error(err);
      if (willHandleError) throw new Error("Could not parse save!")
      return this.createNewSave();
    }
  }

  public static save(state: GameState) {
    const f = this.export(state);

    const expirationDate = new Date('9999-12-31T23:59:59');

    const encodedValue = encodeURIComponent(f);

    document.cookie = `save=${encodedValue}; expires=${expirationDate.toUTCString()}; path=/`;
  }

  public static load(): GameState {
    try {
      const cookieString = document.cookie;

      const cookies = cookieString.split(';');

      const saveCookie = cookies.find((cookie) =>
        cookie.trim().startsWith('save=')
      );

      if (saveCookie) {
        const encodedValue = saveCookie.split('=')[1];

        const r = decodeURIComponent(encodedValue);

        const p = this.parseSave(r);

        StateCache.updateState(p);

        return p;
      } else {
        const p = this.createNewSave();

        StateCache.updateState(p);

        return p;
      }
    } catch (err) {
      console.error(err);
      return this.createNewSave();
    }
  }
}