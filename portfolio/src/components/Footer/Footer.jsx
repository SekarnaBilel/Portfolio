import React from 'react';
import './Footer.css'
import Wave from '../../img/wave.png'
import instagram from '../../img/instagram.png'
import linkedin from '../../img/linkedin.png'


const Footer = () => {
    return (
        <div className='footer'>
            <img src={Wave} alt="" style={{width: '100%'}} />
            <img className='hidden' src={instagram} alt="" />
            <img className='hidden' src={linkedin} alt="" />
        </div>
    );
};

export default Footer;