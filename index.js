let boxTop = 200;
let boxLeft = 200;





document.addEventListener("keydown", event => {
    if (event.keyCode === 40) {
        document.getElementById("box").style.top = (boxTop += 10) + "px";
    }
    else if (event.keyCode === 38) {
        document.getElementById("box").style.top = (boxTop -= 10) + "px";
    }
    else if (event.keyCode === 37) {
        document.getElementById("box").style.left = (boxTop -= 10) + "px";

    }
    else if (event.keyCode === 39) {
        document.getElementById("box").style.left = (boxTop += 10) + "px"

    }
    // do something
});

let image=document.createElement("img");
image.src="csm_01_Stage_1920x1080_9483b9eec1.png"
document.getElementById ("box").appendChild(image)



