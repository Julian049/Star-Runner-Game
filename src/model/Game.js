class Game {

    gameFacade = new GameFacade();

    start() {
        this.gameFacade.spawnCoin()
        this.gameFacade.coinCollide()
    }
}