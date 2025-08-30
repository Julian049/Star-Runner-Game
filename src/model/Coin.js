class Coin {

    randomCoins() {
        let x = Math.random() * 1920
        let y = Math.random() * 1080
        add([
            sprite("coin"),
            pos(x, y),
            rotate(0),
            anchor("center")
        ])

        wait(3,this.randomCoins())
    }
}