import Game from './game';

export default class Player {
    game: Game;
    width: number;
    height: number;
    x: number;
    y: number;
    speed: number;
    lives: number;
    image: HTMLImageElement;
    frameX: number;
    // matching types with Projectile
    free: any;
    start: any;
    reset: any;

    constructor(game: Game) {
        this.game = game;
        this.width = 70;
        this.height = 60;
        this.x = this.game.width * 0.5 - this.width * 0.5;
        this.y = this.game.height - this.height;
        this.speed = 5;
        this.lives = 3;
        this.image = document.getElementById('player') as HTMLImageElement;
        this.frameX = 0;
        // matching types with Projectile
        this.free;
        this.start;
        this.reset;
    }
    draw(context: CanvasRenderingContext2D) {
        //handle sprite frames
        if ( this.game.keys.indexOf('1') > -1) {
            this.frameX = 2;
        } else {
            this.frameX = 0;
        }
        context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
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