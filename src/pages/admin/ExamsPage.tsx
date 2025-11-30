import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Calendar, MapPin, Clock, Users } from "lucide-react";

const mockExams = [
  { id: 1, name: "Mid-Term Examination", course: "CS101", date: "2024-12-20", time: "09:00 AM", venue: "Hall A", students: 120, status: "scheduled" },
  { id: 2, name: "Final Examination", course: "EC201", date: "2024-12-22", time: "02:00 PM", venue: "Hall B", students: 85, status: "scheduled" },
  { id: 3, name: "Quiz 3", course: "MA102", date: "2024-12-15", time: "11:00 AM", venue: "Room 101", students: 200, status: "completed" },
  { id: 4, name: "Lab Practical", course: "CS301", date: "2024-12-18", time: "10:00 AM", venue: "Lab 1", students: 95, status: "ongoing" },
  { id: 5, name: "Project Viva", course: "CS401", date: "2024-12-25", time: "09:00 AM", venue: "Conference Room", students: 60, status: "draft" },
];

const statusColors: Record<string, string> = {
  scheduled: "bg-primary/10 text-primary",
  completed: "bg-success/10 text-success",
  ongoing: "bg-warning/10 text-warning",
  draft: "bg-muted text-muted-foreground",
};

export default function ExamsPage() {
  return (
    <DashboardLayout userRole="admin" userName="Admin User">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Exams & Assessments</h1>
            <p className="text-muted-foreground">Manage examinations and seating plans</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              View Calendar
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Schedule Exam
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">12</div>
              <p className="text-sm text-muted-foreground">Upcoming Exams</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-warning">2</div>
              <p className="text-sm text-muted-foreground">Ongoing</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-success">45</div>
              <p className="text-sm text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-muted-foreground">5</div>
              <p className="text-sm text-muted-foreground">Draft</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Exam Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Exam</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockExams.map((exam) => (
                  <TableRow key={exam.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell className="font-medium">{exam.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{exam.course}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-3 w-3" />
                          {exam.date}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {exam.time}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        {exam.venue}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        {exam.students}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusColors[exam.status]} variant="secondary">
                        {exam.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
