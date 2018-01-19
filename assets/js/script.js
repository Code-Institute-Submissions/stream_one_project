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
        $(this).css("background-color", "#f49a9a");
        }, function(){
        $(this).css("background-color", "white");
    });
    
    $("textarea").hover(function(){
        $(this).css("background-color", "#f49a9a");
        }, function(){
        $(this).css("background-color", "white");
    });
});
