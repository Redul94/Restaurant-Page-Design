"use client";
import React, { useState } from "react";
import Image from "next/image";

const Food = () => {
  const [showNewItems, setShowNewItems] = useState(false);
  const [newItemIndex, setNewItemIndex] = useState(0);

  const handleToggle = () => {
    setShowNewItems(!showNewItems);

    if (!showNewItems) {
      setNewItemIndex((prevIndex) => (prevIndex + 4) % newItem.length);
    }
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

  const newItem = [
    {
      imag: "/food1.png",
      name: "Spicy Noodles",
      des: "Spicy Asian noodles with a twist",
    },
    {
      imag: "/food2.png",
      name: "Salmon Sushi",
      des: "Fresh sushi with a salmon filling",
    },
    {
      imag: "/food3.png",
      name: "Tacos Supreme",
      des: "Tacos with fresh salsa and toppings",
    },
    {
      imag: "/food4.png",
      name: "Fried Rice",
      des: "Delicious fried rice with mixed vegetables",
    },
    {
      imag: "/food1.png",
      name: "Chicken Shawarma",
      des: "Tender chicken wrapped in warm pita",
    },
    {
      imag: "/food2.png",
      name: "Grilled Fish",
      des: "Grilled fish with a lemon zest",
    },
    {
      imag: "/food3.png",
      name: "Vegetable Stir Fry",
      des: "Stir-fried vegetables with soy sauce",
    },
    {
      imag: "/food4.png",
      name: "Beef Wellington",
      des: "Classic beef Wellington with puff pastry",
    },
  ];

  return (
    <div className="bg-[#FBF7F2] p-16 relative">
      <div className="max-w-screen-xl mx-auto px-16">
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <div className="bg-red-700 h-2 w-3"></div>
            <p className="text-red-700 font-bold">Crispy Every Bite Test</p>
          </div>
          <div className="flex items-center justify-between w-full mt-2">
            <h1 className="text-4xl text-black font-bold">
              Popular Food Items
            </h1>

            <span
              className="text-4xl cursor-pointer px-4 py-2 rounded-lg"
              onClick={handleToggle}
            >
              &lt;&gt;
            </span>
          </div>
        </div>

        <div className="mt-12 relative">
          <div
            className={`transition-all duration-500 ease-in-out transform ${
              showNewItems ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-black">
              {data.map((d, index) => (
                <div
                  key={index}
                  className="bg-white flex flex-col items-center p-8 rounded-lg shadow-md"
                >
                  <Image src={d.imag} alt={d.name} width={160} height={160} />
                  <h2 className="text-lg font-bold mt-4">{d.name}</h2>
                  <p className="text-center mt-2">{d.des}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out transform ${
              showNewItems ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-black mt-12">
              {newItem.slice(newItemIndex, newItemIndex + 4).map((d, index) => (
                <div
                  key={index}
                  className="bg-white flex flex-col items-center p-8 rounded-lg shadow-md"
                >
                  <Image src={d.imag} alt={d.name} width={160} height={160} />
                  <h2 className="text-lg font-bold mt-4">{d.name}</h2>
                  <p className="text-center mt-2">{d.des}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-16 hidden lg:block">
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

export default Food;
