
import "../Css/UserList.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import userActions from "../Redux/Actions/userActions";

export const UserList = () => {
    const { users, loading, totalUser } = useSelector(state => state.users);
    const { token } = useSelector(state => state.auth);

    const [page, setPage] = useState(1);
    // eslint-disable-next-line
    const [limit, setLimit] = useState(6);

    const dispatch = useDispatch();
    // console.log('token:', token)
    console.log('loading:', loading)
    // console.log('users:', users)

    useEffect(() => {
        dispatch({ type: "LOADING" })
        let id;
        if (token) {
            id = setTimeout(() => {
                dispatch(userActions.loadAllUsers(page))
            }, 2000)
        }
        return () => {
            clearTimeout(id);
        }
    }, [token, dispatch, page])

    const totalPages = Math.ceil(totalUser / limit);

    return (
        <>
            <div id="rlpc_container">
                {
                    loading ? (
                        <div className="ul_loader">
                            <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-border text-secondary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-border text-success" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-border text-danger" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-border text-warning" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-border text-info" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-border text-light" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-border text-dark" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <>
                            <p className="border-bottom border-4 border-primary fs-3">All User Profiles</p>
                            <div id="rlpc_renderleadProfileContainer" className="table-responsive">
                                <table className="table rlpc_table">
                                    <thead className="">
                                        <th scope="col">#</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Profile</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Details</th>
                                        <th scope="col">Delete</th>
                                    </thead>
                                    <tbody>
                                        {
                                            users?.map((element, index) => {
                                                return (
                                                    <>
                                                        <tr key={element?.id}>
                                                            <td><b>{index + 1}</b></td>
                                                            <td>{element?.id}</td>
                                                            <td>
                                                                <img src={element?.avatar} alt="" />
                                                            </td>
                                                            <td>{element?.email}</td>
                                                            <td>{element?.first_name}</td>
                                                            <td>{element?.last_name}</td>
                                                            <td>
                                                                <Link to={`#`} type="button" className="btn btn-primary">Details</Link>
                                                            </td>
                                                            <td>
                                                                <button type="button" className="btn btn-danger" onClick={() => {
                                                                    // deleteLeadProfile(element?._id);
                                                                }}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table >
                            </div >
                            <div className="ul_paginationContainer">
                                <button type="button" className="btn btn-secondary" onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>Prev</button>
                                <button type="button" className="btn btn-secondary" onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>Next</button>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}