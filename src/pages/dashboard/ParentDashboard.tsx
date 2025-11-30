import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { ProgressCircle } from "@/components/dashboard/ProgressCircle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  GraduationCap,
  DollarSign,
  CheckCircle,
  TrendingUp,
  AlertTriangle,
  CreditCard,
  FileText,
  Bell,
} from "lucide-react";
import { useState } from "react";

export default function ParentDashboard() {
  const [selectedChild, setSelectedChild] = useState("child1");

  const children = [
    { id: "child1", name: "Angela Diana", class: "B.Tech CS - Sem 5", roll: "CS2021045" },
    { id: "child2", name: "James Diana", class: "B.Tech ECE - Sem 3", roll: "EC2022078" },
  ];

  const currentChild = children.find((c) => c.id === selectedChild);

  const stats = [
    {
      title: "Attendance",
      value: "92%",
      change: "Above average",
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
      iconColor: "bg-primary/10 text-primary",
    },
    {
      title: "Pending Fees",
      value: "₹45,000",
      change: "Due: Dec 31",
      changeType: "decrease" as const,
      icon: DollarSign,
      iconColor: "bg-warning/10 text-warning",
    },
    {
      title: "Active Courses",
      value: "6",
      change: "This semester",
      changeType: "neutral" as const,
      icon: GraduationCap,
      iconColor: "bg-secondary/10 text-secondary",
    },
  ];

  const events = [
    { id: "1", title: "Parent-Teacher Meeting", date: "2024-12-20", time: "10:00 AM", type: "meeting" as const },
    { id: "2", title: "Mid-term Exam", date: "2024-12-15", time: "9:00 AM", type: "exam" as const },
    { id: "3", title: "Fee Payment Deadline", date: "2024-12-31", time: "5:00 PM", type: "deadline" as const },
  ];

  const recentGrades = [
    { subject: "Data Structures", type: "Quiz", score: "18/20", grade: "A", date: "Dec 5" },
    { subject: "Database Systems", type: "Assignment", score: "25/25", grade: "A+", date: "Dec 3" },
    { subject: "Computer Networks", type: "Lab Work", score: "17/20", grade: "B+", date: "Dec 1" },
  ];

  const feeHistory = [
    { id: 1, term: "Semester 5 - Tuition", amount: "₹75,000", status: "Paid", date: "Aug 15, 2024" },
    { id: 2, term: "Semester 5 - Lab Fee", amount: "₹15,000", status: "Paid", date: "Aug 15, 2024" },
    { id: 3, term: "Semester 5 - Exam Fee", amount: "₹5,000", status: "Pending", date: "Due: Dec 31" },
  ];

  const alerts = [
    { id: 1, type: "warning", message: "Attendance dropped below 85% in Computer Networks", time: "2 days ago" },
    { id: 2, type: "info", message: "Mid-term exam schedule released", time: "3 days ago" },
    { id: 3, type: "success", message: "Assignment submitted on time in Data Structures", time: "5 days ago" },
  ];

  return (
    <DashboardLayout userRole="parent" userName="Thomas Stuart">
      <div className="space-y-6">
        {/* Child Selector & Welcome */}
        <div className="bg-card rounded-2xl border border-border p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 border-2 border-primary/20">
                <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">
                  {currentChild?.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">{currentChild?.name}</h1>
                <p className="text-muted-foreground">{currentChild?.class} • {currentChild?.roll}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Select value={selectedChild} onValueChange={setSelectedChild}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select child" />
                </SelectTrigger>
                <SelectContent>
                  {children.map((child) => (
                    <SelectItem key={child.id} value={child.id}>
                      {child.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
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
          {/* Attendance & Performance */}
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Overview */}
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-lg mb-4">Academic Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <ProgressCircle value={92} size="lg" label="Attendance" />
                </div>
                <div className="flex flex-col items-center">
                  <ProgressCircle value={87} size="lg" label="Academic Score" />
                </div>
              </div>
            </div>

            {/* Recent Grades */}
            <div className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Recent Grades</h3>
                <Button variant="ghost" size="sm" className="text-primary">View All</Button>
              </div>
              <div className="space-y-3">
                {recentGrades.map((grade, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-accent/50">
                    <div className="flex-1">
                      <p className="font-medium">{grade.subject}</p>
                      <p className="text-sm text-muted-foreground">{grade.type} • {grade.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{grade.score}</p>
                      <Badge className="bg-success text-success-foreground">{grade.grade}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Alerts */}
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-lg mb-4">Alerts</h3>
              <div className="space-y-3">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                    {alert.type === "warning" && <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />}
                    {alert.type === "info" && <Bell className="h-5 w-5 text-primary mt-0.5" />}
                    {alert.type === "success" && <CheckCircle className="h-5 w-5 text-success mt-0.5" />}
                    <div className="flex-1">
                      <p className="text-sm">{alert.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <UpcomingEvents events={events} />
          </div>
        </div>

        {/* Fee History */}
        <div className="bg-card rounded-xl border border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">Fee History</h3>
            <Button>
              <CreditCard className="mr-2 h-4 w-4" />
              Pay Now
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Description</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {feeHistory.map((fee) => (
                  <tr key={fee.id} className="border-b border-border/50 last:border-0">
                    <td className="py-3 px-4 font-medium">{fee.term}</td>
                    <td className="py-3 px-4">{fee.amount}</td>
                    <td className="py-3 px-4 text-muted-foreground">{fee.date}</td>
                    <td className="py-3 px-4">
                      <Badge
                        variant="outline"
                        className={
                          fee.status === "Paid"
                            ? "bg-success/10 text-success border-success/20"
                            : "bg-warning/10 text-warning border-warning/20"
                        }
                      >
                        {fee.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      {fee.status === "Paid" ? (
                        <Button variant="ghost" size="sm">
                          <FileText className="mr-1 h-4 w-4" />
                          Receipt
                        </Button>
                      ) : (
                        <Button size="sm">Pay</Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
