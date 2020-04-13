class Berzerker extends Character  {
    constructor(hp, dmg, mana, name = "Draven") {
        super(hp = 8, dmg = 4, mana = 0)
        this.name = name
    }

    rage() {
        console.log(`${this.name} utilise Rage !`)
            this.hp -= 1
            this.takeDamage(1)
            console.log(`${this.name} gagne 1 point d'attaque !`)
    }
}