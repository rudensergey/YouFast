let increaseButton = document.getElementById("increaseRate");

increaseButton.onclick = function() {
   console.log("it works");
   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
         code: 'document.querySelector("video").playbackRate = 3;'
      });
   });
};

// function increaseRate() {
//     document.querySelector("video").playbackRate = 3;
// }
