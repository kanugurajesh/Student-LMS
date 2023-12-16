import Image from "next/image"
import styles from "@/styles/home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.navbar}>
            <div className={styles.logobar}>
                <div className={styles.logoText}>GraphifyEd</div>
            </div>

            <div className={styles.navitems}>
                <div><a href="#about">About</a></div>
                <div><a href="#team">Team</a></div>
                <div><a href="#download">Download</a></div>
                <div><a href="#blog">Blog</a></div>
            </div>

        </div>

        <div className={styles.herosection}>
            <div className={styles.herocontent}>
                <div className={styles.heroheading}><h1 className={styles.h1}>What is GraphifyEd</h1></div>
                    <div className={styles.wrapper}>
                        <p className={`${styles.heroheading} ${styles.p}`}>GraphifyEd is a unique student learning management system which aims at making learning as addictive as gaming</p>
                        <a href="https://pixelos.net/" target="_blank">
                            <button className={styles.downloadbutton}>Start Learning</button>
                        </a>
                    </div>
                </div>
        </div>

    </div>
  )
}
