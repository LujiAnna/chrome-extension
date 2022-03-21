// Select location value 
$(function(){
  $('#location').keyup(function(){
  // Get the value of a form input to modify the string
    $('#hello').text('Hello ' + $('#location').val());
  })
})

