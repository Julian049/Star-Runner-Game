import {Player} from "./Player.js";
import {Coin} from "./Coin.js";
import {ScoreManager} from "./ScoreManager.js";

export class GameFacade {
    //Metodo mientras se crea el de createPlayer
    constructor(scene, inputAdapter) {
        this.player = null;
        this.scene = scene;
        this.inputAdapter = inputAdapter;
        this.scoreManager = new ScoreManager(this.scene);
    }

    start() {
        this.player = new Player(this.scene);

        this.spawnCoin();
        this.coinCollide();

        this.createPlayer();
        this.setInputAdapter(this.inputAdapter);
    }


    setInputAdapter(adapter) {
        this.inputAdapter = adapter;
        this.inputAdapter.bind(this.scene, this.player);
    }

    spawnCoin() {
        let x = Math.random() * 500;
        let y = Math.random() * 100;
        new Coin(x, y, this.scene);
        this.scene.wait(1, () => this.spawnCoin());
    }

    coinCollide() {
        this.player.sprite.onCollide("mapCoin", (mapCoin) => {
            this.scene.destroy(mapCoin);
            debug.log("coin collide");
            this.scoreManager.addScore()
            debug.log("coin score " + this.scoreManager.count);
        });
    }

    createPlayer() {
        this.player.moveLeft()
        this.player.moveRight()
        this.player.jump()
    }
}
