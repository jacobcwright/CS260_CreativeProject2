const Enter = function(){
    window.location.href = "/home.html";
    console.log("Clicked");
}

const url = "https://wger.de/api/v2/exerciseiinfo/";
fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        let results = "";

    })