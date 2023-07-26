import { nav, navlink } from "../utils/content";
import {
  logo,
  catolo,
  shop,
  akl,
  cart,
  vib,
  catolg,
  whats,
}



from "../../public/index.js";

export default function () {
  const arr =[
    catolg,
    whats,
  ]
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto pt-[20px] ">
          <div className="flex items-center justify-between">
            <img src={logo} alt="" />
            <div className="flex">
              <img src={catolo} alt="" />
              <h3 className="text-[20px] mt-[6px] ml-2"> КАТАЛОГ</h3>
            </div>
            <div className="flex">
              <div>
                <img className="mt-3 mr-2" src={catolg} alt="" />
              </div>
              <input
                className="w-[400px] h-[40px]"
                type="text"
                placeholder="Поиск медицинского оборудования"
              />
            </div>
            {navlink.map((value, index) => {
              return (
                <fragment key={index}>
                  <p className={value.titleStyle}>{value.title}</p>
                </fragment>
              );
            })}
            <div className="flex gap-2">
              {arr.map((value,index) => {
              <div className={index}>
                <img className="w-[30px]" src={value} alt="" />
              </div>
              })}
            </div>
          </div>
          <div className="flex gap-[90px] mt-[45px] pb-[20px]">
            {nav.map((value, index) => {
              return <li className="list-none mt-20px">{value.title}</li>;
            })}
            <div className="flex gap-[40px] ">
              <div className="">
                <img className="mx-8" src={akl} alt="" />
                <h4 c>Сравнения</h4>
              </div>
              <div>
                <img className="mx-8" src={shop} alt="" />
                <h4>Сравнения</h4>
              </div>
              <div>
                <img className="mx-8" src={cart} alt="" />
                <h4>Сравнения</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
