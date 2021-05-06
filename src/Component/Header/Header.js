import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header/header.module.css'

 const Header = () => {
    return (
        <div className={styles.headContainer}>
            <ul className={styles.headerConatinerList}>
                <img src="img/UXG.jpg"/>
                <li>
                    <NavLink exact activeClassName={styles.active} to="/"><span>Home</span></NavLink>
                    <NavLink exact activeClassName={styles.active} to="/manageCategory"><span>Mangage category</span></NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Header