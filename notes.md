<!--Notes:
    1.http://api.giphy.com/v1/gifs/search?q=simpsons&api_key=lmkpW3GGTV7iiw3UXzPZqvqSrWIq3s5G (API key, 'simpsons' is an example)
    2.Use api key as a hidden field (ex:under jQuery) 
    3.Need to read the directory (Y9zvpD9uHA1Tq): https://media1.giphy.com/media/Y9zvpD9uHA1Tq/giphy.gif
    4.Go back and watch 18:00 to see how you can view the gif on a webpage
    API
        1.http://api.giphy.com/v1/gifs/search?q=simpsons&api_key=lmkpW3GGTV7iiw3UXzPZqvqSrWIq3s5G (API key, 'simpsons' is an example)
        2.Use api key as a hidden field (ex:under jQuery) 
        3.Need to read the directory (Y9zvpD9uHA1Tq): <img src= "https://media1.giphy.com/media/Y9zvpD9uHA1Tq/giphy.gif" />
        4.Go back and watch 18:00 to see how you can view the gif on a webpage
        5.25:00 shows you how to search for a directory

    About The project
        1.Can use bootstrap, flexbox, or in various ways for making a custom grid (*required to use @media to resize and rescale)
        2.jQuery: use $.ajax () utilize to inject data into a <div> tag, pulls data across from a network or file system (easier/faster access to data)
        3.Can use scss, less, or something else
        4.Use different flex for desktop
        5.User stories can be created by card or word document, what are you basing your design on?
        6.Don't forget to keep typing in read.me
    Planning + User Stories
        1.48:30 for Scrum: agile vs waterfall
        2.1:00:10 for sprint, :26 user stories, 3:00 chart explanation 
        3.1:09:00 Story points and boards 
    
    Plans
        1.Left off at 1:50:00 for the session vid
        2.Look into the API vid
        3.Choose desired subject and test gif pics
    Actions/Goals
    7/8:-Cat will be the giphy subject
        -Make an API call using jQuery & ajax/ test gifs
        -Watch & go throught API vid

http://api.giphy.com/v1/gifs/search?q=maine-coon&api_key=lmkpW3GGTV7iiw3UXzPZqvqSrWIq3s5G

  $(document).ready(()=>{ /*Detect submit*/ 

$("#submit").click(()=>{
    let userInput = $("#search").val() /*Input id for search*/
    alert(userInput) /*Replaces 'alert!' with userInput*/
})
$.ajax({
    url:''
})
.done((res)=>{  
    let gifs = res.Search;
    $.each(gifs, (i, e)=>{
        let media = e.url;
        console.log("url" ,media)
        $("body").append('<img src="${media}" alt="" />')
    })

})

<button onclick="searchGif()" 

<!--<script>
   function searchGif (){
       var input = $('#search').val();
       $.get('http://api.giphy.com/v1/gifs/search?q='+input+'&api_key=lmkpW3GGTV7iiw3UXzPZqvqSrWIq3s5G&limit=1',function(response)
       {
           $('#img').html("<img src="+response.data[0].images.downsized_large.url+">")
       }
       )
   }
   
</script>-->


<!--function getGif(searchTerm) {
    console.log('searchTerm is: ', searchTerm)
    $.ajax({
      url: "//api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=lmkpW3GGTV7iiw3UXzPZqvqSrWIq3s5G",
      type: "GET",
      success: function(response) {
        console.log(response)
        var max = response.data.length - 1 //length of response, minus 1 (cuz array starts at index 0)
        console.log('response.data.length is ', max)
        //var randomNumber = Math.round(Math.random() * max) //random number between 0 and max -1
        var randomNumber = Math.round(Math.random() * 6) //random number between 0 and max -1
        //for below, tried replacing 0 with random number, but first one works best, so kept it data[0] (at least for clear...)
        var gifUrl = "https://media.giphy.com/media/" + response.data[0].id + "/giphy.gif"
        console.log(gifUrl);
        var body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = `url(${gifUrl})`;
      },
      error: function(e) {
        alert(e);
      }
    });
  }-->
  