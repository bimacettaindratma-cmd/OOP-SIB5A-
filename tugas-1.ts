// ===== INDUK =====
class Enemy {
  health: number;
  attack: number;
  physicalDefense: number;
  magicalDefense: number;
  goldReward: number;

  constructor(
    health: number,
    attack: number,
    physicalDefense: number,
    magicalDefense: number,
    goldReward: number,
  ) {
    this.health = health;
    this.attack = attack;
    this.physicalDefense = physicalDefense;
    this.magicalDefense = magicalDefense;
    this.goldReward = goldReward;
  }

  showInfo(): void {
    console.log(
      `HP ${this.health} | ATK ${this.attack} | PDEF ${this.physicalDefense} | MDEF ${this.magicalDefense} | Gold ${this.goldReward}`,
    );
  }

  attackTarget(): void {
    console.log(`Menyerang dengan damage ${this.attack}.`);
  }
}

// ===== CABANG MINIONS =====
class Minions extends Enemy {
  attackRange: string;

  constructor(
    health: number,
    attack: number,
    physicalDefense: number,
    magicalDefense: number,
    goldReward: number,
    attackRange: string,
  ) {
    super(health, attack, physicalDefense, magicalDefense, goldReward);
    this.attackRange = attackRange;
  }
}

class MinionFighter extends Minions {
  constructor() {
    //    health, atk, pDef, mDef, gold, range
    super(500, 30, 20, 5, 20, "dekat");
  }
}

class MinionArcher extends Minions {
  constructor() {
    super(300, 40, 5, 5, 25, "jauh");
  }
}

class MinionMage extends Minions {
  constructor() {
    super(280, 45, 5, 15, 25, "jauh");
  }
}

class SuperMinion extends Minions {
  bonusExp: number;

  constructor() {
    super(1500, 80, 40, 40, 60, "dekat");
    this.bonusExp = 50;
  }
}

// ===== LANGSUNG DARI ENEMY =====
class Lord extends Enemy {
  towerDamage: number;

  constructor() {
    //    health, atk, pDef, mDef, gold
    super(5000, 200, 60, 60, 150);
    this.towerDamage = 500;
  }
}

class Turtle extends Enemy {
  respawnTime: number;

  constructor() {
    super(3000, 120, 50, 50, 80);
    this.respawnTime = 150;
  }
}

class RedDragon extends Enemy {
  buff: string;

  constructor() {
    super(2000, 150, 50, 50, 100);
    this.buff = "tambahan damage";
  }
}

class BlueWolf extends Enemy {
  buff: string;

  constructor() {
    super(2000, 100, 40, 60, 70);
    this.buff = "cooldown lebih cepat";
  }
}

// ===== OBJECT =====
const fighter = new MinionFighter();
const archer = new MinionArcher();
const mage = new MinionMage();
const superM = new SuperMinion();
const lord = new Lord();
const turtle = new Turtle();
const red = new RedDragon();
const blue = new BlueWolf();

console.log(`Fighter: range ${fighter.attackRange}`);
fighter.showInfo();

console.log(`Archer: range ${archer.attackRange}`);
archer.showInfo();

console.log(`Mage: range ${mage.attackRange}`);
mage.showInfo();

console.log(`Super Minion: bonus exp ${superM.bonusExp}`);
superM.showInfo();

console.log(`Lord: tower damage ${lord.towerDamage}`);
lord.showInfo();

console.log(`Turtle: respawn ${turtle.respawnTime} detik`);
turtle.showInfo();

console.log(`Red Dragon: buff ${red.buff}`);
red.showInfo();

console.log(`Blue Wolf: buff ${blue.buff}`);
blue.showInfo();