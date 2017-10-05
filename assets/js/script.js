$( "form" ).submit(function( event ) {
  event.preventDefault();
});

function handleClick(){
  $('#myModal').modal('show')
  $('form').trigger("reset")
};

$(document).ready(function(){
    if ($(window).width() >= 768) 
    {
      $("footer").removeClass("footer-static-bottom").addClass("footer-slide-up");
	    $(".footer-slide-up").hover(function () {
    $(".slide").slideToggle("fast");
  });
    }
});
