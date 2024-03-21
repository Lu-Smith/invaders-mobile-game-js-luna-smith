import Game from './game';

export default class Wave {
    width: number;
    height: number;
    x: number;
    y: number;
    speedX: number;
    speedY: number;

    game: Game;
    constructor(game: Game) {
        this.game = game;
        this.width = this.game.columns * this.game.enemySize;
        this.height = this.game.rows * this.game.enemySize;
        this.x = 0;
        this.y = 0;
        this.speedX = 3;
        this.speedY = 0;
    }
    render(context: CanvasRenderingContext2D) {
        this.speedY = 0;
        context.strokeRect(this.x, this.y, this.width, this.height);
        if ( this.x < 0 || this.x > this.game.width - this.width) {
            this.speedX *= -1;
            this.speedY = this.game.enemySize;
        }
        this.x += this.speedX;
        this.y += this.speedY;
    }
}