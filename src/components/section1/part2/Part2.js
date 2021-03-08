import React from 'react'
import styles from './Part2.module.css'
import bg from './Path.svg'
import content from './Group.svg'

const Part2 = () => {
    return (
        <div className={styles.div}>
            <img src={bg} alt='bg' className={styles.img1} />
            <img src={content} alt='content' className={styles.img2} />
        </div>
    )
}

export default Part2
