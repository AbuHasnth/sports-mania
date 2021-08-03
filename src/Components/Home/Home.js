import React from 'react';
import './Home.css'
import background from '../../sports-mania-main/Photo/Rectangle 28.png'
import leagueImage from '../../sports-mania-main/Leauge Logo/image 1.png'
import leagueImage2 from '../../sports-mania-main/Leauge Logo/image 2.png'
import leagueImage3 from '../../sports-mania-main/Leauge Logo/image 3.png'
import leagueImage4 from '../../sports-mania-main/Leauge Logo/image 4.png'
import leagueImage5 from '../../sports-mania-main/Leauge Logo/image 5.png'
import leagueImage6 from '../../sports-mania-main/Leauge Logo/image 6.png'
import leagueImage7 from '../../sports-mania-main/Leauge Logo/image 7.png'
import leagueImage8 from '../../sports-mania-main/Leauge Logo/image 8.png'
import leagueImage9 from '../../sports-mania-main/Leauge Logo/image 9.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGreaterThan } from '@fortawesome/free-solid-svg-icons'

import { Link} from 'react-router-dom';

const Home = () => {
    
    return (
        <div>
            <div>
                <div className='header'>
                    <div className='bg-image'></div>
                    <h1>Sports Mania</h1>
                </div>
            </div>
            <div>
                <div className="all_home_content">
                    <div className='homeContent'>
                        <div id='box'>
                            <img src={leagueImage} alt="" />
                            <h3>Premier League</h3>
                            <p> Sports Type Football</p>
                            <Link to={`/league/${4346}`}><button className='main-button'> Explore           <FontAwesomeIcon icon={faGreaterThan} /></button> </Link>
                        </div>
                    </div>
                    <div className='homeContent'>
                        <div id='box'>
                        <img src={leagueImage2} alt="" />
                            <h3>UEFA Champions League</h3>
                            <p> Sports Type Football</p>
                            <Link to={`/league/${4480}`}><button className='main-button'>Explore<FontAwesomeIcon icon={faGreaterThan} /></button> </Link>
                        </div>
                    </div>
                    <div className='homeContent'>
                        <div id='box'>
                        <img src={leagueImage3} alt="" />
                            <h3>Premier Legue</h3>
                            <p> Sports Type Football</p>
                            <Link to={`/league/${4346}`}><button className='main-button'>Explore<FontAwesomeIcon icon={faGreaterThan} /></button> </Link>
                        </div>
                    </div>
                    <div className='homeContent'>
                        <div id='box'>
                            <img src={leagueImage4} alt="" />
                            <h3>Premier Legue</h3>
                            <p> Sports Type Football</p>
                            <Link to={`/league/${4347}`}><button className='main-button'>Explore<FontAwesomeIcon icon={faGreaterThan} /></button> </Link>
                        </div>
                    </div>
                    <div className='homeContent'>
                        <div id='box'>
                            <img src={leagueImage5} alt="" />
                            <h3>Premier Legue</h3>
                            <p> Sports Type Football</p>
                            <Link to={`/league/${4346}`}><button className='main-button'>Explore<FontAwesomeIcon icon={faGreaterThan} /></button> </Link>
                        </div>
                    </div>
                    <div className='homeContent'>
                        <div id='box'>
                            <img src={leagueImage6} alt="" />
                            <h3>Premier Legue</h3>
                            <p> Sports Type Football</p>
                            <Link to={`/league/${4346}`}><button className='main-button'>Explore<FontAwesomeIcon icon={faGreaterThan} /></button> </Link>
                        </div>
                    </div>
                    <div className='homeContent'>
                        <div id='box'>
                            <img src={leagueImage7} alt="" />
                            <h3>Premier Legue</h3>
                            <p> Sports Type Football</p>
                            <Link to={`/league/${4346}`}><button className='main-button'>Explore<FontAwesomeIcon icon={faGreaterThan} /></button> </Link>
                        </div>
                    </div>
                    <div className='homeContent'>
                        <div id='box'>
                            <img src={leagueImage8} alt="" />
                            <h3>Premier Legue</h3>
                            <p> Sports Type Football</p>
                            <Link to={`/league/${4346}`}><button className='main-button'>Explore<FontAwesomeIcon icon={faGreaterThan} /></button> </Link>
                        </div>
                    </div>
                    <div className='homeContent'>
                        <div id='box'>
                            <img src={leagueImage9} alt="" />
                            <h3>Premier Legue</h3>
                            <p> Sports Type Football</p>
                            <Link to={`/league/${4346}`}><button className='main-button'>Explore<FontAwesomeIcon icon={faGreaterThan} /></button> </Link>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Home;