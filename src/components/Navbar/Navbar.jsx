import { useState } from "react";
import Link from "../Link/Link";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
const Navbar = () => {
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/contact', name: 'Contact' },
    { id: 4, path: '/products', name: 'Products' },
    { id: 5, path: '*', name: 'NotFound' }
  ];
  const [open, setOpen] = useState(false)
  
    return (
      <nav className="text-3xl">
        <div className={` md:hidden`} onClick={() =>setOpen(!open)}>
          {open === true ?  <IoMdClose></IoMdClose> :<CiMenuBurger></CiMenuBurger> }
          
        </div>
        <ol className={`md:flex md:static absolute duration-1000 bg-black ${open === false ?'-top-64 ' : 'top-9'}`}>
          
        {routes.map(route =><Link key={route.id} route={route} ></Link>)}
        </ol>
      </nav>
    );
};

export default Navbar;