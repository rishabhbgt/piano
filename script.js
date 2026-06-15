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

document.body.addEventListener("keydown", function (event) {

    switch (event.key.toLowerCase()) {

        case "a":
            playNote("C");
            break;

        case "s":
            playNote("D");
            break;

        case "d":
            playNote("E");
            break;

        case "f":
            playNote("F");
            break;

        case "g":
            playNote("G");
            break;

        case "h":
            playNote("A");
            break;

        case "j":
            playNote("B");
            break;
    }

});
