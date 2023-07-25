import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
//import { CartContext } from "../../contexts/cart.context";
import { selectIsCartOpen} from '../../store/cart/cart.selector';
import {selectCurrentUser} from '../../store/user/user.selector';
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink
} from './navigation.styles';

const Navigation = () => {
    //const { currentUser, setCurrentUser } = useContext(UserContext);
    const currentUser = useSelector(selectCurrentUser);
    //const { isCartOpen } = useContext(CartContext);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/" >
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink className="nav-link" to="/shop">
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                        ) : <NavLink to="/auth">
                            SIGN IN
                        </NavLink>
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
