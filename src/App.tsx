
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { RoleProvider } from "@/contexts/RoleContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import MedicalRecords from "./pages/MedicalRecords";
import Prescriptions from "./pages/Prescriptions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RoleProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            
            {/* Common layout wrapper */}
            <Route element={<Layout />}>
              {/* Default dashboard route */}
              <Route path="/dashboard" element={<Dashboard />} />
              
              {/* Role-specific dashboard routes */}
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/doctor/dashboard" element={<Dashboard />} />
              <Route path="/pharmacist/dashboard" element={<Dashboard />} />
              <Route path="/patient/dashboard" element={<Dashboard />} />
              
              {/* Common routes */}
              <Route path="/patients" element={<Patients />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/medical-records" element={<MedicalRecords />} />
              <Route path="/prescriptions" element={<Prescriptions />} />
            </Route>
            
            {/* Catch-all redirect to not found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </RoleProvider>
  </QueryClientProvider>
);

export default App;
