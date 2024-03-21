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
    draw(context: CanvasRenderingContext2D) {
        if(!this.free) {
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    update() {
        if(!this.free) {
            this.y -= this.speed;
            if(this.y < - this.height) this.reset();
        }
    }
    start(x: number, y: number) {
        this.x = x - this.width * 0.5;
        this.y = y;
        this.free = false;
    }
    reset() {
        this.free = true;
    }
}