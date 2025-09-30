// 🎉 Confetti Effect 🎉
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2-5s fall
  confetti.innerText = "🎉";
  document.body.appendChild(confetti);

  setTimeout(() => confetti.remove(), 5000);
}

// Generate confetti repeatedly
setInterval(createConfetti, 300);

// CSS for confetti
const style = document.createElement('style');
style.innerHTML = `
.confetti {
  position: fixed;
  top: -10px;
  font-size: 24px;
  animation: fall linear forwards;
}

@keyframes fall {
  to {
    transform: translateY(100vh);
  }
}`;
document.head.appendChild(style);

// Auto start background music after user interaction (for browser rules)
document.body.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  music.play();
}, { once: true });
