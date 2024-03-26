import Enemy from './enemy';
import Game from './game';

export default class Enemy1 extends Enemy {
    image: HTMLImageElement;
    frameX: number;
    frameY1: number;
    frameY2: number;
    frameY3: number;
    frameY4: number;
    lives: number;
    maxFrame: number;
    maxLives: number;

    constructor(game: Game, positionX: number, positionY: number) {
        super(game, positionX, positionY);
        this.image = document.getElementById('enemy1') as HTMLImageElement;
        this.frameX = 0;
        this.maxFrame = 2;
        this.frameY1 = 0;
        this.frameY2 = 1;
        this.frameY3 = 2;
        this.frameY4 = 3;
        this.lives = 1;
        this.maxLives = this.lives;
    }
}