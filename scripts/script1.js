/**My api key 
 http://api.giphy.com/v1/gifs/search?q=maine+coon&api_key=lmkpW3GGTV7iiw3UXzPZqvqSrWIq3s5G
***/



/*test 1**function getData(){
var input = $("#searchtext").val()
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaT0xFJmzC=5");
xhr.done(function(response) { 

    console.log("success got data", response); 

    var jiffs = response.data

    for (i in jiffs)
    {
        $('.inner').append("'<img src='"+jiffs[i].images.original.url+"' style='height:350px; width:350px;'/>")
    }
        });
    }***/
    

/*test 2** 
function searchGif (){
       var input = $('#search').val();
       $.get('http://api.giphy.com/v1/gifs/search?q='+input+'&api_key=lmkpW3GGTV7iiw3UXzPZqvqSrWIq3s5G&limit=20',function(response)
       {
           $('#img').html("<img src="+response.data[20].images.downsized_large.url+">")
       }
       )
   }
***/


    /*test 3**var api = "http://api.giphy.com/v1/gifs/search";
    var apiKey = "&api_key=dc6zaT0xFJmzC";
    var_query = "&q=rainbow"

    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/search' + input + '&api_key=dc6zaT0xFJmzC', 
        dataType: 'jsonp',
        type: 'GET',
        data: {access_api: api, count: var_query},
        success: function(data){
             console.log(data);
            for( x in data.data ){
                $('ul').append('<li><img src="'+data[x].images.original.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
                // data.data[x].images.thumbnail.url - URL of image 150х150
                // data.data[x].images.standard_resolution.url - URL of image 612х612
                // data.data[x].link - Instagram post URL 
            }
        },
        error: function(data){
            console.log(data); // send the error notifications to console
        }
    });***/
    
    
    