function startCelebration() {
  // 🎉 Confetti burst
  var duration = 3 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());

  // 🎈 Add balloons
  for (let i = 0; i < 10; i++) {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.background = getRandomColor();
    balloon.style.animationDuration = (6 + Math.random() * 4) + "s";
    document.body.appendChild(balloon);

    // remove balloon after animation
    setTimeout(() => {
      balloon.remove();
    }, 10000);
  }
}

// 🎨 Random balloon colors
function getRandomColor() {
  const colors = ["#ff4e50", "#f9d423", "#24c6dc", "#3a1c71", "#ff6a00", "#00b09b"];
  return colors[Math.floor(Math.random() * colors.length)];
}
