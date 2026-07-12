const questions = [

{
question:"Which language is used for web page structure?",
answers:[
{text:"HTML",correct:true},
{text:"Python",correct:false},
{text:"Java",correct:false},
{text:"C++",correct:false}
]
},

{
question:"Which language is used for styling webpages?",
answers:[
{text:"CSS",correct:true},
{text:"HTML",correct:false},
{text:"SQL",correct:false},
{text:"Python",correct:false}
]
},

{
question:"Which language makes webpages interactive?",
answers:[
{text:"JavaScript",correct:true},
{text:"Java",correct:false},
{text:"C",correct:false},
{text:"PHP",correct:false}
]
},

{
question:"Which company developed Java?",
answers:[
{text:"Sun Microsystems",correct:true},
{text:"Google",correct:false},
{text:"Microsoft",correct:false},
{text:"Apple",correct:false}
]
},

{
question:"Which database language is used for queries?",
answers:[
{text:"SQL",correct:true},
{text:"Python",correct:false},
{text:"HTML",correct:false},
{text:"CSS",correct:false}
]
}

];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
const feedback=document.getElementById("feedback");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){

currentQuestionIndex=0;
score=0;
nextButton.innerHTML="Next";

showQuestion();

}

function showQuestion(){

resetState();

let currentQuestion=questions[currentQuestionIndex];

questionElement.innerHTML=(currentQuestionIndex+1)+". "+currentQuestion.question;

currentQuestion.answers.forEach(answer=>{

const button=document.createElement("button");

button.innerHTML=answer.text;

button.classList.add("btn");

button.dataset.correct=answer.correct;

button.addEventListener("click",selectAnswer);

answerButtons.appendChild(button);

});

}

function resetState(){

nextButton.style.display="none";

feedback.innerHTML="";

while(answerButtons.firstChild){

answerButtons.removeChild(answerButtons.firstChild);

}

}

function selectAnswer(e){

const selectedBtn=e.target;

const isCorrect=selectedBtn.dataset.correct==="true";

if(isCorrect){

selectedBtn.classList.add("correct");

feedback.innerHTML="✅ Correct Answer!";

score++;

}

else{

selectedBtn.classList.add("wrong");

feedback.innerHTML="❌ Wrong Answer!";

}

Array.from(answerButtons.children).forEach(button=>{

if(button.dataset.correct==="true"){

button.classList.add("correct");

}

button.disabled=true;

});

nextButton.style.display="inline-block";

}

function showScore(){

document.getElementById("quiz").classList.add("hide");

document.getElementById("result").classList.remove("hide");

document.getElementById("score").innerHTML=
"You scored "+score+" out of "+questions.length;

}

function handleNextButton(){

currentQuestionIndex++;

if(currentQuestionIndex<questions.length){

showQuestion();

}

else{

showScore();

}

}

nextButton.addEventListener("click",handleNextButton);

startQuiz();