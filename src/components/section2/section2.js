import React from 'react'
import Part1 from './part1/Part1'
import Part2 from './part2/Part2';
import styles from './section2.module.css'
const Section2 = () => {
    return (
        <div className={styles.div}>
            <Part1 />
            <Part2 />
        </div>
    )
}
export default Section2;