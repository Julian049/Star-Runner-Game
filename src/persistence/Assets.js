import {Game} from "../model/Game.js";
import {KeyboardAdapter} from "../model/KeyboardAdapter.js";

export class Assets {
    constructor(kaboom) {
        kaboom.loadSprite("coin", "/sprites/coin.png");
        kaboom.loadSprite("player", "/sprites/dog.png");
    }
}