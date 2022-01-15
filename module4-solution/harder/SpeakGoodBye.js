// IIFE byeSpeaker
(function (window) {
  // body...
var speakWord = "Good Bye";

// Create function byeSpeaker to print names with "Good Bye"
var byeSpeaker = function speak(name) {
  console.log(speakWord + " " + name);
 }
 
 // Attach byeSpeaker to global context
 window.byeSpeaker = byeSpeaker;

})(window);