import React from 'react'
import './DestinationsStyles.css'

import Miami2 from '../../assets/Miami2.jpg'
import Toronto from '../../assets/Toronto.jpg'
import niagarafalls from '../../assets/niagarafalls.jpg'
import cancon from '../../assets/cancon.jpg'
import BanffNationalPark from '../../assets/BanffNationalPark.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>All-Inclusive Resorts</h1>
                <p>On North America's Best Destinations</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={Miami2} alt="/"/>
                    <img src={Toronto} alt="/"/>
                    <img src={niagarafalls} alt="/"/>
                    <img src={cancon} alt="/"/>
                    <img src={BanffNationalPark} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
