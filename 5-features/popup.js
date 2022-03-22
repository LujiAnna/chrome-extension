// Select location value 
$(function(){
  // firts update ui-time from storage
  // Get the existing time from storage
  // Also get the limit from storage
  chrome.storage.sync.get(['total', 'limit'], function(work) {
    $('#total').text(work.total);
    $('#limit').text(work.limit);
  })

  // button
  $('#workTime').click(function(){
  // Get the existing time from storage
  chrome.storage.sync.get(['total'], function(work) {
    let newTime = 0;
    // add to the previous total time
    if(work.total){
      newTime +=parseInt(work.total);
    }

    // update entered time from user
    let time = $('#time').val();
    if(time){
      newTime +=parseInt(time);
    }

// add this new time into storage for later use
    chrome.storage.sync.set({'total': newTime});

    // update ui
    $('#total').text(newTime);
    // clear input value
    $('#time').val('');

  });
  })
})
