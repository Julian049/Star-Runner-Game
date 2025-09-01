import { FLOOR_HEIGHT, GRAVITY } from "../model/Config.js";
import {Obstacle} from "../model/Obstacle.js";

export class GameScene {
    constructor(k,game) {
        this.k = k;
        this.game = game;
    }

    register() {

        this.k.scene("game", () => {
            this.k.setGravity(GRAVITY);

            this._addPlatforms();
            this._addWalls();

            this._spawnArrows();

            this._addObstacles();

            if (this.game){
                this.game.start();
            }
        });
    }

    _addPlatforms() {
        const { k } = this;

        k.add([
            k.rect(k.width() - 150, FLOOR_HEIGHT),
            k.pos(0, 200),
            k.anchor("botleft"),
            k.area(),
            k.body({ isStatic: true }),
            k.color(100, 150, 255),
        ]);

        k.add([
            k.rect(k.width() - 150, FLOOR_HEIGHT),
            k.pos(200, 320),
            k.anchor("botleft"),
            k.area(),
            k.body({ isStatic: true }),
            k.color(100, 150, 255),
        ]);

        k.add([
            k.rect(k.width() - 150, FLOOR_HEIGHT),
            k.pos(0, 200),
            k.anchor("botleft"),
            k.area(),
            k.body({ isStatic: true }),
            k.color(100, 150, 255),
        ]);

        k.add([
            k.rect(k.width() - 150, FLOOR_HEIGHT),
            k.pos(0, 440),
            k.anchor("botleft"),
            k.area(),
            k.body({ isStatic: true }),
            k.color(100, 150, 255),
        ]);

        k.add([
            k.rect(k.width(), FLOOR_HEIGHT),
            k.pos(0, k.height()),
            k.anchor("botleft"),
            k.area(),
            k.body({ isStatic: true }),
            k.color(100, 150, 255),
        ]);
    }

    _addWalls() {
        const { k } = this;

        k.add([
            k.rect(1, k.height()),
            k.pos(0, 0),
            k.area(),
            k.body({ isStatic: true }),
            k.opacity(0),
        ]);

        k.add([
            k.rect(1, k.height()),
            k.pos(k.width(), 0),
            k.area(),
            k.body({ isStatic: true }),
            k.opacity(0),
        ]);
    }

    _spawnArrows() {
        const { k } = this;

        const spawnArrow = () => {
            k.add([
                k.rect(80, 20),
                k.area(),
                k.outline(4),
                k.pos(k.width(), k.height() - 70),
                k.anchor("botleft"),
                k.color(255, 180, 255),
                k.move(k.LEFT, 240),
                "arrow",
            ]);
            k.wait(k.rand(1, 2), () => spawnArrow());
        };

        spawnArrow();
    }

    _addObstacles() {

        const addTriangleObstacle = (x, floorY) => {
            new Obstacle(x,floorY,this.k)
        };

        addTriangleObstacle(300, 200);
        addTriangleObstacle(600, 200);
        addTriangleObstacle(900, 200);
    }

}
