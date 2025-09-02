import kaboom from "kaboom" 
import {GameFacade} from "./model/GameFacade.js"
import {Assets} from "./persistence/Assets.js" 
import {GameScene} from "./view/GameScene.js"
import {registerLoseScene} from "./view/LoseScene.js";

const kaboomScene = kaboom({
    background: [0, 0, 0],
})

new Assets(kaboomScene)

const game = new GameFacade(kaboomScene)
registerLoseScene(kaboomScene)
const scene = new GameScene(kaboomScene, game)
scene.createScene()

kaboomScene.go("game") 


