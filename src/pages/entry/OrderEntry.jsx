import React from "react";
import Options from "./Options";
import { formatCurrency } from "../../utilities";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { Button } from "react-bootstrap";

const OrderEntry = ({ setOrderPhase }) => {
  const { totals } = useOrderDetails();
  const grandTotal = totals.scoops + totals.toppings;

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(grandTotal)}</h2>
      <Button onClick={() => setOrderPhase("review")}>Order Sundae!</Button>
    </div>
  );
};

export default OrderEntry;
