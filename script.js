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

function valentine() {
  document.getElementById("answer").innerText =
    "Lol, I knew you’d click";
}
