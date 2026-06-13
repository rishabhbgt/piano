let keyC = document.getElementById("keyC");
let audio = new Audio("sounds/C.mp3");

keyC.addEventListener('click',function(){
    audio.play();
});