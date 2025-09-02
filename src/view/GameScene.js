// src/view/GameScene.js
import { FLOOR_HEIGHT, GRAVITY } from "../model/Config.js";
import { createPlayer } from "../model/Player.js";

export function registerGameScene(k) {
    k.scene("game", () => {
        k.setGravity(GRAVITY);

        //tienen que crear el player acá

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
            k.pos(200, 400),
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

        function addTriangleObstacle(k, x, floorY) {
            const triHeight = 30;
            const triWidth = 40;

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

        function addCactus(k, x, floorY) {
            k.add([
                k.sprite("cactus"),
                k.scale(0.08),
                k.pos(x, floorY - FLOOR_HEIGHT),
                k.area(),
                k.body({ isStatic: true }),
                "obstacle",
            ]);
        }
        addTriangleObstacle(k, 300, 200);
        addTriangleObstacle(k, 600, 200);
        addTriangleObstacle(k, 900, 200);
        addCactus(k, 700, 360);
        addCactus(k, 400, 360);
        addCactus(k, 1100, 360);

        function spawnCoin(k) {
            const x = rand(100, k.width() - 100);
            const y = rand(100, k.height() - 150);

            k.add([
                k.circle(15),     // moneda circular
                k.color(255, 215, 0),
                k.pos(x, y),
                k.area(),
                "coin",
            ]);

            k.wait(rand(2, 4), () => spawnCoin(k));
        }

        spawnCoin(k);




        let score = 0;

        player.onCollide("arrow", () => {
            addKaboom(player.pos);
            shake();
            go("lose", score);
        });

        player.onCollide("obstacle", () => {
            addKaboom(player.pos);
            shake();
            go("lose", score);
        });

        player.onCollide("coin", ()=> {
            shake();
            score++;
        });




    })
}
