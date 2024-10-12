import { User } from "lucide-react";
import { links } from "../utils/consts";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className="flex justify-between items-center bg-black shadow-md px-10 py-6">
      <div className="flex items-center gap-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-white hover:text-orange-400 transition-all cursor-pointer">
          <Link to={"/"}>ONE PIECE CHARACTERS RATING</Link>
        </h2>

        {/* Links Section */}
        {links.map((link, index) => (
          <Link key={index} to={link.href} className="text-white hover:text-orange-400 transition-all">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-6">
        <Link to='/profile'>
          <div className="flex items-center gap-3 bg-slate-700 border border-black hover:bg-orange-600 hover:text-black transition-all px-4 py-2 rounded-full text-white cursor-pointer">
            <User height={25} width={25} />
            <h2 className="font-medium">Profile</h2>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
