import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Telegram from "./components/Telegram";



function App() {
  // Function that renders links
  const renderLinks = () => {
    return cryptoExchanges.map((item) => {
      let currPath = "/" + item;
      return <Route key={item} path={currPath} element={<Body current={currentCrypto} />} ></Route>

    });
  }
  // Functioning of css styling button
  const [styling, setStyle] = useState("./App.css");
  if (styling === "./App.css") {
    import('./App.css')
      .then(() => {
        console.log("styling", styling);
      });
  }
  else {
    import('./App-light.css').then(() => {
      console.log("styling", styling);
    });
  }


  const cryptoExchanges = ['BTC', 'ETH', 'USDT', 'XRP', 'TRX', 'DASH', 'ZEC', 'XEM', 'IOST', 'WIN', 'BTT', 'WRX'];
  const [currentCrypto, updateCrypto] = useState('BTC');
  return (
    <Router>
      <div className="App">
        <Header curr={currentCrypto} crypto={cryptoExchanges} updateCrypto={updateCrypto} setStyle={setStyle} styling={styling}></Header>
        <Routes>
          <Route path="/" element={<Body current={currentCrypto} />} />
          <Route path="/telegram" element={<Telegram />} />

          {renderLinks()}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
