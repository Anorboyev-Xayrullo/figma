import React from 'react'
import cola from '../../public/metrax logo 1.png'
import colaj from '../../public/Group 49.png'
import colat from '../../public/Group 48.png'
import ali from '../../public/баннер дифы 1.png'

export default function Header() {
  return (
    <div className='container mx-auto mt-[70px]  '>
        <div className=' rounded-3xl bg-white shadow-2xl flex items-center justify-between px-150px'>
        <div className='w-45%'>
        <img src={cola} alt="" />
          <h3 className='text-28px mt-20px text-[#111111]'>Ручные и автоматические <br />   дефибрилляторы «Primedic»</h3>
          <p className='text-18px mt-30px text-[#111111]'>что то нужно написать, может быть <br /> качество и выгодные цены..</p>
         <div className='flex gap-30px'>
         <button className='text-white mt-20px bg-blue-500 rounded-[24px] border-none hover:bg-blue-800  px-10 py-3'>перейти в каталог</button>
      <div className='flex mt-22px gap-20px'>
         <div>
         <img src={colaj} alt="" />
         </div>
       <div>
       <img src={colat} alt="" />
       </div>
      </div>
         </div>

        </div>
        <div className='w-50%'>
       <img src={ali} alt="" />
        </div>
        </div>
    </div>
  )
}
