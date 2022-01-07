import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./components/Header";
import Body from "./components/Body";
import Telegram from "./components/Telegram";


const App = () => {

  const cryptoExchanges = ['BTC', 'ETH', 'USDT', 'XRP', 'TRX', 'DASH', 'ZEC', 'XEM', 'IOST', 'WIN', 'BTT', 'WRX'];
  const [currentCrypto, updateCrypto] = useState('BTC');
  const [currentURL, updateCurrentURL] = useState('https://hodlinfo.com/api/getMarket/BTC-INR')
  const [respData, updateResponse] = useState(null);
 
 
 
 
  // Function to load API of HODLINFO First time
  const rootURL = "https://hodlinfo.com/api/getMarket/";
 
  useEffect(() => {
    async function onSearchSubmit() {
      updateCurrentURL(rootURL + currentCrypto + "-INR");
      const response =await axios.get(currentURL);
      
        updateResponse(response.data);
        console.log("Second load", respData);
   
    }
    onSearchSubmit();
    updateCrypto('BTC');
  }, []);
  // Function to load api for second time 
  useEffect(() => {
    async function onSearchSubmit() {
      updateCurrentURL(rootURL + currentCrypto + "-INR");
      const response =await axios.get(currentURL);
      
        updateResponse(response.data);
        console.log("Second load", respData);
   
    }
    onSearchSubmit();
  }, [currentCrypto]);
  // Function to load API ends 

  // Function that renders links
  const renderLinks = () => {
    const date= Date.now();
    console.log("First render",date);
    return cryptoExchanges.map((item) => {
      let currPath = "/" + item;
      return <Route key={item} path={currPath} element={<Body current={currentCrypto} respData={respData} />} ></Route>

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



  return (
    <Router>
      <div className="App">
        <Header curr={currentCrypto} crypto={cryptoExchanges} updateCrypto={updateCrypto} setStyle={setStyle} styling={styling}></Header>
        <Routes>
          <Route path="/" element={<Body current={currentCrypto} respData={respData} />} />
          <Route path="/telegram" element={<Telegram />} />

          {renderLinks()}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
