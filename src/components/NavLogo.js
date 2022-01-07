import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
const NavLogo = () => {

    return <div>
        <Link to="/" className="navbar-brand " >
            <img src={Logo} width="250px" alt="some"></img>
            <div style={{ color: 'white' }}>
                Powered By <span>Finstreet</span>
            </div>

        </Link>

    </div>
}

export default NavLogo;