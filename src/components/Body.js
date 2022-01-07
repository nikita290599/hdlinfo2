import cryptonews from "../images/cryptonews.png"
import banner from "../images/banneriost.jpg"
import logo1 from "../images/wazirx-logo.png"
import logo2 from "../images/bibbns-logo.png"
import logo3 from "../images/colodax-logo.png"
import React from "react"
const Body = (props) => {
  // function to render table data 
  const renderData = () => {
    return (
      <React.Fragment>
        <th scope="row">2</th>
        <td className='d-flex align-items-center justify-content-center'><img className='rounded-cirle' src={logo2} alt="logo1" width="10%" style={{ borderRadius: "50%", marginRight: "4%" }}></img><span>Bitbns</span></td>
        <td>₹ 36,66,293</td>
        <td>₹ 36,65,006 / ₹ 36,66,293</td>
        <td className="text-danger">0.36 %</td>
        <td className="text-info">▲ ₹ 17,232</td>
      </React.Fragment>

    );
  }


  return (<div>
    <div className="container-fluid d-flex align-items-center justify-content-center m-auto">
      <div className='head text-center'>
        <div className="avg-header m-auto">0.88%</div>
        <div className="avg-header-text m-auto">5 Mins</div>
      </div>
      <div className='head text-center'>
        <div className="avg-header m-auto">0.88%</div>
        <div className="avg-header-text m-auto">5 Mins</div>
      </div>
      <div className='head-main text-center'>
        <div className=" m-auto" style={{ color: 'grey', fontSize: "2rem" }}>Best Price to Trade</div>
        <div className="average-heading m-auto">₹ 3,04,279</div>
        <div className="avg-header m-auto" style={{ color: 'grey', fontSize: "1rem" }}>Average {props.current} /INR net price including commission</div>
      </div>
      <div className='head text-center'>
        <div className="avg-header m-auto">0.88%</div>
        <div className="avg-header-text m-auto">5 Mins</div>
      </div>
      <div className='head text-center'>
        <div className="avg-header m-auto">0.88%</div>
        <div className="avg-header-text m-auto">5 Mins</div>

      </div>

    </div>



    <div className='container-fluid ' style={{ marginLeft: "-1%" }}><a href="https://finstreet.in/" rel="noreferrer" target="_blank"><img className='m-4' src={cryptonews} style={{ borderRadius: "10px", width: "98%" }} alt="text"></img></a>

    </div>




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
        <tr className="m-2 rounded" >
          <th scope="row">1</th>
          <td className='d-flex align-items-center justify-content-center'><img className='rounded-cirle' src={logo1} alt="logo1" width="10%" style={{ borderRadius: "50%", marginRight: "4%" }}></img><span>WazirX</span></td>
          <td>₹ 36,66,293</td>
          <td>₹ 36,65,006 / ₹ 36,66,293</td>
          <td className="text-info">Otto</td>
          <td className="text-danger">▼ ₹ 16,246</td>
        </tr>
        <br></br>
        <tr >
          <th scope="row">2</th>
          <td className='d-flex align-items-center justify-content-center'><img className='rounded-cirle' src={logo2} alt="logo1" width="10%" style={{ borderRadius: "50%", marginRight: "4%" }}></img><span>Bitbns</span></td>
          <td>₹ 36,66,293</td>
          <td>₹ 36,65,006 / ₹ 36,66,293</td>
          <td className="text-danger">0.36 %</td>
          <td className="text-info">▲ ₹ 17,232</td>
        </tr>
        <br />
        <tr >
          <th scope="row">3</th>
          <td className='d-flex align-items-center justify-content-center'><img className='rounded-cirle' src={logo3} alt="logo1" width="10%" style={{ borderRadius: "50%", marginRight: "4%" }}></img><span>Colodax</span></td>
          <td>₹ 36,66,293</td>
          <td>₹ 36,65,006 / ₹ 36,66,293</td>
          <td className="text-info">0.36 %</td>
          <td className="text-info">▲ ₹ 17,232</td>
        </tr>

      </tbody>
    </table>


    <div className='container-fluid ' style={{ marginLeft: "-1%" }}>
      <a href="https://www.algorand.com/futurefi/" target="_blank" rel="noreferrer"><img className='m-4' src={banner} style={{ width: "98%" }} alt='banner'></img></a>
    </div>

  </div>);

}

export default Body;