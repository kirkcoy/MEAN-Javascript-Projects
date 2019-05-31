var countDown = 0;
var points = 0;
var allowClick = true;
var difficultyValue = "";
var scoreCategoryValue = "";
var correctAnswerValue = "";
var questionOn = false;
var difficulty = {
    "easy" : 100,
    "medium" : 200,
    "hard" : 300
}
var apiCall = {
    "100geography" : "https://opentdb.com/api.php?amount=1&category=22&difficulty=easy&type=boolean",
    "200geography" : "https://opentdb.com/api.php?amount=1&category=22&difficulty=medium&type=boolean",
    "300geography" : "https://opentdb.com/api.php?amount=1&category=22&difficulty=hard&type=boolean",

    "100celebrities" : "https://opentdb.com/api.php?amount=1&category=26&difficulty=easy&type=boolean",
    "200celebrities" : "https://opentdb.com/api.php?amount=1&category=26&difficulty=medium&type=boolean",
    "300celebrities" : "https://opentdb.com/api.php?amount=1&category=26&difficulty=hard&type=boolean",

    "100vehicles" : "https://opentdb.com/api.php?amount=1&category=28&difficulty=easy&type=boolean",
    "200vehicles" : "https://opentdb.com/api.php?amount=1&category=28&difficulty=medium&type=boolean",
    "300vehicles" : "https://opentdb.com/api.php?amount=1&category=28&difficulty=hard&type=boolean",

    "100science" : "https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=boolean",
    "200science" : "https://opentdb.com/api.php?amount=1&category=17&difficulty=medium&type=boolean",
    "300science" : "https://opentdb.com/api.php?amount=1&category=17&difficulty=hard&type=boolean"
}

$(document).ready(function () {
    $('.clicked').click(function () {
        let scoreCategory = $(this).attr("id");
        _getQuestion(scoreCategory);
    });
})

// onClick Functions

function getNewQuestions(){
    if(countDown >= 12){
        _clear();
    } else {
        document.getElementById("alert").innerHTML =  
            `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                Please answer all question before you can continue with new questions.<strong> Enjoy the game.</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
    }
}

function resetGame(){
    _clear();
    points = 0;
    document.getElementById("points").innerHTML = `${points} points`;
}

function answer(answer){
    if(correctAnswerValue === answer){
        points = points + difficulty[difficultyValue];
        document.getElementById("points").innerHTML = `${points} points`;
        document.getElementById(scoreCategoryValue).innerHTML = 
            `<h4>Congratulations, your answer is correct.</h4><h4> ${correctAnswerValue} is the answer.</h4>`;
    } else {
        document.getElementById(scoreCategoryValue).innerHTML = 
            `<h4>Sorry, your answer is wrong.</h4><h4>The correct answer is ${correctAnswerValue}.</h4>`;
    }
    _setAfterAnswer();
}

// Helper Functions

function _getQuestion(scoreCategory){
    if (allowClick && document.getElementById(scoreCategory).classList.contains('on')) {
        $.get(apiCall[scoreCategory], function (res) {
            _setDetails(scoreCategory,res);
        }, "json");
        return false;
    } else if (questionOn && scoreCategoryValue != scoreCategory ){
        _alertOneQuestion();
    } 
}

function _findQuestion(scoreCategory,question){
    document.getElementById(scoreCategory).innerHTML = 
        `<h4> ${question} </h4>
        <form style="text-align: left;">
            <div class="form-check">
                <input id="" class="form-check-input checked" type="radio" name="True" onclick="answer('True')">
                <h4>True</h4>
            </div>
            <div class="form-check">
                <input id="" class="form-check-input checked" type="radio" name="False" onclick="answer('False')">
                <h4>False</h4>
            </div>
        </form>`;
    $(`#${scoreCategory}`).removeClass("bg-success on").addClass("bg-secondary off");
}

function _clear(){

    for(let ptValue = 1; ptValue <= 3; ptValue++){
        $(`.label${ptValue}00`).html(`<h2>${ptValue}00</h2>`);
        $(`.label${ptValue}00`).removeClass("bg-secondary off").addClass("bg-success on");
    }

    countDown = 0;
    document.getElementById("alert").innerHTML = `<h2>Let the TRIVIA begin!!!</h2>`;
    allowClick = true;
}

function _alertOneQuestion(){
    document.getElementById("alert").innerHTML =
    `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        Please answer the question before you can continue with other questions.<strong> Enjoy the game.</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`
}

function _setDetails(scoreCategory, res){
    allowClick = false;
    difficultyValue = res.results[0].difficulty;
    scoreCategoryValue = scoreCategory;
    correctAnswerValue = res.results[0].correct_answer;
    questionOn = true;
    let type = res.results[0].type;
    if(type === "boolean"){
        _findQuestion(scoreCategory,res.results[0].question);
    } else if(type === "multiple"){
        console.log("Future Game Improvement");
    }
}

function _setAfterAnswer(){
    countDown++;
    allowClick = true;
    difficultyValue = "";
    scoreCategoryValue = "";
    correctAnswerValue = "";
    questionOn = false;
    document.getElementById("alert").innerHTML = "";
}


