import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/shared/Sidebar";
import Topbar from "../dashboard/shared/Topbar";

function DashboardLayout({ role, title }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <div className={`sidebar-wrap ${sidebarOpen ? "sidebar-open" : ""}`}>
        <Sidebar role={role} onClose={() => setSidebarOpen(false)} />
      </div>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      <div className="dashboard-main">
        <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} title={title} />
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;