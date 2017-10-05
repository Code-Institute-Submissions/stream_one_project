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
	    $(".footer-static-bottom").hover(function () {
    $(".slide").slideToggle("fast");
  });
    }
});
