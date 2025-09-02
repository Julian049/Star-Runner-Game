import kaboom from "kaboom"
import { loadAssets } from "./persistence/assets.js"
import { registerGameScene } from "./view/GameScene.js"
import { registerLoseScene } from "./view/LoseScene.js"
import { characterSelect } from "./view/CharacterSelect.js";
import { GameFacade } from "./model/GameFacade.js";
import { ScoreManager } from "./model/ScoreManager.js";
import { LocalStoragePersistence } from "./persistence/LocalStoragePersistence.js";

const k = kaboom({
    background: [0, 0, 0],
})

const scoreManager = new ScoreManager();
const persistence = new LocalStoragePersistence();
const facade = new GameFacade(k, scoreManager, persistence);

function startGame() {
    loadAssets(k)  
    registerGameScene(facade, k)
    registerLoseScene(facade, k)
    characterSelect(facade, k)
    k.go("characterSelect")
}

startGame()
