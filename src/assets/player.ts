import Game from './game';

export default class Player {
    game: Game;
    width: number;
    height: number;
    x: number;
    y: number;
    speed: number;

    constructor(game: Game) {
        this.game = game;
        this.width = 60;
        this.height = 60;
        this.x = this.game.width * 0.5 - this.width * 0.5;
        this.y = this.game.height - this.height;
        this.speed = 5;
    }
    draw(context: CanvasRenderingContext2D) {
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        this.x += this.speed;
    }
}