export class Player {
    constructor(scene) {
        this.scene = scene;
        this.sprite = this.scene.add([
            this.scene.sprite("player"),
            this.scene.pos(100, 100),
            this.scene.area(),
            this.scene.body()
        ]);
    }

    moveLeft() {
        onKeyDown("left", () => {
            this.sprite.move(200, 0)
        })
    }

    moveRight() {
        onKeyDown("right", () => {
            this.sprite.move(-200, 0)
        })
    }

    jump() {
        //  if (this.sprite.isGrounded()) {
        //     this.sprite.jump(400);
        //  }
    }
}
