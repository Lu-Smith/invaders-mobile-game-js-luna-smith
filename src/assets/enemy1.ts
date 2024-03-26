import Enemy from './enemy';
import Game from './game';

export default class Enemy1 extends Enemy {
    image: HTMLImageElement;
    frameX: number;
    frameY: number;
    lives: number;
    maxFrame: number;
    maxLives: number;

    constructor(game: Game, positionX: number, positionY: number) {
        super(game, positionX, positionY);
        this.image = document.getElementById('enemy1') as HTMLImageElement;
        this.frameX = 0;
        this.maxFrame = 2;
        this.frameY = Math.floor(Math.random() * 4);
        this.lives = 1;
        this.maxLives = this.lives;
    }
}