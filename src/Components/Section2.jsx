import React from 'react'
import correct from '../../public/aloooo.png'
import cooo from  '../../public/26 1.svg'
import vooo from '../../public/11-507-15-07 1.svg'
import gooo from '../../public/ZN9iPxcFPsHpGk7FJT4U 1.svg'
import kondi from '../../public/КОНЦЕНТРАТОР КИСЛОРОДА _ARMED_ 7F-5L 1.svg'
export default function Section2() {
  return (
    <div className='container mx-auto pb-100px flex justify-between mt-30'>
       <div className='rounded-3xl bg-white px-50px '>
       <h2 className='text-[#111111] text-18px pt-100px'>ДЕФИБРИЛЯТОРЫ</h2>
        <p className='text-[#3257A4] text-14px'>перейти в каталог</p>
       <div>
       <img className='ml-150px ' src={correct} alt="" />
       </div>
       </div>
     <div>
     <div className='rounded-3xl bg-white flex px-20px '>
     <div className='mt-100px'>
     <h2 className='text-[#111111] text-18px'>РЕАНИМАЦИЯ</h2>
        <p className='text-[#3257A4] text-14px mt-20px pb-20px'>перейти в каталог</p>
     </div>
       <div>
       <img className='w-200px mt-18px ml-50px pb-10px' src={cooo} alt="" />
       </div>
       </div>
       <div className='rounded-3xl bg-white flex px-20px mt-30px'>
      <div className='mt-100px'>
      <h2 className='text-[#111111] text-18px'>МЕДИЦИНСКИЙ <br /> <br /> ИНСТРУМЕНТ</h2>
        <p className='text-[#3257A4] text-14px mt-20px  pb-20px'>перейти в каталог</p>
      </div>
       <div>
       <img className='ml-100px mt-60px' src={vooo} alt="" />
       </div>
       </div>
     </div>
     <div>  
     <div className='rounded-3xl bg-white flex px-20px py-5px '>
     <div className='mt-100px'>
     <h2 className='text-[#111111] text-18px'>СШИВАЮЩИЕ <br /> <br />ИНСТРУМЕНТЫ</h2>
        <p className='text-[#3257A4] text-14px mt-20px pb-10px'>перейти в каталог</p>
     </div>
       <div>
       <img className='w-100% mt-50px ml-30px' src={gooo} alt="" />
       </div>
       </div>
       <div className='rounded-3xl bg-white flex px-20px mt-30px ' >
      <div className='mt-100px'>
      <h2 className='text-[#111111] text-18px'>КИСЛОРОДНОЕ <br /><br /> ОБОРУДОВАНИЕ</h2>
        <p className='text-[#3257A4] text-14px mt-20px  pb-10px'>перейти в каталог</p>
      </div>
       <div>
       <img className='mt-50px ml-50px' src={kondi} alt="" />
       </div>
       </div>
     </div>
    </div>
    
  )
}
