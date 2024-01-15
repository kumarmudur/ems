import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to="/employees">
                 <span className="ems-brand">Employee Management System</span>
                </NavLink>
               
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/employees">Employee</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/departments">Departments</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;