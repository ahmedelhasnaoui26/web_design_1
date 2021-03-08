import React from 'react'
import Part1 from './part1/Part1'
import Part2 from './part2/Part2'
import styles from './Section1.module.css'


const Section1 = () => {
    return (
        <div className={styles.div}>


            <Part1 />
            <Part2 />

        </div>
    )
}

export default Section1
