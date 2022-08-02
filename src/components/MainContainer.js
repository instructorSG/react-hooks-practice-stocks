import React,{useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [ stocks, setStocks ] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(res => res.json())
      .then(data => setStocks(data))
  }, [])

  const addToPortfolio = (s) => {
    setPortfolioStocks(prevPort => [ ...prevPort, s ])
  }

  const sellMyStock = (s) => {
    setPortfolioStocks(pStocks=>pStocks.filter(stock=>stock.id!==s.id))
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer addToPortfolio={ addToPortfolio }  stocks={ stocks } />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={ portfolioStocks } sellMyStock={ sellMyStock } />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
