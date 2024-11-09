import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiPodiumWinner } from "react-icons/gi";
import { FiShoppingBag } from "react-icons/fi";

const About = () => {
  return (
    <div className="bg-slate-300  text-black ">
      <div className="flex  items-center justify-around">
        <div className="mt-16">
          <Image src={"/aboutimage.png"} alt={""} width={617} height={460} />
        </div>
        <div className="mt-16">
          <div className="flex space-x-4 border-b-2 border-red-500 ">
            <button className="pb-1">About</button>
            <button className="pb-1">Experience</button>
            <button className="pb-1">Contact</button>
          </div>
          <h1 className=" font-bold text-4xl mt-4">
            Exceptional culinary <br />
            experience and delicious food
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
            sed est cursus. Vel hac <br /> convallis ipsum, facilisi odio
            pellentesque bibendum viverra tempus. Lorem ipsum <br />
            dolor sit amet consectetur adipiscing elit do eiusmod tempor
            incididunt ut labore et <br /> dolore magna minim veniam nostrud
            exercitation.
          </p>
          <div className="mt-4 flex items-center">
            <button className="btn bg-yellow-500 text-black">About More</button>
            <div className="flex items-center ml-8">
              <FaPhoneVolume className="text-black h-5 w-5" />
              <p className="ml-3">01722222222</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-around pb-16">
        <div className="flex items-center">
          <CiDeliveryTruck  className="h-16 w-16 rounded-full bg-slate-400"/>
          <div className="ml-2">
            <h1 className="text-2xl font-bold">Fast Delivery</h1>
            <p className="">Within 30 minutes</p>
          </div>
        </div>

        <div className="flex items-center">
          <GiPodiumWinner  className="h-16 w-16 rounded-full bg-slate-400"/>
          <div className="ml-2">
            <h1 className="text-2xl font-bold">Absolute Dining</h1>
            <p className="">Best Buffet Resturant</p>
          </div>
        </div>

        <div className="flex items-center">
          <FiShoppingBag  className="h-16 w-16 rounded-full bg-slate-400"/>
          <div className="ml-2">
            <h1 className="text-2xl font-bold">Pickup Delivery</h1>
            <p className="">Grab your food order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
