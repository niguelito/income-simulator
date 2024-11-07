import { Exclude, Expose } from "class-transformer";
import Component from "../lang/Component";
import Language from "../lang/Language";
import GameState from "./GameState";
import AppEvents from "../AppEvents";

@Exclude()
export class IncomeUpgrade {
  public name: Component;
  public price: number;
  public unlocksAt: number;
  public modifier: number;

  @Expose()
  public hasUnlocked: boolean;

  @Expose()
  public hasPurchased: boolean;

  constructor(
    name: Component,
    price: number,
    unlocksAt: number,
    modifier: number
  ) {
    this.name = name;
    this.price = price;
    this.unlocksAt = unlocksAt;
    this.modifier = modifier;
    this.hasUnlocked = false;
    this.hasPurchased = false;
  }

  public canUnlock(money: number): boolean {
    const a = money >= this.unlocksAt;
    return a;
  }

  public unlock() {
    AppEvents.emit("rerender-everything");
    this.hasUnlocked = true;
  }

  public purchase(state: GameState): boolean {
    if (!this.canAfford(state.money.amount) && this.canUnlock(state.money.amount)) return false;

    this.hasPurchased = true;
    state.money.spend(this.price);

    return true;
  }

  public canAfford(money: number): boolean {
    const a = money >= this.price;
    return a;
  }

  public applyModifier(inc: number): number {
    return inc + this.modifier;
  }

  public applyJson(json: any) {
    if (json) {
      this.hasUnlocked = json.hasUnlocked;
      this.hasPurchased = json.hasPurchased;
    } else {
      this.reset();
    }
  }

  public reset() {
    this.hasUnlocked = false;
    this.hasPurchased = false;
  
  }
}

export default class Upgrades {
  public WATER_BOTTLE = this.createUpgrade("upgrade.water_bottle", 10, 20, 1);
  public BACKPACK = this.createUpgrade("upgrade.backpack", 50, 100, 1);
  public CART = this.createUpgrade("upgrade.cart", 150, 200, 1);
  public BICYCLE = this.createUpgrade("upgrade.bicycle", 500, 1000, 2);
  public SMARTPHONE = this.createUpgrade("upgrade.smartphone", 900, 1500, 3);
  public LAPTOP = this.createUpgrade("upgrade.laptop", 1450, 3000, 5);
  public PLASMA_TV = this.createUpgrade("upgrade.plasma_tv", 2750, 5000, 8);
  public MOTORCYCLE = this.createUpgrade("upgrade.motorcycle", 17_500, 25_000, 10);
  public CAR = this.createUpgrade("upgrade.car", 30_000, 50_000, 10);
  public PORCHE_CAYENNE = this.createUpgrade("upgrade.porche_cayenne", 75_500, 150_000, 20);
  public CONDO = this.createUpgrade("upgrade.condo", 375_000, 600_000, 50);
  public HOUSE = this.createUpgrade("upgrade.house", 1_200_000, 2_000_000, 250);
  public MANSION = this.createUpgrade("upgrade.mansion", 12_300_000, 25_000_000, 1_000);
  public ROLLS_ROYCE = this.createUpgrade("upgrade.rolls_royce", 26_200_000, 50_000_000, 2_000);
  public BOEING_PLANE = this.createUpgrade("upgrade.boeing", 125_400_000, 300_000_000, 4_000);
  public ROCKET = this.createUpgrade("upgrade.rocket", 726_200_000, 1_500_000_000, 3_000);
  public SPACE_SHUTTLE = this.createUpgrade("upgrade.space_shuttle", 1_700_000_000, 3_000_000_000, 5_000);
  public SATURN_V = this.createUpgrade("upgrade.saturn_v", 5_600_000_000, 10_000_000_000, 10_000);
  public CLOUDFLARE = this.createUpgrade("upgrade.cloudflare", 27_600_000_000, 75_000_000_000, 15_000);
  public WALMART = this.createUpgrade("upgrade.walmart", 437_160_000_000, 700_000_000_000, 25_000);
  public TESLA = this.createUpgrade("upgrade.tesla", 663_760_000_000, 1_200_000_000_000, 45_000);
  public MOON_LANDING = this.createUpgrade("upgrade.moon_landing", 934_300_000_000, 2_000_000_000_000, 100_000);
  public GOOGLE = this.createUpgrade("upgrade.google", 1_900_000_000_000, 4_000_000_000_000, 5_000_000);
  public MICROSOFT = this.createUpgrade("upgrade.microsoft", 2_800_000_000_000, 7_500_000_000_000, 7_500_000);
  public APPLE = this.createUpgrade("upgrade.apple", 3_400_000_000_000, 10_000_000_000_000, 10_000_000);
  public MARS = this.createUpgrade("upgrade.mars", 21_400_000_000_000, 50_000_000_000_000, 15_000_000);
  public SOLAR_SYSTEM = this.createUpgrade("upgrade.solar_system", 403_123_000_000_000_000.0, 750_000_000_000_000_000.0, 1_000_000_000);
  public UNIVERSE = this.createUpgrade("upgrade.universe", 403_123_000_000_000_000_000_000.0, 1_500_000_000_000_000_000_000_000.0, 100_000_000_000_000);

  public applyJson(json: any): Upgrades {
    if (json) {
      this.WATER_BOTTLE.applyJson(json.WATER_BOTTLE);
      this.BACKPACK.applyJson(json.BACKPACK);
      this.CART.applyJson(json.CART);
      this.BICYCLE.applyJson(json.BICYCLE);
      this.SMARTPHONE.applyJson(json.SMARTPHONE);
      this.LAPTOP.applyJson(json.LAPTOP);
      this.PLASMA_TV.applyJson(json.PLASMA_TV);
      this.MOTORCYCLE.applyJson(json.MOTORCYCLE);
      this.CAR.applyJson(json.CAR);
      this.PORCHE_CAYENNE.applyJson(json.PORCHE_CAYENNE);
      this.CONDO.applyJson(json.CONDO);
      this.HOUSE.applyJson(json.HOUSE);
      this.MANSION.applyJson(json.MANSION);
      this.ROLLS_ROYCE.applyJson(json.ROLLS_ROYCE);
      this.BOEING_PLANE.applyJson(json.BOEING_PLANE);
      this.ROCKET.applyJson(json.ROCKET);
      this.SPACE_SHUTTLE.applyJson(json.SPACE_SHUTTLE);
      this.SATURN_V.applyJson(json.SATURN_V);
      this.CLOUDFLARE.applyJson(json.CLOUDFLARE);
      this.WALMART.applyJson(json.WALMART);
      this.TESLA.applyJson(json.TESLA);
      this.MOON_LANDING.applyJson(json.MOON_LANDING);
      this.GOOGLE.applyJson(json.GOOGLE);
      this.MICROSOFT.applyJson(json.MICROSOFT);
      this.APPLE.applyJson(json.APPLE);
      this.MARS.applyJson(json.MARS);
      this.SOLAR_SYSTEM.applyJson(json.SOLAR_SYSTEM);
      this.UNIVERSE.applyJson(json.UNIVERSE);  
    }

    return this;
  }

  private createUpgrade(name: string, price: number, unlocksAt: number, modifier: number) {
    return new IncomeUpgrade(Language.translatable(name), price, unlocksAt, modifier);
  }

  applyUpgrades(inc: number) {
    let n = inc;

    for (const key in this) {
      if (Object.prototype.hasOwnProperty.call(this, key)) {
        const upgrade = this[key] as IncomeUpgrade;

        if (upgrade.hasPurchased) n = upgrade.applyModifier(n);
      }
    }

    return n;
  }

  getList(): IncomeUpgrade[] {
    const list: IncomeUpgrade[] = [];

    for (const key in this) {
      if (Object.prototype.hasOwnProperty.call(this, key)) {
        const upgrade = this[key] as IncomeUpgrade;

        list.push(upgrade);
      }
    }

    return list;
  }

  checkUnlocks(money: number): boolean {
    let unlocked = false;
    
    for (const upgrade of this.getList()) {
      if (upgrade.canUnlock(money) && !upgrade.hasUnlocked) {
        upgrade.unlock();
        unlocked = true;
        console.log(unlocked);
      }
    }

    return unlocked;
  }

  getAllUnlocked(): number {
    let n = 0;

    for (const upgrade of this.getList()) {
      if (upgrade.hasUnlocked) n++;
    }

    return n;
  }

  getGlobalModifier(): number {
    let n = 0;

    for (const upgrade of this.getList()) {
      if (upgrade.hasPurchased) n += upgrade.modifier;
    }

    return n;
  }

  public reset() {
    for (const upgrade of this.getList()) {
      upgrade.reset();
    }
  }
}