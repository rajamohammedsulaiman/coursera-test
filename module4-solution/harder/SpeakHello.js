// IIFE hellpSpeaker
(function speak_hello(window) {

var speakWord = "Hello";

// Create function helloSpeaker to print names with "Hello"
var helloSpeaker = function speak(name) {
  console.log(speakWord + " " + name);
}

// Attach helloSpeaker to global context
window.helloSpeaker = helloSpeaker;

})(window);