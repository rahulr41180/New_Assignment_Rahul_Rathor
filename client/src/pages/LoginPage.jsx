
import "../Css/RegisterPage.Style.css";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import layoutExports from "../Layouts/layout.exports";
import authActions from "../Redux/Actions/authActions";
import { useDispatch } from 'react-redux';

export const LoginPage = () => {
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await dispatch(authActions.login(formData.email, formData.password));
            // console.log('data handleSubmit:', data)
            if(data?.token) {
                toast.success("Login has been done!");
                setFormData({
                    email: "",
                    password: "",
                })
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            }
        } catch(error) {
            // console.log('error handleSubmit:', error)
            toast.error(error.response.data.error);
        }
    }

    return (
        <>
            <layoutExports.NavbarComponent />
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4 className="title">LOGIN FORM</h4>
                    <div className="mb-3">
                        <input required onChange={handleChange} value={formData.email} type="email" className="form-control" name="email" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <input required onChange={handleChange} value={formData.password} type="password" className="form-control" name="password" placeholder="Password" />
                    </div>
                    <p className="fs-6"><b>Note :</b> Please use reqres APIs credentials.</p>
                    <div className="mb-3">
                        <button type="button" className="btn btn-primary" onClick={() => {
                            navigate("#")
                        }}>Forgot Password</button>
                    </div>
                    <div className="mb-3">
                        <button type="button" className="btn btn-primary" onClick={() => {
                            navigate("/register")
                        }}>Don't have an Account</button>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            <Toaster />
        </>
    )
}