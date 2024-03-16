export default class Game {
    canvas: HTMLCanvasElement;
    width: number;
    height: number;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
    render() {
        console.log(this.width, this.height);
    }
}