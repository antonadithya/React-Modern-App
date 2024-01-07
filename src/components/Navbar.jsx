import {useState} from 'react'
import {close, logo ,menu} from "../assets"
import { navLinks } from '../constants'

const Navbar = () => {

const [toggle, setToggle] = useState(false)
  return (

    <nav className='w-full flex py-6 justify-between items-center navbar'>
       { <img src={logo} alt="HooBank" className='w-[120px] h-[35px]'/> }  {/*-------------navbar Desktop*/} 

         <ul className='list-none sm:flex justify-end items-center hidden flex-1'>

          { navLinks.map((nav , index) =>{
            return(<li 
             key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px]
               text-white hover:text-secondary ${index === nav.length -1 ? 'mr-0': 'mr-10'} `}>

              <a href={`#${nav.id}`}> {nav.title} </a>
          
            </li>)})}
         </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>    {/*-------------navbar Mobile*/} 

        <img src={toggle ? close : menu} alt='menu'
            className=' w-[28] h-[28]object-contain' 
             onClick={()=> setToggle((prev) => !prev)}/>

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute 
           top-20 right-0 mx-4 my-2 min-w-[145px]  rounded-xl sidebar`}>
            
           <ul className='list-none flex-col justify-end items-center  flex-1'>
               { navLinks.map((nav , index) =>{
                 return(<li 
                   key={nav.id}
                     className={`font-poppins font-normal cursor-pointer text-[16px]
                      text-white ${index === nav.length -1 ? 'mr-0': 'mb-4'} `}>

                    <a href={`#${nav.id}`}>
                  {nav.title}
                 </a>
                </li> )})}
             </ul> 

           </div>

         </div> 

    </nav>
  )
}

export default Navbar