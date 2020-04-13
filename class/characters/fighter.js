class Fighter extends Character  {
    constructor(hp, dmg, mana, name = "Grace") {
        super(hp = 12, dmg = 4, mana = 40)
        this.name = name
    }

    darkVision(victim) {
        if (this.mana >= 20) {
            console.log(`${this.name} utilise Dark Vision !`)
            this.mana -= 20
            this.dealDamage(5, victim)
        } else {
            console.log("Vous n'avez pas assez de mana !")
        }
    }
}