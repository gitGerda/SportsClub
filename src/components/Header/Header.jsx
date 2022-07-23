import React from "react";
import style from './Header.module.css';
import logo from '../../assets/logo.png'

export default function Header() {
    return (
        <div className={style.header}>
           <img className={style.logo} src={logo} alt="logo"></img> 
            <ul className={style.header_menu}>
                <li>Home</li>
                <li>Programs</li>
                <li>Why us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </ul>
        </div>
    )
}