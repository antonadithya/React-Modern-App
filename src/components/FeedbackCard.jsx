import {quotes} from "../assets"

const FeedbackCard = ({content, title ,name, img}) => (

  <div className='flex flex-col justify-between px-10 py-12 rounded-[12px] md:max-w-[350px] max-w-[300px] md:mr-8 sm:mr-5 mr-0 my-5 feedback-card '>
      <img src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain" />
      <p className="font-poppins font-normal text-[18px] leading-[32px] my-10 text-white">
         {content}
      </p>

      <div className="flex-row flex ">
         <img src={img} alt="profile-img" className="w-[48px] h-[48px] rounded-full"/>

         <div className=" flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px]  text-white">{name}</h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px]  text-[#9b9997]">{title}</p>
         </div>
      </div>
  </div>
)

export default  FeedbackCard