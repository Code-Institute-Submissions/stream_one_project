$( "form" ).submit(function( event ) {
  event.preventDefault();
});

function handleClick(){
  $('#myModal').modal('show')
  $('form').trigger("reset")
};
