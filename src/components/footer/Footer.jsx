import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className={style.footer}>
                <img src={logo} alt="#" />
                <p>Yeferson Ruzón</p>
                <div className={style.SocialContainer}>
                    <i class="ri-linkedin-fill"></i>
                    <i class="ri-dribbble-line"></i>
                    <i class="ri-instagram-line"></i>
                    <i class="ri-twitter-line"></i>
                    <i class="ri-youtube-line"></i>
                </div>
                <div className={style.info}>
                    <p> Yeferson <span>Ruzon</span> - React<span>JS</span> - <i class="ri-copyright-line"></i>2022</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
