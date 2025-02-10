import { Exclude, Expose } from "class-transformer";
import Component from "../lang/Component";
import Language from "../lang/Language";
import GameState from "./GameState";
import AppEvents from "../AppEvents";
import BigNumber from "bignumber.js";

@Exclude()
export class IncomeUpgrade {
  public name: Component;
  public price: BigNumber;
  public unlocksAt: BigNumber;
  public modifier: BigNumber;

  @Expose()
  public hasUnlocked: boolean;

  @Expose()
  public hasPurchased: boolean;

  constructor(
    name: Component,
    price: BigNumber,
    unlocksAt: BigNumber,
    modifier: BigNumber
  ) {
    this.name = name;
    this.price = price;
    this.unlocksAt = unlocksAt;
    this.modifier = modifier;
    this.hasUnlocked = false;
    this.hasPurchased = false;
  }

  public canUnlock(money: BigNumber): boolean {
    const a = money.greaterThanOrEqualTo(this.unlocksAt);
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

  public canAfford(money: BigNumber): boolean {
    const a = money.greaterThanOrEqualTo(this.price);
    return a;
  }

  public applyModifier(inc: BigNumber): BigNumber {
    return inc.add(this.modifier);
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
  public WATER_BOTTLE = this.createUpgrade("upgrade.water_bottle", new BigNumber(10), new BigNumber(20), new BigNumber(1));
  public BACKPACK = this.createUpgrade("upgrade.backpack", new BigNumber(50), new BigNumber(100), new BigNumber(1));
  public CART = this.createUpgrade("upgrade.cart", new BigNumber(150), new BigNumber(200), new BigNumber(1));
  public BICYCLE = this.createUpgrade("upgrade.bicycle", new BigNumber(500), new BigNumber(1000), new BigNumber(2));
  public SMARTPHONE = this.createUpgrade("upgrade.smartphone", new BigNumber(900), new BigNumber(1500), new BigNumber(3));
  public LAPTOP = this.createUpgrade("upgrade.laptop", new BigNumber(1450), new BigNumber(3000), new BigNumber(5));
  public PLASMA_TV = this.createUpgrade("upgrade.plasma_tv", new BigNumber(2750), new BigNumber(5000), new BigNumber(8));
  public MOTORCYCLE = this.createUpgrade("upgrade.motorcycle", new BigNumber(17500), new BigNumber(25_000), new BigNumber(10));
  public CAR = this.createUpgrade("upgrade.car", new BigNumber(30_000), new BigNumber(50_000), new BigNumber(10));
  public PORCHE_CAYENNE = this.createUpgrade("upgrade.porche_cayenne", new BigNumber(75_500), new BigNumber(150_000), new BigNumber(20));
  public CONDO = this.createUpgrade("upgrade.condo", new BigNumber(375_000), new BigNumber(600_000), new BigNumber(50));
  public HOUSE = this.createUpgrade("upgrade.house", new BigNumber(1_200_000), new BigNumber(2_000_000), new BigNumber(250));
  public MANSION = this.createUpgrade("upgrade.mansion", new BigNumber(12_300_000), new BigNumber(25_000_000), new BigNumber(1_000));
  public ROLLS_ROYCE = this.createUpgrade("upgrade.rolls_royce", new BigNumber(26_200_000), new BigNumber(50_000_000), new BigNumber(2_000));
  public BOEING_PLANE = this.createUpgrade("upgrade.boeing", new BigNumber(125_400_000), new BigNumber(300_000_000), new BigNumber(4_000));
  public ROCKET = this.createUpgrade("upgrade.rocket", new BigNumber(726_200_000), new BigNumber(1_500_000_000), new BigNumber(3_000));
  public SPACE_SHUTTLE = this.createUpgrade("upgrade.space_shuttle", new BigNumber(1_700_000_000), new BigNumber(3_000_000_000), new BigNumber(5_000));
  public SATURN_V = this.createUpgrade("upgrade.saturn_v", new BigNumber(5_600_000_000), new BigNumber(10_000_000_000), new BigNumber(10_000));
  public CLOUDFLARE = this.createUpgrade("upgrade.cloudflare", new BigNumber(27_600_000_000), new BigNumber(75_000_000_000), new BigNumber(15_000));
  public WALMART = this.createUpgrade("upgrade.walmart", new BigNumber(437_160_000_000), new BigNumber(700_000_000_000), new BigNumber(25_000));
  public TESLA = this.createUpgrade("upgrade.tesla", new BigNumber(663_760_000_000), new BigNumber(1_200_000_000_000), new BigNumber(45_000));
  public MOON_LANDING = this.createUpgrade("upgrade.moon_landing", new BigNumber(934_300_000_000), new BigNumber(2_000_000_000_000), new BigNumber(100_000));
  public GOOGLE = this.createUpgrade("upgrade.google", new BigNumber(1_900_000_000_000), new BigNumber(4_000_000_000_000), new BigNumber(10_000_000));
  public MICROSOFT = this.createUpgrade("upgrade.microsoft", new BigNumber(2_800_000_000_000), new BigNumber(7_500_000_000_000), new BigNumber(1_000_000_000));
  public APPLE = this.createUpgrade("upgrade.apple", new BigNumber(3_400_000_000_000), new BigNumber(10_000_000_000_000), new BigNumber(10_000_000_000));
  public MARS = this.createUpgrade("upgrade.mars", new BigNumber(21_400_000_000_000), new BigNumber(50_000_000_000_000), new BigNumber(15_000_000_000_000));
  public SOLAR_SYSTEM = this.createUpgrade("upgrade.solar_system", new BigNumber("403123e12"), new BigNumber("750e14"), new BigNumber("1e11"));
  public UNIVERSE = this.createUpgrade("upgrade.universe", new BigNumber("403123e18"), new BigNumber("1500e21"), new BigNumber("100e19"));
  public MULTIVERSE = this.createUpgrade("upgrade.multiverse", new BigNumber("500123e30"), new BigNumber("500123e33"), new BigNumber("100e29"))
  public MULTIVERSAL_PORTAL = this.createUpgrade("upgrade.multiversal_portal", new BigNumber("100e38"), new BigNumber("100e39"), new BigNumber("100e33"));
  public IDLEVERSE = this.createUpgrade("upgrade.idleverse", new BigNumber("100e40"), new BigNumber("100e41"), new BigNumber("100e38"));
  public CORTEX_EARNING = this.createUpgrade('upgrade.cortex_earning', new BigNumber("100e45"), new BigNumber("100e47"), new BigNumber("100e43"));
  public REALITY_CONSOLE = this.createUpgrade('upgrade.reality_console', new BigNumber("100e50"), new BigNumber("100e53"), new BigNumber("100e48"));
  public CLONES = this.createUpgrade('upgrade.clones', new BigNumber("100e55"), new BigNumber("100e60"), new BigNumber("100e53"));
  public THE_PLAYER = this.createUpgrade('upgrade.the_player', new BigNumber("100e70"), new BigNumber("100e72"), new BigNumber("100e100"));
  public ERROR = this.createUpgrade('upgrade.error', new BigNumber("100e128"), new BigNumber("100e130"), new BigNumber("100e148"));
  public UNACHIEVABLE = this.createUpgrade('upgrade.unachievable', new BigNumber("100e229"), new BigNumber("100e230"), new BigNumber("100e275"));
  public THE_CREATOR = this.createUpgrade('upgrade.the_creator', new BigNumber("100e270"), new BigNumber("100e272"), new BigNumber("100e320"))
  public XENOVERSE = this.createUpgrade('upgrade.xenoverse', new BigNumber("100e328"), new BigNumber("100e330"), new BigNumber("100e380"))
  public TOUCH_GRASS = this.createUpgrade('upgrade.touch_grass', new BigNumber("100e380"), new BigNumber("100e390"), new BigNumber("100e420"));
  public QUANTUM_SUPERPOSITION = this.createUpgrade('upgrade.quantum_superposition', new BigNumber("100e440"), new BigNumber("100e450"), new BigNumber("100e480"));
  public THE_CODE = this.createUpgrade('upgrade.the_code', new BigNumber("100e500"), new BigNumber("100e501"), new BigNumber("100e530"));
  public THE_PROGRAMMER = this.createUpgrade('upgrade.the_programmer', new BigNumber("100e530"), new BigNumber("100e531"), new BigNumber("100e585"));
  public PROGRAMMING_LANGUAGE = this.createUpgrade('upgrade.programming_language', new BigNumber("100e558"), new BigNumber("100e560"), new BigNumber("100e634"));
  public THE_OS = this.createUpgrade('upgrade.the_os', new BigNumber("100e600"), new BigNumber("100e602"), new BigNumber("100e680"));
  public THE_COMPILER = this.createUpgrade('upgrade.the_compiler', new BigNumber("100e657"), new BigNumber("100e660"), new BigNumber("100e730"));
  public ALL_THE_COMPILERS = this.createUpgrade('upgrade.all_the_compilers', new BigNumber("100e700"), new BigNumber("100e702"), new BigNumber("100e780"));
  public QUANTUM_SUPERCOMPUTER = this.createUpgrade('upgrade.quantum_supercomputer', new BigNumber("100e800"), new BigNumber("100e803"), new BigNumber("100e900"));
  public REALITY = this.createUpgrade("upgrade.reality", new BigNumber("100e1001"), new BigNumber("100e1003"), new BigNumber("100e1300"));
  public ACTUALLY_UNACHIEVABLE = this.createUpgrade("upgrade.actually_unachievable", new BigNumber("100e3500"), new BigNumber("100.3e3500"), new BigNumber("100e4000"))

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
      this.MULTIVERSE.applyJson(json.MULTIVERSE);
      this.MULTIVERSAL_PORTAL.applyJson(json.MULTIVERSAL_PORTAL);
      this.IDLEVERSE.applyJson(json.IDLEVERSE);
      this.CORTEX_EARNING.applyJson(json.CORTEX_EARNING);
      this.REALITY_CONSOLE.applyJson(json.REALITY_CONSOLE);
      this.CLONES.applyJson(json.CLONES);
      this.THE_PLAYER.applyJson(json.THE_PLAYER);
      this.ERROR.applyJson(json.ERROR);
      this.UNACHIEVABLE.applyJson(json.UNACHIEVABLE);
      this.THE_CREATOR.applyJson(json.THE_CREATOR);
      this.XENOVERSE.applyJson(json.XENOVERSE);
      this.TOUCH_GRASS.applyJson(json.TOUCH_GRASS);
      this.QUANTUM_SUPERPOSITION.applyJson(json.QUANTUM_SUPERPOSITION);
      this.THE_CODE.applyJson(json.THE_CODE);
      this.THE_PROGRAMMER.applyJson(json.THE_PROGRAMMER);
      this.PROGRAMMING_LANGUAGE.applyJson(json.PROGRAMMING_LANGUAGE);
      this.THE_OS.applyJson(json.THE_OS);
      this.THE_COMPILER.applyJson(json.THE_COMPILER);
      this.ALL_THE_COMPILERS.applyJson(json.ALL_THE_COMPILERS);
      this.QUANTUM_SUPERCOMPUTER.applyJson(json.QUANTUM_SUPERCOMPUTER);
      this.REALITY.applyJson(json.REALITY);
      this.ACTUALLY_UNACHIEVABLE.applyJson(json.ACTUALLY_UNACHIEVABLE)
    }

    return this;
  }

  private createUpgrade(name: string, price: BigNumber, unlocksAt: BigNumber, modifier: BigNumber) {
    return new IncomeUpgrade(Language.translatable(name), price, unlocksAt, modifier);
  }

  applyUpgrades(inc: BigNumber) {
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

  checkUnlocks(money: BigNumber): boolean {
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

  getGlobalModifier(): BigNumber {
    let n = new BigNumber(0);

    for (const upgrade of this.getList()) {
      if (upgrade.hasPurchased) n = n.add(upgrade.modifier);
    }

    return n;
  }

  public reset() {
    for (const upgrade of this.getList()) {
      upgrade.reset();
    }
  }
}