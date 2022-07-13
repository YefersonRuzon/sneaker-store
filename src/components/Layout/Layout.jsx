import React from 'react';
import style from './Layout.module.scss';
const Layout = () => {
    return (
        <>
            <nav className={style.navbar}>
                <div className={style.Logo}>
                    Sneakers<span>.</span>
                </div>
                <ul>
                    <li className={style.active}><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Products</a></li>
                </ul>
                <div className={style.BtnContainer}>
                    <span><i class="ri-search-line"></i></span>
                    <span><i class="ri-shopping-bag-3-line"></i></span>
                    <span></span>
                </div>
            </nav>
            
        </>
    );
}

export default Layout;
