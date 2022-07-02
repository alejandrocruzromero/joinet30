import './ItemCount.css'
import  {Link} from 'react-router-dom'
import { useState } from "react";

function Contador(props){
    //let msj = ""
    // console.log (props.id)
    // console.log (props.cantidad)
    
    let disabled = ""
    // let disabled = ""
    //props.cantidad = parseInt(props.cantidad)
    if (props.cantidad === 0) { 
        disabled = ""
    }else{
        disabled = "disabled"
    }
    
    const[num,setNum] = useState(1);
    
    const sumar =() =>{
      if (num < props.cantidad){
            setNum(num + 1)
      }
      
    }

    const restar =() =>{
        if (num> 1){
            setNum(num - 1)
        }else{
        }
    }

    const reset =() =>{
      
            setNum(1)
       
    }

    return(
        <>
        <p className="verDetalle">
            <button onClick = {restar}>-</button>
            &nbsp;&nbsp;{num}&nbsp;&nbsp;
            <button onClick = {sumar}>+</button>
            <button onClick = {reset}>limpiar</button>        
        </p>
        <p p className="verDetalle">
            <button  onClick = {reset}  disabled={!disabled}>Agregar al Carrito</button> 
        </p>
        <p className="stock">Stock : {props.cantidad}</p>
        
        
        </>
    )
}

export default Contador;