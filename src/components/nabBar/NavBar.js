import React from 'react'
import styles from './NavBar.module.css'
const NavBar = () => {
    return (
        <div className={styles.div}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <h1 className={styles.logo}>Elhasnaoui</h1>

            <button className={styles.button}>Buy Now</button>
        </div>
    )
}

export default NavBar
