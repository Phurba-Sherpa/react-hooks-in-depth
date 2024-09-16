import React, { useCallback, useState } from "react";
import CartTable from "./CartTable";

const CallBackDemo = ({ items }) => {
  const [count, setCount] = useState(0);

  const inStockItems = useCallback(
    () => items.filter((item) => item.inStock),
    [items],
  );

  const outOfStockItems = useCallback(
    () => items.filter((item) => !item.inStock),
    [items],
  );

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <CartTable items={inStockItems} />
      <CartTable items={outOfStockItems} />
    </div>
  );
};
export default CallBackDemo;
