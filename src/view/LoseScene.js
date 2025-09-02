export function registerLoseScene(k) {
    scene("lose", (score) => {
        k.add([
            text(`Score: ${score}`),
            pos(width() / 2, height() / 2),
            anchor("center"),
            scale(2),
        ]);

        onKeyPress("space", () => k.go("game"));
        onClick(() => k.go("game"));
    });
}