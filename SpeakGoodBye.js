(function(window){


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
var byeSpeaker={};// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
byeSpeaker.speak=function speak(name) {
  console.log(speakWord + " " + name);
}
window.byeSpeaker="byeSpeaker";
})(window);
