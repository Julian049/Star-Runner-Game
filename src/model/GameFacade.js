import { Player } from "./Player.js";
import { Coin } from "./Coin.js";

export class GameFacade {
  //Metodo mientras se crea el de createPlayer
  constructor(player, scene) {
    this.player = player;
    this.scene = scene;
    this.inputAdapter = null;
  }

  setInputAdapter(adapter) {
    this.inputAdapter = adapter;
    this.inputAdapter.bind(this.scene, this.player);
  }

  spawnCoin() {
    let x = Math.random() * 1920;
    let y = Math.random() * 1080;
    new Coin(x, y, this.scene);
    this.scene.wait(3, () => this.spawnCoin());
  }

  coinCollide() {
    this.player.sprite.onCollide("mapCoin", (mapCoin) => {
      this.scene.destroy(mapCoin);
      debug.log("coin collide");
    });
  }

  createPlayer() {
    //
  }
}
