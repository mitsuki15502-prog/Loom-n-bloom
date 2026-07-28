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
  document.getElementById("surprise-result").innerHTML = surprises[randomIndex];
}
