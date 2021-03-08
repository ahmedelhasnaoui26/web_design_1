import React from 'react'
import styles from './Part1.module.css'
const Part1 = () => {
    return (
        <div>
            <section className={styles.section}>
                <h1 className={styles.h1}>Introduce Your Product Quickly & Effectively</h1>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.<br /><br /> Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                <div className={styles.div}>
                    <button className={styles.button1}>Purchase UI Kit</button>
                    <button className={styles.button2}>Learn More</button>

                </div>
            </section>
        </div>
    )
}

export default Part1
