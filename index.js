var numberOfDrums = document.querySelectorAll(".drum").length;

for(i = 0; i < numberOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        const buttonInnerHTML = this.innerHTML;

       switch (buttonInnerHTML) {

        case "w": var audioElement = new Audio("sounds\\tom-1.mp3");
        audioElement.play();
        this.style.color = "white";
        setTimeout(() => {
            this.style.color = "#DA0463";
        }, 200);
        break;

        case "a": var audioElement = new Audio("sounds\\tom-2.mp3");
        audioElement.play();
        this.style.color = "white";
        setTimeout(() => {
            this.style.color = "#DA0463";
        }, 200);
        break;

        case "s": var audioElement = new Audio("sounds\\crash.mp3");
        audioElement.play();
        this.style.color = "white";
        setTimeout(() => {
            this.style.color = "#DA0463";
        }, 200);
        
        break;

        case "d": var audioElement = new Audio("sounds\\kick-bass.mp3");
        audioElement.play();
        this.style.color = "white";
        setTimeout(() => {
            this.style.color = "#DA0463";
        }, 200);
        break;

        case "j": var audioElement = new Audio("sounds\\tom-3.mp3");
        audioElement.play();
        this.style.color = "white";
        setTimeout(() => {
            this.style.color = "#DA0463";
        }, 200);
        break;

        case "k": var audioElement = new Audio("sounds\\tom-4.mp3");
        audioElement.play();
        this.style.color = "white";
        setTimeout(() => {
            this.style.color = "#DA0463";
        }, 200);
        break;

        case "l": var audioElement = new Audio("sounds\\snare.mp3");
        audioElement.play();
        this.style.color = "white";
        setTimeout(() => {
            this.style.color = "#DA0463";
        }, 200);
        break;

        default: 
       }

    })

}
