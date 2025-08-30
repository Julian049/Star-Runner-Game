class GameFacade {

    player = new Player()

    spawnCoin() {
        let x = Math.random() * 1920
        let y = Math.random() * 1080
        new Coin(x, y);
        wait(3,this.spawnCoin())
    }

    coinCollide(){
        player.onCollide("mapCoin", (mapCoin) => {
            destroy(mapCoin)
            debug.log("coin collide")
        })
    }
}