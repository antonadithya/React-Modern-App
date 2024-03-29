import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[145px] h-[145px] rounded-full btn-blue-gradient  p-2 cursor-pointer  `}>
       
       <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
         
         <div className={`${styles.flexStart} flex-row `}>
           <p className="font-medium font-poppins text-[18px] leading-[23px] mr-2">
             <span className="text-gradient">Get</span>
          </p>
             <img src={arrowUp} alt="arrow" className=" w-[23px] h-[23px]object-contain" />
         </div>
    
          <p className="font-medium font-poppins text-[18px] leading-[23px]">
             <span className="text-gradient">Started</span>
          </p>
       </div>
    </div>
  )


export default GetStarted