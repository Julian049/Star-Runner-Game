
export class Arrow {
    constructor(scene) {
        this.scene = scene
        this.scene.add([
            this.scene.sprite("arrow"),
            this.scene.area(),
            this.scene.outline(4),
            this.scene.pos(this.scene.width(), this.scene.height() - 70),
            this.scene.anchor("botleft"),
            this.scene.color(255, 180, 255),
            this.scene.move(this.scene.LEFT, 240),
            "arrow",
        ])
    }
}