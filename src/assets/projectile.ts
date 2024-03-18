export default class Projectile {
    width: number;
    height: number;
    x: number;
    y: number;
    speed: number;
    free: boolean;

    constructor() {
        this.width = 4;
        this.height = 20;
        this.x = 0;
        this.y = 0;
        this.speed = 20;
        this.free = true;
    }
    draw() {
        if(!this.free) {

        }
    }
    update() {
        if(!this.free) {
            
        }
    }
}