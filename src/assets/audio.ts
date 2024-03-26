export default class Audio {
    destroyed1: HTMLAudioElement; 
    destroyed2: HTMLAudioElement;
    destroyed: HTMLAudioElement[];
    win: HTMLAudioElement;
    lose: HTMLAudioElement;
    shoot1: HTMLAudioElement;

    constructor() {
        this.shoot1 = document.getElementById('shoot1') as HTMLAudioElement;
        this.destroyed1 = document.getElementById('destroyed1') as HTMLAudioElement;
        this.destroyed2 = document.getElementById('destroyed2') as HTMLAudioElement;
        this.destroyed = [this.destroyed1, this.destroyed2];
        this.win = document.getElementById('win') as HTMLAudioElement ;
        this.lose = document.getElementById('lose') as HTMLAudioElement ;
    }
    play(sound: HTMLAudioElement ) {
        sound.currentTime = 0;
        sound.play();
    }
}