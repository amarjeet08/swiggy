import React, { useState } from 'react';
import './FirstPage.css';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLocateMe = () => {
        setLoading(true);

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    if (response.ok) {
                        const address = data.display_name;
                        setLocation(address);
                    } else {
                        console.error('Failed to fetch location data');
                    }
                } catch (error) {
                    console.error('Error fetching location data:', error);
                } finally {
                    setLoading(false);
                }
            },
            (error) => {
                console.error('Error getting geolocation:', error);
                setLoading(false);
            }
        );
    };

    return (
        <>
            <div className="portion-one">
                <div className="box">
                    <div className="box-1">
                        <div className="first-part">
                            <img
                                className="first-image"
                                src="./swiggyAssets/Swiggy_logo.svg.png"
                                alt="logo of swiggy"
                            />
                            <button className="login" onClick={() => navigate('/login')}>
                                Login
                            </button>
                            <button className="signup" onClick={() => navigate('/register')}>
                                Sign Up
                            </button>
                        </div>

                        <div className="second-part">
                            <h1 className="heading">Late night at office?</h1>
                            <h3 className="description">
                                Order food from favourite restaurants near you.
                            </h3>
                            <div className="another-div">
                                <input
                                    className="height"
                                    type="text"
                                    placeholder="Find your delivery location"
                                    id="input"
                                    value={loading ? 'Loading...' : location}
                                    readOnly
                                />
                                <button className="height" id="location" onClick={handleLocateMe}>
                                    Locate Me
                                </button>
                                <button className="height" id="find-food">
                                    Find Food
                                </button>
                            </div>
                            <h3 className="popular-cities">POPULAR CITIES IN INDIA</h3>
                            <h4 className="city-name">
                                Ahmedabad Banglore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune & more.
                            </h4>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='portion-two'>
                        <img src='./swiggyAssets/Lunch1_vlksgq.webp' alt='image of lunch' />
                    </div>
                </div>

            </div>
        </>
    );
};

export default FirstPage;

