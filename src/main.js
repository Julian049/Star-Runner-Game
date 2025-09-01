import kaboom from "kaboom";
import {Game} from "./model/Game.js";
import {KeyboardAdapter} from "./model/KeyboardAdapter.js";
import {Assets} from "./persistence/Assets.js";
import {GameScene} from "./view/GameScene.js";

const kaboomScene = kaboom({
    background: [0, 0, 0],
});

new Assets(kaboomScene)

const game = new Game(kaboomScene, new KeyboardAdapter())
const scene = new GameScene(kaboomScene, game)
scene.register()

kaboomScene.go("game");


