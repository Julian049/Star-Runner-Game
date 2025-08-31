import {Player} from "./Player.js";
import {Coin} from "./Coin.js";
import {ScoreManager} from "./ScoreManager.js";

export class GameFacade {
    //Metodo mientras se crea el de createPlayer
    constructor(player, scene) {
        this.player = player;
        this.scene = scene;
        this.inputAdapter = null;
        this.scoreManager = new ScoreManager(this.scene);
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
        //
    }
}
