import { useEffect, useRef } from "react"
var isGameRunning = false;
export default function Canvas(props) {
    return (<><canvas {...props} onClick={()=>startGame()}></canvas></>)
}

let x = 0, y = 0;
function startGame() {
    if(isGameRunning)return;
    x = 0, y = 0;
    isGameRunning = true;
    const canvas = document.getElementById("gameCanvas");
    gameLoop(canvas);
}

function gameLoop() {
    
    if(canvas==null) {
        return;
    }
    const ctx = canvas.getContext("2d");
    canvas.setAttribute("tabindex", 0); //focus on canvas
    canvas.addEventListener("keydown", function (e) {
        logKey(e, context);
    });
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 600, 600); //clear rect

    ctx.fillStyle = 'green';
    ctx.fillRect(x, 10, 100, 100);
    x += 1
    requestAnimationFrame(gameLoop);

}

function logKey(e, context) {
    var keyCode = e.keyCode;
    switch (keyCode) {
        case 87:
            console.log("W")
            break;
        case 65:
            console.log("A")
            break;
        case 83:
            console.log("S")
            break;
        case 68:
            console.log("D")
            break;
    }
}