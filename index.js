// add an event listener to every drum button
// * be specific in the type of button you choose, such as what class they are all in
// * note the dif between querySelector and querySelectorAll, the selector for them should be unique
var drumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < drumButtons.length; i++){
  drumButtons[i].addEventListener("click", function(){
    alert("I got clicked");
  });
}

// param1: case-sensitive string rep the event
// param2: listener: JS function to be called when the event happens
//                   naming: handle(Event)
//                   don't add parentheses after the function, else it will be called no matter what
//                   the function should only be passed as an input to be called later
/*
document.querySelector("button").addEventListener("click", function(){
  alert("I got clicked");
}); // targeting the first button
*/
