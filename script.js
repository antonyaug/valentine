const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");
const celebrate = document.getElementById("celebrate");
const buttons = document.getElementById("buttons");
const question = document.getElementById("question");

// Move NO button
function moveButton() {
  const maxX = card.clientWidth - noBtn.clientWidth;
  const maxY = card.clientHeight - noBtn.clientHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Desktop
noBtn.addEventListener("mouseenter", moveButton);

// Mobile
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});

// YES clicked
function sayYes() {
  question.style.display = "none";
  buttons.style.display = "none";
  celebrate.style.display = "block";
  createHearts();
}

// Hearts animation
function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}
