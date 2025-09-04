import { FLOOR_HEIGHT, GRAVITY } from "../model/Config.js";
import { Wall } from "../model/Wall.js";
import { Floor } from "../model/Floor.js"

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

        
        gameFacade.addObstacle(850, 373)
        gameFacade.addObstacle(1200, 373)
        gameFacade.addObstacle(500, 373)
        gameFacade.addObstacle(700, 480)
        gameFacade.addObstacle(400, 480)
        gameFacade.addObstacle(1100, 480)
        gameFacade.addObstacle(300, 200)
        gameFacade.addObstacle(600, 200)
        gameFacade.addObstacle(900, 200)
        gameFacade.spawnArrow();

        new Wall(0, 0, k)
        new Wall(k.width(), 0, k)


        gameFacade.spawnCoin()

        player.sprite.onCollide("arrow", () => {
            addKaboom(player.sprite.pos);
            shake();
            gameFacade.endGameAndGoLose();
        });

        player.sprite.onCollide("obstacle", () => {
            addKaboom(player.sprite.pos);
            shake();
            gameFacade.endGameAndGoLose();
        });

        player.sprite.onCollide("mapCoin", (mapCoin) => {
            k.destroy(mapCoin);
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
