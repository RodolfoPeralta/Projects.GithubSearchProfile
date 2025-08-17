import './header.css';
import logo from '../../assets/logo.webp';

function Header() {

    return(
        <div className='header-container'>
            <h1 className='header-title'>Hithub Profile</h1>
            <div className='header-img'>
                <img src={logo} alt="Github logo" />
            </div>
        </div>
    )
}

export default Header;