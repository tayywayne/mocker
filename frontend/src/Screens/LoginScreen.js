import React, { useState, useEffect } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../actions/userActions';

function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            navigate("/interviews")
        }
    }, [navigate, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username, password))
    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm bg-secondary shadow-2xl ">
                    <div className="card-body">


                        <form onSubmit={submitHandler}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="input input-bordered"
                                    required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type='password'
                                    placeholder='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input input-bordered"
                                    required/>
                                <label className="label">
                                    <Link to="/register" className="label-text-alt link link-hover">Don't have an account? Join Now</Link>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-neutral" type='submit' >Login</button>
                            </div>

                        </form>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginScreen
