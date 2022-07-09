import './CartWidget.css';
//import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
const element = <FontAwesomeIcon icon={faShoppingCart} />
//const element = <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />

//ReactDOM.render(element, document.body)

function CartWidget() {
  return (
    <section className="CartWidget">
    
    
    <li><NavLink activeClassName = 'active' to = '/Cart'>{element} </NavLink></li>
    </section>
  );
}

export default CartWidget;