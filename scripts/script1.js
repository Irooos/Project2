var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=lmkpW3GGTV7iiw3UXzPZqvqSrWIq3s5G=30");
xhr.done(function(response) { console.log("success got data", response/*data*/); });