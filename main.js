canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var rover_height = 90;
var rover_width = 100;
var roverX = 80;
var roverY = 120;

var rover = "rover.png";
var land = "mars.jpg";

function add() {
    marsImage = new Image();
    marsImage.onload = uploadmars;
    marsImage.src = land;

    roverImage = new Image();
    roverImage.onload = uploadrover;
    roverImage.src = rover;
}

function uploadmars() {
    ctx.drawImage(marsImage, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(roverImage, roverX, roverY, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
keyPressed= e.keyCode;
console.log(keyPressed);
        if(keyPressed=="87"){
            up();
            console.log("up");
        }

        if(keyPressed=="83"){
            down();
            console.log("down");
        }

        if(keyPressed=="65"){
            left();
            console.log("left");
        }

        if(keyPressed=="68"){
            right();
            console.log("right");
        }

               if(keyPressed=="38"){
            up();
            console.log("up");
        }

        if(keyPressed=="40"){
            down();
            console.log("down");
        }

        if(keyPressed=="37"){
            left();
            console.log("left");
        }

        if(keyPressed=="39"){
            right();
            console.log("right");
        }


}