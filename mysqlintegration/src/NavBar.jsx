// Navbar.jsx
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Student Portal</div>
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>Student Profile</NavLink></li>
        <li><NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>Student Registration</NavLink></li>
        <li><NavLink to="/delete" className={({ isActive }) => isActive ? "active" : ""}>Delete Student</NavLink></li>
        <li><NavLink to="/update" className={({ isActive }) => isActive ? "active" : ""}>Update Student</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;