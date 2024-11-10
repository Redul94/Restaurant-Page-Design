"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiPodiumWinner } from "react-icons/gi";
import { FiShoppingBag } from "react-icons/fi";

type ButtonKey = "About" | "Experience" | "Contact";

const content: Record<ButtonKey, { title: string; text: JSX.Element }> = {
  About: {
    title: "Exceptional culinary <br /> experience and delicious food",
    text: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non s.
        Vel hac <br /> convallis ipsum, facilisi odio pellentesque Lorem ipsum{" "}
        <br />
        dolor sit amet consectetur adipiscing elit do eiusmod tempor
        <br /> dolore magna minim veniam nostrud exercitation.
      </>
    ),
  },
  Experience: {
    title: "Our Rich Experience <br /> in Culinary Arts",
    text: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> Fusce elementum est in tortor varius, ut vestibulum ipsum
        scelerisque.
        <br /> Etiam Nulla vel vestibulum nunc, euismod tempus mauris. <br />{" "}
        Nulla vel vestibulum nunc, euismod tempus mauris. <br />
        Integer convallis, ligula id hendrerit lobortis, turpis nulla cursus
        felis.
      </>
    ),
  },
  Contact: {
    title: "Get in Touch <br /> With Us",
    text: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> Integer convallis, ligula id hendrerit lobortis, turpis nulla
        cursus felis, . <br /> Praesent volutpat dui eu purus ullamcorper
        suscipit. <br /> Curabitur a dui sit amet nulla volutpat gravida.
      </>
    ),
  },
};
const features = [
  {
    icon: <CiDeliveryTruck className="h-12 w-12 rounded-full  p-3 bg-white" />,
    title: "Fast Delivery",
    description: "Within 30 minutes",
  },
  {
    icon: <GiPodiumWinner className="h-12 w-12 rounded-full  p-3 bg-white" />,
    title: "Absolute Dining",
    description: "Best Buffet Restaurant",
  },
  {
    icon: <FiShoppingBag className="h-12 w-12 rounded-full  p-3 bg-white" />,
    title: "Pickup Delivery",
    description: "Grab your food order",
  },
];

const About = () => {
  const [activeButton, setActiveButton] = useState<ButtonKey>("About");

  const navButtons: ButtonKey[] = ["About", "Experience", "Contact"];

  return (
    <div className="relative bg-slate-100 text-black">
      <div className="flex items-center justify-around">
        <div className="mt-16">
          <Image src={"/aboutimage.png"} alt={""} width={617} height={460} />
        </div>
        <div className="mt-16">
          <div className="flex space-x-4 border-b-2 border-red-500">
            {navButtons.map((button, index) => (
              <button
                key={index}
                className={`pb-1 ${
                  activeButton === button
                    ? "text-red-500 border-b-2 border-red-500"
                    : ""
                }`}
                onClick={() => setActiveButton(button)}
              >
                {button}
              </button>
            ))}
          </div>
          <h1
            className="font-bold text-4xl mt-4"
            dangerouslySetInnerHTML={{
              __html: content[activeButton].title,
            }}
          />
          <p className="mt-4">{content[activeButton].text}</p>
          <div className="mt-4 flex items-center">
            <button className="btn bg-yellow-500 text-black">About More</button>
            <div className="flex items-center ml-8">
              <FaPhoneVolume className="text-black h-5 w-5" />
              <p className="ml-3">01722222222</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-evenly gap-4 pb-16">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            {feature.icon}
            <div className="text-sm">
              <h1 className="text-lg font-bold">{feature.title}</h1>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

    
      <div className="absolute bottom-32 right-4">
        <Image
          src="/aboutimage2.png" 
          alt="Today Offer"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default About;
