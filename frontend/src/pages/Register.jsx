import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userSignUp } from '../services/authServices';
import '../styles/Register.scss';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const credentials = {
            firstName,
            lastName,
            email,
            password,
        };

        try {
            const response = await userSignUp(credentials);
            if (response && response.token) {
                const userId = response.newUser._id
                console.log(userId)
                localStorage.setItem("userID", userId)
                // const role = response.role

                await updateCartForUser(userId)
                navigate('/');
            } else {
                setErrorMessage('Registration failed. Please try again.');
            }
        } catch (error) {
            setErrorMessage('An error occurred during registration. Please try again.');
        }
    };


    const updateCartForUser = async (userId) => {
        const guestCart = JSON.parse(localStorage.getItem('cart_guest')) || [];
        if (guestCart.length > 0) {
            const userCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
            const updatedCart = [...userCart, ...guestCart];

            localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
            localStorage.removeItem('cart_guest');
        }
    }



    return (
        <div className='register-container'>
            <div className="register-content">
                <div className="register-heading">
                    <p>Register your account</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="register-inputs">
                        <div>
                            <label htmlFor="Firstname">First Name</label><br />
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="Lastname">Last Name</label><br />
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="Email">Email</label><br />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="Password">Password</label><br />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <div className="register-buttons">
                        <button className='register-signUp-button' type='submit'>SUBMIT</button>
                        <a href="/">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
