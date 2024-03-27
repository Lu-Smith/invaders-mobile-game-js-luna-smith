export default class Symbol {
    characters: string;
    x: number;
    y: number;
    fontSize: number;
    text: string;
    canvasHeight: number;

    constructor(x: number, y: number, fontSize: number, canvasHeight: number){
        this.characters = 'ALERT! ALIEN INVASION!';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight = canvasHeight;
    }
    draw(context: CanvasRenderingContext2D){
        this.text = this.characters;
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.99) {
            this.y = 0;
        } else {
            this.y += 1;
        }
    }
}