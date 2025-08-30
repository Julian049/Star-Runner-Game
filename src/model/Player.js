export class Player {
  constructor(scene) {
    this.scene = scene;
    this.sprite = scene.add([sprite("player"), pos(100, 100), area(), body()]);
  }

  moveLeft() {
    this.sprite.move(-200, 0);
  }

  moveRight() {
    this.sprite.move(200, 0);
  }

  jump() {
    if (this.sprite.isGrounded()) {
      this.sprite.jump(400);
    }
  }
}
