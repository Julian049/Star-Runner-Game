// src/view/GameScene.js
import { FLOOR_HEIGHT, SPEED, GRAVITY } from "../model/Config.js";
import { createPlayer } from "../model/Player.js";

export function registerGameScene(k) {
    k.scene("game", () => {
        k.setGravity(GRAVITY);

        const player = createPlayer(k);

        // Suelo
        k.add([
            k.rect(k.width(), FLOOR_HEIGHT),
            k.pos(0, k.height()),
            k.anchor("botleft"),
            k.area(),
            k.body({ isStatic: true }),
            k.outline(4),
            k.color(127, 200, 255),
        ]);

        // Obstáculos
        function spawnTree() {
            k.add([
                k.rect(48, k.rand(32, 96)),
                k.pos(k.width(), k.height() - FLOOR_HEIGHT),
                k.anchor("botleft"),
                k.area(),
                k.outline(4),
                k.color(255, 180, 255),
                k.move(k.LEFT, SPEED),
                "tree",
            ]);
            k.wait(k.rand(0.5, 1.5), spawnTree);
        }

        spawnTree();

        // Score
        let score = 0;
        const scoreLabel = k.add([k.text(score), k.pos(24, 24)]);

        k.onUpdate(() => {
            score++;
            scoreLabel.text = score;
        });

        player.onCollide("tree", () => {
            k.go("lose", score);
            k.burp?.();
            k.addKaboom(player.pos);
        });
    });
}
