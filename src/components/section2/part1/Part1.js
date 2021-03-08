import React from 'react'
import icon from './Icon.svg'
import styles from './Part1.module.css'
const Part1 = () => {
    return (
        <div>
            <section className={styles.Mainsection}>
                <h1 className={styles.h1}>Light, Fast & Powerful</h1>
                <p className={styles.p1}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
mus.<br /><br /> Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                <div className={styles.div}>
                    <section >
                        <img src={icon} alt='icon' className={styles.icon} />
                        <h1 className={styles.h11}>Title Goes Here</h1>
                        <p className={styles.p11}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </section>
                    <section >
                        <img src={icon} alt='icon' className={styles.icon} />
                        <h1 className={styles.h11}>Title Goes Here</h1>
                        <p className={styles.p11}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </section>

                </div>
            </section>
        </div>
    )
}

export default Part1
