import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Nav.module.css'

// images
import logo from '../../assets/logo512.png'
import logotyp from '../../assets/logotyp.png'


const Nav = () => {


    // open & close mobile menu
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
    let styleMobileMenu = isOpenMobileMenu ? style.listOpen : '' //menu list close/open
    let styleMobileButtonBurger = isOpenMobileMenu ? style.burgerOpen : '' //button burger close/open



    return (
        <header className={style.background}>
            <nav className={style.container}>
                <div className={style.header}>
                    <img className={style.headerImg} src={logo} alt='logo' />
                    <img className={style.headerImg2} src={logotyp} alt='getpol_logo_white' />
                </div>
                <ul onClick={() => setIsOpenMobileMenu(false)} className={`${style.list} ${styleMobileMenu}`}>
                    <li className={style.listItem}><NavLink to='/about' activeClassName={style.activeLink} className={style.listItemAnchor}>O firmie</NavLink></li>
                    <li className={style.listItem}><NavLink to='/offer' activeClassName={style.activeLink} className={style.listItemAnchor}>Oferta</NavLink></li>
                    <li className={style.listItem}><NavLink to='/realizations' activeClassName={style.activeLink} className={style.listItemAnchor}>Realizacje</NavLink></li>
                    <li className={style.listItem}><NavLink to='/contact' activeClassName={style.activeLink} className={style.listItemAnchor}>Kontakt</NavLink></li>
                </ul>
                <div onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)} className={`${style.burgerMenu} ${styleMobileButtonBurger}`}>
                    <div className={style.burgerBtn}></div>
                </div>

            </nav>
        </header>
    )
}

export default Nav