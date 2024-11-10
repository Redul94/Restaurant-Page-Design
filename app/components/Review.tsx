"use client";
import Image from "next/image";

const Review = () => {
  const reviews = [
    {
      name: "Khalid Al Dawsr",
      address: "Jeddah, Saudi Arabia",
      image: "/user.png",
      review:
        "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    },
  ];

  return (
    <div className="bg-[#FBF7F2] min-h-screen flex flex-col justify-center items-center py-12 relative pt-4 pl-4 pr-4">
      <div className="absolute left-[-10px] top-32 transform hidden lg:block">
        <Image
          src="/videoleft.png"
          alt="Left Image"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      <div className="absolute right-0 bottom-4 transform hidden lg:block ">
        <Image
          src="/videoright.png"
          alt="Right Image"
          width={350}
          height={330}
          className=""
        />
      </div>

      <div className="flex flex-col items-start mb-12 px-4 sm:px-0">
        <div className="flex items-center space-x-2">
          <div className="bg-red-700 h-2 w-3"></div>
          <p className="text-red-700 font-bold">Crispy Every Bite Test</p>
        </div>
        <h1 className="text-4xl text-black font-bold mt-2 text-center sm:text-left">
          What Some Of My Customers Say
        </h1>
      </div>

      <div className="relative flex flex-col md:flex-row gap-8 bg-yellow-500 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex flex-col justify-between w-full md:w-1/2 order-2 md:order-1 relative">
          <div className="absolute left-[-30px] bottom-0 transform -translate-y-1/2">
            <Image
              src="/videomiddle.svg"
              alt="Vector Image"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>

          <p className="text-lg text-gray-700 italic mb-4">
            {reviews[0].review}
          </p>

          <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-4 ml-4">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold">{reviews[0].name}</h3>
              <p className="text-sm text-gray-500">{reviews[0].address}</p>
            </div>

            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={reviews[0].image}
                alt={reviews[0].name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="w-full h-72">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Ak34skdOeNI"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
