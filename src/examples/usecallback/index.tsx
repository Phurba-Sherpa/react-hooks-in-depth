import React, { useCallback, useState } from "react";
import CartTable from "./CartTable";
type Item = {
  name: string;
  quantity: number;
  inStock: boolean;
};

type CartTableProps = {
  items: Item[];
};

const CallBackDemo: React.FC<CartTableProps> = ({ items }) => {
  const [count, setCount] = useState(0);

  const inStockItems: Item[] = useCallback(
    () => items.filter((item) => item.inStock),
    [items],
  );

  const outOfStockItems: Item[] = useCallback(
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
