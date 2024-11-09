import React from "react";
import Image from "next/image";

const Food = () => {
  return (
    <div className="bg-[#FBF7F2] pt-8">
      <div className="text-center">
        <p className="text-red-700 font-bold">Cripsy Every Bite Test</p>
      <h1 className="text-4xl text-black font-bold">Popular Food Items</h1>
      </div>
      
      <div className="flex justify-center items-center space-x-6 text-black mt-12">
        <div className=" flex">
        {data.map((d, index) => (
          <div key={index} className="mr-8 bg-white flex flex-col items-center p-8">
            <Image src={d.imag} alt={d.name} width={120} height={120} />
            <h2 className="text-lg font-bold mt-2">{d.name}</h2>
            <p className="">{d.des}</p>
          </div>
        ))}
        </div>
        
      </div>
    </div>
  );
};

const data = [
  {
    imag: "/food1.png",
    name: "Vegetable Burger",
    des: "Barbecue Italian cuisine pizza",
  },
  {
    imag: "/food2.png",
    name: "Special Pizza",
    des: "Barbecue Italian cuisine pizza",
  },
  {
    imag: "/food3.png",
    name: "Special French Fries",
    des: "Barbecue Italian cuisine",
  },
  {
    imag: "/food4.png",
    name: "Cuisine Chicken",
    des: "Japanese cuisine chicken",
  },
];

export default Food;
