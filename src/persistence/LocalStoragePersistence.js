export class LocalStoragePersistence {
    constructor() {
        this.key = "leaderboard";
    }

    saveScore(score) {
        let scores = this.loadScores();
        scores.push(score);
        scores = scores.sort((a, b) => b - a).slice(0, 10);
        localStorage.setItem(this.key, JSON.stringify(scores));
    }

    loadScores() {
        const data = localStorage.getItem(this.key);
        if (!data) return [];
        try {
            const parsed = JSON.parse(data);
            if (Array.isArray(parsed) && parsed.every(x => typeof x === 'number')) {
                return parsed;
            }
            return [];
        } catch {
            return [];
        }
    }

    exportScores() {
        const scores = this.loadScores();
        const blob = new Blob([JSON.stringify(scores, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'scores.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    importScores(file, callback) {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const imported = JSON.parse(event.target.result);
                if (Array.isArray(imported) && imported.every(x => typeof x === 'number')) {
                    localStorage.setItem(this.key, JSON.stringify(imported));
                    if (callback) callback(true);
                } else {
                    if (callback) callback(false);
                }
            } catch {
                if (callback) callback(false);
            }
        };
        reader.readAsText(file);
    }

    loadCharacters() {
        return ["william", "julian", "diego", "jorge"];
    }
}