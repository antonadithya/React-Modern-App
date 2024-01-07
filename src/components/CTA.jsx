import styles from "../style"
import Button from "./Button"

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
       <div className=" flex flex-col flex-1" >
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[460px] sm:ml-10 ml-0 sm:mt-o mt-10`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
       </div>
       <div>
        <Button />
       </div>
    </section>
  )


export default CTA