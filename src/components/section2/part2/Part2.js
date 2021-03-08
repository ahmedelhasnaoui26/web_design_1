import React from 'react'
import content from './content.svg'
import styles from './Part2.module.css'

const Part2 = () => {
    return (
        <div>
            <img src={content} alt='content' className={styles.img} />
        </div>
    )
}
export default Part2;