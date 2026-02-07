function unlock() {
  const code = document.getElementById("passcode").value.trim();
  const correctCode = "44319";

  if (code === correctCode) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("bgMusic").play();
  } else {
    alert("Wrong code 😛 Try again");
    document.getElementById("passcode").value = "";
  }
}

document.getElementById("valentineBtn").addEventListener("click", () => {
  document.getElementById("answer").classList.add("show");

  for (let i = 0; i < 10; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "%";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 2500);
}
