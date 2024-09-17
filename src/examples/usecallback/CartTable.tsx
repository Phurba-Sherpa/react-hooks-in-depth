import React, { memo } from "react";

type CartTableProps = {
  items: { name: string; quantity: number; inStock: boolean }[];
};

const CartTable: React.FC<CartTableProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <>
          <p>{item.name}</p>
          <p>{item.quantity}</p>
          <p>{item.inStock}</p>
        </>
      ))}
    </div>
  );
};

export default memo(CartTable);
