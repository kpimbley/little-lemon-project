import './App.css';
import Logo from './Logo.svg';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <img src={Logo} alt="Little Lemon Logo" className="nav-logo" />
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;