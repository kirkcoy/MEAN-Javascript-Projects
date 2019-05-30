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
    document.getElementById("100geography").addEventListener("click", function () {
        _getQuestion("100geography");
    });

    document.getElementById("200geography").addEventListener("click", function () {
        _getQuestion("200geography");
    });

    document.getElementById("300geography").addEventListener("click", function () {
        _getQuestion("300geography");
    });


    document.getElementById("100celebrities").addEventListener("click", function () {
        _getQuestion("100celebrities");
    });

    document.getElementById("200celebrities").addEventListener("click", function () {
        _getQuestion("200celebrities");
    });

    document.getElementById("300celebrities").addEventListener("click", function () {
        _getQuestion("300celebrities");
    });

    document.getElementById("100vehicles").addEventListener("click", function () {
        _getQuestion("100vehicles");
    });

    document.getElementById("200vehicles").addEventListener("click", function () {
        _getQuestion("200vehicles");
    });

    document.getElementById("300vehicles").addEventListener("click", function () {
        _getQuestion("300vehicles");
    });

    document.getElementById("100science").addEventListener("click", function () {
        _getQuestion("100science");
    });

    document.getElementById("200science").addEventListener("click", function () {
        _getQuestion("200science");
    });

    document.getElementById("300science").addEventListener("click", function () {
        _getQuestion("300science");
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
}


function answerTrue(){
    if(correctAnswerValue === "True"){
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

function answerFalse(){
    if(correctAnswerValue === "False"){
        points = points + difficulty[difficultyValue];
        document.getElementById("points").innerHTML = `${points} points`;
        document.getElementById(scoreCategoryValue).innerHTML = 
            `<h4> Congratulations, your answer is correct.</h4><h4> ${correctAnswerValue} is the answer.</h4>`;
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
                <input id="" class="form-check-input" type="radio" name="True" value="true" onclick="answerTrue()">
                <h4>True</h4>
            </div>
            <div class="form-check">
                <input id="" class="form-check-input" type="radio" name="False" value="false" onclick="answerFalse()">
                <h4>False</h4>
            </div>
        </form>`;

    document.getElementById(scoreCategory).classList.remove("bg-success");
    document.getElementById(scoreCategory).classList.add("bg-secondary"); 
    document.getElementById(scoreCategory).classList.remove("on");
    document.getElementById(scoreCategory).classList.add("off"); 
}

function _clear(){
    for(let i = 1; i<=3; i++){
        document.getElementById(i+"00geography").innerHTML = `<h2> ${i}00 </h2>`;
        document.getElementById(i+"00geography").classList.remove("bg-secondary");
        document.getElementById(i+"00geography").classList.add("bg-success");
        document.getElementById(i+"00geography").classList.remove("off");
        document.getElementById(i+"00geography").classList.add("on"); 

        document.getElementById(i+"00celebrities").innerHTML = `<h2> ${i}00 </h2>`;
        document.getElementById(i+"00celebrities").classList.remove("bg-secondary");
        document.getElementById(i+"00celebrities").classList.add("bg-success");
        document.getElementById(i+"00celebrities").classList.remove("off");
        document.getElementById(i+"00celebrities").classList.add("on"); 

        document.getElementById(i+"00vehicles").innerHTML = `<h2> ${i}00 </h2>`;
        document.getElementById(i+"00vehicles").classList.remove("bg-secondary");
        document.getElementById(i+"00vehicles").classList.add("bg-success");
        document.getElementById(i+"00vehicles").classList.remove("off");
        document.getElementById(i+"00vehicles").classList.add("on"); 

        document.getElementById(i+"00science").innerHTML = `<h2> ${i}00 </h2>`;
        document.getElementById(i+"00science").classList.remove("bg-secondary");
        document.getElementById(i+"00science").classList.add("bg-success");
        document.getElementById(i+"00science").classList.remove("off");
        document.getElementById(i+"00science").classList.add("on"); 
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


