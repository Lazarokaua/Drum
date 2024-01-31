var numerosDeBotoes = document.querySelectorAll(".drum").length;

for (var i = 0; i < numerosDeBotoes; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {

        var buttonInerhtml = this.innerHTML;

        botaoAnimado(buttonInerhtml);

        switch (buttonInerhtml) {

            case 'w':
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;


            case 'a':
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case 's':
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case 'd':
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case 'j':
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case 'k':
                var surdo = new Audio("sounds/tom-3.mp3");
                surdo.play();
                break;
            case 'l':
                var surdo2 = new Audio("sounds/tom-4.mp3");
                surdo2.play();
                break;
            default: console.log(buttonInerhtml)
        }

    });

}


document.addEventListener("keypress", function (event) {
    console.log(event)

    var botao = event.key;
    botaoAnimado(event.key)

    switch (botao) {

        case 'w':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case 'a':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 's':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'd':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'j':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'k':
            var surdo = new Audio("sounds/tom-3.mp3");
            surdo.play();
            break;
        case 'l':
            var surdo2 = new Audio("sounds/tom-4.mp3");
            surdo2.play();
            break;
        default: console.log(buttonInerhtml)

    }
})

function botaoAnimado(currentKey){
    var active = document.querySelector("." + currentKey)

     active.classList.add('pressed');

     setTimeout(function(){
        active.classList.remove('pressed');
     }, 100);

}