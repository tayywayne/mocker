import React from 'react'
import './styles/InterviewScreen.css'
import useCheckUser from '../Auth/useCheckUser'

function InterviewsScreen() {
    useCheckUser()


    return (
        <div className='inter-body'>
            <div className='inter-actions'>
            <div className="navbar  bg-primary rounded-lg">
                <div className="navbar-start">

                </div>

                <div className="navbar-end text-primary-content ">
                    <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    </div>
                    </button>
                </div>

                </div>
            </div>

            <div className='inter-interviews'>
                <div className='inter-stuff'>

                <div className='inter-title text-neutral'>
                        <h1>Recent Practice</h1>
                    </div>

                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Interview Role at Company Name</h2>
                            <p>date of interview</p>

                            <div className="overflow-x-auto">
                                <table className="table table-zebra ">
                                    {/* head */}
                                    <thead>
                                    <tr>
                                        <th>Questions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>What was the most difficult bug that you fixed in the past 6 months?</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>Tell me about a time in which you had a conflict and needed to influence somebody else.</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>Name a difficult challenge you faced while working on a project, how you overcame it, and what you learned.</td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>

                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Interview</button>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='inter-tips'>
                    <div className='inter-title text-neutral'>
                        <h1>Tips</h1>
                    </div>
                    <div className="card w-100 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterviewsScreen
