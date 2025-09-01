import {FLOOR_HEIGHT, GRAVITY} from "../model/Config.js" 
import {Obstacle} from "../model/Obstacle.js" 
import {Floor} from "../model/Floor.js" 
import {Wall} from "../model/Wall.js" 
import {Arrow} from "../model/Arrow.js" 
import {Player} from "../model/Player.js" 
import {Coin} from "../model/Coin.js" 

export class GameScene {
    constructor(k, game) {
        this.k = k 
        this.game = game 
        this.player = null 
    }

    createScene() {
        this.k.scene("game", () => {
            this.k.setGravity(GRAVITY) 
            this._addPlatforms() 
            this._addWalls() 
            this._spawnArrows() 
            this._addObstacles() 
            if (this.game) {
                this.game.setScene(this) 
                this.game.start() 
            }
        }) 
    }

    createPlayer() {
        this.player = new Player(this.k) 
    }

    spawnCoin() {
        let x = Math.random() * 500 
        let y = Math.random() * 100 
        new Coin(x, y, this.k) 
        this.k.wait(1, () => this.spawnCoin()) 
    }

    coinCollide(scoreManager) {
        this.player.sprite.onCollide("mapCoin", (mapCoin) => {
            this.k.destroy(mapCoin) 
            debug.log("coin collide") 
            scoreManager.addScore()
            debug.log("coin score " + scoreManager.count) 
        }) 
    }

    setupPlayer() {
        this.player.moveLeft()
        this.player.moveRight()
        this.player.jump()
    }

    _addPlatforms() {
        new Floor(0,  200, this.k)
        new Floor(200, 320, this.k)
        new Floor(0, 200, this.k)
        new Floor(0, 440, this.k)
        new Floor(0, this.k.height(), this.k)
    }

    _addWalls() {
        new Wall(0, 0, this.k)
        new Wall(this.k.width(),0, this.k)
    }

    _spawnArrows() {
        const {k} = this 
        const spawnArrow = () => {
            new Arrow(this.k)
            k.wait(k.rand(1, 2), () => spawnArrow()) 
        } 
        spawnArrow() 
    }

    _addObstacles() {
        const addTriangleObstacle = (x, floorY) => {
            new Obstacle(x, floorY, this.k)
        } 
        addTriangleObstacle(300, 200) 
        addTriangleObstacle(600, 200) 
        addTriangleObstacle(900, 200) 
    }

}