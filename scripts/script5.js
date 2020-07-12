$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true  
  });
  
  $('#image-size').click(function(){
     if (this.checked) {
      $( ".randomize" ).addClass( "grid-item-width2" );
      $('.grid').masonry('layout');
  } else {
      $( ".randomize").removeClass( "grid-item-width2" );
      $('.grid').masonry('layout');
  }
  });