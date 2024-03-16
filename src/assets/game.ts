import Player from "./player";

export default class Game {
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    player: Player;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.player = new Player(this);
    }
    render(context: CanvasRenderingContext2D) {
        this.player.draw(context);
        this.player.update();
    }
}