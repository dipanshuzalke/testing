const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Questions = require("./models/question.js");
 

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

let MONGO_URL = ("mongodb://127.0.0.1:27017/quiz");

main()
   .then(()=>{
    console.log("connected to DB");
   })
   .catch((err)=>{
    console.log(err);
   });

async function main(){
    await mongoose.connect(MONGO_URL);
}


function RandomQuestion() {
    const randomIndex = Math.floor(Math.random() * 123);
    return randomIndex;
}
RandomQuestion();

// const questionElement = document.getElementById("question h3");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");
// const questionNumber = document.getElementsByClassName("ques_num h3");

// let currentQuestionIndex = 0;
// let score = 0;

// //Start Quiz
// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerHTML = "Next";
//   showQuestion();
// }

// //Show Questions
// function showQuestion() {
//   resetState();
//   let currentQuestion = Questions[currentQuestionIndex];
//   let questionNo = currentQuestionIndex + 1;
//   // questionElement.innerHTML = questionNo + "." + currentQuestion.question;
//   questionNumber.innerHTML = `0 ${questionNo} /25`;

//   currentQuestion.Questions.forEach((option) => {
//     const button = document.createElement("button");
//     button.innerHTML = ans.answer;
//     button.classList.add("option");
//     answerButtons.appendChild(button);

//     if (option.answer) {
//       button.dataset.answer = ans.answer;
//     }

//     button.addEventListener("click", selectAnswer);
//   });
// }

// //Question reset state
// function resetState() {
//   nextButton.style.display = "none";
//   while(answerButtons.firstChild) {
//     answerButtons.removeChild(answerButtons.firstChild);
//   }
// }

// //Select Answer
// function selectAnswer(e) {
//   const selectedBtn = e.target;
//   // const isCorrect = selectedBtn.dataset.options.answer === answer;
//   // if(isCorrect) {
//   //   selectedBtn.classList.add("correct");
//   // } else {
//   //   selectedBtn.classList.add("incorrect")
//   // }
//   for(let i=0; i<=options.length; i++) {
//     if(selectedBtn.dataset.options[i] == answer) {
//       selectedBtn.classList.add("correct");
//     } else{
//       selectedBtn.classList.add("incorrect");
//     }
//   }
// }

// //start quiz initialization
// startQuiz();


//index route
app.get("/questions", async (req,res)=>{
    let AllQuestions = await Questions.find({});
    console.log(AllQuestions);
    res.render("allques.ejs",{ AllQuestions, RandomQuestion});
});

app.get("/home", (req, res) => {
    res.render("home.ejs");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});



    
    
