import React, { useState } from 'react';
import './SearchStyles.css';
import Gold from '../../assets/gold.png';

function Search({ destinations, promoDetails }) {
    const [selectedDestination, setSelectedDestination] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search details:', { selectedDestination, checkInDate, checkOutDate });
    };

    return (
        <div name="book" className="search">
            <div className="container">
                <div className="left">
                    <h2>LAST-MINUTE WEEKEND GETAWAYS</h2>
                    <p>Escape the everyday with our exclusive last-minute weekend deals, ideal for couples looking to relax, recharge, and make unforgettable memories. Whether you're seeking a cozy retreat in the Canadian Rockies, a beachside adventure in Mexico, or a vibrant city escape in the U.S., we’ve got the perfect destination waiting for you. 
                    Enjoy incredible savings on all-inclusive weekend vacations at premium resorts across Canada, the U.S., and Mexico. From luxurious accommodations and gourmet dining to endless activities and premium beverages – all of it is yours to enjoy when you book last minute.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="Gold badge" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>WORLD'S LEADING</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NO ONE INCLUDES MORE</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                                <button>View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">{promoDetails.discountText}</h4>
                        <p className="timer">{promoDetails.timeLeft}</p>
                        <p className="offers">{promoDetails.offerText}</p>
                    </div>
                    <form onSubmit={handleSearch}>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select
                                value={selectedDestination}
                                onChange={(e) => setSelectedDestination(e.target.value)}
                            >
                                {destinations.map((destination, index) => (
                                    <option key={index} value={destination}>
                                        {destination}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input
                                    type="date"
                                    value={checkInDate}
                                    onChange={(e) => setCheckInDate(e.target.value)}
                                />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input
                                    type="date"
                                    value={checkOutDate}
                                    onChange={(e) => setCheckOutDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit">Rates & Availabilities</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Search;


