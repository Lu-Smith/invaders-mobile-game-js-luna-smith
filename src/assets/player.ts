import Game from './game';

export default class Player {
    game: Game;
    width: number;
    height: number;
    x: number;
    y: number;

    constructor(game: Game) {
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = 200;
        this.y = 200;
    }
    draw(context: CanvasRenderingContext2D) {
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}