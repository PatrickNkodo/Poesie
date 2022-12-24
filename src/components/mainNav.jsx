import { Link } from 'react-router-dom';
import logo from '../logo.png';
function Mainnav() {
    return(
        <header>
       <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#">
                <img src={logo} alt="Avatar Logo" width='100px' className="p-1"/> 
                </a>
                <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='nav'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div id="nav" className='collapse navbar-collapse text-dark'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a href="" className="nav-link">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href="" className="nav-link">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href="" className="nav-link">About Me</a>
                        </li>
                    </ul>
                </div>
            
        </nav>
        </header>
    )
}
export default Mainnav;
