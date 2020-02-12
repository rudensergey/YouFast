chrome.commands.onCommand.addListener(function(command) {
   if (command === "increase_rate") {
      console.log("inc");
   } else if (command === "decrease_rate") {
      console.log("dec");
   } else if (command === "default_rate") {
      console.log("def");
   }
});
