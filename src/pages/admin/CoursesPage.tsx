import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, BookOpen, Users, Clock } from "lucide-react";

const mockCourses = [
  { id: 1, code: "CS101", name: "Introduction to Programming", department: "Computer Science", credits: 4, students: 120, instructor: "Dr. Sarah Miller", status: "active" },
  { id: 2, code: "EC201", name: "Digital Electronics", department: "Electronics", credits: 3, students: 85, instructor: "Prof. John Davis", status: "active" },
  { id: 3, code: "MA102", name: "Linear Algebra", department: "Mathematics", credits: 4, students: 200, instructor: "Dr. Emily Clark", status: "active" },
  { id: 4, code: "PH101", name: "Physics I", department: "Physics", credits: 4, students: 180, instructor: "Prof. Robert Wilson", status: "inactive" },
  { id: 5, code: "CS301", name: "Data Structures", department: "Computer Science", credits: 4, students: 95, instructor: "Dr. Lisa Anderson", status: "active" },
  { id: 6, code: "CS401", name: "Machine Learning", department: "Computer Science", credits: 3, students: 60, instructor: "Dr. Sarah Miller", status: "active" },
];

export default function CoursesPage() {
  return (
    <DashboardLayout userRole="admin" userName="Admin User">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Courses</h1>
            <p className="text-muted-foreground">Manage courses and subjects</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Course
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search courses..." className="pl-9" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">All Departments</Button>
            <Button variant="outline" size="sm">Active</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="secondary" className="mb-2">{course.code}</Badge>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                  </div>
                  <Badge variant={course.status === "active" ? "default" : "secondary"}>
                    {course.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{course.department}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{course.credits} credits</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  <span className="text-foreground">{course.instructor}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
