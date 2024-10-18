
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import "../Css/RegisterPage.Style.css";
import layoutExports from "../Layouts/layout.exports";
import authActions from "../Redux/Actions/authActions";
import { useDispatch } from 'react-redux';

export const RegisterPage = () => {

    const [formData, setFormData] = useState({

        email: "",
        password: "",
    })
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
            const data = await dispatch(authActions.register(formData.email, formData.password));
            // console.log('data handleSubmit:', data)
            if (data?.token) {
                toast.success("Registration has been done!");
                setFormData({
                    email: "",
                    password: "",
                })
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            }
        } catch (error) {
            // console.log('error handleSubmit:', error)
            toast.error(error.response.data.error);
        }
    }

    return (
        <>
            <layoutExports.NavbarComponent />
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4 className="title">REGISTER FORM</h4>
                    <div className="mb-3">
                        <input required onChange={handleChange} value={formData.email} type="email" className="form-control" name="email" placeholder="Enter Email" />
                    </div>
                    <div className="mb-3">
                        <input required onChange={handleChange} value={formData.password} type="password" className="form-control" name="password" placeholder="Enter Password" />
                    </div>
                    <p className="fs-6"><b>Note :</b> Please use reqres APIs credentials.</p>
                    <div className="mb-3">
                        <button type="button" className="btn btn-primary" onClick={() => {
                            navigate("/login");
                        }}>Already have an account</button>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
            <Toaster />
        </>
    )
}