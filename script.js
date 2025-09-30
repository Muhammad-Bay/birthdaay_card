// 🎉 Confetti Effect 🎉
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
  confetti.innerText = "🎉";
  document.body.appendChild(confetti);

  setTimeout(() => confetti.remove(), 5000);
}

setInterval(createConfetti, 300);

// Confetti CSS
const style = document.createElement('style');
style.innerHTML = `
.confetti {
  position: fixed;
  top: -10px;
  font-size: 24px;
  animation: fall linear forwards;
}
@keyframes fall { to { transform: translateY(100vh); } }
`;
document.head.appendChild(style);

// Background music trigger
document.body.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  music.play();
}, { once: true });

// 🕯️ Blow out candle
const cake = document.getElementById("cake");
const flame = document.getElementById("flame");
const smoke = document.getElementById("smoke");

cake.addEventListener("click", () => {
  flame.style.display = "none";  // Hide flame
  smoke.style.opacity = "1";     // Show smoke
  smoke.style.animation = "puff 2s forwards";

  // Remove smoke after 2s
  setTimeout(() => {
    smoke.style.opacity = "0";
    smoke.style.animation = "none";
  }, 2000);
});
