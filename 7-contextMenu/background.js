let contextMenuItem = {
  "id": "workTime",
  "title": "WorkTime",
  "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(
  // Debug the callback function
 function(OnClickData) {
  console.log(OnClickData.menuItemId);
  alert(OnClickData.menuItemId);
 }
);

// art: callback fn