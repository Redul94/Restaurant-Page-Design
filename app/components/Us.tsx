import {
  FaClock,
  FaPhoneAlt,
  FaBook,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Us = () => {
  return (
    <div className="bg-[url('/footer.jpg')] bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-center text-4xl font-bold">
        We Ready To Have You The Best Dinning Experience
      </h1>
      <div className="flex justify-center items-center space-x-6  mt-12">
        <div className="flex ">
          {data.map((d, index) => (
            <div key={index} className="mr-8 flex flex-col items-center p-8">
              <div className="text-4xl text-yellow-500 mb-4">{d.icon}</div>
              <h2 className="text-lg font-bold mt-2">{d.name}</h2>
              <p className="">{d.des}</p>
              <p className="text-sm ">{d.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex space-x-8">
        {socialIcons.map((icon, index) => (
          <div key={index} className="p-3 border rounded-full">
            <div className="text-3xl text-white hover:text-gray-300 transition duration-300">
              {icon.icon}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-white text-center text-sm">
        © 2023 All Rights Reserved
      </p>
    </div>
  );
};

const data = [
  {
    icon: <FaClock />,
    name: "Opening Hours",
    des: "Monday-Sunday",
    detail: "9:00 AM to 11:30 PM",
  },
  {
    icon: <FaPhoneAlt />,
    name: "Let's Talk",
    des: "Phone: 1-88-222-454",
    detail: "Fax: 1-800-222-454",
  },
  {
    icon: <FaBook />,
    name: "Book a Table",
    des: "Email: demo@website.com",
    detail: "Support: support@website.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    name: "Our Address",
    des: "123 Street New York City",
    detail: "United States of America",
  },
];
const socialIcons = [
  {
    icon: <FaFacebook />,
    link: "https://facebook.com",
  },
  {
    icon: <FaInstagram />,
    link: "https://instagram.com",
  },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com",
  },
];
export default Us;
