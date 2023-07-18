import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const MainDashboard = () => {
  return (
    <div>
      <div className="relative min-h-screen md:flex">
        <Sidebar />
        <div className="flex-1  md:ml-64">
          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
