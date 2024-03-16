import './style.css';
import Game from './assets/game';

window.addEventListener('load', function() {
  const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 400;

    const game = new Game(canvas);
    game.render();
  }
});


