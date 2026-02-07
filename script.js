function unlock() {
  const code = document.getElementById("passcode").value;
  const correctCode = "44319"; // CHANGE THIS ❤️

  if (code === correctCode) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("bgMusic").play();
  } else {
    alert("Wrong code 😛 Try again");
  }
}



document.getElementById("valentineBtn").addEventListener("click", () => {
  const answer = document.getElementById("answer");
  answer.classList.add("show");

  for (let i = 0; i < 10; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";

  heart.style.left = Math.random() * 100 + "%";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2500);
}
