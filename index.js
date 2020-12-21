// doument.querySelector("button").addEventListener("click",handleClick);



// var x = document.querySelectorAll("button").length ;
// Anonymous fn
// for(let i=0; i<x; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function () {   
//         var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
//     });
// } 



// document.getElementsByClassName("w")[0].addEventListener("click", function () {
//     this.style.color="white";
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
    
// })
// document.getElementsByClassName("a")[0].addEventListener("click", function () {
//     var audio = new Audio("sounds/tom-2.mp3");
//     audio.play();
// })
// document.getElementsByClassName("s")[0].addEventListener("click", function () {
//     var audio = new Audio("sounds/tom-3.mp3");
//     audio.play();
// })
// document.getElementsByClassName("d")[0].addEventListener("click", function () {
//     var audio = new Audio("sounds/tom-4.mp3");
//     audio.play();
// })
// document.getElementsByClassName("j")[0].addEventListener("click", function () {
//     var audio = new Audio("sounds/snare.mp3");
//     audio.play();
// })
// document.getElementsByClassName("k")[0].addEventListener("click", function () {
//     var audio = new Audio("sounds/crash.mp3");
//     audio.play();
// })
// document.getElementsByClassName("l")[0].addEventListener("click", function () {
//     var audio = new Audio("sounds/kick-bass.mp3");
//     audio.play();
// })


//detecting mouse click

var x = document.querySelectorAll("button").length ;
//Anonymous fn
for(let i=0; i<x; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {   
        var buttonInnerHTML = this.innerHTML; 
        sound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
} 


//detecting keyboard press
document.addEventListener("keydown",function (event) {
    sound(event.key);
    animation(event.key);
})


//playing audio
function sound(letter){
    switch (letter) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");   // object of audio class/Constructor function
            tom1.play();                                // method of Constructor function Audio
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
                
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;


        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log("sound not found wrt letter"+buttonInnerHTML);
            break;
    }
    
}

//adding animations
function animation(currentKey) {

    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setInterval(() => {
        activeButton.classList.remove("pressed");
    }, 100 );
    
}