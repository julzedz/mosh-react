import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({name: 'Spicy Pepperoni', toppings: ['Mushroom'],});

  const handleClick = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']})
  }
  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
export default App;
