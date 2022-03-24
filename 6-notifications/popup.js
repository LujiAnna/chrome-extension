// Select location value 
$(function(){
  // firts update UI-time from storage
  // Get the existing time from storage
  // Also get the limit from storage
  chrome.storage.sync.get(['total', 'limit'], function(work) {
    $('#total').text(work.total);
    $('#limit').text(work.limit);
  })

  // button
  $('#workTime').click(function(){
  // Get the existing time from storage
  // Also retrieve the limit when time is added
  chrome.storage.sync.get(['total', 'limit'], function(work) {
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

// add this new total time into storage for later use
    chrome.storage.sync.set({'total': newTime}, function(){
       // after adding the callback function, check if new total time exceeds the limit
     if(time && newTime >= work.limit){
      // if yes, send notification to the user, after creating it
        let optionNotif = {
          type: "basic",
          title: "Limit reached",
          message: "You have reached your limit",
          iconUrl: "icon48.png"
  };
 
  chrome.notifications.create(optionNotif);
    };
});
    // update ui
    $('#total').text(newTime);
    // clear input value
    $('#time').val('');

  });
  })
})

// NOTE: newTime will be better named as newTotal
