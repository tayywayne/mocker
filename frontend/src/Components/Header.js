import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../actions/userActions'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../images/logo.png'

function Header() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
            <div className="navbar bg-base">
            <div className="flex-1">
                <Link to='/'><img src={logo} className='w-40'/></Link>
            </div>
            <div className="flex-none">
                {userInfo ? (
                    <ul className="menu menu-horizontal px-1 text-neutral-focus">
                        <li><a>Learn</a></li>
                        <li>
                            <details>
                            <summary>
                                Interviews
                            </summary>
                            <ul className="p-2 bg-base-200">
                                <li><a>New</a></li>
                                <li><a>Past</a></li>
                            </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                            <summary>
                                Welcome, {userInfo.first_name}!
                            </summary>
                            <ul className="p-2 bg-base-200">
                                <li><a>Settings</a></li>
                                <li><Link onClick={logoutHandler}>Logout</Link></li>
                            </ul>
                            </details>
                        </li>
                    </ul>
                ): (
                    <ul className="menu menu-horizontal px-1 text-neutral-focus">
                    <li><a>About</a></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
                )}
            </div>
            </div>
    )
}

export default Header
