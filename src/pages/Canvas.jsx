
import { useEffect, useRef } from "react";

const Canvas = (props) => { //使用arrow function，傳入的參數是用props
    const ref = useRef(); //不使getElementById而採用React 提供的useRef來取得DOM元素
    useEffect(()=>{
        const canvas = ref.current;
        const context = canvas.getContext('2d');
        context.fillStyle = 'gray';
        context.fillRect(10,10,100,100);
    },[]);
    
    return <canvas ref = {ref} {...props}/>
}
export default Canvas;