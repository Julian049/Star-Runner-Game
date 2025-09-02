export class Wall {
    constructor(x, y, scene) {
        this.scene = scene;
        this.scene.add([
            this.scene.rect(1, this.scene.height(),2000,2000),
            this.scene.pos(x, y),
            this.scene.area(),
            this.scene.body({isStatic: true}),
            this.scene.opacity(0),
            "wall"
        ])
    }

}