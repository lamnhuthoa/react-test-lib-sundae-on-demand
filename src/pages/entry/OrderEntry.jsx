import React from "react";
import Options from "./Options";
import { formatCurrency } from "../../utilities";
import { useOrderDetails } from "../../contexts/OrderDetails";

const OrderEntry = () => {
  const { totals } = useOrderDetails();
  const grandTotal = totals.scoops + totals.toppings;

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(grandTotal)}</h2>
    </div>
  );
};

export default OrderEntry;
