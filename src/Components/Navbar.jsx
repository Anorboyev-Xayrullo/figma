
import logo from '../../public/Frame.png'
import catolo from '../../public/menu 1.png'
import catolg from '../../public/telegram 3.png' 
import vib from '../../public/viber 3.png'
import whats from '../../public/whatsapp 3.png'
import { nav, navlink } from '../utils/content'
import shop from '../../public/shopping-cart — копия 1.svg'
import  akl from  '../../public/polylines 1.svg' 
import cart from '../../public/doctor — копия 4 1.svg'
import Header from './Header'

export default function 
() {
  return (
    <>
    <div className="bg-white">
    <div className='container mx-auto pt-[20px] '>
      <div className="flex items-center justify-between" >
         <img src={logo} alt="" />
         <div className="flex">
            <img src={catolo} alt="" />
             <h3 className='text-[20px] mt-[6px] ml-2'>  КАТАЛОГ</h3>
         </div>
         <div className="flex">
          <div>
         <img className='mt-3 mr-2' src={catolg} alt="" />
          </div>
         <input className='w-[400px] h-[40px]' type="text"  placeholder='Поиск медицинского оборудования'/>
         </div>
         {navlink.map((value ,index)=>{
          return(
            <fragment key={index}>
            <p  className={value.titleStyle}>{value.title}</p>
            </fragment>
          )
         })}
         <div className="flex gap-2">
          <div>
         <img  className='w-[30px]' src={whats} alt="" />
          </div>
          <div>
         <img  className='w-[30px]' src={catolg} alt="" />
          </div>
          <div>
         <img className='w-[30px]' src={whats} alt="" />
          </div>
       
         </div>
 </div>
     <div className="flex gap-[90px] mt-[45px] pb-[20px]">
       {nav.map((value ,index)=>{
         return (
          <li className="list-none mt-20px">{value.title}</li>
           )
         })}
      <div className="flex gap-[40px] ">
        <div className=''>
          <img className='mx-8' src={akl} alt="" />
          <h4 c>Сравнения</h4>
        </div>
        <div>
          <img className='mx-8' src={shop} alt="" />
          <h4>Сравнения</h4>
        </div>
        <div>
          <img className='mx-8' src={cart} alt="" />
          <h4>Сравнения</h4>
        </div>
      </div>
    </div>
   
    </div>
    </div>
    </>
  )
}
