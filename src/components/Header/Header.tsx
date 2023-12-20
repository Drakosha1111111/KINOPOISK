import './Header.css'
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <Link to='/home'><div className='logo'></div></Link>
            </nav>
        </header>
    )
};

export default Header