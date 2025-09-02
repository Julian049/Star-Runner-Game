import {JUMP_FORCE, SPEED} from "./Config.js";
export class Player {

    nameSprite = "";

    constructor(k, nameSprite) {
        this.k = k;
        this.nameSprite = nameSprite;
        this.sprite = this.k.add([
            this.k.sprite(this.nameSprite),
            this.k.pos(100, 100),
            this.k.area(),
            this.k.body(),
            this.k.scale(0.2),
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

    getNameSprite() {
        return this.nameSprite;
    }

    setNameSprite(nameSprite) {
        this.nameSprite = nameSprite;
    }
}
