import React from 'react'
import Part1 from './part1/Part1'
import Part2 from './part2/Part2'
import styles from './Section3.module.css'


const Section3 = () => {
    return (
        <div className={styles.div}>
            <Part1 />
            <Part2 />
        </div>
    )
}

export default Section3
