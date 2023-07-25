import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount , selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen} from '../../store/cart/cart.action.js';
import { useContext } from 'react';
//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { ShoppingIcon, ItemCount, CartIconContainer } from './cart-icon.styles';
import { CartContext } from '../../contexts/cart.context'; 
import './cart-icon.styles';

const CartIcon = () => {

    console.log('cart icon rendering....');

    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    //console.log(isCartOpen);
    const cartCount = useSelector(selectCartCount);
    

    //const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon /> 
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;
