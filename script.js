let keys = document.querySelectorAll(".key");


function playNote(note){
    let audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
}



keys.forEach(function(elem){
    
    elem.addEventListener("click",function(){
        
        let note = elem.id.replace("key","");

        playNote(note);
    });
    
});
