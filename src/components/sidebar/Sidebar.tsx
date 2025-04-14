import { Link, useLocation } from "react-router-dom";
import {
  Landmark,
  UserRound,
  Calendar,
  FileText,
  PlusSquare,
  BarChart,
  Settings,
  LogOut,
  Users,
  Pill,
  Stethoscope,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Role = "admin" | "doctor" | "pharmacist" | "patient";

interface SidebarProps {
  role?: Role;
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavItem = ({ to, icon, label, isActive }: NavItemProps) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:bg-sidebar-accent/10",
      isActive && "bg-sidebar-accent/15 text-sidebar-accent font-medium"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export function Sidebar({ role = "admin" }: SidebarProps) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);

  const isActive = (path: string) => location.pathname === path;

  const commonNavItems = [
    {
      to: "/dashboard",
      icon: <BarChart className="h-5 w-5" />,
      label: "Dashboard",
    },
  ];

  const roleNavItems = {
    admin: [
      {
        to: "/patients",
        icon: <UserRound className="h-5 w-5" />,
        label: "Patients",
      },
      {
        to: "/appointments",
        icon: <Calendar className="h-5 w-5" />,
        label: "Appointments",
      },
      {
        to: "/medical-records",
        icon: <FileText className="h-5 w-5" />,
        label: "Medical Records",
      },
      {
        to: "/prescriptions",
        icon: <PlusSquare className="h-5 w-5" />,
        label: "Prescriptions",
      },
      {
        to: "/users",
        icon: <Users className="h-5 w-5" />,
        label: "User Management",
      },
    ],
    doctor: [
      {
        to: "/patients",
        icon: <UserRound className="h-5 w-5" />,
        label: "Patients",
      },
      {
        to: "/appointments",
        icon: <Calendar className="h-5 w-5" />,
        label: "Appointments",
      },
      {
        to: "/medical-records",
        icon: <FileText className="h-5 w-5" />,
        label: "Medical Records",
      },
      {
        to: "/prescriptions",
        icon: <PlusSquare className="h-5 w-5" />,
        label: "Prescriptions",
      },
    ],
    pharmacist: [
      {
        to: "/prescriptions",
        icon: <Pill className="h-5 w-5" />,
        label: "Prescriptions",
      },
      {
        to: "/inventory",
        icon: <Pill className="h-5 w-5" />,
        label: "Inventory",
      },
      {
        to: "/patients",
        icon: <UserRound className="h-5 w-5" />,
        label: "Patients",
      },
      {
        to: "/consultations",
        icon: <Calendar className="h-5 w-5" />,
        label: "Consultations",
      },
    ],
    patient: [
      {
        to: "/appointments",
        icon: <Calendar className="h-5 w-5" />,
        label: "My Appointments",
      },
      {
        to: "/medical-records",
        icon: <FileText className="h-5 w-5" />,
        label: "My Records",
      },
      {
        to: "/prescriptions",
        icon: <PlusSquare className="h-5 w-5" />,
        label: "My Prescriptions",
      },
    ],
  };

  const bottomNavItems = [
    {
      to: "/settings",
      icon: <Settings className="h-5 w-5" />,
      label: "Settings",
    },
    {
      to: "/login",
      icon: <LogOut className="h-5 w-5" />,
      label: "Logout",
    },
  ];

  const navItems = [...commonNavItems, ...roleNavItems[role]];

  return (
    <div
      className={cn(
        "flex h-screen flex-col bg-sidebar border-r border-sidebar-border",
        expanded ? "w-64" : "w-20"
      )}
    >
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-4">
        <Stethoscope className="h-6 w-6 text-sidebar-primary" />
        {expanded && (
          <span className="text-lg font-bold text-sidebar-foreground">
            HealthHub
          </span>
        )}
      </div>
      <div
        className="flex flex-1 flex-col justify-between overflow-y-auto py-4 px-3"
        onClick={() => !expanded && setExpanded(true)}
      >
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={expanded ? item.label : ""}
              isActive={isActive(item.to)}
            />
          ))}
        </div>
        <div className="space-y-1">
          {bottomNavItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={expanded ? item.label : ""}
              isActive={isActive(item.to)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
