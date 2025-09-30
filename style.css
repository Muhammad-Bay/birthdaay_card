const blowBtn = document.getElementById("blowBtn");
const hideBtn = document.getElementById("hideBtn");
const cake = document.getElementById("cake");

blowBtn.addEventListener("click", () => {
  const flames = document.querySelectorAll(".flame");
  const smokes = document.querySelectorAll(".smoke");

  flames.forEach(flame => flame.style.display = "none");
  smokes.forEach(smoke => {
    smoke.classList.add("show");
    setTimeout(() => smoke.classList.remove("show"), 2000);
  });

  // Confetti
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.7 }
  });
});

hideBtn.addEventListener("click", () => {
  cake.style.display = "none";
});
