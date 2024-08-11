const questionElement = document.getElementById("question h3");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionNumber = document.getElementsByClassName("ques_num h3");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = Questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  // questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  questionNumber.innerHTML = `0 ${questionNo} /25`;

  currentQuestion.options.forEach((ans) => {
    const button = document.createElement("button");
    button.innerHTML = ans.answer;
    button.classList.add("option");
    answerButtons.appendChild(button);

    if (ans.answer) {
      button.dataset.answer = ans.answer;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  // const isCorrect = selectedBtn.dataset.options.answer === answer;
  // if(isCorrect) {
  //   selectedBtn.classList.add("correct");
  // } else {
  //   selectedBtn.classList.add("incorrect")
  // }
  for(let i=0; i<=options.length; i++) {
    if(selectedBtn.dataset.options[i] == answer) {
      selectedBtn.classList.add("correct");
    } else{
      selectedBtn.classList.add("incorrect");
    }
  }
}

startQuiz();