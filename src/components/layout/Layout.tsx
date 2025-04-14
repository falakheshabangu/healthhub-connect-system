
import { Header } from "@/components/header/Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { useState } from "react";

export function Layout() {
  // This would typically come from your auth context
  const [userRole, setUserRole] = useState<"admin" | "doctor" | "nurse" | "patient">("admin");
  
  // For demo purposes - allows switching between roles
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserRole(e.target.value as "admin" | "doctor" | "nurse" | "patient");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar role={userRole} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <div className="relative flex-1 overflow-y-auto">
          {/* Role switcher for demo purposes */}
          <div className="absolute top-2 right-4 z-10">
            <select 
              value={userRole} 
              onChange={handleRoleChange}
              className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm"
            >
              <option value="admin">Admin View</option>
              <option value="doctor">Doctor View</option>
              <option value="nurse">Nurse View</option>
              <option value="patient">Patient View</option>
            </select>
          </div>
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
