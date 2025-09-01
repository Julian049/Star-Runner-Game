import kaboom from "kaboom"
import { loadAssets } from "./persistence/assets.js"
import { registerGameScene } from "./view/GameScene.js"

// Inicializamos kaboom
const k = kaboom({
    background: [0, 0, 0],
})

function startGame() {
    loadAssets(k)  
    registerGameScene(k)    
    k.go("game")         
}
startGame()
