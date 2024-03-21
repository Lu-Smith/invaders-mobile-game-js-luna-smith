import Game from './game';

export default class Enemy {
    width: number;
    height: number;
    x: number;
    y: number;

    game: Game;
    constructor(game: Game) {
        this.game = game;
        this.width = 0;
        this.height = 0;
        this.x = 10;
        this.y = 10;
    }
    draw(context: CanvasRenderingContext2D) {
        context.strokeRect(this.x, this.y, this.width, this.height);
    }
    update() {
        
    }
}