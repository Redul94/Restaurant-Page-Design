import Image from 'next/image';
const Navbar = () => {
  return (
    <div className="navbar bg-red-950">
      <div className="navbar-start">
      <Image src='/logo.jpg' alt="Restaurant Logo" width={40} height={40} />
        <a className="btn btn-ghost text-xl">Resturant</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Client</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-yellow-500 text-black">Book A Table</a>
      </div>
    </div>
  );
};

export default Navbar;
