import { Link } from 'react-router-dom';
import logo from '../logo.png';
import {useGlobalContext} from '../context'
function Mainnav() {
    const {helpFxn,aboutFxn,homeFxn,tab}=useGlobalContext();
    return(
        <header>
       <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#">
                <img src={logo} alt="Avatar Logo" width='100px' className="p-1"/> 
                </a>
                <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='nav'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div id="nav" className='collapse navbar-collapse text-dark justify-content-center'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <span className={`nav-link ${tab=='Home' && 'bordered'}`} onClick={homeFxn}>Home</span>
                        </li>
                        <li className='nav-item'>
                            <span className={`nav-link ${tab=='Help' && 'bordered'}`} onClick={helpFxn}>Help</span>
                        </li>
                        <li className='nav-item'>
                            <span className={`nav-link ${tab=='About Me'&& 'bordered'}`} onClick={aboutFxn}>About Me</span>
                        </li>
                    </ul>
                </div>
            
        </nav>
        </header>
    )
}
export default Mainnav;
