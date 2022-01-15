// IIFE names
(function () {
  // body...
var names = ["Yaakov", 
             "John", 
             "Jen", 
             "Jason",
             "Paul",
             "Frank",
             "Larry",
             "Paula", 
             "Laura", 
             "Jim"];
 
// Fill in parts of the 'for' loop to loop over names array 
for (i=0; i < names.length; i++) {

// Convert the first letter of names array to lower case
    var firstLetter = names[i].charAt(0).toLowerCase();

// Compare the first letter of names array to J/j and call the necessary method
 if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  } 
  else {
    helloSpeaker(names[i]);
  }
}
})();