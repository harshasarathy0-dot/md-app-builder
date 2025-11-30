import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  FileText,
  Calendar,
  ClipboardCheck,
  Briefcase,
  DollarSign,
  MessageSquare,
  Settings,
  Bell,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  userRole: "admin" | "student" | "staff" | "parent";
}

const menuItems = {
  admin: [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
    { icon: Users, label: "Users", path: "/admin/users" },
    { icon: GraduationCap, label: "Students", path: "/admin/students" },
    { icon: Users, label: "Staff", path: "/admin/staff" },
    { icon: BookOpen, label: "Courses", path: "/admin/courses" },
    { icon: FileText, label: "Assignments", path: "/admin/assignments" },
    { icon: ClipboardCheck, label: "Attendance", path: "/admin/attendance" },
    { icon: Calendar, label: "Exams", path: "/admin/exams" },
    { icon: Briefcase, label: "Placements", path: "/admin/placements" },
    { icon: DollarSign, label: "Finance", path: "/admin/finance" },
    { icon: MessageSquare, label: "Feedback", path: "/admin/feedback" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ],
  student: [
    { icon: LayoutDashboard, label: "Dashboard", path: "/student/dashboard" },
    { icon: BookOpen, label: "My Courses", path: "/student/courses" },
    { icon: FileText, label: "Assignments", path: "/student/assignments" },
    { icon: ClipboardCheck, label: "Attendance", path: "/student/attendance" },
    { icon: Calendar, label: "Exams", path: "/student/exams" },
    { icon: Briefcase, label: "Placements", path: "/student/placements" },
    { icon: DollarSign, label: "Fees", path: "/student/fees" },
    { icon: MessageSquare, label: "Feedback", path: "/student/feedback" },
  ],
  staff: [
    { icon: LayoutDashboard, label: "Dashboard", path: "/staff/dashboard" },
    { icon: BookOpen, label: "My Courses", path: "/staff/courses" },
    { icon: FileText, label: "Assignments", path: "/staff/assignments" },
    { icon: ClipboardCheck, label: "Attendance", path: "/staff/attendance" },
    { icon: Calendar, label: "Exams", path: "/staff/exams" },
    { icon: GraduationCap, label: "Students", path: "/staff/students" },
  ],
  parent: [
    { icon: LayoutDashboard, label: "Dashboard", path: "/parent/dashboard" },
    { icon: GraduationCap, label: "My Children", path: "/parent/children" },
    { icon: ClipboardCheck, label: "Attendance", path: "/parent/attendance" },
    { icon: FileText, label: "Grades", path: "/parent/grades" },
    { icon: DollarSign, label: "Fees", path: "/parent/fees" },
  ],
};

export function Sidebar({ userRole }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const items = menuItems[userRole];

  return (
    <aside
      className={cn(
        "h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 sticky top-0",
        collapsed ? "w-16" : "w-60"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground">EduHub</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 overflow-y-auto">
        <ul className="space-y-1">
          {items.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200",
                    isActive
                      ? "bg-sidebar-accent text-primary font-medium border-l-4 border-primary -ml-0.5"
                      : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
                  )}
                >
                  <item.icon className={cn("h-5 w-5 shrink-0", collapsed && "mx-auto")} />
                  {!collapsed && <span>{item.label}</span>}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom section */}
      <div className="p-2 border-t border-sidebar-border">
        <NavLink
          to="/logout"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200"
        >
          <LogOut className={cn("h-5 w-5 shrink-0", collapsed && "mx-auto")} />
          {!collapsed && <span>Logout</span>}
        </NavLink>
      </div>
    </aside>
  );
}
