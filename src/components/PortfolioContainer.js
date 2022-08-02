import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, sellMyStock}) {
  const portfolioObjects = portfolio.map((p) => <Stock key={ p.id } stock={ p } sellIt={sellMyStock} itIsIn="portfolio" />)

  return (
    <div>
      <h2>My Portfolio</h2>
      {
       portfolioObjects
      }
    </div>
  );
}

export default PortfolioContainer;
