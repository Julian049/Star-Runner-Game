import { GameFacade } from "./GameFacade.js";
import { Player } from "./Player.js";

export class Game {
  constructor(scene, inputAdapter) {
    this.scene = scene;
    this.player = null
    this.gameFacade = null
    this.inputAdapter = inputAdapter;
  }

  start() {
      this.player = new Player(this.scene);
      this.gameFacade = new GameFacade(this.player, this.scene);

      this.gameFacade.spawnCoin();
      this.gameFacade.coinCollide();

      this.gameFacade.createPlayer();
      this.gameFacade.setInputAdapter(this.inputAdapter);
  }
}
