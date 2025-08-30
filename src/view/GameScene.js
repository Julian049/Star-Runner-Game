import { FLOOR_HEIGHT, SPEED, GRAVITY } from "../model/Config.js";
import { createPlayer } from "../model/Player.js";

export function registerGameScene() {
    scene("game", () => {
        setGravity(GRAVITY);

        const player = createPlayer();

        // Suelo
        add([
            rect(width(), FLOOR_HEIGHT),
            pos(0, height()),
            anchor("botleft"),
            area(),
            body({ isStatic: true }),
            outline(4),
            color(127, 200, 255),
        ]);

        // Obstáculos
        function spawnTree() {
            add([
                rect(48, rand(32, 96)),
                pos(width(), height() - FLOOR_HEIGHT),
                anchor("botleft"),
                area(),
                outline(4),
                color(255, 180, 255),
                move(LEFT, SPEED),
                "tree",
            ]);
            wait(rand(0.5, 1.5), spawnTree);
        }
        spawnTree();

        let score = 0;
        const scoreLabel = add([text(score), pos(24, 24)]);
        onUpdate(() => { score++; scoreLabel.text = score; });

        player.onCollide("tree", () => {
            go("lose", score);
            burp?.();
            addKaboom(player.pos);
        });
    });
}
