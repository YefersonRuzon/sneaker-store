import React from 'react';
import './Footer.scss'
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <h3>Snea <br /><span>k</span>ers.</h3>
                <p>Social media</p>
                <div className="SocialContainer">
                    <i class="ri-linkedin-fill"></i>
                    <i class="ri-dribbble-line"></i>
                    <i class="ri-instagram-line"></i>
                    <i class="ri-twitter-line"></i>
                    <i class="ri-youtube-line"></i>
                </div>
                <span className='bgLine'></span>
                <div className="info">
                    <p> Yeferson Ruzon - ReactJS - <i class="ri-copyright-line"></i>2022</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
