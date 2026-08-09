const openBtn = document.getElementById("openBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const petals = document.getElementById("petals");
const stars = document.getElementById("stars");
const cakeSection = document.getElementById("cakeSection");
const flame = document.getElementById("flame");
const cakeInstruction = document.getElementById("cakeInstruction");

cakeSection.addEventListener("click", () => {
  flame.classList.add("extinguished");
  cakeInstruction.textContent = "✨ Candle blown out! Your 24th wish is on its way! ✨";
  cakeInstruction.style.color = "#7efd8e";
  confettiBurst();
});

function makePetal() {
  const p = document.createElement("div");
  p.className = "petal";
  p.textContent = ["🎈", "✨", "🎉", "👑", "🎂", "⭐", "2️⃣", "4️⃣"][Math.floor(Math.random() * 8)];
  p.style.left = Math.random() * 100 + "vw";
  p.style.setProperty("--drift", (Math.random() * 260 - 130) + "px");
  p.style.animationDuration = (5 + Math.random() * 5) + "s";
  p.style.fontSize = (14 + Math.random() * 16) + "px";
  petals.appendChild(p);
  setTimeout(() => p.remove(), 11000);
}

setInterval(makePetal, 380);

for (let i = 0; i < 60; i++) {
  const s = document.createElement("div");
  s.className = "star";
  s.style.left = Math.random() * 100 + "vw";
  s.style.top = Math.random() * 100 + "vh";
  s.style.animationDelay = Math.random() * 2 + "s";
  stars.appendChild(s);
}

function confettiBurst() {
  for (let i = 0; i < 90; i++) {
    const c = document.createElement("div");
    c.textContent = ["🎉", "✨", "🍰", "🎁", "🎈", "👑", "🔥", "2️⃣4️⃣"][Math.floor(Math.random() * 8)];
    c.style.position = "fixed";
    c.style.left = "50vw";
    c.style.top = "45vh";
    c.style.zIndex = "30";
    c.style.pointerEvents = "none";
    c.style.fontSize = (14 + Math.random() * 20) + "px";
    document.body.appendChild(c);

    const x = (Math.random() * 2 - 1) * innerWidth;
    const y = (Math.random() * 2 - 1) * innerHeight;

    c.animate([
      { transform: "translate(-50%,-50%) scale(.2)", opacity: 1 },
      { transform: `translate(${x}px,${y}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], {
      duration: 1200 + Math.random() * 1000,
      easing: "cubic-bezier(.2,.8,.3,1)"
    }).onfinish = () => c.remove();
  }
}

openBtn.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.scrollIntoView({ behavior: "smooth", block: "center" });
  music.play().then(() => { musicBtn.classList.add("playing"); }).catch(() => {});
  confettiBurst();
  for (let i = 0; i < 25; i++) setTimeout(makePetal, i * 70);
});

document.getElementById("celebrate").addEventListener("click", () => {
  confettiBurst();
  for (let i = 0; i < 35; i++) setTimeout(makePetal, i * 50);
});

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.classList.add("playing");
  } else {
    music.pause();
    musicBtn.classList.remove("playing");
  }
});
