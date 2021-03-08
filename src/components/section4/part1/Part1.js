import React from 'react'
import social from './social.svg'
import styles from './Part1.module.css'
const Part1 = () => {
    return (
        <div>
            <img src={social} alt='happy' className={styles.img} />
        </div>
    )
}
export default Part1;