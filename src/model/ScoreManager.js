export class ScoreManager {
    constructor() {
        this.count = 0;
        this.observers = [];
    }

    getScore() {
        return this.count;
    }

    addPoint() {
        this.count++;
        this.notify();
    }

    removePoint() {
        this.count--;
        this.notify();
    }

    onChange(cb) {
        this.observers.push(cb);
    }

    notify() {
        this.observers.forEach(cb => cb(this.count));
    }

    reset() {
        this.count = 0;
        this.notify();
    }
}