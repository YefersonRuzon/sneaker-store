import React from 'react';
import style from './Layout.module.scss';
import { NavLink } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav className={style.navbar}>
                <div className={style.Logo}>
                    Sneakers<span>.</span>
                </div>
                <ul>
                    <li className={style.active}><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/product">Shop</NavLink></li>
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
