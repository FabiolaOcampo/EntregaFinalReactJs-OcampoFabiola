import {Link} from 'react-router-dom';
import cart from '../assets/carrito-de-compras.png'

export const CartWidget = () => {
    return (
    <Link to="/cart">
    <img src={cart} alt="Carrito de compras" width={30}/>
    <span>4</span>
    </Link>
    );

};
