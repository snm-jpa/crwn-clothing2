import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCardItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    // If found, increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    //return new array with modified cartItem/new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];        //if item is not found, then adding item for the first time.
}

const removeCartItem = (cartItems, cartItemToRemove) => {

    // console.log(cartItems);
    // console.log(cartItemToRemove);


    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
}


export const clearCartItem = (cartItems, cartItemToClear) => 
    cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);


export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
    

export const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCardItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    console.log( cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
