class ScoreManager {
    constructor() {
        this._coinCount = 0
    }

    get count() {
        return this._coinCount;
    }


    set coinCount(value) {
        this._coinCount = value;
    }
}