
import { Header } from "@/components/header/Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { useState } from "react";
import { useRole } from "@/contexts/RoleContext";

export function Layout() {
  const { role, setRole } = useRole();
  
  // For demo purposes - allows switching between roles
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value as "admin" | "doctor" | "pharmacist" | "patient");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar role={role} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <div className="relative flex-1 overflow-y-auto">
          {/* Role switcher for demo purposes */}
          <div className="absolute top-2 right-4 z-10">
            <select 
              value={role} 
              onChange={handleRoleChange}
              className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm"
            >
              <option value="admin">Admin View</option>
              <option value="doctor">Doctor View</option>
              <option value="pharmacist">Pharmacist View</option>
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
