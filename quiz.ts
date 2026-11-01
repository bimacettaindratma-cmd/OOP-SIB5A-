// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini

class Mario {
  hp: number = 1;
  speed: number = 5;
  positionX: number = 0;
  positionY: number = 0;
  invincible: boolean = false;
  currentForm: string = "mario";

  moveRight(): void {
    this.positionX += this.speed;
    console.log(`${this.currentForm} bergerak ke kanan, posisi X sekarang ${this.positionX}.`);
  }

  moveLeft(): void {
    this.positionX -= this.speed;
    console.log(`${this.currentForm} bergerak ke kiri, posisi X sekarang ${this.positionX}.`);
  }

  getAttacked(): void {
    if (this.invincible) {
      console.log("Mario diserang musuh, tetapi sedang kebal sehingga serangan tidak berpengaruh.");
      return;
    }
    const FormSebelumnya = this.currentForm
    this.hp -= 1;
    this.currentForm = "mario";

    if (this.hp <= 0) {
      console.log(`${FormSebelumnya} diserang musuh, HP habis. GAME OVER!`);
    } else {
      console.log(`${FormSebelumnya} diserang musuh, HP menjadi ${this.hp} dan wujud sekarang ${this.currentForm}.`);
    }
  }

  TembakBolaApi(): void {
    if (this.currentForm === "fire mario") {
      console.log(`fire mario menembakkan bola api.`);
    } else {
      console.log(`${this.currentForm} belum bisa menembak, butuh Bunga Api.`);
    }
  }
}

// induk dari semua item
class Item {
  use(mario: Mario): void {}
}

class SuperMushroom extends Item {
  use(mario: Mario): void {
    mario.currentForm = "super mario";
    mario.hp += 1;
    console.log(`Mario memakan Jamur Ajaib, wujud sekarang ${mario.currentForm} dan HP menjadi ${mario.hp}.`);
  }
}

class FireFlower extends Item {
  use(mario: Mario): void {
    mario.currentForm = "fire mario";
    mario.hp += 1;
    console.log(`Mario mengambil Bunga Api, wujud sekarang ${mario.currentForm} dan HP menjadi ${mario.hp}.`);
  }
}

class SuperStar extends Item {
  use(mario: Mario): void {
    mario.invincible = true;
    console.log("Mario menyentuh Bintang, tubuhnya bersinar dan kebal terhadap serangan.");
  }
}

// object
const mario = new Mario();
const mushroom = new SuperMushroom();
const flower = new FireFlower();
const star = new SuperStar();

const mario2 = new Mario();

console.log("---------------")
mario.TembakBolaApi();
mario.moveRight();
mushroom.use(mario);
mario.getAttacked();
mario.TembakBolaApi();

console.log("------------------")
const mario3 = new Mario();
mushroom.use(mario3);
mario3.moveRight();
mushroom.use(mario3)
mario3.TembakBolaApi();
flower.use(mario3);
mario3.TembakBolaApi();
mario3.getAttacked();
mario3.getAttacked();
console.log("------------")




