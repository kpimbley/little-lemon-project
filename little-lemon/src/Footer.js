import './App.css';
import Logo from './monochrome_logo.png'

function Footer(){
    return (<footer>
        <ul>
            <li><img src={Logo} alt="Little Lemon Logo"></img></li>
        </ul>
        <ul>
            <li>Doormat Navigation</li>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
        <ul>
            <li>Contact</li>
            <li><a href="www.maps.google.com">Address</a></li>
            <li><a href="www.maps.google.com">Phone Number</a></li>
            <li><a href="mailto:info@littlelemon.com">Email</a></li>
        </ul>
        <ul>
            <li>Social Media Links</li>
            <li><a href="www.maps.google.com">Address</a></li>
            <li><a href="www.maps.google.com">Phone Number</a></li>
            <li><a href="mailto:info@littlelemon.com">Email</a></li>
        </ul>
    </footer>
    );
}

export default Footer;