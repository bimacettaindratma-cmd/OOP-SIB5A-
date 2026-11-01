class NPC {
    name: string;
    health: number;
    speed: number;
    defense: number;
    attack: number;
    NpcType: string[] = ["walk","fly"]

    constructor(name: string, health: number,speed: number,defense: number,attack: number,NpcType: string[]) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.defense = defense;
        this.attack = attack;
        this.NpcType = NpcType
    }

    walking(): void {
        this.speed =+ 2 ;
        console.log (`${this.name} speed bertambah ${this.speed}`)
    }
    attacking(): void {
        this.attack =+ 2 ;
        console.log (`${this.name} attack bertambah ${this.attack}`)
    }
    sprint(): void {
        this.speed =+ 4 ;
        console.log (`${this.name} speed bertambah ${this.speed}`)
    }
    ultimateskill(): void {
        this.speed =+ 10 ;
        console.log (`${this.name} speed bertambah ${this.attack}`)
    }
}

const npc1: NPC  = new NPC ("naga", 100, 20, 10, 20, ["walk"])

npc1.walking()
npc1.attacking()
npc1.sprint()
npc1.ultimateskill()