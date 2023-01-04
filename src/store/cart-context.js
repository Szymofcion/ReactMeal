import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmoint: 0,
    addItem:(item) =>{},
    removeItem: (id)=>{},
})

export default CartContext