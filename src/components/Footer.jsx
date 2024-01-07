import styles from "../style"
import { logo } from "../assets"
import { footerLinks ,socialMedia } from "../constants"


const Footer = () => (


    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col` }>
    
      <div className={` ${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      
       <div className="flex flex-col justify-start flex-1 mr-10">
          <img src={logo} alt="logo" className="h-[72px] w-[266px] object-contain" />
          <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
            A new way to make the payments  easy, reliable and secure.
          </p>
       </div>

       <div className="flex-[1.5] w-full flex flex-row md:mt-0 mt-10 justify-between flex-wrap">
          {footerLinks.map((footerLink) =>(
          <div key={footerLink.key} className="flex flex-col my-4 ss:my-0 min-w-[150px]"> 
             <h4 className="font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
             </h4>
            
            <ul className="mt-4 list-none">
              {footerLink.links.map((link,index) => (
                <li key={link.name} 
                className={`font-poppins font-normal text-[16px] leading-[24px] text-[#9b9997] hover:text-secondary cursor-pointer 
                ${ index !== footerLink.links.length -1 ? "mb-4" :"mb-0"}`}
                >

                  {link.name}
                  
                </li>
              ))}
            </ul> 
          </div>
            
          ))}
       </div>
      </div>
      
      <div className={`w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]`}>
      
        <p className="font-normal text-[18px] leading-[27px] text-white text-center">
            2021 HooBank. All Rights Reserved.
        </p>
        
       <div className="flex flex-row mt-6 md:mt-0">
            {socialMedia.map((social, index) => (
            
            <img 
             key={social.id} 
             src={social.icon}
             alt={social.id}
             className={`w-[21px] h-[21px] object-contain cursor-pointer 
               ${index !== socialMedia.length -1 ? "mr-6" : "mr-0" }
             `}
             />
            ))}
      </div>
        
      </div>
    </section>
  )


export default Footer



