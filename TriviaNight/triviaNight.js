$(document).ready(function () {
    // var info = new Promise(function (resolve, reject) {
    //     $.get("https://api.github.com/users/kirkcoy", function(res){
    //        resolve(res);
    //     },"json");
    // });

    // info.then(function (res) {
    //     console.log(res, "ASynchronous");
    //     $("#result2").text(res.name+": used promises for retrieving the data.");
    // });

    // info.catch(function () {
    //     console.log('failure');
    // });
    var point = 10;
    var allowClick = true;


    document.getElementById("100geography").addEventListener("click", function (){
        if(allowClick){
            allowClick = false;
            console.log(allowClick)
            $.get("https://opentdb.com/api.php?amount=1&category=22&difficulty=easy", function (res) {
                console.log(res, "GEO");
                document.getElementById("100geography").innerHTML = "<div id='100geography' class='p-3 mb-2 bg-success text-white border'><h2>" + res.results[0].question; + "</h2></div>";
                show();
            }, "json");
            console.log(point);
            return false;
        }
    })
    
    document.getElementById("200geography").addEventListener("click", function (){
        if(allowClick){
            allowClick = false;
            console.log(allowClick)
            $.get("https://opentdb.com/api.php?amount=1&category=22&difficulty=medium", function (res) {
                console.log(res, "GEO");
                document.getElementById("200geography").innerHTML = "<div id='200geography' class='p-3 mb-2 bg-success text-white border'><h2>" + res.results[0].question; + "</h2></div>";
                show();
            }, "json");
            console.log(point);
            return false;
        }
    })

    console.log(allowClick)
    



// <form action="/action_page.php">
//   <input type="radio" name="gender" value="male"> Male<br>
//   <input type="radio" name="gender" value="female"> Female<br>
//   <input type="radio" name="gender" value="other"> Other<br>  
//   <input type="submit" value="Submit">
// </form>





































    

    $.get("https://opentdb.com/api.php?amount=1&category=22", displayGeography)
    function displayGeography(data) {
        console.log(data,"Geography")
        if (data.results[0].type == "multiple"){
            var correctAnswer = data.results[0].correct_answer;
            var difficulty = data.results[0].difficulty;
            var question = data.results[0].question;
            var type = data.results[0].type;
            var incorrect = data.incorrect_answers;
            var questions
            
        }
        
        return false
    }
    


    $.get("https://opentdb.com/api.php?amount=1&category=21", function (res) {
        console.log(res, "Sports");
    }, "json")


    $.get("https://opentdb.com/api.php?amount=1&category=28", function (res) {
        console.log(res, "Vehicles")
    }, "json")


    $.get("https://opentdb.com/api.php?amount=1&category=27", function (res) {
        console.log(res, "Animals")
    }, "json")






    document.getElementById("points").addEventListener("click", function (){
        // document.getElementById("points").innerHTML =  point + "Points"
        console.log(point)
    })

})



// https://opentdb.com/api.php?amount=1&category=22&difficulty=easy
// https://opentdb.com/api.php?amount=1&category=22&difficulty=medium
// https://opentdb.com/api.php?amount=1&category=22&difficulty=hard

// https://opentdb.com/api.php?amount=1&category=21&difficulty=easy
// https://opentdb.com/api.php?amount=1&category=21&difficulty=medium
// https://opentdb.com/api.php?amount=1&category=21&difficulty=hard

// https://opentdb.com/api.php?amount=1&category=28&difficulty=easy
// https://opentdb.com/api.php?amount=1&category=28&difficulty=medium
// https://opentdb.com/api.php?amount=1&category=28&difficulty=hard

// https://opentdb.com/api.php?amount=1&category=27&difficulty=easy
// https://opentdb.com/api.php?amount=1&category=27&difficulty=medium
// https://opentdb.com/api.php?amount=1&category=27&difficulty=hard

function show(){
    console.log("show");
}