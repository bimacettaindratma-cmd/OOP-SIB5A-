class Mario {
  constructor(
    public HP: number = 1,
    public speed: number = 5,
    public currentForm: 'mario' | 'super mario' | 'fire mario' = 'mario',
    public invincible: boolean = false,
    public positionX: number = 0,
    public positionY: number = 0
  ) {}

  superMushroom(): void {
    this.currentForm = 'super mario';
    this.HP++;
    console.log(`Mario mengambil SuperMushroom dan berubah menjadi ${this.currentForm} (HP: ${this.HP})`);
  }

  fireFlower(): void {
    this.currentForm = 'fire mario';
    this.HP++;
    console.log(`Mario mengambil FireFlower dan berubah menjadi ${this.currentForm} (HP: ${this.HP})`);
  }

  tembakBolaApi(): void {
    if (this.currentForm === 'fire mario') {
      console.log(`${this.currentForm} menembakkan bola api!`);
    } else {
      console.log(`${this.currentForm} tidak dapat menembakkan bola api.`);
    }
  }

  superStar(): void {
    this.invincible = true;
    console.log(`Mario mengambil SuperStar dan sekarang kebal terhadap serangan!`);
  }

  diserang(): void {
    if (this.invincible === true) {
      console.log(`Mario diserang, tetapi sedang kebal sehingga serangan tidak berpengaruh.`);
    } else {
      this.HP--;
      this.currentForm = 'mario';
      console.log(`Mario diserang! Kembali ke form ${this.currentForm} (HP: ${this.HP})`);
    }
  }

  bergerakKanan(): void {
    this.positionX = this.positionX + this.speed;
    console.log(`Mario bergerak ke kanan (positionX: ${this.positionX})`);
  }

  bergerakKiri(): void {
    this.positionX = this.positionX - this.speed;
    console.log(`Mario bergerak ke kiri (positionX: ${this.positionX})`);
  }
}

class SuperMario extends Mario {
  constructor() { super(2, 5, 'super mario'); }
  tembakBolaApi(): void { console.log(`Super Mario belum bisa menembakkan bola api.`); }
}

class FireMario extends Mario {
  constructor() { super(2, 5, 'fire mario'); }
  tembakBolaApi(): void { console.log(`Fire Mario menembakkan bola api!`); }
}

const player = new Mario();
player.superMushroom();
player.fireFlower();
player.tembakBolaApi();
player.bergerakKanan();
player.bergerakKiri();
player.diserang();
player.superStar();
player.diserang();

let karakter: Mario;
karakter = new SuperMario();
karakter.tembakBolaApi();
karakter = new FireMario();
karakter.tembakBolaApi();
