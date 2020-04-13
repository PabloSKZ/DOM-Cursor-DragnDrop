class Game {
    constructor(turnLeft = 10) {
        this.turnLeft = turnLeft
    }

    

    skipTurn() {
        this.turnLeft -= 1
        if (this.turnLeft > 0) {
            console.log(`Tour ${this.turnLeft}`)
        } else {
            console.log("La partie est terminée !")
        }
        
    }
}