const questions = document.querySelectorAll(".questions-accordeon");
const answers = document.querySelectorAll(".answer-accordeon");
console.log(questions);
var flag = 0;

questions.forEach((question, i) => {
  questions[i].addEventListener("click", () => {
    flag = i;
    answers.forEach((answer, i) => {
      if (flag === i) {
        answers[i].classList.toggle("activa");
        questions[i].classList.toggle("activa");
      } else {
        answers[i].classList.remove("activa");
        questions[i].classList.remove("activa");
      }
    });
  });
});
