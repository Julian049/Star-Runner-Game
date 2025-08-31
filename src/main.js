import kaboom from "kaboom";
import { Game } from "./model/Game.js";
import { KeyboardAdapter } from "./model/KeyboardAdapter.js";

const kaboomScene = kaboom({
  background: [0, 0, 0],
});

kaboomScene.loadSprite("coin", "/sprites/coin.png");
kaboomScene.loadSprite("player", "/sprites/dog.png");

kaboomScene.scene("principalView", () => {
  const game = new Game(kaboomScene, new KeyboardAdapter());
  game.start();
});

kaboomScene.go("principalView");
