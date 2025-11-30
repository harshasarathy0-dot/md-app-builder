import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
import { ProgressCircle } from "@/components/dashboard/ProgressCircle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  GraduationCap,
  BookOpen,
  DollarSign,
  TrendingUp,
  Plus,
  Calendar,
  FileText,
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "3,654",
      change: "+12% from last month",
      changeType: "increase" as const,
      icon: GraduationCap,
      iconColor: "bg-primary/10 text-primary",
    },
    {
      title: "Total Staff",
      value: "284",
      change: "+3 new this month",
      changeType: "increase" as const,
      icon: Users,
      iconColor: "bg-secondary/10 text-secondary",
    },
    {
      title: "Active Courses",
      value: "162",
      change: "8 ending this week",
      changeType: "neutral" as const,
      icon: BookOpen,
      iconColor: "bg-success/10 text-success",
    },
    {
      title: "Fee Collection",
      value: "₹64,52,240",
      change: "+18% from last month",
      changeType: "increase" as const,
      icon: DollarSign,
      iconColor: "bg-warning/10 text-warning",
    },
  ];

  const activities = [
    {
      id: "1",
      user: { name: "Dr. Sarah Wilson" },
      action: "posted a new assignment in",
      target: "Data Structures",
      time: "5 minutes ago",
      type: "assignment" as const,
    },
    {
      id: "2",
      user: { name: "John Smith" },
      action: "submitted attendance for",
      target: "CS-301",
      time: "15 minutes ago",
      type: "attendance" as const,
    },
    {
      id: "3",
      user: { name: "Admin" },
      action: "published exam results for",
      target: "Semester 4",
      time: "1 hour ago",
      type: "grade" as const,
    },
    {
      id: "4",
      user: { name: "Finance Dept" },
      action: "received payment from",
      target: "45 students",
      time: "2 hours ago",
      type: "payment" as const,
    },
  ];

  const events = [
    {
      id: "1",
      title: "Mid-term Examinations",
      date: "2024-12-15",
      time: "9:00 AM",
      type: "exam" as const,
    },
    {
      id: "2",
      title: "Faculty Meeting",
      date: "2024-12-10",
      time: "2:00 PM",
      type: "meeting" as const,
    },
    {
      id: "3",
      title: "Assignment Deadline - AI/ML",
      date: "2024-12-12",
      time: "11:59 PM",
      type: "deadline" as const,
    },
  ];

  const attendanceData = [
    { name: "Mon", value: 92 },
    { name: "Tue", value: 88 },
    { name: "Wed", value: 95 },
    { name: "Thu", value: 85 },
    { name: "Fri", value: 78 },
    { name: "Sat", value: 45 },
  ];

  const topPerformers = [
    { name: "Alice Johnson", course: "Computer Science", grade: "A+" },
    { name: "Bob Williams", course: "Electronics", grade: "A" },
    { name: "Carol Davis", course: "Mechanical", grade: "A" },
  ];

  return (
    <DashboardLayout userRole="admin" userName="Mr. Herald">
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Welcome Back, Mr. Herald! 👋
              </h1>
              <p className="text-white/80">
                Here's what's happening with your institution today.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule
              </Button>
              <Button className="bg-white text-primary hover:bg-white/90">
                <Plus className="mr-2 h-4 w-4" />
                Quick Add
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.title}
              {...stat}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AttendanceChart data={attendanceData} className="lg:col-span-2" />
          
          {/* Overall Stats Card */}
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold text-lg mb-4">Overall Performance</h3>
            <div className="flex flex-col items-center">
              <ProgressCircle value={87} size="lg" sublabel="Average" />
              <div className="mt-6 w-full space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Attendance</span>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20">92%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Fee Collection</span>
                  <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">78%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Pass Rate</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">94%</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RecentActivity activities={activities} className="lg:col-span-2" />
          <UpcomingEvents events={events} />
        </div>

        {/* Top Performers */}
        <div className="bg-card rounded-xl border border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">Top Performers</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topPerformers.map((student, index) => (
              <div
                key={student.name}
                className="flex items-center gap-4 p-4 rounded-lg bg-accent/50"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{student.name}</p>
                  <p className="text-sm text-muted-foreground">{student.course}</p>
                </div>
                <Badge className="bg-success text-success-foreground">
                  {student.grade}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
