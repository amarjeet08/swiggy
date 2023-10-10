import React, { useState } from 'react';
import './Register.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        reEnterPassword: ''
    })

    const handleChange = (e) => {

        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();

        const { name, email, password, reEnterPassword } = user;

        if (password !== reEnterPassword) {
            alert("Password must be same")
        }

        if (name && email && password && (password === reEnterPassword)) {

            axios.post("http://localhost:5500/register/registerUser", user)
                .then(res => {
                    if (res.data.message === "User already exists") {
                        alert("User already exists!")
                    }

                    else if (res.data.message === "User created successfully") {
                        alert("User created successfully!")
                    }


                    else {
                        alert("Invalid Credentials")
                    }

                })

        }
    }


    return (
        <div className='register'>

            <form id='registration-form'>
                <input onChange={handleChange} type='text' name='name' value={user.name} id='email' placeholder='Enter Your Name'></input> <br />
                <input onChange={handleChange} type='text' name='email' value={user.email} id='phone' placeholder='Enter Your Email Address'></input> <br />
                <input onChange={handleChange} type='text' name='password' value={user.password} id='password' placeholder='Enter Password'></input> <br />
                <input onChange={handleChange} type='text' name='reEnterPassword' value={user.reEnterPassword} id='confirm-password' placeholder='Re-Enter Password'></input> <br />
                <button type='submit' onClick={handleRegister} >Register</button>
                <div className='OR'>OR</div>
                <button type='button' onClick={() => navigate('/login')}>Login</button>
            </form>



        </div>
    );
};

export default Register;
