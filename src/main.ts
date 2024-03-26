import './style.css';
import Game from './assets/game';

window.addEventListener('load', function() {
  const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = 600 * 0.8;
    canvas.height = 800 * 0.8;
    if (ctx) {
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 3;
      ctx.font = '20px Impact';
    }

    const game = new Game(canvas);

    let lastTime = 0; 
  
    function animate(timeStamp: number) {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      if (ctx) {
      game.render(ctx, deltaTime);
      requestAnimationFrame(animate);
      }
    };

    animate(0);
  }

});


