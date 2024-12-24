//constructor function

// let employee1={
//     name:'aya',
//     salary:5000
// }
// let employee2={
//     name:'ali',
//     salary:6000
// }
// let employee3={
// name :'ahmed',
// salary:7000
// }
// let employee4={
//     name:'mohamed',
//     salary:8000
// }


// function Employee(name,salary){
//     this.name = name
//     this.salary = salary+500
// }

// let employee1 = new Employee('aya',5000)
// console.log(employee1)


/**
 * name:aya
 * salaly:5000
 */

// class Employee{
//     constructor(name,salary){
//         this.name = name 
//         this.salary = salary
//     }
//     work(){
//       console.log('work')  
//     }
// }

// let employee1 = new Employee('aya',5000)
// console.log(employee1)
// employee1.work()


/////////////////////////////////////start workshop/////////////////////////////////////////////////////////////////////////////
import { Quiz } from "./quiz.js";
import { Question } from "./question.js";

const categoryMenu = document.getElementById("categoryMenu")
const difficultyOptions = document.getElementById("difficultyOptions")
const questionsNumber = document.getElementById("questionsNumber")
const startQuiz = document.getElementById("startQuiz")
const quizOptions = document.getElementById("quizOptions")
export let allQuestion ;
export let quiz;

startQuiz.addEventListener("click", async function(){
    quizOptions.classList.add("d-none")
    quiz = new Quiz(categoryMenu.value , difficultyOptions.value , questionsNumber.value)
    allQuestion = await quiz.getQuizQuestions()
    console.log(allQuestion);
    let question = new Question(0)
    question.displayQuiz()
    console.log(question);
    
})