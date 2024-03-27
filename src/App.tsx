import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(['product1', 'product2', 'product3']);
  return (
    <div>
      <Navbar cartItemsCount={cartItems.length}/>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}
export default App;
