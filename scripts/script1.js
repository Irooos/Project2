$('#searchgifs').on('click', function() {
  var input = $('#search').val();
  $.get('https://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=mW4yWVPfmhOwdAFnpSfKPhmq0wAVW56X&limit=20', function(response) {
    $.each(response.data, function(index, gif){
    $("<img src=" + gif.images.downsized_large.url + ">").appendTo(('#img'))
    }); 
  })
});

