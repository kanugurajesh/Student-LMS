import Image from "next/image"
import styles from "@/styles/home.module.css"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.navbar}>
            <div className={styles.logobar}>
                <Image src="/logo.png" width={30} height={30} alt="logo" />
                <div className={styles.logoText}>raphifyEd</div>
            </div>
            <div className={styles.navitems}>
                <div><a href="#" className={styles.navlist}>About</a></div>
                <div><a href="#" className={styles.navlist}>ChatAssist</a></div>
                <div><a href="#" className={styles.navlist}>Courses</a></div>
                <div><a href="https://kanugurajesh.github.io" className={styles.navlist}>Blog</a></div>
            </div>
        </div>
                <div className={styles.herosection}>
                    <div className={styles.herocontent}>
                        <div className={styles.heroheading}><h1 className={styles.h1}>What is GraphifyEd</h1>
                    
                    </div>
                            <div className={styles.wrapper}>
                                <p className={`${styles.heroheading} ${styles.p}`}>
                                    GraphifyEd is a unique student learning management system which aims at making learning as addictive as gaming. Start your journey with GraphifyEd and earn points, badges and rewards as you learn.
                                </p>
                                <a href="" target="_blank">
                                    <button className={styles.downloadbutton}>Start Learning</button>
                                </a>
                            </div>
                </div>
                <div className={cn(`flex flex-wrap w-[500px] gap-8 ${styles.heroimg}`)}>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                    <Image src="https://codehelp-portfolio-website.netlify.app/images/stack/Javascript.svg" width={90} height={90} alt="hero" className="transition ease-in-out duration-500 hover:scale-110"/>
                </div>
            </div>
        </div>
  )
}
