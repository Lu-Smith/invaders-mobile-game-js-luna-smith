import Game from './game';

export default class Wave {
    width: number;
    height: number;
    x: number;
    y: number;

    game: Game;
    constructor(game: Game) {
        this.game = game;
        this.width = this.game.columns * this.game.enemySize;
        this.height = this.game.rows * this.game.enemySize;
        this.x = 10;
        this.y = 10;
    }
    render(context: CanvasRenderingContext2D) {
        context.strokeRect(this.x, this.y, this.width, this.height);
    }
}