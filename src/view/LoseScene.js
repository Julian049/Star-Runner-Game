export function registerLoseScene(facade, k) {
    k.scene("lose", () => {
        k.add([
            k.text("GAME OVER"),
            k.pos(k.width() / 2, k.height() / 4),
            k.anchor("center"),
            k.scale(2)
        ]);

        const leaderboard = facade.getLeaderboard();
            leaderboard.slice(0, 10).forEach((score, i) => {
                k.add([
                    k.text(`${i + 1}. ${score}`),
                    k.pos(100, k.height() / 3 + i * 52),
                    k.anchor("center"),
                ]);
            });

        k.add([
            k.text("Pulsa espacio para volver a jugar"),
            k.pos(k.width() / 2, k.height() - 100),
            k.anchor("center"),
        ]);

        const existingExport = document.getElementById('export-scores-btn');
        const existingImport = document.getElementById('import-scores-btn');
        const existingInput = document.getElementById('import-scores-input');
        if (existingExport) existingExport.remove();
        if (existingImport) existingImport.remove();
        if (existingInput) existingInput.remove();

        const exportBtn = document.createElement('button');
        exportBtn.id = 'export-scores-btn';
        exportBtn.textContent = 'Exportar puntajes';
        exportBtn.style.position = 'fixed';
        exportBtn.style.top = '20px';
        exportBtn.style.right = '20px';
        exportBtn.style.zIndex = 1000;
        exportBtn.onclick = () => {
            if (facade.persistence && typeof facade.persistence.exportScores === 'function') {
                facade.persistence.exportScores();
            }
        };
        document.body.appendChild(exportBtn);

        const importBtn = document.createElement('button');
        importBtn.id = 'import-scores-btn';
        importBtn.textContent = 'Importar puntajes';
        importBtn.style.position = 'fixed';
        importBtn.style.top = '60px';
        importBtn.style.right = '20px';
        importBtn.style.zIndex = 1000;
        importBtn.onclick = () => {
            inputFile.click();
        };
        document.body.appendChild(importBtn);

        const inputFile = document.createElement('input');
        inputFile.type = 'file';
        inputFile.accept = '.json,application/json';
        inputFile.id = 'import-scores-input';
        inputFile.style.display = 'none';
        inputFile.onchange = (e) => {
            const file = e.target.files[0];
            if (file && facade.persistence && typeof facade.persistence.importScores === 'function') {
                facade.persistence.importScores(file, (success) => {
                    alert(success ? 'Puntajes importados correctamente' : 'Archivo inválido');
                    k.go('lose');
                });
            }
        };
        document.body.appendChild(inputFile);

        k.onSceneLeave(() => {
            if (exportBtn) exportBtn.remove();
            if (importBtn) importBtn.remove();
            if (inputFile) inputFile.remove();
        });

        k.onKeyPress("space", () => k.go("game"));
        k.onClick(() => k.go("game"));
    });
}