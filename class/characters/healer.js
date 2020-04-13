class Healer extends Character  {
    constructor(hp, dmg, mana, name = "Moana") {
        super(hp = 8, dmg = 2, mana = 200)
        this.name = name
    }

    medecine() {
        if (this.mana >= 25) {
            console.log(`${this.name} utilise Medecine !`)
            this.mana -= 25
            this.hp += 8
            console.log(`${this.name} gagne 8 point de vie !`)
        } else {
            console.log("Vous n'avez pas assez de mana !")
        }
    }
}