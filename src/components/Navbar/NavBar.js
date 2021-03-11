import React from 'react';
import './navbar.scss'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logOut } from '../../action/user.action';

const NavBar = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    // const [isOpen, setIsOpen] = useState(false)
    const user = useSelector(state => state.users.user)
    // const toggle = () => setIsOpen(!isOpen)

    const handleLogout = () => {
        dispatch(logOut())

        toast("Logout successful", {
            type: "success"
        })

    }
    return (

        <nav>
            <div className="nav-container">
                <div className="nav-right">
                    <div className="nav-logo">
                        <h2 onClick={() => history.push("/")} >Issue Tracker</h2>
                    </div>

                </div>

                <div className="nav-left">
                    <div className="nav-welcome">
                        {user?.email ? <p className="welcome">{`Welcome ${user.firstName}`}</p> : ""}
                    </div>

                    {user ? (
                        <>
                            <NavLink activeClassName="nav-link-active" to="/add-issue">Add Issue</NavLink>
                            <NavLink activeClassName="nav-link-active" to="/about">About</NavLink>
                            <NavLink activeClassName="nav-link-active" to="/charts/issue">charts</NavLink>
                            <NavLink activeClassName="nav-link-active" onClick={handleLogout} to="/signin">Logout</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink activeClassName="nav-link-active" to="/about">About</NavLink>
                            <NavLink activeClassName="nav-link-active" to="/signin">Sign In</NavLink>
                            <NavLink activeClassName="nav-link-active" to="/signup">Sign Up</NavLink>
                        </>
                    )}

                </div>
            </div>
        </nav>
    )
}

export default NavBar
