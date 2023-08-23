// This code checks if the user is logged in and if not it redirects the user to the login page.

import React, { useState, useEffect } from 'react'
import { useNavigate, } from 'react-router-dom'
import { useSelector } from 'react-redux';


function useCheckUser() {
    const navigate = useNavigate()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        }
    }, [navigate, userInfo])
}

export default useCheckUser
