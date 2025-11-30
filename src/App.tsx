import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Admin Pages
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import UsersPage from "./pages/admin/UsersPage";
import AdminStudentsPage from "./pages/admin/StudentsPage";
import AdminStaffPage from "./pages/admin/StaffPage";
import AdminCoursesPage from "./pages/admin/CoursesPage";
import AdminAssignmentsPage from "./pages/admin/AssignmentsPage";
import AdminAttendancePage from "./pages/admin/AttendancePage";
import AdminExamsPage from "./pages/admin/ExamsPage";
import AdminPlacementsPage from "./pages/admin/PlacementsPage";
import AdminFinancePage from "./pages/admin/FinancePage";
import AdminFeedbackPage from "./pages/admin/FeedbackPage";
import AdminSettingsPage from "./pages/admin/SettingsPage";

// Student Pages
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import StudentCoursesPage from "./pages/student/CoursesPage";
import StudentAssignmentsPage from "./pages/student/AssignmentsPage";
import StudentAttendancePage from "./pages/student/AttendancePage";
import StudentExamsPage from "./pages/student/ExamsPage";
import StudentPlacementsPage from "./pages/student/PlacementsPage";
import StudentFeesPage from "./pages/student/FeesPage";
import StudentFeedbackPage from "./pages/student/FeedbackPage";

// Staff Pages
import StaffDashboard from "./pages/dashboard/StaffDashboard";

// Parent Pages
import ParentDashboard from "./pages/dashboard/ParentDashboard";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UsersPage />} />
          <Route path="/admin/students" element={<AdminStudentsPage />} />
          <Route path="/admin/staff" element={<AdminStaffPage />} />
          <Route path="/admin/courses" element={<AdminCoursesPage />} />
          <Route path="/admin/assignments" element={<AdminAssignmentsPage />} />
          <Route path="/admin/attendance" element={<AdminAttendancePage />} />
          <Route path="/admin/exams" element={<AdminExamsPage />} />
          <Route path="/admin/placements" element={<AdminPlacementsPage />} />
          <Route path="/admin/finance" element={<AdminFinancePage />} />
          <Route path="/admin/feedback" element={<AdminFeedbackPage />} />
          <Route path="/admin/settings" element={<AdminSettingsPage />} />
          
          {/* Student Routes */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/courses" element={<StudentCoursesPage />} />
          <Route path="/student/assignments" element={<StudentAssignmentsPage />} />
          <Route path="/student/attendance" element={<StudentAttendancePage />} />
          <Route path="/student/exams" element={<StudentExamsPage />} />
          <Route path="/student/placements" element={<StudentPlacementsPage />} />
          <Route path="/student/fees" element={<StudentFeesPage />} />
          <Route path="/student/feedback" element={<StudentFeedbackPage />} />
          
          {/* Staff Routes */}
          <Route path="/staff/dashboard" element={<StaffDashboard />} />
          <Route path="/staff/courses" element={<StaffDashboard />} />
          <Route path="/staff/assignments" element={<StaffDashboard />} />
          <Route path="/staff/attendance" element={<StaffDashboard />} />
          <Route path="/staff/exams" element={<StaffDashboard />} />
          <Route path="/staff/students" element={<StaffDashboard />} />
          
          {/* Parent Routes */}
          <Route path="/parent/dashboard" element={<ParentDashboard />} />
          <Route path="/parent/children" element={<ParentDashboard />} />
          <Route path="/parent/attendance" element={<ParentDashboard />} />
          <Route path="/parent/grades" element={<ParentDashboard />} />
          <Route path="/parent/fees" element={<ParentDashboard />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
