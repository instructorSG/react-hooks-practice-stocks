import React,{useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [ stocks, setStocks ] = useState([])
  const [ portfolioStocks, setPortfolioStocks ] = useState([])
  const [ sortBy, setSortBy ] = useState('Alphabetically')
  const [ filterBy, setFilterBy ] = useState('Tech')

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(res => res.json())
      .then(s => {
        setStocks(s)
      })
    }, [])

  const addToPortfolio = (s) => {
    setPortfolioStocks(prevPort => [ ...prevPort, s ])
  }

  const sellMyStock = (s) => {
    setPortfolioStocks(pStocks => pStocks.filter(stock => stock.id !== s.id))
  }

  const sortedStocks = [ ...stocks ].sort((stock1, stock2) => {
    if (sortBy === 'Alphabetically') {
      return stock1.name.localeCompare(stock2.name)
    } else {
      return stock1.price - stock2.price
    }
  })

  const filteredStocks = sortedStocks.filter((s) => s.type === filterBy)


  // const setSort = (v) => {
  //   setSortBy(v)
  // }

  // const setFilter = (v)=>{setFilterBy(v)}

  return (
    <div>
      <SearchBar
        sortBy={ sortBy }
        filterBy={ filterBy }
        onSortChange={ setSortBy }
        onFilterChange={ setFilterBy } />
      <div className="row">
        <div className="col-8">
          <StockContainer addToPortfolio={ addToPortfolio }  stocks={filteredStocks } />
          StockContainer
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={ portfolioStocks } sellMyStock={ sellMyStock } />
        </div>
      </div>
    </div>
  );
}

export default MainContainer
