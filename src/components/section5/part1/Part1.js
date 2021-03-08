import React from 'react'
import mention from './mention.svg'
import styles from './Part1.module.css'
const Part1 = () => {
    return (
        <div>
            <img src={mention} alt='happy' className={styles.img} />
        </div>
    )
}
export default Part1;