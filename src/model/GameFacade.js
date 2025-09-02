import {Player} from "./Player.js";
import {Coin} from "./Coin.js";
import {KeyboardAdapter} from "./KeyboardAdapter.js";


export class GameFacade {

    characterselect = "";

    constructor(scene,
                scoreManager,
                persistence) {
        this.player = null
        this.scene = scene;
        this.inputAdapter = new KeyboardAdapter()
        this.characterselect = "";
        this.scoreManager = scoreManager;
        this.persistence = persistence;
    }

    addCoin() {
        this.scoreManager.addPoint();
    }

    hitObstacle() {
        this.scoreManager.removePoint();
    }

    endGame() {
        const score = this.scoreManager.getScore();
        this.persistence.saveScore(score);
    }

    getLeaderboard() {
        return this.persistence.loadScores();
    }

    onScoreChange(cb) {
        this.scoreManager.onChange(cb);
    }

    getCharacters() {
        return this.persistence.loadCharacters();
    }

    spawnCoin() {
        let x = Math.random() * 1920
        let y = Math.random() * 1080
        new Coin(x, y,this.scene);
        this.scene.wait(3,() => this.spawnCoin())
    }

    coinCollide(){
        this.player.sprite.onCollide("mapCoin", (mapCoin) => {
            this.scene.destroy(mapCoin)
            debug.log("coin collide")
        })
    }

    createPlayer(){
        this.player = new Player(this.scene, this.characterselect);
        this.setInputAdapter(this.inputAdapter);
        this.player.moveLeft()
        this.player.moveRight()
        this.player.jump()
    }

    setInputAdapter(adapter) {
        this.inputAdapter = adapter
        this.inputAdapter.bind(this.scene, this.player) // Usar this.player en lugar de this.scene.player
    }

    getSelectedCharacter() {
        return this.player;
    }

    setSelectedCharacter(character) {
        this.characterselect = character;
        this.createPlayer()
    }

    getScore() {
        return this.scoreManager.getScore();
    }


}