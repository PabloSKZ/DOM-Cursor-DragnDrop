class Paladin extends Character  {
    constructor(hp, dmg, mana, name = "Ulder") {
        super(hp = 16, dmg = 3, mana = 160)
        this.name = name
    }

    lighting(victim) {
        if (this.mana >= 40) {
            console.log(`${this.name} utilise Lighting !`)
            this.mana -= 40
            this.hp += 5
            this.dealDamage(4, victim)
        } else {
            console.log("Vous n'avez pas assez de mana !")
        }
    }
}