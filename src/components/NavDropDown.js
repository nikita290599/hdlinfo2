import { useState } from "react";
import { Link } from "react-router-dom";
const NavDropDown = (props) => {
    
    async function updateCurrentCrypto(item){
        // const newer =e.target.id;
        await props.updateCrypto(item);
        // console.log("value",e.target.id);
        console.log("item",item);
        console.log("CURRENT CRYPTO ",props.curr);
        
    }
    
    const renderCrypto = () => {

        return props.crypto.map((item,INDEX) => {
            return (
                <Link to={'/' + item} id={item} key={INDEX} valued={item} className="dropdown-item" onClick={()=>{updateCurrentCrypto(item)}} >{item}</Link>
            )
        });
    }

    return <div className="d-flex align-items-center justify-content-center m-auto ">
        <div className="dropdown ">
            <button className="btn btn-d dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                INR
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">INR</a>
            </div>
        </div>
        <div className="dropdown ">
            <button className="btn btn-d  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.curr}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {renderCrypto()}

            </div>
        </div>
        <button className="btn btn-d ">
            Buy {props.curr}
        </button>


    </div>
}

export default NavDropDown;