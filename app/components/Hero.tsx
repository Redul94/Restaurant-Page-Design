import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero bg-red-950 min-h-screen text-white relative pt-8">
      <div className="absolute lg:top-36  lg:right-1/4 top-64 right-8">
        <Image
          src="/Vector.png"
          alt="Top Right Vector"
          width={40}
          height={40}
          className="hover:opacity-80 transition duration-300"
        />
      </div>
      <div className="flex items-center justify-evenly">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="max-w-sm rounded-lg order-2 lg:order-1">
            <Image
              src="/heroimage.jpg"
              alt="Hero Image"
              width={500}
              height={400}
              className="object-cover rounded-lg relative"
            />
          </div>

         
          <div className="order-1 lg:order-2">
            <h1 className="text-3xl lg:text-5xl font-bold absolute bg-red-600  bg-opacity-15 p-2">
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
