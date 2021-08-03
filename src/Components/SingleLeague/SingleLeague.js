import React from 'react';
import GenderImg from '../../sports-mania-main/Photo/male.png'
import './SingleLeague.css'
import icon from '../../sports-mania-main/Icon/Facebook.png'
import icon1 from '../../sports-mania-main/Icon/YouTube.png'
import icon2 from '../../sports-mania-main/Icon/Twitter.png'


const SingleLeague = (props) => {
    console.log(props.league)
    const league = props.league;
    const { strBadge, strCountry, strLeague, strSport, strGender} = league;
    const gender = strGender;
    let image;
    if(gender ==='Male'){
         image = <img src={GenderImg} alt="" />;
    }
    else{
        image = <h1>Ami image</h1>
    }
    
    return (
        <div>
            <div>
                <div className='header'>
                    <div className='bg-image'></div>
                    <img src={strBadge} alt="" />
                </div>
            </div>
            <div className="parent-div">
                <div className="single-league">
                    <div >
                        <h1>League: {strLeague}</h1>
                        <p>Country: {strCountry}</p>
                        <p>Type: {strSport}</p>
                        <p>Gender : {strGender}</p>
                    </div>
                    <div className='gender-img'>
                    {
                        image
                    }
                       
                    </div>           
                </div>
                <div>
                <div className='details'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur nemo maiores id unde, maxime accusantium obcaecati sed veniam in, ad quibusdam fugit consequatur corporis ab autem error aliquid itaque?
                        Nesciunt quas omnis eos expedita? Impedit optio necessitatibus possimus provident accusamus, officia corrupti reprehenderit maxime eius vitae minima. Sequi accusantium quod, labore esse harum eos rem. Laborum sapiente error quos?
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur nemo maiores id unde, maxime accusantium obcaecati sed veniam in, ad quibusdam fugit consequatur corporis ab autem error aliquid itaque?
                        Nesciunt quas omnis eos expedita? Impedit optio necessitatibus possimus provident accusamus, officia corrupti reprehenderit maxime eius vitae minima. Sequi accusantium quod, labore esse harum eos rem. Laborum sapiente error quos?
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur nemo maiores id unde, maxime accusantium obcaecati sed veniam in, ad quibusdam fugit consequatur corporis ab autem error aliquid itaque?
                        Nesciunt quas omnis eos expedita? Impedit optio necessitatibus possimus provident accusamus, officia corrupti reprehenderit maxime eius vitae minima. Sequi accusantium quod, labore esse harum eos rem. Laborum sapiente error quos?
                        </p>
                        
                    </div>
                    <div className='footer'>
                        <a href="facebook.com"><img className='footer-image' src={icon} alt="" /></a><a href="youtube.com"><img className='footer-image' src={icon1} alt="" /></a><a href="twitter.com"><img className='footer-image'src={icon2} alt="" /></a>
                    </div>

                </div>

            </div>
            
            
        </div>
    );
};

export default SingleLeague;