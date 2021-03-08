import React from 'react'
import happy from './happy.svg'
import styles from './Part1.module.css'
const Part1 = () => {
    return (
        <div>
            <img src={happy} alt='happy' className={styles.img} />
        </div>
    )
}
export default Part1;