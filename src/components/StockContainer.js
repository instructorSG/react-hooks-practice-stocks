import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks }) {
  console.log('stocks2', stocks)//good
  const stocksList = stocks.map((s) => <Stock key={ s.id } stock={ s } />)
console.log('stocksList', stocksList)
  return (
    <div>
      <h2>Stocks</h2>
      {stocksList}
    </div>
  );
}

export default StockContainer;
