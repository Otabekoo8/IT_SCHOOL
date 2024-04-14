import { Outlet } from "react-router-dom";

import SideBar from "../Components/SideBar/SideBar";
import Navbar from "../Components/SideBar/Nav";

const Layout = () => {
  return (
    <div className="layout">
      <div>
        <SideBar />
      </div>

      <main className="flex">
        <Navbar/>
        <div className="bg-[#eee] w-full h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
