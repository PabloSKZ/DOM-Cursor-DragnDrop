class Character {
    constructor(hp, dmg, mana, status = "playing") {
        this.hp = hp
        this.dmg = dmg
        this.mana = mana
        this.status = status
    }
    
    takeDamage(dmg) {
        this.hp -= dmg
        if (this.hp < 1) {
            console.log(`${this.name} prend ${dmg} de dommage ! ${this.name} a maintenant ${this.hp} points de vie.`)
        } else {
            this.status = "looser"
            console.log(`${this.name} a péri au combat !`)
        }
        
    }

    dealDamage(dmg, victim) {
        console.log(`${this.name} inflige ${dmg} de dommage à ${victim.name} !`) 
        victim.takeDamage(dmg)
        if (victim.hp < 1) {
            this.mana += 20
            console.log(`${this.name} gagne 20 points de mana`)
        }
    }

    displayInformation() {
        let printName = document.getElementById("name")
        let printRace = document.getElementById("race")
        let printHp = document.getElementsByClassName("hp")[0]
        let printMana = document.getElementsByClassName("mana")[0].childNodes[1]
        let printDmg = document.getElementsByTagName("b")[0]

        printName.innerHTML = this.name
        printRace.innerHTML = this.constructor.name
        printRace.parentNode.setAttribute("class", "mb-3")
        printHp.innerHTML = this.hp
        printMana.innerHTML = this.mana
        printDmg.innerHTML = this.dmg
        printDmg.setAttribute("style", "font-weight: normal;")
    }
}