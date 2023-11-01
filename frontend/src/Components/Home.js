import React from 'react'
import LocationInput from './LocationInput'
import Search from './Search'
import MyOrders from './MyOrders'
import LogOut from './Logout'
import './Home.css'
import ImageCarousel from './ImageCarousel'
import Card from './Card'


const Home = () => {
    return (
        <>
            <div className='header-section' >
                <img src="./swiggyAssets\Swiggy_logo.svg.png" alt='swiggy' className='swiggy-image' />
                <LocationInput />
                <Search />
                <MyOrders />
                <LogOut />
            </div>

            <div >
                <h1>Best offers for you</h1>
                <ImageCarousel />
            </div>
            <div >
                <h1>What's On Your Mind</h1>
                <Card />
            </div>
        </>
    )
}

export default Home