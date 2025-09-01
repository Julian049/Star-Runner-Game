import { JUMP_FORCE } from "./Config.js";
export class Player {
    constructor(k) {
        this.k = k;
        this.sprite = this.k.add([
            this.k.sprite("player"),
            this.k.pos(100, 100),
            this.k.area(),
            this.k.body()
        ]);
    }

    moveLeft() {
        this.k.onKeyDown("left", () => {
            this.sprite.move(-200, 0);   // 👈 ojo: izquierda es negativo
        });
    }

    moveRight() {
        this.k.onKeyDown("right", () => {
            this.sprite.move(200, 0);    // 👈 derecha es positivo
        });
    }

    jump() {
        this.k.onKeyPress("space", () => {
            if (this.sprite.isGrounded()) {
                this.sprite.jump(JUMP_FORCE);
            }
        });
    }
}

// 👉 factoría para usarlo en tus escenas
export function createPlayer(k) {
    const player = new Player(k);
    player.moveLeft();
    player.moveRight();
    player.jump();
    return player.sprite;
}
