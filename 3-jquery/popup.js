// Select location value 
$(function(){
  $('#location').keyup(function(){
  // Get the value of a form input and modify the string
    $('#hello').text('Hello ' + $('#location').val());
  })
})
