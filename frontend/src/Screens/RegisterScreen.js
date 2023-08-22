import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, } from 'react-router-dom'
import { register } from '../actions/userActions'

function RegisterScreen() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [email, setEmail] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== password2) {
            alert('Passwords do not match')
        } else {
            dispatch(register(username, email, first_name, last_name, password))
            navigate('/')
        }
    }

    return (
        <div className="p-10 min-h-screen">
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Register Now!</h1>
                <p className='py-6'>
                    Claim Your Free Account Now and Embark on Your Journey to Interview Mastery!
                </p>
                </div>
            <div className="flex items-center justify-center">

                <div className="flex-auto rounded-lg max-w-2xl p-10 shadow-2xl bg-secondary">
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
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type='email'
                                    placeholder='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input input-bordered"
                                    required/>
                        </div>

                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='first name'
                                    value={first_name}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="input input-bordered"
                                    required/>
                        </div>

                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='last name'
                                    value={last_name}
                                    onChange={(e) => setLastName(e.target.value)}
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
                        </div>

                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type='password'
                                    placeholder='confirm password'
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)}
                                    className="input input-bordered"
                                    required/>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-neutral" type='submit' >Register</button>
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account? Login!</Link>
                            </label>
                        </div>

                        </form>
                </div>

            </div>
        </div>
    )
}

export default RegisterScreen
