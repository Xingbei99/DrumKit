// add an event listener to every drum button
// * be specific in the type of button you choose, such as what class they are all in
// * note the dif between querySelector and querySelectorAll, the selector for them should be unique
var drumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < drumButtons.length; i++){
  drumButtons[i].addEventListener("click", function(){
    // switch based on the innerHTML of each button: create a variable to hold that value
    var buttonText = this.innerHTML; // addEventListener passed the object it operates on
                                     // as a this object to the listener

    switch (buttonText){ // switch based on variable value
      case "w":
        var crash = new Audio("sounds/crash.mp3"); // better don't define variables with the same
                                                   // name in each switch statement
        crash.play();
        break;

      case "a":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;

      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      default: // default block handles all other cases
        console.log(buttonText); // good practice to print the value triggering the default case
    }

    makeAnimation(this);
  });
}

// Add animation to our website
function makeAnimation(curButton){
  curButton.classList.add("pressed");

  // want the button to recover its shape after 0.1 seconds: timeout function JS
  // first parameter: function to execute after the timeout (recovery function
  // second parameter: timeout time (in ms)
  setTimeout(function(){
    curButton.classList.remove("pressed");
  }, 200);

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
