
class Enemy {
  health: number;
  attack: number;
  physicalDefense: number;
  magicalDefense: number;

  constructor(
    health: number,
    attack: number,
    physicalDefense: number,
    magicalDefense: number,
  ) {
    this.health = health;
    this.attack = attack;
    this.physicalDefense = physicalDefense;
    this.magicalDefense = magicalDefense;
  }

  baseHealth(): number {
    return this.health;
  }

  goldReward(): number {
    return 0;
  }

  giveBuff(): string {
    return "Tidak ada buff";
  }

  attackTarget(): void {
    console.log(`Musuh menyerang dengan damage ${this.attack}.`);
  }

  showInfo(): void {
    console.log(
      `HP ${this.baseHealth()} | ATK ${this.attack} | Gold ${this.goldReward()} | ${this.giveBuff()}`,
    );
  }
}

// ===== CABANG MINIONS =====
class Minions extends Enemy {
  baseHealth(): number {
    return this.health + 30;
  }

  goldReward(): number {
    return 20;
  }

  attackTarget(): void {
    console.log(`Minion menyerang lane, damage ${this.attack}.`);
  }
}

class MinionFighter extends Minions {
  attackTarget(): void {
    console.log(`Minion Fighter memukul dari jarak dekat, damage ${this.attack}.`);
  }
}

class MinionArcher extends Minions {
  goldReward(): number {
    return 25;
  }

  attackTarget(): void {
    console.log(`Minion Archer memanah dari jauh, damage ${this.attack}.`);
  }
}

class MinionMage extends Minions {
  goldReward(): number {
    return 25;
  }

  attackTarget(): void {
    console.log(`Minion Mage melempar sihir, damage ${this.attack + 10}.`);
  }
}

class SuperMinion extends Minions {
  baseHealth(): number {
    return this.health + 500;
  }

  goldReward(): number {
    return 60;
  }

  attackTarget(): void {
    console.log(`Super Minion menghantam dengan keras, damage ${this.attack}.`);
  }
}

// ===== LANGSUNG DARI ENEMY =====
class Lord extends Enemy {
  baseHealth(): number {
    return this.health + 1000;
  }

  goldReward(): number {
    return 150;
  }

  giveBuff(): string {
    return "Lord membantu mendorong lane";
  }

  attackTarget(): void {
    console.log(`Lord menyerbu dan menghancurkan tower, damage ${this.attack * 2}.`);
  }
}

class Turtle extends Enemy {
  baseHealth(): number {
    return this.health + 500;
  }

  goldReward(): number {
    return 80;
  }

  giveBuff(): string {
    return "Buff Turtle: tambahan emas tim";
  }

  attackTarget(): void {
    console.log(`Turtle menyerang dengan cangkangnya, damage ${this.attack}.`);
  }
}

class RedDragon extends Enemy {
  baseHealth(): number {
    return this.health + 300;
  }

  goldReward(): number {
    return 100;
  }

  giveBuff(): string {
    return "Buff Red: tambahan damage";
  }

  attackTarget(): void {
    console.log(`Red Dragon menyemburkan api, damage ${this.attack}.`);
  }
}

class BlueWolf extends Enemy {
  baseHealth(): number {
    return this.health + 300;
  }

  goldReward(): number {
    return 70;
  }

  giveBuff(): string {
    return "Buff Blue: cooldown lebih cepat";
  }

  attackTarget(): void {
    console.log(`Blue Wolf menerkam, damage ${this.attack}.`);
  }
}

// ===== OBJECT & POLYMORPHISM =====
//                            health, attack, physDef, magDef
const minion  = new Minions(300, 20, 10, 5);
const fighter = new MinionFighter(500, 30, 20, 5);
const archer  = new MinionArcher(300, 40, 5, 5);
const mage    = new MinionMage(280, 45, 5, 15);
const superM  = new SuperMinion(1500, 80, 40, 40);
const lord    = new Lord(5000, 200, 60, 60);
const turtle  = new Turtle(3000, 120, 50, 50);
const red     = new RedDragon(2000, 150, 50, 50);
const blue    = new BlueWolf(2000, 100, 40, 60);

// satu variabel bertipe Enemy, diisi jenis yang berbeda-beda
let musuh: Enemy;

musuh = minion;   musuh.attackTarget(); musuh.showInfo();
musuh = fighter;  musuh.attackTarget(); musuh.showInfo();
musuh = archer;   musuh.attackTarget(); musuh.showInfo();
musuh = mage;     musuh.attackTarget(); musuh.showInfo();
musuh = superM;   musuh.attackTarget(); musuh.showInfo();
musuh = lord;     musuh.attackTarget(); musuh.showInfo();
musuh = turtle;   musuh.attackTarget(); musuh.showInfo();
musuh = red;      musuh.attackTarget(); musuh.showInfo();
musuh = blue;     musuh.attackTarget(); musuh.showInfo();