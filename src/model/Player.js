export class Player {
  constructor(scene) {
    this.scene = scene;
    this.speed = 200;
    this.jump_force = 400;

    this.sprite = this.scene.add([
      this.scene.sprite("player"),
      this.scene.pos(100, 100),
      this.scene.area(),
      this.scene.body(),
    ]);
  }

  moveLeft() {
    this.sprite.move(-this.speed, 0);
  }

  moveRight() {
    this.sprite.move(this.speed, 0);
  }

  jump() {
    if (this.sprite.isGrounded()) {
      this.sprite.jump(this.jump_force);
    }
  }
}
