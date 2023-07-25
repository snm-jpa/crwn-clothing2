//import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart} from '../../store/cart/cart.action';
import './product-card.styles.scss'

import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

/*renders single product*/
const ProductCard = ({ product }) => {

    /*
    product = {
        id: 1,
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        name: "Brown Brim",
        price: 25
    }
    */

    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();

    //const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
    
    return (<div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
    </div>)
}

export default ProductCard;