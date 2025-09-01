import {FLOOR_HEIGHT} from "./Config.js";

export class Obstacle {
    constructor(x, y, scene) {
        this.scene = scene;
        this.scene.add([
            this.scene.sprite("obstacle"),
            this.scene.area(),
            this.scene.pos(x, y - FLOOR_HEIGHT),
            this.scene.anchor("bot"),
            this.scene.body({isStatic: true}),
            "obstacle"
        ]);
    }
}