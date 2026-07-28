// Real Loom Band Styles & Color Combos!
const surprises = [
  "👑 Goddess Color Combo Loom Band + Pearl Accent!",
  "🍋 Lemon & Lime Color Combo Loom Band!",
  "🌸 Pastel Color Combo Loom Band!",
  "✨ Custom Color Combination Loom Band!",
  "🦪 Cute Pearl Jewelry Surprise!",
  "💖 Pastel Combo Loom Band + Secret Bonus Item!"
];

function revealSurprise() {
  const randomIndex = Math.floor(Math.random() * surprises.length);
  document.getElementById("surprise-result").innerHTML = surprises[randomIndex] 
}
function startMiffyGame() {
    const container = document.getElementById('game-container');
    container.style.display = 'block';
    
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    let miffy = { x: 40, y: 140, size: 20, vy: 0, gravity: 0.6, jump: -9, grounded: true };
    let obstacle = { x: 300, y: 140, w: 15, h: 25, speed: 3 };
    let score = 0;
    let gameOver = false;

    canvas.onclick = function() {
        if (miffy.grounded && !gameOver) {
            miffy.vy = miffy.jump;
            miffy.grounded = false;
        } else if (gameOver) {
            obstacle.x = 300;
            score = 0;
            gameOver = false;
        }
    };

    function gameLoop() {
        ctx.fillStyle = '#fff0f5';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#ffb3d1';
        ctx.fillRect(0, 160, canvas.width, 40);

        if (!gameOver) {
            miffy.vy += miffy.gravity;
            miffy.y += miffy.vy;

            if (miffy.y > 140) {
                miffy.y = 140;
                miffy.vy = 0;
                miffy.grounded = true;
            }

            obstacle.x -= obstacle.speed;
            if (obstacle.x < -20) {
                obstacle.x = 320;
                score++;
                obstacle.speed += 0.2;
            }

            if (
                miffy.x < obstacle.x + obstacle.w &&
                miffy.x + miffy.size > obstacle.x &&
                miffy.y < obstacle.y + obstacle.h &&
                miffy.y + miffy.size > obstacle.y
            ) {
                gameOver = true;
            }
        }

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(miffy.x, miffy.y, miffy.size, miffy.size);
        ctx.fillRect(miffy.x + 3, miffy.y - 8, 4, 10);
        ctx.fillRect(miffy.x + 13, miffy.y - 8, 4, 10);
        
        ctx.fillStyle = '#ff66b2';
        ctx.fillRect(miffy.x + 8, miffy.y - 4, 4, 4);

        ctx.fillStyle = '#ff4d94';
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);

        ctx.fillStyle = '#cc0066';
        ctx.font = '12px sans-serif';
        ctx.fillText("Score: " + score, 10, 20);

        if (gameOver) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#cc0066';
            ctx.font = '14px sans-serif';
            ctx.fillText("Game Over! Tap to Retry", 70, 100);
        } else {
            requestAnimationFrame(gameLoop);
        }
    }

    gameLoop();
}

function revealSurprise() {
    const surprises = [
        "🌸 Cute Pastel Sticker Sheet! 🌸",
        "💖 Sparkly Heart Charm! 💖",
        "🎀 Bonus Glow-in-the-Dark Loom Bands! 🎀"
    ];
    const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
    document.getElementById("surprise-result").innerText = randomSurprise;
}
