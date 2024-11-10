import React from "react";
import Image from "next/image";

const Food = () => {
  return (
    <div className="bg-[#FBF7F2] p-16 relative">
    
      <div className="max-w-screen-xl mx-auto px-16">
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <div className="bg-red-700 h-2 w-3"></div>
            <p className="text-red-700 font-bold">Crispy Every Bite Test</p>
          </div>
          <h1 className="text-4xl text-black font-bold mt-2">
            Popular Food Items
          </h1>
        </div>

        <div className="flex justify-start items-start space-x-6 text-black mt-12">
          {data.map((d, index) => (
            <div
              key={index}
              className="mr-8 bg-white flex flex-col items-center p-8"
            >
              <Image src={d.imag} alt={d.name} width={120} height={120} />
              <h2 className="text-lg font-bold mt-2">{d.name}</h2>
              <p>{d.des}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 bottom-16">
        <Image
          src="/sidefood.png"
          alt="Additional Image"
          width={200}
          height={200}
        />
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
