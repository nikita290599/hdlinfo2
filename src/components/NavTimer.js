import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const NavTimer = (props) => {
    // Helper code for round timer 
    var [countdown, updateCount] = useState(60);
    const tick = () => {
        if (countdown > 0) {
            updateCount(countdown - 1);
        }
        else {
            updateCount(60);
        }
    }
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    // setting the style functionality
    const setStyleFunction = () => {
        if (props.styling === "./App.css") {
            props.setStyle("./App-light.css");
        }
        else {
            window.location.reload(false);
            props.setStyle("./App.css")
        }
    }



    // code for round timer ends

    return <div className="d-flex justify-contents-right">
        <div id="countdown" className='m-2'>
            <div id="countdown-number">{countdown}</div>
            <svg>
                <circle r="18" cx="20" cy="20"></circle>
            </svg>
        </div>
        <Link to='/telegram' className="btn bg-info text-light m-2"><i className="fab fa-telegram-plane" style={{ width: "0.5rem", marginRight: "1rem" }}></i>Connect Telegram</Link>
        <label className="switch m-2">
            <input type="checkbox" onClick={setStyleFunction} />
            <span className="slider round" />
        </label>

    </div>
}

export default NavTimer;