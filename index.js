//encapsulate inside the loop to run event listener to an array of element

// keyboard strokes
// document.addEventListener("keydown", function(e) {
//     console.log(e);
// });




var buttons= document.querySelectorAll(".drum");

//loop to select all the button without iterating it 1 by 1
for (var i = 0; i < buttons.length; i++) {

    //detects button press
    buttons[i].addEventListener("click", function(){

    var buttonInnerHtml = this.innerHTML; //retrieve the triggered element in html
    soundPress(buttonInnerHtml); 
    animation(buttonInnerHtml);
});
}

//alternative code
// document.querySelectorAll(".drum").forEach(function(button) {
//     button.addEventListener("click", function() {
//         var buttonInnerHtml = this.innerHTML;
//         // ... your switch statement
//     });
// });

//detects keyboard press
window.addEventListener("keydown", function (event){
    soundPress(event.key);//when a key is press the function soundPress is triggered and check the corresponding value in switch case
    animation(event.key);
});

//key parameter is an event property of keydown event
//Returns a string representing the key value of the key represented by the event.
function soundPress(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3= new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
            
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        default: 
            break;
    }
}

//animation
function animation(currentKey) {
    var active = document.querySelector("."+currentKey);
    active.classList.add("class", "pressed");


    setTimeout(function() {
        active.classList.remove("class", "pressed");
    },100);
}