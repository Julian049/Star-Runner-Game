import { Player } from "./Player.js";
import { Arrow } from "../model/Arrow.js";
import { Obstacle } from "../model/Obstacle.js";
import { Coin } from "../model/Coin.js";
import { Wall } from "../model/Wall.js";
import { KeyboardAdapter } from "./KeyboardAdapter.js";


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

    spawnArrow() {
        const spawn = () => {
            new Arrow(this.scene)
            this.scene.wait(this.scene.rand(1, 2), () => spawn())
        }
        spawn()
    }

    addObstacle = (x, floorY) => {
        new Obstacle(x, floorY, this.scene)
    }
    spawnCoin() {
        const spawn = () => {
            let x = Math.random() * (this.scene.width() - 60) + 30
            let y = Math.random() * (this.scene.height() - 100) + 50
            let coin = new Coin(x, y, this.scene)

            if (coin.sprite.isColliding("floor") ||
                coin.sprite.isColliding("obstacle") ||
                coin.sprite.isColliding("wall")) {
                this.scene.destroy(coin.sprite)
                coin = null
            }

            this.scene.wait(1, () => spawn())
        }
        spawn()
    }

    coinCollide() {
        this.player.sprite.onCollide("mapCoin", (mapCoin) => {
            this.scene.destroy(mapCoin)
            debug.log("coin collide")
        })
    }


    createPlayer() {
        this.player = new Player(this.scene, this.characterselect);
        this.setInputAdapter(this.inputAdapter);
        this.player.moveLeft()
        this.player.moveRight()
        this.player.jump()
    }

    endGameAndGoLose() {
            this.endGame();
            go("lose");
        }

    setInputAdapter(adapter) {
        this.inputAdapter = adapter
        this.inputAdapter.bind(this.scene, this.player)
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