import React from "react";
import logo from "../../public/axion 1.png";
import john from "../../public/Johnson & Johnson logo 1 (1).png";
import loh from "../../public/lohmann & rauscher logo 1.png";
import boston from "../../public/Boston Scientific 1.png";
import kis from "../../public/kls martin logo 1.png";
import lilo from "../../public/Mask group.svg";
import start from "../../public/Star26.png";
import oil from '../../public/Mask group (1).svg'
import oila from '../../public/Mask group (2).svg'

export default function Section6() {
  return (
    <div className="container mx-auto  ">
      <div className="flex gap-150px mt-50px ml-50px  bg-white py-50px px-50px">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={boston} alt="" />
        </div>
        <div>
          <img className="w-130px" src={john} alt="" />
        </div>
        <div>
          <img className="w-130px" src={kis} alt="" />
        </div>
        <div>
          <img src={loh} alt="" />
        </div>
      </div>
      <div className="flex justify-between  mb-50px ml-50px  bg-white py-50px px-50px">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
      <h2 className="text-[#3257A4] text-24px flex justify-center">
        Последние новости{" "}
      </h2>
    <div className="flex justify-between pb-50px mt-50px">
    <div className="rounded-3xl bg-white px-20px pb-10px">
        <div>
          <img className="pt-20px " src={lilo} alt="" />
        </div>
        <div className="flex mt-30px  ml-300px mb-10px">
          <div>
            <img className="w-15px" src={start} alt="" />
          </div>
          <div>
            <img className="w-15px" src={start} alt="" />
          </div>
          <div>
            <img className="w-15px" src={start} alt="" />
          </div>
        </div>
        <h3 className="text-[#111111] text-14px">
          УЧЕНЫЕ ВЫРАСТИЛИ КЛЕТКИ <br /> СО ВЖИВЛЕННОЙ В НИХ ЭЛЕКТРОНИКОЙ
        </h3>
        <div className="mt-20px flex gap-150px pt-10px">
          <p className="text-14px text-[#3257A4]">читать дальше</p>
          <p className="text-[#C41C1B] text-10px pt-2px">Автор: Константин К.Р</p>
        </div>
      </div>
      <div className="rounded-3xl bg-white px-20px">
        <div>
          <img className="pt-20px " src={oila} alt="" />
        </div>
        <div className="flex mt-30px  ml-300px mb-10px">
          <div>
            <img className="w-15px" src={start} alt="" />
          </div>
          <div>
            <img className="w-15px" src={start} alt="" />
          </div>
          <div>
            <img className="w-15px" src={start} alt="" />
          </div>
        </div>
        <h3 className="text-[#111111] text-14px">
          УЧЕНЫЕ ВЫРАСТИЛИ КЛЕТКИ <br /> СО ВЖИВЛЕННОЙ В НИХ ЭЛЕКТРОНИКОЙ
        </h3>
        <div className="mt-20px flex gap-150px pt-10px">
          <p className="text-14px text-[#3257A4]">читать дальше </p>
          <p className="text-[#C41C1B] text-10px pt-2px">Автор: Константин К.Р</p>
        </div>
      </div>
      <div className="rounded-3xl bg-white px-20px">
        <div>
          <img className="pt-20px " src={oil} alt="" />
        </div>
        <div className="flex mt-30px  ml-300px mb-10px">
          <div>
            <img className="w-15px" src={start} alt="" />
          </div>
          <div>
            <img className="w-15px" src={start} alt="" />
          </div>
          <div>
            <img className="w-15px" src={start} alt="" />
          </div>
        </div>
        <h3 className="text-[#111111] text-14px">
          УЧЕНЫЕ ВЫРАСТИЛИ КЛЕТКИ <br /> СО ВЖИВЛЕННОЙ В НИХ ЭЛЕКТРОНИКОЙ
        </h3>
        <div className="mt-20px flex gap-150px pt-10px">
          <p className="text-14px text-[#3257A4]">читать дальше</p>
          <p className="text-[#C41C1B] text-10px pt-2px">Автор: Константин К.Р</p>
        </div>
      </div>
    </div>
    </div>
  );
}
