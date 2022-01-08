import cryptonews from "../images/cryptonews.png"
import banner from "../images/banneriost.jpg"
import logo0 from "../images/wazirx-logo.png"
import logo1 from "../images/bibbns-logo.png"
import logo2 from "../images/colodax-logo.png"
import logo3 from "../images/zebpay-logo.png"
import logo4 from "../images/coincdx-logo.png"
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
const Body = (props) => {
  const images =[logo0 , logo1,logo2,logo3,logo4]
  
  const location = useLocation();
  // useEffect(()=>{
  //    if(JSON.stringify(location.pathname)===""){
  //      props.updateCrypto('BTC');
  //    }
  //    else{

  //    const current= JSON.stringify(location.pathname);
  //    props.updateCrypto(current.slice(2,-1));
  //    }
  // });
  //console.log("location ",location.pathname);
  
  // function to render table data 
  const renderData = () => {
    
    return(
      props.respData.maindata.map((item,index)=>{
        
        return(
          <React.Fragment key={index}>
          <tr >
          <th scope="row">{index}</th>
          <td className='d-flex align-items-center justify-content-center'><img className='rounded-cirle' src={images[index]} alt={"logo"+index} width="10%" style={{ borderRadius: "50%", marginRight: "4%" }}></img><span>{item.name}</span></td>
          <td>₹ {Math.floor(item.last_trade_price)}</td>
          <td>₹ {Math.floor(item.buy)} / ₹ {Math.floor(item.sell)}</td>
          
          <td className={item.difference<0?"text-danger":"text-info"}>{item.difference} %</td>
          {item.saving<0?<td className="text-danger">⯆ ₹ {item.saving}</td>:<td className="text-info">▲ ₹ {item.saving}</td>}
          
          </tr>
          
        </React.Fragment>
        )
      })
    )


    

    
  }

  const renderBody=()=>{

    if (props.respData){
      return(<div>
        <div className="container-fluid d-flex align-items-center justify-content-center m-auto">
          <div className='head text-center'>
            <div className="avg-header m-auto">{props.respData.previousdata.last5Mins}%</div>
            <div className="avg-header-text m-auto">5 mins</div>
          </div>
          <div className='head text-center'>
            <div className="avg-header m-auto">{props.respData.previousdata.last1Hour}%</div>
            <div className="avg-header-text m-auto">1 Hour</div>
          </div>
          <div className='head-main text-center'>
            <div className=" m-auto" style={{ color: 'grey', fontSize: "2rem" }}>Best Price to Trade</div>
            <div className="average-heading m-auto">₹ {Math.floor(props.respData.best_trade_price)}</div>
            <div className="avg-header m-auto" style={{ color: 'grey', fontSize: "1rem" }}>Average {props.current} /INR net price including commission</div>
          </div>
          <div className='head text-center'>
            <div className="avg-header m-auto">{props.respData.previousdata.last24Hours}%</div>
            <div className="avg-header-text m-auto">1 Day</div>
          </div>
          <div className='head text-center'>
            <div className="avg-header m-auto">{props.respData.previousdata.last7Days}%</div>
            <div className="avg-header-text m-auto">7 Days</div>
    
          </div>
    
        </div>
    
    
    
        <div className='container-fluid ' style={{ marginLeft: "-1%" }}><a href="https://finstreet.in/" rel="noreferrer" target="_blank"><img className='m-4' src={cryptonews} style={{ borderRadius: "10px", width: "98%" }} alt="text"></img></a>
    
        </div>
    
    
    
    {/* Rendering table */}
        <table className="container-fluid table table-borderless text-center" style={{ width: "96%" }}>
          <thead>
            <tr >
              <th className='pointer rounded-top align-middle' scope="col">#</th>
              <th style={{ width: "20%" }} scope="col">Platform</th>
              <th scope="col">Last Traded Price</th>
              <th scope="col">Buy/Sell Price</th>
              <th scope="col">Difference</th>
              <th scope="col">Savings</th>
            </tr>
    
          </thead>
          <tbody>
          {renderData()}
            
    
          </tbody>
        </table>
    
    
        <div className='container-fluid ' style={{ marginLeft: "-1%" }}>
          <a href="https://www.algorand.com/futurefi/" target="_blank" rel="noreferrer"><img className='m-4' src={banner} style={{ width: "98%" }} alt='banner'></img></a>
        </div>
    
      </div>);
    }
    else{
      return<div>Loading</div>
    }
  }


  return (<div>{renderBody()}</div>);

}

export default Body;