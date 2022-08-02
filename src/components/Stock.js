import React from "react";
function Stock({ stock, addToPortfolio, sellIt, itIsIn }) {
  const {ticker, name, price } = stock

  // const handleBuyClick = () => {
  //   addToPortfolio(stock)
  // }

  // const handleSellClick = () => {
  //   sellIt(stock)
  // }

  const handleClick = (cat) => {
    if (cat === 'stocks') { addToPortfolio(stock) }
    if (cat === 'portfolio' ){sellIt(stock)}
    }


  return (
    <div onClick= {()=>handleClick(itIsIn)}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> { name } </h5>
          <p className="card-text">{ ticker }: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
