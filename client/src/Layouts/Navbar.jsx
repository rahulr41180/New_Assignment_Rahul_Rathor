
import { useDispatch, useSelector } from "react-redux"; 
import { Link } from 'react-router-dom';
import authActions from "../Redux/Actions/authActions";

export const NavbarComponent = () => {

    const { token } = useSelector(state => state.auth);
    const dispatch = useDispatch();


    const handleLogOut = () => { 
        dispatch(authActions.logout());
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand flex-grow-1" to={"/"}>
                        <img src="https://react-bootstrap.netlify.app/img/logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />

                        New Assignment
                    </Link>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={"/"} style={{ color : "#ffffff" }}>Home</Link>
                            </li>
                            {
                                !token ? (
                                    <>
                                        <li className="nav-item">
                                            <Link to={"/register"} className="nav-link" style={{ color : "#ffffff" }} >Register</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/login"} className="nav-link" style={{ color : "#ffffff" }} >Login</Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <button className="btn nav-link rounded-0 text-white opacity-100" onClick={handleLogOut}>LogOut</button>
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}