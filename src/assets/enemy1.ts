import Enemy from './enemy';
import Game from './game';

export default class Enemy1 extends Enemy {
    constructor(game: Game, positionX: number, positionY: number) {
        super(game, positionX, positionY);
        this.image = document.getElementById('enemy1')

    }
}