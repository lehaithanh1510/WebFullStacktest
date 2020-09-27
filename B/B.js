let question
fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple', {
    methods: 'GET',
    mode: 'cors'
}).then(response => response.json())
    .then(data => {
        question = data
        console.log(question)
        view = {
            renderQuestion: function () {
                for (let i = 0; i < question.results.length; i++) {
                    htmldoc = `
                <div class="question_header"> Câu %number% </div>
                <div class="question">%question%</div>
                <label for="answer1" class="answer"><input id="answer1"  type="radio" name="1"> %answer1%</label><br>
                <label for="answer2" class="answer"><input id="answer2"  type="radio" name="1"> %answer2%</label><br>
                <label for="answer3" class="answer"><input id="answer3"  type="radio" name="1"> %answer3%</label><br>
                <label for="answer4" class="answer"><input id="answer4"  type="radio" name="1"> %answer4%</label><br>
                `
                var newHtml = htmldoc.replace("%number%",i)
                newHtml = newHtml.replace("%question%",question.results[i].question)
                newHtml = newHtml.replace("%answer1%",question.results[i].correct_answer)
                newHtml = newHtml.replace("%answer2%",question.results[i].incorrect_answers[0])
                newHtml = newHtml.replace("%answer3%",question.results[i].incorrect_answers[1])
                newHtml = newHtml.replace("%answer4%",question.results[i].incorrect_answers[2])
                document.querySelector(".football_form").insertAdjacentHTML('beforeend',newHtml)
        
                }
            }
        }
        view.renderQuestion()

    }
    )
