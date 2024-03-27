import Game from './game';

export default class Player {
    game: Game;
    width: number;
    height: number;
    x: number;
    y: number;
    speed: number;
    lives: number;
    maxLives = 10;
    image: HTMLImageElement;
    jets_image: HTMLImageElement;
    frameX: number;
    jets_frameX: number;
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
        this.jets_image = document.getElementById('player_jets') as HTMLImageElement;
        this.frameX = 0;
        this.jets_frameX = 1;
        // matching types with Projectile
        this.free;
        this.start;
        this.reset;
    }
    draw(context: CanvasRenderingContext2D) {
        // context.strokeRect(this.x, this.y, this.width, this.height);
        //handle sprite frames
        if ((this.game.keys.indexOf('1')  > -1) || (this.game.keys.indexOf(' ') > -1) || (this.game.keys.indexOf('Enter') > -1)) {
            this.frameX = 2;
        } else {
            this.frameX = 0;
        }
        context.drawImage(this.jets_image, this.jets_frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    update() {
        //horizontal movement
        if (this.game.keys.indexOf('ArrowLeft') > -1) {
            this.x -= this.speed;
            this.jets_frameX = 0;
        } else if (this.game.keys.indexOf('ArrowRight') > -1) {
            this.x += this.speed;
            this.jets_frameX = 2;
        } else {
            this.jets_frameX = 1;
        }
        //horizontal boundries
        if (this.x < -this.width * 0.5) this.x = -this.width * 0.5;
        else if (this.x > this.game.width - this.width * 0.5) this.x = this.game.width - this.width * 0.5;
    }
    shoot() {
        const projectile = this.game.getProjectile();
        if (projectile) {
            projectile.start(this.x + this.width * 0.5, this.y);
            this.game.sound.play(this.game.sound.shoot1);  
        }
    } 
    resize() { 
        this.x = this.game.width * 0.5 - this.width * 0.5;
        this.y = this.game.height - this.height;
        if ( this.game.imageSrc === 'background') {
            this.width = 70;
            this.height = 60;
            this.image = document.getElementById('player') as HTMLImageElement;
            this.jets_image = document.getElementById('player_jets') as HTMLImageElement;
        } else {
            this.width = 40;
            this.height = 44;
            this.image = document.getElementById('playerSmall') as HTMLImageElement;
            this.jets_image = document.getElementById('player_jets_small') as HTMLImageElement;
        }
    }
}