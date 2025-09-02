export function characterSelect(facade, k) {
    k.scene("characterSelect", () => {

        let index = 0;
        const characters = facade.getCharacters();

        k.add([
            k.text("Ejige tu personaje"),
            k.pos(k.center().x, 80),
            { anchor: "center" },
        ]);

        let characterName = k.add([
            k.text(characters[index]),
            k.pos(k.center().x, k.height() - 180),
            { anchor: "center" },
        ]);

        function updateCharacterName() {
            k.destroy(characterName);
            characterName = k.add([
                k.text(characters[index]),
                k.pos(k.center().x, k.height() - 180),
                { anchor: "center" },
            ]);
        }

        k.add([
            k.text("Presiona ENTER para comenzar"),
            k.pos(k.center().x, k.height() - 80),
            { anchor: "center" },
        ]);

        let character = k.add([
            k.sprite(characters[index]),
            k.pos(k.center()),
            { anchor: "center" },
            k.scale(0.5),
        ]);

        function updateCharacter() {
            k.destroy(character);
            character = k.add([
                k.sprite(characters[index]),
                k.pos(k.center()),
                k.scale(0.5),
                { anchor: "center" },
            ]);
            updateCharacterName();
        }

        let rightIndicator = k.add([
            k.sprite("rightIndicator"),
            k.pos(k.width() - 300, k.center().y),
            { anchor: "center" },
            k.area(),
            k.scale(0.5),
        ]);

        let leftIndicator = k.add([
            k.sprite("leftIndicator"),
            k.pos(300, k.center().y),
            { anchor: "center" },
            k.area(),
            k.scale(0.5),
        ]);

        leftIndicator.onClick(() => {
            index = (index - 1 + characters.length) % characters.length;
            updateCharacter();
        });

        rightIndicator.onClick(() => {
            index = (index + 1) % characters.length;
            updateCharacter();
        });

        k.onKeyPress("left", () => {
            index = (index - 1 + characters.length) % characters.length;
            updateCharacter();
        });

        k.onKeyPress("right", () => {
            index = (index + 1) % characters.length;
            updateCharacter();
        });

        k.onKeyPress("enter", () => {
            facade.setSelectedCharacter(characters[index]);
            k.go("game");
        });
    });
}