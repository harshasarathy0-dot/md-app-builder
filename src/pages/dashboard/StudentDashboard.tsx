import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { ProgressCircle } from "@/components/dashboard/ProgressCircle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BookOpen,
  FileText,
  Clock,
  Calendar,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export default function StudentDashboard() {
  const stats = [
    {
      title: "My Courses",
      value: "6",
      change: "This semester",
      changeType: "neutral" as const,
      icon: BookOpen,
      iconColor: "bg-primary/10 text-primary",
    },
    {
      title: "Pending Assignments",
      value: "4",
      change: "2 due this week",
      changeType: "decrease" as const,
      icon: FileText,
      iconColor: "bg-warning/10 text-warning",
    },
    {
      title: "Attendance",
      value: "92%",
      change: "+2% from last month",
      changeType: "increase" as const,
      icon: CheckCircle,
      iconColor: "bg-success/10 text-success",
    },
    {
      title: "CGPA",
      value: "8.7",
      change: "Top 15% in class",
      changeType: "increase" as const,
      icon: TrendingUp,
      iconColor: "bg-secondary/10 text-secondary",
    },
  ];

  const todaysClasses = [
    { id: 1, subject: "Data Structures", time: "9:00 - 10:00 AM", room: "Room 301", faculty: "Dr. Sarah Wilson" },
    { id: 2, subject: "Database Systems", time: "10:15 - 11:15 AM", room: "Room 205", faculty: "Prof. John Smith" },
    { id: 3, subject: "Computer Networks", time: "2:00 - 3:00 PM", room: "Lab 102", faculty: "Dr. Emily Brown" },
  ];

  const pendingAssignments = [
    { id: 1, title: "Binary Tree Implementation", subject: "Data Structures", dueDate: "Dec 12", progress: 65 },
    { id: 2, title: "SQL Query Optimization", subject: "Database Systems", dueDate: "Dec 14", progress: 30 },
    { id: 3, title: "Network Topology Design", subject: "Computer Networks", dueDate: "Dec 15", progress: 0 },
  ];

  const events = [
    { id: "1", title: "Mid-term Exam - DSA", date: "2024-12-15", time: "9:00 AM", type: "exam" as const },
    { id: "2", title: "Project Presentation", date: "2024-12-18", time: "2:00 PM", type: "class" as const },
    { id: "3", title: "Assignment Deadline", date: "2024-12-12", time: "11:59 PM", type: "deadline" as const },
  ];

  const recentGrades = [
    { subject: "Data Structures", assignment: "Quiz 3", grade: "A", score: "18/20" },
    { subject: "Database Systems", assignment: "Lab Work", grade: "A+", score: "25/25" },
    { subject: "Computer Networks", assignment: "Assignment 2", grade: "B+", score: "17/20" },
  ];

  return (
    <DashboardLayout userRole="student" userName="Angela Diana">
      <div className="space-y-6">
        {/* Profile Banner */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-secondary h-24 md:h-32" />
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end gap-4 -mt-12 md:-mt-16">
              <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-card">
                <AvatarImage src="" />
                <AvatarFallback className="bg-secondary text-secondary-foreground text-2xl md:text-4xl font-bold">
                  AD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 pt-2 md:pt-4">
                <h1 className="text-2xl font-bold">Angela Diana</h1>
                <p className="text-muted-foreground">B.Tech Computer Science • Semester 5 • Roll: CS2021045</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">Edit Profile</Button>
                <Button>View Schedule</Button>
              </div>
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
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {todaysClasses.length} Classes
              </Badge>
            </div>
            <div className="space-y-3">
              {todaysClasses.map((cls, index) => (
                <div
                  key={cls.id}
                  className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{cls.subject}</p>
                    <p className="text-sm text-muted-foreground">
                      {cls.time} • {cls.room}
                    </p>
                  </div>
                  <div className="text-right hidden md:block">
                    <p className="text-sm font-medium">{cls.faculty}</p>
                    <p className="text-xs text-muted-foreground">Faculty</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Attendance Circle */}
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold text-lg mb-4">Attendance Overview</h3>
            <div className="flex flex-col items-center">
              <ProgressCircle value={92} size="lg" label="Overall Attendance" />
              <div className="mt-6 w-full space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Present Days</span>
                  <span className="font-medium">78</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Absent Days</span>
                  <span className="font-medium">7</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total Classes</span>
                  <span className="font-medium">85</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assignments & Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Assignments */}
          <div className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Pending Assignments</h3>
              <Button variant="ghost" size="sm" className="text-primary">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {pendingAssignments.map((assignment) => (
                <div key={assignment.id} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-sm">{assignment.title}</p>
                      <p className="text-xs text-muted-foreground">{assignment.subject}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        assignment.progress === 0
                          ? "bg-destructive/10 text-destructive border-destructive/20"
                          : "bg-warning/10 text-warning border-warning/20"
                      }
                    >
                      Due {assignment.dueDate}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={assignment.progress} className="h-2" />
                    <span className="text-xs text-muted-foreground w-10">{assignment.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <UpcomingEvents events={events} />
        </div>

        {/* Recent Grades */}
        <div className="bg-card rounded-xl border border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">Recent Grades</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentGrades.map((grade, index) => (
              <div key={index} className="p-4 rounded-lg bg-accent/50">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-medium">{grade.subject}</p>
                  <Badge className="bg-success text-success-foreground">{grade.grade}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{grade.assignment}</p>
                <p className="text-lg font-bold mt-2">{grade.score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
