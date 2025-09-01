import { InputAdapter } from "./InputAdapter.js";

export class KeyboardAdapter extends InputAdapter {
    bind(scene, player) {
        scene.onKeyDown("left", () => player.moveLeft());
        scene.onKeyDown("a", () => player.moveLeft());

        scene.onKeyDown("right", () => player.moveRight());
        scene.onKeyDown("d", () => player.moveRight());

        scene.onKeyPress("space", () => player.jump());
        scene.onKeyPress("w", () => player.jump());
    }
}
