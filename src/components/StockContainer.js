import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, addToPortfolio}) {

  const stocksList = stocks.map((s) => <Stock key={ s.id } stock={ s } addToPortfolio={ addToPortfolio } itIsIn="stocks" />)

  return (
    <div>
      <h2>Stocks</h2>
      {stocksList}
    </div>
  );
}

export default StockContainer;
