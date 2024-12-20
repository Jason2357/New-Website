import Canvas from './Canvas'
import './GameCenter.css'

export default function GameCenter(){
    return(
        <>
            <h1>THIS IS GAME CENTER!!</h1>
            <Canvas id="gameCanvas" width="600" height="600"></Canvas>
            {/* <canvas className="myCanvas" width="300" height="300" onClick={gameStart}/> */}
        </>
    )
}

// function gameStart(){
//     gameLoop();
// }

// let x=0;
// function gameLoop(){
//     const canvas = document.getElementsByClassName("myCanvas")[0];
//     const ctx = canvas.getContext("2d");
//     ctx.fillStyle = 'green';
//     ctx.fillRect(10,10,x,100);
//     x+=1
//     requestAnimationFrame(gameLoop);
// }


