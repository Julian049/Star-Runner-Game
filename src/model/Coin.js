export class Coin {

    constructor(x, y,scene) {
        this.scene = scene;
        this.scene.add([
            this.scene.sprite("coin"),
            this.scene.pos(x, y),
            this.scene.area(),
            "mapCoin",
        ])
    }

}