import Symbol from "./symbol";

export default class Effect {
    fontSize: number;
    columns: number;
    symbols: Symbol[];
    canvasWidth: number;
    canvasHeight: number;

    constructor(canvasWidth: number, canvasHeight: number){
         this.canvasWidth = canvasWidth;
         this.canvasHeight = canvasHeight;
         this.fontSize = 25;
         if (this.canvasWidth <= 800) this.fontSize = 10;
         if (this.canvasWidth > 800) this.fontSize = 25;
         this.columns = this.canvasWidth/this.fontSize;
         this.symbols = [];
         this.#initialize();
    }
    #initialize(){
         if (this.canvasWidth <= 800) this.fontSize = 10;
         if (this.canvasWidth > 800) this.fontSize = 25;
         for (let i = 0; i < this.columns; i++) {
            this.symbols[i] = new Symbol(i , 0, this.fontSize, this.canvasHeight);
         }
    }
    resize(width: number, height: number){
         this.canvasWidth = width;
         this.canvasHeight = height;
         this.columns = this.canvasWidth/this.fontSize;
         this.symbols = [];
         this.#initialize();
    }
}