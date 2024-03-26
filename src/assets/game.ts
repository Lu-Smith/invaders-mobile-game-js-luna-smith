import Enemy from "./enemy";
import Player from "./player";
import Projectile from "./projectile";
import Wave from "./wave";
import Audio from './audio';

export default class Game {
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    player: Player;
    keys: string[];
    projectilesPool: Projectile [];
    numbersOfProjectiles: number;
    columns: number;
    rows: number;
    enemySize: number;
    waves: Wave[];
    score: number;
    gameOver: boolean;
    waveCount: number;
    fired: boolean;
    spriteUpdate: boolean;
    spriteTimer: number;
    spriteInterval: number;
    //audio
    sound: Audio;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.keys = [];
        this.player = new Player(this);
        //projectiles
        this.projectilesPool = [];        
        this.numbersOfProjectiles = 15;
        this.fired = false;
        this.createProjectiles();
        //enemy
        this.columns = 2;
        this.rows = 1;
        this.enemySize = 50;
        this.waves = [];
        this.waves.push(new Wave(this));
        this.waveCount = 1;
        this.spriteUpdate = false;
        this.spriteTimer = 0;
        this.spriteInterval = 200;
        //score
        this.score = 0;
        this.gameOver = false;
        //audio
        this.sound = new Audio();

        //event listeners
        window.addEventListener('keydown', e => {
            if ((e.key === '1' || e.key === 'Enter' || e.key === ' ') && !this.fired) this.player.shoot();
            this.fired = true;
            if (this.keys.indexOf(e.key) === -1) this.keys.push(e.key);
            if (e.key.toLowerCase() === 'r') this.reset();
        })

        window.addEventListener('keyup', e => {
            this.fired = false;
            const index = this.keys.indexOf(e.key);
            if (index > -1) this.keys.splice(index, 1);
        })
    }
    render(context: CanvasRenderingContext2D, deltaTime: number) {
        //sprite logic
        if (this.spriteTimer > this.spriteInterval) {
            this.spriteUpdate = true;
            this.spriteTimer = 0;
        } else {
            this.spriteUpdate = false;
            this.spriteTimer += deltaTime;
        }
        this.drawStatusText(context);
        this.projectilesPool.forEach(projectile => {
            projectile.update();
            projectile.draw(context);
        });
        this.player.draw(context);
        this.player.update();
 
        this.waves.forEach(wave => {
            wave.render(context);
            if (wave.enemies.length < 1 && !wave.nextWaveTrigger && !this.gameOver) {
                this.newWave();
                this.waveCount++;
                wave.nextWaveTrigger = true;
                if (this.player.lives <= this.player.maxLives) this.player.lives++;
            } 
        });
    }
    //create projectiles object pool
    createProjectiles() {
        for (let i = 0; i < this.numbersOfProjectiles; i++) {
            this.projectilesPool.push(new Projectile());
        }
    }
    //get free projectile objext from the pool
    getProjectile() {
        for (let i = 0; i < this.projectilesPool.length; i++) {
            if(this.projectilesPool[i].free) return this.projectilesPool[i];
        }
    }
    //collision detection between 2 rectangles
    checkCollision(a: Enemy, b: Projectile) {
        return (
            a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
        ) 
    }
    drawStatusText(context: CanvasRenderingContext2D) {
        context.save();
        context.shadowOffsetX = 1.5;
        context.shadowOffsetY = 1.5; 
        context.shadowColor ='black';
        context.fillText('Score: ' + this.score, 20, 40);
        context.fillText('Wave: ' + this.waveCount, 20, 65);
        for (let i = 0; i < this.player.maxLives; i++) {
            if ( this.player.lives < 2) {
                context.fillStyle = '#f1b963';
            } else {
                context.fillStyle = '#3baea0';
            }
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            context.shadowColor = 'none';
            context.fillRect(12 * i, 0, 20, 16)
        }
        for (let i = 0; i < this.player.lives; i++) {
            if ( this.player.lives < 2) {
                context.fillStyle = '#ff7e67';
            } else {
              context.fillStyle = '#118a7e';
            }
            context.shadowOffsetX = 0.6;
            context.shadowOffsetY = 0.6;
            context.shadowColor ='black';
            context.fillRect(12 * i, 0, 10, 15);
        }
        if (this.gameOver) {
            context.textAlign = 'center';
            context.font = '80px Impact';
            context.fillText('Game Over!', this.width * 0.5, this.height * 0.5);
            context.font = '15px Ariel';
            context.fillText('Press R to play again.', this.width * 0.5, this.height * 0.54);
        }
        context.restore();
    }
    newWave() {
        if(Math.random() < 0.6 && this.columns * this.enemySize < this.width * 0.9) {
            this.columns++;
        } else if (this.rows * this.enemySize < this.height * 0.6) {
            this.rows++;
        }
        this.waves.push(new Wave(this));

    }
    reset() {
        this.columns = 2;
        this.rows = 1;
        this.waveCount = 1;
        this.spriteUpdate = false;
        this.spriteTimer = 0;
        this.score = 0;
        this.gameOver = false;
        this.player.lives = 3;
        this.waves = [];
        this.newWave();
        this.sound.play(this.sound.win); 
    }
}