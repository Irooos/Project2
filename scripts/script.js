/*
User:
-type in text
-click submit
-view gifs on page

Technical:
-detect when submit clicked
-grab user input
-use usr input in api call
-parse response
-display data
*/
$(document).ready(()=>{ /*Detect submit*/ 

    $("#submit").click(()=>{
        let userInput = $("#search").val() /*Input id for search*/
        alert(userInput) /*Replaces 'alert!' with userInput*/
    })
    $.ajax({
        
        url:'http://api.giphy.com/v1/gifs/search?q=maine-coon&api_key=lmkpW3GGTV7iiw3UXzPZqvqSrWIq3s5G'
    })
    .done((res)=>{  
        let gifs = res.Search;
        $.each(gifs, (i, e)=>{
            let poster = e.Poster
            console.log("poster" , poster)
            $("body").append('<img src="${poster}" alt="gif poster" />')
        })

    })

})
 /*
 1. What to use instead of poster and gifs? 
 2. Is the src used correctly? Might be something wrong with userInput.
 3. "$(document).ready(()=>" Has an uncaught ReferenceError{
*/ 