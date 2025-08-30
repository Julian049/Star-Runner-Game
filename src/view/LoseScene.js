export function registerLoseScene() {
    scene("lose", (score) => {
        add([
            text(`Score: ${score}`),
            pos(width() / 2, height() / 2),
            anchor("center"),
            scale(2),
        ]);

        onKeyPress("space", () => go("game"));
        onClick(() => go("game"));
    });
}
