import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
    return (
        <header>
            <nav className="base__grid">
                <div>
                    <Link to="/" className="nav__logo">SILA</Link>
                </div>
                <div className="nav__menu">
                    <ul>
                        <li className="nav__item">
                            <Link className="nav__link" to="/home">Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__link" to="/login">Login</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__link" to="/register">Register</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__link" to="/donate">Donate</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;