import React from "react";
import frma from "../../public/Frame.png";
import tg from "../../public/telegram 3.png";
import vib from '../../public/viber 3.png'
import whats from '../../public/whatsapp 3.png'
import gup from '../../public/Group 68.svg'
import goop from '../../public/Group 67.svg'

export default function Footer() {
  return (
    <div className="container mx-auto mt-50px">
      <div className=" flex justify-between rounded-3xl bg-black px-20px py-50px  "> 
        <div>
          <div>
            <img src={frma} alt="" />
          </div>
          <div className="flex gap-20px mt-50px">
          <div>
            <img src={tg} alt="" />
          </div>
          <div>
            <img src={vib} alt="" />
          </div>
          <div>
            <img src={whats} alt="" />
          </div>
          </div>
        </div>
        <div>
          <p className="text-14px text-[#FFFFFF] ">О компании</p> <br />
          <p className="text-14px text-[#FFFFFF]">Производители</p> <br />
          <p className="text-14px text-[#FFFFFF]">Доставка</p> <br />
          <p className="text-14px text-[#FFFFFF]"> Оплата</p> <br />
        </div>
        <div>
          <p className="text-14px text-[#FFFFFF] ">Каталог</p> <br />
          <p className="text-14px text-[#FFFFFF]">Новости</p> <br />
          <p className="text-14px text-[#FFFFFF]">Реквизиты</p> <br />
          <p className="text-14px text-[#FFFFFF]"> Контакты</p> <br />
        </div>
        <div>
          <p className="text-14px text-[#FFFFFF]">Заказать обратный звонок</p> <br />
          <p className="text-14px  text-[#FFFFFF] mt-30px">
            {" "}
            Россия, Удмуртская Республика <br /> <br /> 426011, г. Ижевск, ул.
            Пушкинская 290 <br /> <br />
            тел. 8 (3412) 65-08-77
          </p>
        </div>
        <div>
          <p className="text-14px text-[#FFFFFF]">Заказать обратный звонок</p> <br />
          <p className="text-14px text-[#FFFFFF] mt-30px">
          ООО «Boksmed» © 2015 - 2022. <br /> <br />
Сайт носит информационный характер <br /> <br /> и не является публичной офертой.
          </p>
        </div>
      </div>
     <div className="flex gap-10px justify-end mt-50px pb-50px">
     <div>
        <img src={gup} alt="" />
      </div>
      <div>
        <img src={goop} alt="" />
      </div>
     </div>
    </div>
  );
}
