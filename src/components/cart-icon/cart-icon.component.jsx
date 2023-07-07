import { useContext } from 'react';
//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { ShoppingIcon, ItemCount, CartIconContainer } from './cart-icon.styles';
import { CartContext } from '../../contexts/cart.context'; 
import './cart-icon.styles';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    console.log(isCartOpen);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;
