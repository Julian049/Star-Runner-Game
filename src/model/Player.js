import {JUMP_FORCE, SPEED} from "./Config.js";

export class Player {
  constructor(scene) {
    this.scene = scene;

    this.sprite = this.scene.add([
      this.scene.sprite("player"),
      this.scene.pos(10, 10),
      this.scene.area(),
      this.scene.body(),
    ]);
  }

  moveLeft() {
    this.sprite.move(-SPEED, 0);
  }

  moveRight() {
    this.sprite.move(SPEED, 0);
  }

  jump() {
    if (this.sprite.isGrounded()) {
      this.sprite.jump(JUMP_FORCE);
    }
  }
}
