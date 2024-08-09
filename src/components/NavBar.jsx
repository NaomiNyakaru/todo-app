import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return(
        <div className="nav-bar">
           <NavLink to={'/'}>
           <p> Home</p>
            </NavLink>
            <NavLink to={'/login'}>
            <p>Login</p>
            </NavLink>
            <NavLink to={'/register'}>
            <p>Register</p>
            </NavLink>
           
        </div>
    )

}

export default NavBar;