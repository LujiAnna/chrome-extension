let contextMenuItem = {
  "id": "workTime",
  "title": "WorkTime",
  "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(
  // callback function
 function(OnClickData) {
  console.log(OnClickData.menuItemId);
  alert(OnClickData.menuItemId);
 }
);

  //  if(clickData.menuItemId == 'workTime' && clickData.selectionText){
  //   console.log('time clicked');

  //    if (isInt(clickData.selectionText)){
      
  //     console.log('time clicked');
  // // Also retrieve the limit when time is added
  // chrome.storage.sync.get(['total', 'limit'], function(work) {
  //   let newTime = 0;
  //   // add to the previous total time
  //   if(work.total){
  //     newTime +=parseInt(work.total);
  //   }

    // update clicked text user
      // newTime +=parseInt(clicData.selectionText);

      // add this new total time into storage for later use
    // chrome.storage.sync.set({'total': newTime}, function(){
      // after adding the callback function, check if new total time exceeds the limit
//     if(newTime >= work.limit){
//      // if yes, send notification to the user, after creating it
//        let optionNotif = {
//          type: "basic",
//          title: "Limit reached",
//          message: "You have reached your limit",
//          iconUrl: "icon48.png"
//  };

//  chrome.notifications.create(optionNotif);
//    };
// });
// })
  //  }
//  });