// Select location value 
$(function(){

   // firts update ui-limit from storage
  // Get the existing limit from storage
  chrome.storage.sync.get(['limit'], function(work) {
    $('#limit').val(work.limit);
  })

  // select limit button of click event from user
  $('#timeLimit').click(function(){
    // Get the existing time value from input box
    let limit = $('#limit').val();
    // if there's total
    if(limit){
       // add this new time into storage 
    chrome.storage.sync.set({'limit': limit}, function(){
      close();
    });
  };
})


  // select reset button of click event from user
  $('#resetTime').click(function(){
     // Set the existing time from storage to zero
       // add this new time into storage 
    chrome.storage.sync.set({'total': 0}, function(){
      close();
    });  
  });

  })