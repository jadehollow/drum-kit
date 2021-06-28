document.querySelectorAll(".drum").forEach(drum => drum.addEventListener("click", function () {

    const buttonLetter = this.innerHTML;
    makeSound(buttonLetter);
    buttonAnimation(buttonLetter);
    
}));

document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "w":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "a":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "s":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "d":
            let kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        case "j":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
    
        default: console.log();
            break;
    }

};

function buttonAnimation(currentKey) {

    const activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}