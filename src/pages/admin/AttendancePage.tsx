import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, Download, Calendar, TrendingUp, TrendingDown } from "lucide-react";

const mockAttendanceStats = [
  { course: "CS101", name: "Introduction to Programming", attendance: 92, trend: "up" },
  { course: "EC201", name: "Digital Electronics", attendance: 88, trend: "down" },
  { course: "MA102", name: "Linear Algebra", attendance: 85, trend: "up" },
  { course: "PH101", name: "Physics I", attendance: 78, trend: "down" },
  { course: "CS301", name: "Data Structures", attendance: 91, trend: "up" },
];

export default function AttendancePage() {
  return (
    <DashboardLayout userRole="admin" userName="Admin User">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Attendance Overview</h1>
            <p className="text-muted-foreground">Monitor attendance across all courses</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Select Date Range
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">87%</div>
              <p className="text-sm text-muted-foreground">Overall Attendance</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-success">1,245</div>
              <p className="text-sm text-muted-foreground">Present Today</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-warning">156</div>
              <p className="text-sm text-muted-foreground">Absent Today</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-destructive">23</div>
              <p className="text-sm text-muted-foreground">Below 75%</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Course-wise Attendance</CardTitle>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search courses..." className="pl-9" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {mockAttendanceStats.map((stat) => (
                <div key={stat.course} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{stat.course}</Badge>
                        <span className="font-medium">{stat.name}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold">{stat.attendance}%</span>
                      {stat.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-success" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-destructive" />
                      )}
                    </div>
                  </div>
                  <Progress value={stat.attendance} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
