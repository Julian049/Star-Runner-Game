export class ScoreManager {
    constructor(scene) {
        this.scene = scene 
        this.scene._coinCount = 0
    }

    addScore() {
        this.scene._coinCount = this.count + 50
    }


    get count() {
        return this.scene._coinCount 
    }

}