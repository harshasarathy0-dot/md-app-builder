import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  BookOpen,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Upload,
} from "lucide-react";

export default function StaffDashboard() {
  const stats = [
    {
      title: "My Classes",
      value: "5",
      change: "3 today",
      changeType: "neutral" as const,
      icon: BookOpen,
      iconColor: "bg-primary/10 text-primary",
    },
    {
      title: "Total Students",
      value: "245",
      change: "Across all courses",
      changeType: "neutral" as const,
      icon: Users,
      iconColor: "bg-secondary/10 text-secondary",
    },
    {
      title: "Pending Submissions",
      value: "32",
      change: "12 ungraded",
      changeType: "decrease" as const,
      icon: FileText,
      iconColor: "bg-warning/10 text-warning",
    },
    {
      title: "Attendance Done",
      value: "2/3",
      change: "Today's classes",
      changeType: "neutral" as const,
      icon: CheckCircle,
      iconColor: "bg-success/10 text-success",
    },
  ];

  const todaysClasses = [
    { id: 1, subject: "Data Structures", time: "9:00 - 10:00 AM", room: "Room 301", students: 48, attendanceDone: true },
    { id: 2, subject: "Algorithms", time: "11:00 - 12:00 PM", room: "Room 205", students: 52, attendanceDone: true },
    { id: 3, subject: "Database Systems", time: "2:00 - 3:00 PM", room: "Lab 102", students: 45, attendanceDone: false },
  ];

  const ungradedSubmissions = [
    { id: 1, student: "Alice Johnson", assignment: "Binary Tree Implementation", submitted: "2 hours ago" },
    { id: 2, student: "Bob Williams", assignment: "Binary Tree Implementation", submitted: "3 hours ago" },
    { id: 3, student: "Carol Davis", assignment: "SQL Query Optimization", submitted: "5 hours ago" },
    { id: 4, student: "David Brown", assignment: "Binary Tree Implementation", submitted: "1 day ago" },
  ];

  const events = [
    { id: "1", title: "Faculty Meeting", date: "2024-12-10", time: "2:00 PM", type: "meeting" as const },
    { id: "2", title: "Exam Paper Submission", date: "2024-12-12", time: "5:00 PM", type: "deadline" as const },
    { id: "3", title: "Mid-term Invigilation", date: "2024-12-15", time: "9:00 AM", type: "exam" as const },
  ];

  const attendanceData = [
    { name: "Mon", value: 94 },
    { name: "Tue", value: 91 },
    { name: "Wed", value: 96 },
    { name: "Thu", value: 88 },
    { name: "Fri", value: 82 },
  ];

  const activities = [
    {
      id: "1",
      user: { name: "Alice Johnson" },
      action: "submitted assignment for",
      target: "Data Structures",
      time: "2 hours ago",
      type: "assignment" as const,
    },
    {
      id: "2",
      user: { name: "Bob Williams" },
      action: "submitted assignment for",
      target: "Data Structures",
      time: "3 hours ago",
      type: "assignment" as const,
    },
    {
      id: "3",
      user: { name: "Admin" },
      action: "scheduled exam for",
      target: "Database Systems",
      time: "5 hours ago",
      type: "announcement" as const,
    },
  ];

  return (
    <DashboardLayout userRole="staff" userName="Dr. Sarah Wilson">
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Good Morning, Dr. Wilson! ☀️
              </h1>
              <p className="text-white/80">
                You have 3 classes scheduled today and 32 submissions to review.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                <Upload className="mr-2 h-4 w-4" />
                Upload Grades
              </Button>
              <Button className="bg-white text-primary hover:bg-white/90">
                <Plus className="mr-2 h-4 w-4" />
                New Assignment
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Classes */}
          <div className="lg:col-span-2 bg-card rounded-xl border border-border p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Today's Classes</h3>
              <Button variant="outline" size="sm">
                View Schedule
              </Button>
            </div>
            <div className="space-y-3">
              {todaysClasses.map((cls) => (
                <div
                  key={cls.id}
                  className="flex items-center gap-4 p-4 rounded-lg bg-accent/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{cls.subject}</p>
                    <p className="text-sm text-muted-foreground">
                      {cls.time} • {cls.room} • {cls.students} students
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {cls.attendanceDone ? (
                      <Badge className="bg-success text-success-foreground">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Done
                      </Badge>
                    ) : (
                      <Button size="sm">Take Attendance</Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <UpcomingEvents events={events} />
        </div>

        {/* Ungraded Submissions & Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Ungraded Submissions */}
          <div className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Ungraded Submissions</h3>
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
                {ungradedSubmissions.length} pending
              </Badge>
            </div>
            <div className="space-y-3">
              {ungradedSubmissions.map((submission) => (
                <div
                  key={submission.id}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">
                      {submission.student.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{submission.student}</p>
                    <p className="text-xs text-muted-foreground truncate">{submission.assignment}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{submission.submitted}</p>
                    <Button variant="ghost" size="sm" className="text-primary text-xs px-2 h-7">
                      Grade
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Submissions
            </Button>
          </div>

          {/* Attendance Chart */}
          <AttendanceChart data={attendanceData} />
        </div>

        {/* Recent Activity */}
        <RecentActivity activities={activities} />
      </div>
    </DashboardLayout>
  );
}
