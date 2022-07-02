import './ItemDetail.css';
// import  {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
function ItemDetail(props){
       
        //   console.log("imagen:",props.imagen)
     
    return(
    <section   className="ItemDetail">                    
    {/* {props.description.length !== 0 && <h1>Nombre: {props.description}</h1>} */}
    
        <div className = "contenedorItem">
            <div className = "contenedorImagen">        
                <img src={props.imagen}  className = "ItemContenidoImagen" alt ="contenido"/>
            </div>
            <div className = "contendedorTexto">
                <h1 className = "ItemTituloDetalle">{props.nombre}</h1>
                <h2 className = "ItemPrecio">${props.price}</h2>
                <p className = "ItemSku">SKU: {props.sku}</p>
                <p className = "ItemPCategoria">categoria: {props.category}</p>
                <hr/>                
                <ItemCount cantidad = {props.stock} id = {props.id}/>                
                {/* <p>{props.id}</p>    */}
                {/* <Link to = {`/productos/${props.id}`} > <h4>Ver Detalles del producto</h4></Link>  */}
                {/* <Link to = {`/productos/${props.id}`} > <p className="verDetalle">ver detalle</p></Link> */}
            </div>
        </div>
        <hr/>
        <div >
        <p className = "ItemP">{props.description}</p>
        </div>
    </section>

    );

}

export default ItemDetail;