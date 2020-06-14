// add an event listener to every drum button
// * be specific in the type of button you choose, such as what class they are all in
// * note the dif between querySelector and querySelectorAll, the selector for them should be unique
var drumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < drumButtons.length; i++){
  drumButtons[i].addEventListener("click", function(){
    var curSound = new Audio("sounds/crash.mp3"); // create an audio object with the sound file
    curSound.play(); // play the sound file
    this.style.color = "blue"; // this refers to the current drum button object, which changes to
                               // blue after getting clicked
  });
}

function handleClick(){
  alert("I got clicked");
}

// param1: case-sensitive string rep the event
// param2: listener: JS function to be called when the event happens
/*
document.querySelector("button").addEventListener("click", function(){
  alert("I got clicked");
}); // targeting the first button
*/
