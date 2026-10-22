import { Link, useNavigate } from "react-router-dom";
import {Menu} from "lucide-react";
import { useState } from "react";
import MenuDrawer from "./menu/MenuDrawer";


function Topbar() {

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

   const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  return (
  
    <> 
  
  <div className="w-full bg-gray-300 p-3 text-black">

  <div className="flex items-center px-10">

    {/* Left - Menu */}
    <button type="button" className="flex flex-1 justify-start" onClick={()=> setIsOpen(true)}>
      <Menu className="h-6 w-6" />
    </button>

    {/* Center - Search */}
    

    {/* Right - Navigation */}
    <div className="flex flex-1 items-center justify-end gap-6">
      <Link to="/home" className="text-md font-bold">
        Home
      </Link>

      <Link to="/profile" className="text-md font-bold">
        Profile
      </Link>

      <Link to="/notices" className="text-md font-bold">
        Notices
      </Link>

      <Link to="/results" className="text-md font-bold">
        Results
      </Link>

      <button
        type="button"
        onClick={logoutHandler}
        className="text-md cursor-pointer font-bold"
      >
        Logout
      </button>

      <Link to="/about" className="text-md font-bold">
        About
      </Link>
    </div>

  </div>

</div>

<MenuDrawer isOpen={isOpen} onClose={()=> setIsOpen(false)}  />
</>
  );
}

export default Topbar;

