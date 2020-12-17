import { useContext } from 'react';
import OrderContext from '../components/OrderContext';

export default function useCivilization() {
  // 1. Create some state to hold our order
  // Now we access both our state and our updater function (setOrder) via context
  const [order, setOrder] = useContext(OrderContext);
  // 2. Function that adds items to order
  function addToOrder(orderedCivilization) {
    setOrder([...order, orderedCivilization]);
  }
  // 3. Function that removes items from order
  function removeFromOrder(index) {
    setOrder([
      // everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }
  // 4. Send this data to a serverless function when they check out
  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
