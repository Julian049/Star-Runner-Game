// src/view/GameScene.js
import { FLOOR_HEIGHT, GRAVITY } from "../model/Config.js";
import { createPlayer } from "../model/Player.js";

export function registerGameScene(k) {
    k.scene("game", () => {
        k.setGravity(GRAVITY);
        const player = createPlayer(k);

        k.add([
            k.rect(k.width() - 150, FLOOR_HEIGHT),
            k.pos(0, 200),
            k.anchor("botleft"),
            k.area(),
            k.body({ isStatic: true }),
            k.color(100, 150, 255),
        ]);

        k.add([
            k.rect(k.width() - 150, FLOOR_HEIGHT),
            k.pos(200, 320), 
            k.anchor("botleft"),
            k.area(),
            k.body({ isStatic: true }),
            k.color(100, 150, 255),
        ]);
        k.add([
            k.rect(k.width() - 150, FLOOR_HEIGHT),
            k.pos(0, 200),
            k.anchor("botleft"),
            k.area(),
            k.body({ isStatic: true }),
            k.color(100, 150, 255),
        ]);

        k.add([
            k.rect(k.width() - 150, FLOOR_HEIGHT),
            k.pos(0, 440),
            k.anchor("botleft"),
            k.area(),
            k.body({ isStatic: true }),
            k.color(100, 150, 255),
        ]);
        k.add([
            k.rect(k.width(), FLOOR_HEIGHT),
            k.pos(0, k.height()),
            k.anchor("botleft"),
            k.area(),
            k.body({ isStatic: true }),
            k.color(100, 150, 255),
        ]);

        k.add([
            k.rect(1, k.height()),
            k.pos(0, 0),
            k.area(),
            k.body({ isStatic: true }),
            k.opacity(0),
        ]);

        k.add([
            k.rect(1, k.height()),
            k.pos(k.width(), 0),
            k.area(),
            k.body({ isStatic: true }),
            k.opacity(0),
        ]);
        function spawnArrow() {
            add([
                rect(80, 20),
                area(),
                outline(4),
                pos(width(), height() - 70),
                anchor("botleft"),
                color(255, 180, 255),
                move(LEFT, 240),
                "arrow",
            ]);
            wait(rand(1, 2), () => {
                spawnArrow();
            });
        }
        spawnArrow();


        // Esta función va en otro clase, algo llamado como creadorDeObstaculos o como quieran.
        function addTriangleObstacle(k, x, floorY) {
            const triHeight = 40;
            const triWidth = 50;

            k.add([
                k.polygon([
                    vec2(0, 0),
                    vec2(triWidth, 0),
                    vec2(triWidth / 2, -triHeight), 
                ]),
                k.area(),
                k.pos(x, floorY - FLOOR_HEIGHT),   
                k.color(255, 100, 100),
                k.body({ isStatic: true }),
                "obstacle",
            ]);
        }
        addTriangleObstacle(k, 300, 200);
        addTriangleObstacle(k, 600, 200);
        addTriangleObstacle(k, 900, 200);



    })
}
