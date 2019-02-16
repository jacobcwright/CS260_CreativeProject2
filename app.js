const Enter = function(){
    window.location.href = "/home.html";
    console.log("Clicked");
}

document.getElementById("animeSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("animeInput").value;
    if (value === "")
        return;
    console.log(value);

    const url = "https://api.jikan.moe/v3/search/anime?q=" + value + "&page=1";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
                if(json.response === "'error':'Server Error'"){
                    alert("anime not found");
                }
        //var parsedData = JSON.parse(json);
        let results = "";
            results += "<h1>" + json.results[0].title + "</h1>"; 
            results += "<h1> Rating: " + json.results[0].score + "/10</h1>";
            results += "<img src=\"" + json.results[0].image_url + "\"/>";
            results += "<h1>" + json.results[0].rated + "</h1>";
            results += "<h2>Synopsis: </h1>";
            results += "<p>" + json.results[0].synopsis + "<p>";
            results += "<p><b>Episodes:</b> " + json.results[0].episodes + "</p>";
            //console.log(json.results[0].rated);
            document.getElementById("anime-results").innerHTML = results;
        });
});
