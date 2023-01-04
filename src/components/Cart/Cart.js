
import classes from 'Cart.module.css'

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[
        { id: 'c1', name: 'Sushi', ammount: 2, price: 45.99 },
    ].map((item) => <li>{item.name}</li>)}</ul>;

    return <div>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.99</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}></button>
            <button className={classes.button}>Order</button>
        </div>
    </div>
}

export default Cart