
import { useEffect, useRef } from "react";

const Canvas = (props) => { //�ϥ�arrow function�A�ǤJ���ѼƬO��props
    const ref = useRef(); //����getElementById�ӱĥ�React ���Ѫ�useRef�Ө��oDOM����
    useEffect(()=>{
        const canvas = ref.current;
        const context = canvas.getContext('2d');
        context.fillStyle = 'gray';
        context.fillRect(10,10,100,100);
    },[]);
    
    return <canvas ref = {ref} {...props}/>
}
export default Canvas;