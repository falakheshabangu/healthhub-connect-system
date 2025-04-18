
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { RoleProvider, useRole } from "@/contexts/RoleContext";
import { UserProvider } from "@/contexts/UserContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import MedicalRecords from "./pages/MedicalRecords";
import Prescriptions from "./pages/Prescriptions";

const queryClient = new QueryClient();

// Protected route component that checks user role
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { role } = useRole();
  
  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Role-specific layout that only shows content for the appropriate role
const RoleBasedLayout = ({ allowedRoles }) => {
  return (
    <ProtectedRoute allowedRoles={allowedRoles}>
      <Layout />
    </ProtectedRoute>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RoleProvider>
      <UserProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            
            {/* Admin Routes */}
            <Route element={<RoleBasedLayout allowedRoles={["admin"]} />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/patients" element={<Patients />} />
              <Route path="/admin/appointments" element={<Appointments />} />
              <Route path="/admin/medical-records" element={<MedicalRecords />} />
              <Route path="/admin/prescriptions" element={<Prescriptions />} />
            </Route>
            
            {/* Doctor Routes */}
            <Route element={<RoleBasedLayout allowedRoles={["doctor"]} />}>
              <Route path="/doctor/dashboard" element={<Dashboard />} />
              <Route path="/doctor/patients" element={<Patients />} />
              <Route path="/doctor/appointments" element={<Appointments />} />
              <Route path="/doctor/medical-records" element={<MedicalRecords />} />
              <Route path="/doctor/prescriptions" element={<Prescriptions />} />
            </Route>
            
            {/* Pharmacist Routes */}
            <Route element={<RoleBasedLayout allowedRoles={["pharmacist"]} />}>
              <Route path="/pharmacist/dashboard" element={<Dashboard />} />
              <Route path="/pharmacist/patients" element={<Patients />} />
              <Route path="/pharmacist/prescriptions" element={<Prescriptions />} />
            </Route>
            
            {/* Patient Routes */}
            <Route element={<RoleBasedLayout allowedRoles={["patient"]} />}>
              <Route path="/patient/dashboard" element={<Dashboard />} />
              <Route path="/patient/appointments" element={<Appointments />} />
              <Route path="/patient/medical-records" element={<MedicalRecords />} />
              <Route path="/patient/prescriptions" element={<Prescriptions />} />
            </Route>
            
            {/* Redirect from common routes to role-specific routes */}
            <Route 
              path="/dashboard" 
              element={<Navigate to="/login" replace />} 
            />
            
            {/* Catch-all redirect to not found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      </UserProvider>
    </RoleProvider>
  </QueryClientProvider>
);

export default App;
