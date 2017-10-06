$( "form" ).submit(function( event ) {
  event.preventDefault();
});

function handleClick(){
  $('#myModal').modal('show')
  $('form').trigger("reset")
};

$(document).ready(function() 
{
    $("input").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
    });
    $("textarea").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
    });
});
