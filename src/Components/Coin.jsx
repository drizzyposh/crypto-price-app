import React from 'react'

function Coin({ name, price, icon, symbol, totalSupply, volume}) {
  return (
    <div className='coin'>
        <h1>Name: {name}</h1>
        <img src={icon}/>
        <h3>Price: {price}</h3>
        <h3>Symbol: {symbol}</h3>
        <h3>TotalSupply: {totalSupply}</h3>
        <h3>Volume: {volume}</h3>
    </div>
  )
}

export default Coin