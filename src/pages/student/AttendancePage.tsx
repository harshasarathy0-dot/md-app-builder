import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ProgressCircle } from "@/components/dashboard/ProgressCircle";

const mockAttendance = [
  { course: "CS101", name: "Introduction to Programming", present: 28, total: 30, percentage: 93 },
  { course: "MA102", name: "Linear Algebra", present: 25, total: 30, percentage: 83 },
  { course: "CS301", name: "Data Structures", present: 27, total: 30, percentage: 90 },
  { course: "CS401", name: "Machine Learning", present: 14, total: 15, percentage: 93 },
];

export default function StudentAttendancePage() {
  const overallPresent = mockAttendance.reduce((sum, c) => sum + c.present, 0);
  const overallTotal = mockAttendance.reduce((sum, c) => sum + c.total, 0);
  const overallPercentage = Math.round((overallPresent / overallTotal) * 100);

  return (
    <DashboardLayout userRole="student" userName="Alex Thompson">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Attendance</h1>
          <p className="text-muted-foreground">Track your attendance across all courses</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Overall Attendance</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <ProgressCircle value={overallPercentage} size="lg" />
              <p className="mt-4 text-sm text-muted-foreground">
                {overallPresent} of {overallTotal} classes attended
              </p>
              {overallPercentage < 75 && (
                <Badge variant="destructive" className="mt-2">Below Required 75%</Badge>
              )}
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Course-wise Attendance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {mockAttendance.map((course) => (
                <div key={course.course} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{course.course}</Badge>
                      <span className="font-medium">{course.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {course.present}/{course.total}
                      </span>
                      <span className={`font-semibold ${course.percentage >= 75 ? 'text-success' : 'text-destructive'}`}>
                        {course.percentage}%
                      </span>
                    </div>
                  </div>
                  <Progress 
                    value={course.percentage} 
                    className={`h-2 ${course.percentage < 75 ? '[&>div]:bg-destructive' : ''}`}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Attendance Legend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-success"></div>
                <span>≥75% - Good Standing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-warning"></div>
                <span>60-75% - Warning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive"></div>
                <span>&lt;60% - Critical</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
