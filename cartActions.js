export const ADD_TO_CART = 'cart/add';
export const REMOVE_FROM_CART = 'cart/remove';
export const addToCart = (product) =>({
    type: ADD_TO_CART,
    payload: product,
});
export const removeFromCart = (product) =>({
    type: REMOVE_FROM_CART,
    payload: product,
});