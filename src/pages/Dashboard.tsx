
import { useRole } from "@/contexts/RoleContext";
import { AdminDashboard } from "@/components/dashboard/AdminDashboard";
import { DoctorDashboard } from "@/components/dashboard/DoctorDashboard";
import { NurseDashboard } from "@/components/dashboard/NurseDashboard";
import { PatientDashboard } from "@/components/dashboard/PatientDashboard";

const Dashboard = () => {
  const { role } = useRole();

  // Render the appropriate dashboard based on the user's role
  switch (role) {
    case "admin":
      return <AdminDashboard />;
    case "doctor":
      return <DoctorDashboard />;
    case "nurse":
      return <NurseDashboard />;
    case "patient":
      return <PatientDashboard />;
    default:
      return <AdminDashboard />; // Default to admin dashboard
  }
};

export default Dashboard;
