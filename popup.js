let increaseButton = document.getElementById("increaseRate");
let defaultButton = document.getElementById("defaultRate");
let decreaseButton = document.getElementById("decreaseRate");
let current = document.querySelector(".current");

console.log(current);

let currentRate = 1;

increaseButton.onclick = function() {
   if (currentRate <= 3) {
      let newRate = currentRate + 0.5;

      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
         chrome.tabs.executeScript(tabs[0].id, {
            code: `document.querySelector("video").playbackRate = ${newRate};`
         });
      });

      currentRate = newRate;
      current.textContent = currentRate;
   } else {
      alert("Maximum rate");
   }
};

defaultButton.onclick = function() {
   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
         code: 'document.querySelector("video").playbackRate = 1;'
      });
   });

   currentRate = 1;
   current.textContent = currentRate;
};

decreaseButton.onclick = function() {
   if (currentRate > 0.5) {
      let newRate = currentRate - 0.5;

      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
         chrome.tabs.executeScript(tabs[0].id, {
            code: `document.querySelector("video").playbackRate = ${newRate};`
         });
      });

      currentRate = newRate;
      current.textContent = currentRate;
   } else {
      alert("Sooooo slow. It's limit");
   }
};
