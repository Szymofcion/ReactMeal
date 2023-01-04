import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Melas/Meals";
import Cart from './components/Cart/Cart'
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false)

  const showCartHandler = () => {
    setCartIsShow(true)
  }

  const closeCartHandler = () => {
    setCartIsShow(false)
  }

  return (
    <CartProvider>
      {cartIsShow && < Cart onClose={closeCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
