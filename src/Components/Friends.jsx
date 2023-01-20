import React from 'react'
import Carousel from 'react-elastic-carousel'
import './FriendsStyle.css'
import { useMediaQuery } from 'react-responsive'


export default function Friends() {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)'})
    return (
        <div className='logoSlider'>
          
            <h3 className='heading'>Friends of MMI Hospital</h3>
            <p className='ourFriends'>Corporates can display their logo by contributing Rs. 1.2 Million for a year.</p>
            <div className='container d-flex justify-content-center'>
                <img src="./images/Vector.png" className='vect' alt="" />
            </div>
            <Carousel itemsToShow={isPortrait ? 2 :  isTabletOrMobile === true ? 3 : 6}>
                <span><img src="./images/logo1.png" alt="logo1.png" width={"100px"} /></span>
                <span><img src="./images/logo2.png" alt="logo2.png" width={"100px"} /></span>
                <span><img src="./images/logo3.png" alt="logo3.png" width={"100px"} /></span>
                <span><img src="./images/logo4.png" alt="logo4.png" width={"100px"} /></span>
                <span><img src="./images/logo5.png" alt="logo5.png" width={"100px"} /></span>
                <span><img src="./images/logo6.png" alt="logo6.png" width={"100px"} /></span>
                <span><img src="./images/logo1.png" alt="logo1.png" width={"100px"} /></span>
                <span><img src="./images/logo2.png" alt="logo2.png" width={"100px"} /></span>
                <span><img src="./images/logo3.png" alt="logo3.png" width={"100px"} /></span>
                <span><img src="./images/logo4.png" alt="logo4.png" width={"100px"} /></span>
                <span><img src="./images/logo5.png" alt="logo5.png" width={"100px"} /></span>
                <span><img src="./images/logo6.png" alt="logo6.png" width={"100px"} /></span>
            </Carousel>
        </div>
    )
}
