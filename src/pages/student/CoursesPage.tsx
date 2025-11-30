import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, User, FileText } from "lucide-react";

const mockCourses = [
  { id: 1, code: "CS101", name: "Introduction to Programming", instructor: "Dr. Sarah Miller", progress: 75, credits: 4, assignments: 3, nextClass: "Mon, 10:00 AM" },
  { id: 2, code: "MA102", name: "Linear Algebra", instructor: "Dr. Emily Clark", progress: 60, credits: 4, assignments: 2, nextClass: "Tue, 2:00 PM" },
  { id: 3, code: "CS301", name: "Data Structures", instructor: "Dr. Lisa Anderson", progress: 45, credits: 4, assignments: 4, nextClass: "Wed, 11:00 AM" },
  { id: 4, code: "CS401", name: "Machine Learning", instructor: "Dr. Sarah Miller", progress: 30, credits: 3, assignments: 1, nextClass: "Thu, 3:00 PM" },
];

export default function StudentCoursesPage() {
  return (
    <DashboardLayout userRole="student" userName="Alex Thompson">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Courses</h1>
          <p className="text-muted-foreground">View your enrolled courses and materials</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {mockCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="secondary" className="mb-2">{course.code}</Badge>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{course.instructor}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{course.nextClass}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4 text-warning" />
                    <span className="text-warning font-medium">{course.assignments} pending</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
