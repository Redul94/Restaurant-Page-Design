import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero bg-red-950 min-h-screen text-white relative">
      <div className="absolute top-32 right-45">
        <Image
          src="/Vector.png"
          alt="Top Right Vector"
          width={40}
          height={40}
          className="hover:opacity-80 transition duration-300"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="max-w-sm rounded-lg">
            <Image
              src="/heroimager.png"
              alt="Hero Image"
              width={500}
              height={400}
              className="object-cover rounded-lg relative"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold absolute bg-red-600 bg-opacity-15 p-2  ">
              Taste the authentic <br />
              Saudi cuisine
            </h1>
            <p className="py-6 mt-24 p-2">
              Among the best Saudi chefs in the world, serving <br /> you
              something beyond flavor.
            </p>
            <button className="btn bg-yellow-500 text-black">
              Explore Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
