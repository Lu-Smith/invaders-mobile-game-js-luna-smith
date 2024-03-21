import Game from './game';

export default class Enemy {
    width: number;
    height: number;
    x: number;
    y: number;
    positionX: number;
    positionY: number;

    game: Game;
    constructor(game: Game, positionX: number, positionY: number) {
        this.game = game;
        this.width = this.game.enemySize;
        this.height = this.game.enemySize;
        this.x = 0;
        this.y = 0;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    draw(context: CanvasRenderingContext2D) {
        context.strokeRect(this.x, this.y, this.width, this.height);
    }
    update(x:number, y: number) {
        this.x = x + this.positionX;
        this.y = y + this.positionY;
    }
}