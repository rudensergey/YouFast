document.getElementById("increaseRate").addEventListener("click", function() {
   controller.changeRate("increase");
});

document.getElementById("decreaseRate").addEventListener("click", function() {
   controller.changeRate("decrease");
});

document.getElementById("defaultRate").addEventListener("click", function() {
   controller.changeRate("default");
});

let controller = {
   defaultValue: 1,
   currentValue: 1,
   output: document.querySelector(".current"),

   changeRate: function(type) {
      switch (type) {
         case "increase":
            this.currentValue <= 3
               ? this.inject(this.currentValue + 0.5)
               : alert("Maximum rate");
            break;
         case "decrease":
            this.currentValue > 0.5
               ? this.inject(this.currentValue - 0.5)
               : alert("Sooooo slow. It's limit");
            break;
         case "default":
            this.inject(this.defaultValue);
            break;
      }
   },

   inject: function(newRate) {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
         chrome.tabs.executeScript(tabs[0].id, {
            code: `document.querySelector("video").playbackRate = ${newRate};`
         });
      });

      this.output.textContent = newRate;
      this.currentValue = newRate;
   }
};
