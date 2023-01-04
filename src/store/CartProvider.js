
import CartContext from "./cart-context"
const CartProvider = props => {

const addItemToCartHandller = item =>{

}

const removeItemCartHandler = id =>{

}

    const cartContext = {
        items: [],
        totalAmoint: 0,
        addItem: addItemToCartHandller,
        removeItem: removeItemCartHandler,
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider