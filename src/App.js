 import './App.css';
 import { useEffect, useState } from 'react'
 import  Axios  from 'axios';
 import Coin from './Components/Coin'

function App() {
  const [listOfCoins, setListOfCoins] = useState([])
  const [filterWord, setFilterWord] = useState("")

  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&').then((response) => {
      setListOfCoins(response.data.coins)
    })
  }, [])

   const filterCoin = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(filterWord.toLowerCase())
   })

  return (
    <div className="App">
     <div className="cryptoHeader">
      <input type="text" placeholder='Bitcoin...' 
      onChange={(e) => 
      {setFilterWord(e.target.value)}}/>
     </div>
      <div className="cryptoDisplay">{filterCoin.map((coin) => {
        return <Coin 
          name={coin.name} 
          price={coin.price} 
          icon={coin.icon} 
          symbol={coin.symbol} 
          totalSupply={coin.totalSupply} 
          volume={coin.volume}/>
      })}</div>
    </div>
  );
}

export default App;
