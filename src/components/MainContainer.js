import React,{useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [ stocks, setStocks ] = useState([])
  const [portStocks, setPortStocks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(data => setStocks(data))
  }, [])
console.log('stocks', stocks)//good

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={ stocks } />
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
