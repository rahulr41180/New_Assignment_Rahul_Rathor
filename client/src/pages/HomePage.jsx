
import "../Css/HomePage.css"
import { useSelector } from "react-redux"; 
import { Link } from 'react-router-dom';
import layoutExports from "../Layouts/layout.exports";
import componentsExport from "../components/components.export";

export const HomePage = () => {

    const { token } = useSelector(state => state.auth);

    return (

        <>
            <layoutExports.NavbarComponent />
            {
                !token ? (
                    <>
                        <div className="hp_secureContainer">
                            <p className="fs-4 mb-0">Please do login to access!</p>
                            <Link to={"/login"} className="fs-4">Login</Link>
                        </div>
                    </>
                ) : (
                    <>
                        <componentsExport.UserList />
                    </>
                )
            }
        </>
    )
}