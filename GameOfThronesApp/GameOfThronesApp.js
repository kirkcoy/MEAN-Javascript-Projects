$(document).ready(function () {
    // has 444 houses all in all.
    $('img').click(function () {
        document.getElementById("house").innerHTML = "<u>House Details</u>";
        let num = $(this).attr("id");
        $.get("https://www.anapioficeandfire.com/api/houses/" + num, function (res) {
            $("#result").append("<h5>Name: <span class='text-light'>"+ res.name + "</span></h5>");
            $("#result").append('<h5>Region: <span class="text-light">'+ res.region + '</span></h5>');
            $("#result").append('<h5>Words: <span class="text-light">"'+ res.words + '"</span></h5>');
            var titles = res.titles;
            var strTitles = "";
            for(let i = 0; i<titles.length; i++){
                if(strTitles.length === 0){
                    strTitles += titles[i];
                } else {
                    strTitles += ", " +titles[i];
                }
            }
            $("#result").append('<h5>Titles: <span class="text-light">"'+ strTitles + '"</span></h5>');
            $("#result").append('<h5 class="mb-5">Sworn Members: <span class="text-light">'+ res.swornMembers.length + '</span></h5>');
        }, "json");
    });
});


