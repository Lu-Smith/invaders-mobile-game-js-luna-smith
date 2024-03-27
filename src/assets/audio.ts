import Lose from './media/lost.mp3';
import Win from './media/win.mp3';
import Destroyed1 from './media/destroyed1.mp3';
import Destroyed2 from './media/destroyed2.mp3';
import Shoot1 from './media/shoot1.mp3';

export default class Audio {
    destroyed1: HTMLAudioElement; 
    destroyed2: HTMLAudioElement;
    destroyed: HTMLAudioElement[];
    win: HTMLAudioElement;
    lose: HTMLAudioElement;
    shoot1: HTMLAudioElement;
    createAudioElement: (src: string) => HTMLAudioElement;

    constructor() {
        this.createAudioElement = (src: string) => {
            const audio = document.createElement('audio');
            audio.src = src;
            return audio;
        };
        
        this.destroyed1 = this.createAudioElement(Destroyed1);
        this.destroyed2 = this.createAudioElement(Destroyed2);
        this.destroyed = [this.destroyed1, this.destroyed2];
        this.win = this.createAudioElement(Win);
        this.lose = this.createAudioElement(Lose);
        this.shoot1 = this.createAudioElement(Shoot1);
    }
    play(sound: HTMLAudioElement ) {
        sound.currentTime = 0;
        sound.play();
    }
}