import Game from './game';
import Enemy1 from './enemy1';

export default class Enemy {
    width: number;
    height: number;
    x: number;
    y: number;
    positionX: number;
    positionY: number;
    markedForDeletion: boolean;
    game: Game;
    
    constructor(game: Game, positionX: number, positionY: number) {
        this.game = game;
        this.width = this.game.enemySize;
        this.height = this.game.enemySize;
        this.x = 0;
        this.y = 0;
        this.positionX = positionX;
        this.positionY = positionY;
        this.markedForDeletion = false;
    }
    draw(context: CanvasRenderingContext2D) {
        // context.strokeRect(this.x, this.y, this.width, this.height);
        if (this instanceof Enemy1) {
        context.drawImage(this.image, this.frameX * this.width , this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
        }
    }
    update(x: number, y: number) {
        this.x = x + this.positionX;
        this.y = y + this.positionY;
        // check collision enemies - projectiles
        this.game.projectilesPool.forEach(projectile => {
            if (!projectile.free && this.game.checkCollision(this, projectile)) {
                this.hit(1);
                projectile.reset();
            }
        });
        if (this instanceof Enemy1) {
            if (this.lives < 1) {
                if (this.game.spriteUpdate) this.frameX++;
                if (this.frameX > this.maxFrame) {
                    this.markedForDeletion = true;
                    if (!this.game.gameOver) this.game.score += this.maxLives;
                }
            }
        }
        // check collision enemies - player
        if (this.game.checkCollision(this, this.game.player)) {
            this.markedForDeletion = true;
            if (!this.game.gameOver && this.game.score > 0) this.game.score--;
            this.game.player.lives--;
            if (this.game.player.lives < 1) this.game.gameOver = true;
        }
        // lose condition
        if (this.y + this.height > this.game.height) {
            this.game.gameOver = true;
            this.markedForDeletion = true;
        }
    }
    hit(damage: number) {
        if (this instanceof Enemy1) {
            this.lives -= damage;
        }
    }
}