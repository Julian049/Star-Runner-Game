import {FLOOR_HEIGHT} from "./Config.js";

export class Floor {
    constructor(x, y, width, scene) {
        this.scene = scene;
        this.scene.add([
            this.scene.rect(width, FLOOR_HEIGHT),
            this.scene.pos(x, y),
            this.scene.anchor("botleft"),
            this.scene.area(),
            this.scene.body({isStatic: true}),
            this.scene.color(100, 150, 255),
            "floor"
        ]);
    }

}