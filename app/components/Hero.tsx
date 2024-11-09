import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero bg-red-950 min-h-screen">
      <div className="flex items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="max-w-sm rounded-lg shadow-2xl bg-red-950">
            <Image
              src="/heroimage.jpg"
              alt="Hero Image"
              width={500} 
              height={400} 
              className="object-cover rounded-lg" 
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">
              Taste the authentic <br />
              Saudi cuisine
            </h1>
            <p className="py-6">
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
