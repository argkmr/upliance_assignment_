import { useState } from "react"
import { NavLink } from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="nav-bar">
            {/* <NavLink to="/" className="nav-link-style">Home</NavLink> */}
            <NavLink to="/counter" className="nav-link-style">Counter</NavLink>
            <NavLink to="/form" className="nav-link-style">Form</NavLink>
            <NavLink to="/editor" className="nav-link-style">Editor</NavLink>
            <NavLink to="/dashboard" className="nav-link-style">Dashboard</NavLink>

            <div className="responsive-links">
                <div className="icon" onClick={() => setIsOpen((curr) => !curr)}>
                    <MenuOpenIcon />
                </div>
                {isOpen && <div className="res-container">
                    <div className="close" onClick={() => setIsOpen(false)}><CloseIcon /></div>
                    {/* <NavLink to="/" className="nav-link-style-res">Home</NavLink> */}
                    <NavLink to="/counter" className="nav-link-style-res">Counter</NavLink>
                    <NavLink to="/form" className="nav-link-style-res">Form</NavLink>
                    <NavLink to="/editor" className="nav-link-style-res">Editor</NavLink>
                    <NavLink to="/dashboard" className="nav-link-style-res">Dashboard</NavLink>
                </div>}
            </div>
        </div>
    )
}

export default NavBar