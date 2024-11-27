let timeLeft = 1500; // Thời gian đếm ngược (giây)

const countdownElement = document.querySelector(".times");

const countdownTimer = setInterval(() => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  countdownElement.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  if (timeLeft <= 0) {
    clearInterval(countdownTimer);
    countdownElement.textContent = "Hết giờ!";
  }

  timeLeft--;
}, 1000);
