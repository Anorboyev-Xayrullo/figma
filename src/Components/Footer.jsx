import React from "react";
import frma from "../../public/Frame.png";
import tg from "../../public/telegram 3.png";
import vib from '../../public/viber 3.png'
import whats from '../../public/whatsapp 3.png'
import gup from '../../public/Group 68.svg'
import goop from '../../public/Group 67.svg'

export default function Footer() {
  return (
    <div className="container mx-auto bg-black-500 mt-50px">
      <div className=" flex justify-between">
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
          <p className="text-14px ">О компании</p> <br />
          <p className="text-14px">Производители</p> <br />
          <p className="text-14px">Доставка</p> <br />
          <p className="text-14px"> Оплата</p> <br />
        </div>
        <div>
          <p className="text-14px ">Каталог</p> <br />
          <p className="text-14px">Новости</p> <br />
          <p className="text-14px">Реквизиты</p> <br />
          <p className="text-14px"> Контакты</p> <br />
        </div>
        <div>
          <p className="text-14px">Заказать обратный звонок</p> <br />
          <p className="text-14px mt-30px">
            {" "}
            Россия, Удмуртская Республика <br /> 426011, г. Ижевск, ул.
            Пушкинская 290 <br />
            тел. 8 (3412) 65-08-77
          </p>
        </div>
        <div>
          <p className="text-14px">Заказать обратный звонок</p> <br />
          <p className="text-14px mt-30px">
            {" "}
            Россия, Удмуртская Республика <br /> 426011, г. Ижевск, ул.
            Пушкинская 290 <br />
            тел. 8 (3412) 65-08-77
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
