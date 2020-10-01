let question
fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple', {
    methods: 'GET',
    mode: 'cors'
}).then(response => response.json())
    .then(data => {
        question = data
        console.log(question)
        webController = {
            init :function() {
                view.renderQuestion()
                document.getElementById("quiz_form").addEventListener('submit',(e) => {
                    e.preventDefault()
                    const listOptions = document.querySelectorAll("input")
                    console.log(listOptions)
                    const listCheckedAnswers = []
                    for (option of  listOptions) {
                        if (option.className === "correct_answer") {
                            document.getElementById(option.id).nextElementSibling.classList.add('right')
                        }
                        if (option.checked) listCheckedAnswers.push(option)  
                    }
                    console.log(listCheckedAnswers)
                    for (let i=0 ;i<listCheckedAnswers.length ;i++) {
                        if (listCheckedAnswers[i].className === "incorrect_answer") {
                            document.getElementById(listCheckedAnswers[i].id).nextElementSibling.classList.add('wrong')
                        }
                        // if (listCheckedAnswers[i].className === "correct_answer") {
                        //     document.getElementById(listCheckedAnswers[i].id).nextElementSibling.classList.add('right')
                        // }
                    }
                })
                document.querySelector(".do_again").addEventListener('click',() => { 
                    document.querySelector(".quiz_wrapper").innerHTML=''
                    view.renderQuestion()
                })


            }
        }
        view = {
            renderQuestion: function () {
                for (let i = 0; i < question.results.length; i++) {
                    const questionWrapper = document.createElement("div")
                    questionWrapper.classList.add("question_wrapper")
                    const questionHeader = document.createElement("div")
                    questionHeader.classList.add("question_header")
                    questionHeader.innerText = `Câu ${i + 1}`
                    questionWrapper.appendChild(questionHeader)
                    const questionContent = document.createElement("div")
                    questionContent.classList.add("question")
                    questionContent.innerText = question.results[i].question
                    questionWrapper.appendChild(questionContent)
                    const listAnswers = document.createElement("ul")
                    listAnswers.classList.add("list_answers")
                    questionWrapper.appendChild(listAnswers)
                    for (let j = 0; j < 3; j++) {
                        const answerWrapper = document.createElement("li")
                        const incorrectAnswer = document.createElement("input")
                        incorrectAnswer.type = "radio"
                        incorrectAnswer.classList.add("incorrect_answer")
                        incorrectAnswer.id = `question${i}_answer${j+1}`
                        incorrectAnswer.name = `${i}`
                        const incorrectAnswerContent = document.createElement("label")
                        incorrectAnswerContent.innerText = question.results[i].correct_answer
                        incorrectAnswerContent.innerText = question.results[i].incorrect_answers[j]
                        answerWrapper.appendChild(incorrectAnswer)
                        answerWrapper.appendChild(incorrectAnswerContent)
                        listAnswers.appendChild(answerWrapper)
                    }
                    const correctAnswerWrapper = document.createElement("li")
                    const correctAnswer = document.createElement("input")
                    correctAnswer.type = "radio"
                    correctAnswer.classList.add("correct_answer")
                    correctAnswer.id = `question${i}_answer4`
                    correctAnswer.name = `${i}`
                    const correctAnswerContent = document.createElement("label")
                    correctAnswerContent.innerText = question.results[i].correct_answer
                    correctAnswerWrapper.appendChild(correctAnswer)
                    correctAnswerWrapper.appendChild(correctAnswerContent)
                    listAnswers.appendChild(correctAnswerWrapper)
                    document.querySelector(".quiz_wrapper").appendChild(questionWrapper)
                }
            },
            
        }
        webController.init()

    })
