import Image from "next/image";

const Fooditem = () => {
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

  return (
    <>
      {data.map((d, index) => (
        <div
          key={index}
          className="bg-white flex flex-col items-center p-8 rounded-lg shadow-md"
        >
          <Image src={d.imag} alt={d.name} width={120} height={120} />
          <h2 className="text-lg font-bold mt-2">{d.name}</h2>
          <p className="text-center">{d.des}</p>
        </div>
      ))}
    </>
  );
};

export default Fooditem;
