const correctAnswers = ["B", "A", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  console.log(score);
  // show result on page
  window.scrollTo(0, 0);

  result.classList.remove("d-none");
  if (score > 50) {
    result.querySelector(".man").classList.remove("d-none");
  } else {
    result.querySelector(".sissy").classList.remove("d-none");
  }
  span = result.querySelector("span").textContent = `${score}%`;
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
