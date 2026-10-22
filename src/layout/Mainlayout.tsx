import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Mainlayout() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Mainlayout;