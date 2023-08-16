import React from 'react'
import logo from '../images/logo.png'

function Header() {
    return (
            <div className="navbar bg-base-100">
            <div className="flex-1">
                <img src={logo} className='w-40'/>
            </div>
            <div className="flex-none">

                <div>
                    <ul className="menu menu-horizontal px-1">
                        <li><a>About</a></li>
                        <li><a>Sign Up</a></li>
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
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
            </div>
    )
}

export default Header
