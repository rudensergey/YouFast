let increaseButton = document.getElementById("increaseRate");
let defaultButton = document.getElementById("defaultRate");
let decreaseButton = document.getElementById("decreaseRate");
let current = document.getElementById("currentRate");

let currentRate = 1;

increaseButton.onclick = function() {
   if (currentRate === 3.5) alert("Maximum rate");
   let newRate = currentRate + 0.5;

   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
         code: `document.querySelector("video").playbackRate = ${newRate};`
      });
   });

   currentRate = newRate;
};

defaultButton.onclick = function() {
   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
         code: 'document.querySelector("video").playbackRate = 1;'
      });
   });

   currentRate = 1;
};

decreaseButton.onclick = function() {
   if (currentRate === 0.5) alert("Sooooo slow");
   let newRate = currentRate - 0.5;

   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
         code: 'document.querySelector("video").playbackRate = 0.5;'
      });
   });

   currentRate = newRate;
};
