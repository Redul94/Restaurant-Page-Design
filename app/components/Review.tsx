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
    <div className="bg-[#FBF7F2] min-h-screen flex justify-center items-center py-12">
      <div className="flex gap-8 bg-yellow-500 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex flex-col items-start justify-start w-1/2">
          <p className="text-lg text-gray-700 italic">
            {reviews[0].review} {/* Access the review of the first item */}
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col items-start mt-4">
              <h3 className="text-xl font-semibold">
                {reviews[0].name} {/* Access the name of the first item */}
              </h3>
              <p className="text-sm text-gray-500">
                {reviews[0].address} {/* Access the address of the first item */}
              </p>
            </div>

            <div className="w-24 h-24 rounded-full overflow-hidden mt-4">
              <Image
                src={reviews[0].image} // Use the Image component
                alt={reviews[0].name} // Add alt text for accessibility
                width={96} // Set width
                height={96} // Set height
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-1/2">
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
