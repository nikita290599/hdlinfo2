import React from 'react';
import NavDropDown from "./NavDropDown";
import NavLogo from "./NavLogo";
import NavTimer from "./NavTimer";
const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg d-flex m-3">
            <NavLogo />
            <NavDropDown curr={props.curr} crypto={props.crypto} updateCrypto={props.updateCrypto} />
            <NavTimer setStyle={props.setStyle} styling={props.styling} />
        </nav>
    )
}

export default Header;