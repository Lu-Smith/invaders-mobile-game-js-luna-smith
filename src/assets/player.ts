import Game from './game';

export default class Player {
    game: Game;
    width: number;
    height: number;
    x: number;
    y: number;
    speed: number;
    lives: number;
    // matching types with Projectile
    free: any;
    start: any;
    reset: any;

    constructor(game: Game) {
        this.game = game;
        this.width = 60;
        this.height = 60;
        this.x = this.game.width * 0.5 - this.width * 0.5;
        this.y = this.game.height - this.height;
        this.speed = 5;
        this.lives = 3;
         // matching types with Projectile
        this.free;
        this.start;
        this.reset;
    }
    draw(context: CanvasRenderingContext2D) {
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        //horizontal movement
        if (this.game.keys.indexOf('ArrowLeft') > -1) this.x -= this.speed; 
        if (this.game.keys.indexOf('ArrowRight') > -1) this.x += this.speed; 

        //horizontal boundries
        if (this.x < -this.width * 0.5) this.x = -this.width * 0.5;
        else if (this.x > this.game.width - this.width * 0.5) this.x = this.game.width - this.width * 0.5;
    }
    shoot() {
        const projectile = this.game.getProjectile();
        if (projectile) projectile.start(this.x + this.width * 0.5, this.y);
    }
}