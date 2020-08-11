var drumButtons = document.querySelectorAll("button");
for (var index = 0; index < drumButtons.length; index++) {
  drumButtons[index].addEventListener("click", function(){
    var buttonClicked = this.innerHTML;
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);
  });
}
document.addEventListener("keydown",function(event) {
  var keyPressed = event.key;
  makeSound(keyPressed);
  buttonAnimation(keyPressed);
});

function makeSound(currentKey) {
  switch (currentKey) {
    case "w":
      new Audio('sounds/tom-1.mp3').play();
      break;
    case "a":
      new Audio('sounds/tom-2.mp3').play();
      break;
    case "s":
      new Audio('sounds/tom-3.mp3').play();
      break;
    case "d":
      new Audio('sounds/tom-4.mp3').play();
      break;
    case "j":
      new Audio('sounds/snare.mp3').play();
      break;
    case "k":
      new Audio('sounds/crash.mp3').play();
      break;
    case "l":
      new Audio('sounds/kick-bass.mp3').play();
      break;
    default:
      console.log(currentKey);
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){  
    activeButton.classList.remove("pressed");
  }, 100);
}

