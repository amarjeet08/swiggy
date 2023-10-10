import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        })

    }

    const handleLogin = (e) => {
        const { email, password } = user;

        if (email && password) {
            axios.post('http://localhost:5500/login/loginUser', user)
                .then((res) => {
                    if (res.data.message === "Logged In Successfully") {
                        alert("Logged In Successfully")
                    };

                    if (res.data.message === "Password Is Wrong") {
                        alert("Enter Correct Password")
                    };

                    if (res.data.message === "User Not Found") {
                        alert("User Not Found")
                    }
                })
        }
    }

    return (
        <>
            <div className='register'>

                <form id='registration-form'>
                    <input onChange={handleChange} type='text' name='email' value={user.email} id='phone' placeholder='Enter Your Email Address'></input> <br />
                    <input onChange={handleChange} type='text' name='password' value={user.password} id='password' placeholder='Enter Password'></input> <br />
                    <button type='submit' onClick={handleLogin} >Login</button>
                    <div className='OR'>OR</div>
                    <button type='button' onClick={() => navigate('/register')}>Register</button>
                </form>



            </div>
        </>
    )
}

export default Login