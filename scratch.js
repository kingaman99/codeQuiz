// 5 questions - 2-4 choices per question 
/**
 * start button 
 * when user clicks start button
 *  start timer 
 * 40 seconds 
 * present first question to user 
 * when user clicks answer 
 * check answer 
 * show right or wrong 
 *if correct increase score 
 *  if wrong minus time 
 * next question pops up 
 * repeat 
 * when no more questions end game 
 * if timer = 0 end game 
 * 
 * end of game 
 *  show score then 
 * user name 
 * save user name and score 
 * 
 * 
 */

const questions = [
    
    {
        text: " Does Lebron James have 6 rings?",
        opitions: [
            {
                text: "True ",
                correct: true,
            },
            {
                text: "False ",
                correct: false,
            },
            
        ]
    },
    {
        text: " Kobe Bryant is still alive?",
        opitions: [
            {
                text: "Answer 1 ",
                correct: true,
            },
            {
                text: "Answer 2 ",
                correct: false,
            },
            
        ]
    },
    {
        text: " Is there an NBA team in Utah?",
        opitions: [
            {
                text: "Answer 1 ",
                correct: true,
            },
            {
                text: "Answer 2 ",
                correct: false,
            },

        ]
    },
    {
        text: " The Utah jazz have won a NBA championship",
        opitions: [
            {
                text: "Answer 1 ",
                correct: true,
            },
            {
                text: "Answer 2 ",
                correct: false,
            },

        ]
    },
    {
        text: " Bill Russell has 12 NBA chapionships rings?",
        opitions: [
            {
                text: "Answer 1 ",
                correct: true,
            },
            {
                text: "Answer 2 ",
                correct: false,
            },

        ]
    },
]


let currentQuestion = 0

let interval;
const stop = function () {
    clearInterval(interval)
}




const start = function () {
    insertquestions()
    interval = setInterval(function () {
        time--
        console.log(time)
        Time.innerHTML = time
        if (time < 1) {
            clearInterval(interval)
        }
    }, 1000)
}
let time = 40
let Time = document.getElementById("time") 

let questionindex = 0 
let button = document.getElementById("button")
console.log(button)
button.addEventListener("click",function(){

start()
})
const insertquestions = function (){
    let questionel = document.getElementById("questionel")
    questionel.innerHTML = questions [questionindex].text
let answers = document.getElementById("answers")
answers.innerHTML= questions[questionindex].opitions[0].text
let answers2 = document.getElementById("answers2")
answers2.innerHTML= questions[questionindex].opitions[1].text
}

let next = document.getElementById("next")
next.addEventListener("click" ,function(){
questionindex ++
if(questionindex<5){
    console.log("if")
    insertquestions()
}
else{
stop()
console.log("else")
}
})
