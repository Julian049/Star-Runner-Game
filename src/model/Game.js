import { GameFacade } from "./GameFacade.js";
import { Player } from "./Player.js";

export class Game {
  constructor(scene, inputAdapter) {
    this.scene = scene;
    this.player = new Player(this.scene);
    this.gameFacade = new GameFacade(this.player, this.scene);
    this.inputAdapter = inputAdapter;
  }

  start() {
    this.gameFacade.setInputAdapter(this.inputAdapter);
    this.gameFacade.spawnCoin();
    this.gameFacade.coinCollide();
    this.gameFacade.createPlayer();
  }
}
