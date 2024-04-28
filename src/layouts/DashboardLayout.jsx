import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar></Sidebar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
