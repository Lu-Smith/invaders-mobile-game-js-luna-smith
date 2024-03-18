import Player from "./player";
import Projectile from "./projectile";

export default class Game {
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    player: Player;
    keys: string[];
    projectilesPool: Projectile [];
    numbersOfProjectiles: number;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.keys = [];
        this.player = new Player(this);
        this.projectilesPool = [];
        this.numbersOfProjectiles = 10;
        this.createProjectiles();
        console.log(this.projectilesPool);

        //event listeners
        window.addEventListener('keydown', e => {
            if (this.keys.indexOf(e.key) === -1) this.keys.push(e.key);
        })

        window.addEventListener('keyup', e => {
            const index = this.keys.indexOf(e.key);
            if (index > -1) this.keys.splice(index, 1);
        })
    }
    render(context: CanvasRenderingContext2D) {
        this.player.draw(context);
        this.player.update();
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

}