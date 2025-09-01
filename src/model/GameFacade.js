import {ScoreManager} from "./ScoreManager.js" 
import {KeyboardAdapter} from "./KeyboardAdapter.js" 

export class GameFacade {
    constructor(k) {
        this.k = k 
        this.scene = null 
        this.inputAdapter = new KeyboardAdapter() 
        this.scoreManager = null  
    }

    setScene(scene) {
        this.scene = scene 
        this.scoreManager = new ScoreManager(this.k) 
    }

    start() {
        this.scene.createPlayer() 
        this.scene.spawnCoin() 
        this.scene.coinCollide(this.scoreManager) 
        this.scene.setupPlayer() 
        this.setInputAdapter(this.inputAdapter) 
    }

    setInputAdapter(adapter) {
        this.inputAdapter = adapter 
        this.inputAdapter.bind(this.k, this.scene.player) 
    }

}