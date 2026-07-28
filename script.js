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
const surprises = [
    "🌸 Cute Pastel Sticker Sheet! 🌸",
    "💖 Sparkly Heart Charm! 💖",
    "🎀 Bonus Glow-in-the-Dark Loom Bands! 🎀"
];

function revealSurprise() {
    const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
    document.getElementById("surprise-result").innerText = randomSurprise;
}

function startMiffyGame() {
    const container = document.getElementById('game-container');
    container.style.display = 'block';
    
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    let miffy = { x: 40, y: 115, width: 32, height: 45, vy: 0, gravity: 0.55, jump: -8.5, grounded: true };
    let obstacle = { x: 300, y: 125, w: 24, h: 35, speed: 3 };
    let score = 0;
    let gameOver = false;

    canvas.onclick = function() {
        if (miffy.grounded && !gameOver) {
            miffy.vy = miffy.jump;
            miffy.grounded = false;
        } else if (gameOver) {
            obstacle.x = 300;
            score = 0;
            obstacle.speed = 3;
            gameOver = false;
        }
    };

    function drawMiffyImageStyle(x, y) {
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.roundRect(x + 5, y - 22, 7, 24, 4);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.roundRect(x + 20, y - 22, 7, 24, 4);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x + 16, y - 2, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#000000';
        ctx.fillRect(x + 10, y - 5, 3, 4);
        ctx.fillRect(x + 19, y - 5, 3, 4);
        
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x + 13, y + 2);
        ctx.lineTo(x + 19, y + 2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(x + 16, y - 0.5);
        ctx.lineTo(x + 16, y + 4.5);
        ctx.stroke();

        ctx.fillStyle = '#ff3366';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x + 8, y + 12);
        ctx.lineTo(x + 24, y + 12);
        ctx.lineTo(x + 28, y + 32);
        ctx.lineTo(x + 4, y + 32);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.roundRect(x + 1, y + 15, 6, 12, 3);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.roundRect(x + 25, y + 15, 6, 12, 3);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.roundRect(x + 8, y + 32, 6, 6, 2);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.roundRect(x + 18, y + 32, 6, 6, 2);
        ctx.fill();
        ctx.stroke();
    }

    // Kawaii Mario-style mystery block / mushroom obstacle
    function drawKawaiiObstacle(x, y) {
        // Main Block Body (Classic Question Block / Item Box style in cute gold/pink)
        ctx.fillStyle = '#ffcc00';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(x, y, 24, 24, 5);
        ctx.fill();
        ctx.stroke();

        // Inner white/pink accent box
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.roundRect(x + 4, y + 4, 16, 16, 3);
        ctx.fill();
        ctx.stroke();

        // Kawaii Sparkle/Star in the center instead of a plain question mark
        ctx.fillStyle = '#ff3399';
        ctx.beginPath();
        ctx.arc(x + 12, y + 12, 5, 0, Math.PI * 2);
        ctx.fill();

        // Little cute face on the block
        ctx.fillStyle = '#000000';
        ctx.fillRect(x + 9, y + 10, 2, 2);
        ctx.fillRect(x + 13, y + 10, 2, 2);

        // Stand base for the block
        ctx.fillStyle = '#cc6600';
        ctx.fillRect(x + 8, y + 24, 8, 11);
        ctx.strokeStyle = '#000000';
        ctx.strokeRect(x + 8, y + 24, 8, 11);
    }

    function gameLoop() {
        ctx.fillStyle = '#fff0f5';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Ground line
        ctx.fillStyle = '#ffb3d1';
        ctx.fillRect(0, 160, canvas.width, 40);

        if (!gameOver) {
            miffy.vy += miffy.gravity;
            miffy.y += miffy.vy;

            if (miffy.y > 115) {
                miffy.y = 115;
                miffy.vy = 0;
                miffy.grounded = true;
            }

            obstacle.x -= obstacle.speed;
            if (obstacle.x < -30) {
                obstacle.x = 320;
                score++;
                obstacle.speed += 0.15;
            }

            if (
                miffy.x < obstacle.x + obstacle.w &&
                miffy.x + miffy.width > obstacle.x &&
                miffy.y < obstacle.y + obstacle.h &&
                miffy.y + miffy.height > obstacle.y
            ) {
                gameOver = true;
            }
        }

        drawMiffyImageStyle(miffy.x, miffy.y);
        drawKawaiiObstacle(obstacle.x, obstacle.y);

        ctx.fillStyle = '#cc0066';
        ctx.font = '12px sans-serif';
        ctx.fillText("Score: " + score, 10, 20);

        if (gameOver) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
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

