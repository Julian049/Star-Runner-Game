import {FLOOR_HEIGHT, GRAVITY} from "../model/Config.js";
import {Floor} from "../model/Floor.js"
import {Arrow} from "../model/Arrow.js";
import {Obstacle} from "../model/Obstacle.js";
import {Coin} from "../model/Coin.js";
import {Wall} from "../model/Wall.js";

export function registerGameScene(gameFacade, k) {
    k.scene("game", () => {
        k.setGravity(GRAVITY);

        if (gameFacade.scoreManager && typeof gameFacade.scoreManager.reset === 'function') {
            gameFacade.scoreManager.reset();
        }
        gameFacade.createPlayer();
        const player = gameFacade.getSelectedCharacter();

        new Floor(0, 200, 1300, k)
        new Floor(200, 320, 1800, k)
        new Floor(0, 480, 1300, k)
        new Floor(0, k.height(), 1800, k)


        new Floor(50, 380, 50, k)
        new Floor(1400, 600, 50, k)


        function spawnArrow() {
            const spawnArrow = () => {
                new Arrow(k)
                wait(rand(1, 2), () => spawnArrow())
            }
            spawnArrow()
        }

        spawnArrow();

        const addObstacle = (x, floorY) => {
            new Obstacle(x, floorY, k)
        }
        addObstacle(300, 200)
        addObstacle(600, 200)
        addObstacle(900, 200)

        new Wall(0, 0, k)
        new Wall(k.width(), 0, k)


        addObstacle(850, 373)
        addObstacle(1200, 373)
        addObstacle(500, 373)
        addObstacle(700, 480)
        addObstacle(400, 480)
        addObstacle(1100, 480)

        function spawnCoin() {
            let x = Math.random() * (k.width() - 60) + 30
            let y = Math.random() * (k.height() - 100) + 50
            let coin = new Coin(x, y, k)

            if (coin.sprite.isColliding("floor") ||
                coin.sprite.isColliding("obstacle") ||
                coin.sprite.isColliding("wall")) {
                k.destroy(coin.sprite)
                coin = null
            }
            k.wait(1, () => spawnCoin())
        }

        spawnCoin()

        function endGameAndGoLose() {
            gameFacade.endGame();
            go("lose");
        }

        player.sprite.onCollide("arrow", () => {
            addKaboom(player.sprite.pos);
            shake();
            endGameAndGoLose();
        });

        player.sprite.onCollide("obstacle", () => {
            addKaboom(player.sprite.pos);
            shake();
            endGameAndGoLose();
        });

        player.sprite.onCollide("mapCoin", (mapCoin) => {
            k.destroy(mapCoin)
            gameFacade.addCoin();
        });

        const scoreLabel = k.add([
            k.text("Puntaje: " + gameFacade.getScore()),
            k.pos(k.width() - 300, 24),
        ]);

        gameFacade.onScoreChange((score) => {
            scoreLabel.text = "Puntaje: " + score;
        });

        k.add([
            k.text("Presiona ESC para salir"),
            k.pos(24, 24),
            k.scale(0.5),
        ]);

        k.onKeyPress("escape", () => {
            k.go("characterSelect");
        });

    })
}
