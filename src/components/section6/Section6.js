import React from 'react'
import styles from './Section6.module.css'
const Section6 = () => {
    return (
        <div className={styles.div}>
            <section className={styles.section1}>
                <h1 className={styles.h1}>A Price To Suit Everyone</h1>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>

            </section>
            <section className={styles.section2}>
                <h1 className={styles.h1}>$40</h1>
                <p className={styles.p}>UI Design Kit</p>
            </section>
            <section className={styles.section3}>
                <p className={styles.p1}>See, One price. Simple.</p>
                <button className={styles.button}>Purchase Now</button>
            </section>
            <div className={styles.divf}>
                <footer className={styles.footer}>
                    <div className={styles.div1}>
                        <p className={styles.p}>@2021 CPR</p>
                        <h1 className={styles.h11}>ELHASNAOUI</h1>
                        <button className={styles.button}>Purchase Now</button>
                    </div>
                    <hr />
                    <div>
                        <div>
                            <ul className={styles.list}>
                                <li>
                                    Home
                                </li>
                                <li>
                                    About
                                </li>
                                <li>
                                    Contact
                                </li>
                            </ul>
                        </div>

                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Section6
