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

    // Miffy character object with detailed dimensions
    let miffy = { x: 40, y: 125, width: 24, height: 35, vy: 0, gravity: 0.55, jump: -8.5, grounded: true };
    let obstacle = { x: 300, y: 130, w: 16, h: 30, speed: 3 };
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

    function drawMiffy(x, y) {
        // --- EARS ---
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 1.5;

        // Left Ear
        ctx.beginPath();
        ctx.ellipse(x + 6, y - 14, 4, 10, -0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Right Ear
        ctx.beginPath();
        ctx.ellipse(x + 18, y - 14, 4, 10, 0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // --- HEAD ---
        ctx.beginPath();
        ctx.arc(x + 12, y - 2, 11, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // --- FACE DETAILS (Eyes & Cross Mouth) ---
        ctx.fillStyle = '#000000';
        // Left Eye
        ctx.fillRect(x + 8, y - 4, 2, 3);
        // Right Eye
        ctx.fillRect(x + 14, y - 4, 2, 3);
        
        // Miffy's iconic cross mouth
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1;
        // Horizontal line of cross
        ctx.beginPath();
        ctx.moveTo(x + 10, y + 1);
        ctx.lineTo(x + 14, y + 1);
        ctx.stroke();
        // Vertical line of cross
        ctx.beginPath();
        ctx.moveTo(x + 12, y - 0.5);
        ctx.lineTo(x + 12, y + 2.5);
        ctx.stroke();

        // --- DRESS (Classic Orange Miffy Dress) ---
        ctx.fillStyle = '#ff6600'; // Orange dress
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x + 6, y + 9);
        ctx.lineTo(x + 18, y + 9);
        ctx.lineTo(x + 21, y + 23);
        ctx.lineTo(x + 3, y + 23);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // --- ARMS & LEGS ---
        ctx.fillStyle = '#ffffff';
        // Left arm
        ctx.fillRect(x + 2, y + 11, 3, 7);
        // Right arm
        ctx.fillRect(x + 19, y + 11, 3, 7);

        // Feet
        ctx.fillRect(x + 6, y + 23, 4, 3);
        ctx.fillRect(x + 14, y + 23, 4, 3);
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

            // Ground collision
            if (miffy.y > 125) {
                miffy.y = 125;
                miffy.vy = 0;
                miffy.grounded = true;
            }

            // Obstacle movement
            obstacle.x -= obstacle.speed;
            if (obstacle.x < -20) {
                obstacle.x = 320;
                score++;
                obstacle.speed += 0.15;
            }

            // Hitbox collision check
            if (
                miffy.x < obstacle.x + obstacle.w &&
                miffy.x + miffy.width > obstacle.x &&
                miffy.y + 10 < obstacle.y + obstacle.h &&
                miffy.y + miffy.height > obstacle.y
            ) {
                gameOver = true;
            }
        }

        // Draw detailed Miffy
        drawMiffy(miffy.x, miffy.y);

        // Draw obstacle (Cute block/flower box)
        ctx.fillStyle = '#ff4d94';
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);

        // Score text
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
