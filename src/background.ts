import Effect from "./assets/background/effect";

const canvas = document.getElementById('canvas2') as HTMLCanvasElement;

if (canvas){
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (ctx) {
        let gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 400, canvas.width/2, canvas.height/2, 600);
        gradient.addColorStop(0, '#090030');
        gradient.addColorStop(0.3, '#0c3c78');
        gradient.addColorStop(0.5, '#111f4d');
        gradient.addColorStop(0.9, '#512e5e');
        gradient.addColorStop(1, '#fff');

        const effect = new Effect(canvas.width, canvas.height);
        let lastTime = 0;
        const fps = 15;
        const nextFrame = 800/fps;
        let timer = 0;
        function animate(timeStamp: number) {
            const deltaTime = timeStamp - lastTime;
            lastTime = timeStamp;
            if (timer > nextFrame && ctx) {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.textAlign = 'center';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = gradient; 
                ctx.font = effect.fontSize + 'px monospace';
                effect.symbols.forEach(symbol => symbol.draw(ctx));
                timer = 0;
            } else {
                timer += deltaTime;
            }
           
            requestAnimationFrame(animate);
        }
        animate(0);

        window.addEventListener('resize', function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            effect.resize(canvas.width, canvas.height);
        })
    }
}













