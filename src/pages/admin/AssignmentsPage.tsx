import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Plus, FileText, Calendar, Users } from "lucide-react";

const mockAssignments = [
  { id: 1, title: "Programming Assignment 1", course: "CS101", dueDate: "2024-12-15", submissions: 95, total: 120, status: "active" },
  { id: 2, title: "Circuit Design Project", course: "EC201", dueDate: "2024-12-18", submissions: 70, total: 85, status: "active" },
  { id: 3, title: "Matrix Operations", course: "MA102", dueDate: "2024-12-10", submissions: 180, total: 200, status: "closed" },
  { id: 4, title: "Data Structures Lab", course: "CS301", dueDate: "2024-12-20", submissions: 45, total: 95, status: "active" },
  { id: 5, title: "ML Model Training", course: "CS401", dueDate: "2024-12-22", submissions: 30, total: 60, status: "draft" },
];

const statusColors: Record<string, string> = {
  active: "bg-success/10 text-success",
  closed: "bg-muted text-muted-foreground",
  draft: "bg-warning/10 text-warning",
};

export default function AssignmentsPage() {
  return (
    <DashboardLayout userRole="admin" userName="Admin User">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Assignments</h1>
            <p className="text-muted-foreground">Manage all assignments across courses</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Assignment
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search assignments..." className="pl-9" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">All Courses</Button>
                <Button variant="outline" size="sm">All Status</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Assignment</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Submissions</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockAssignments.map((assignment) => (
                  <TableRow key={assignment.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium">{assignment.title}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{assignment.course}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {assignment.dueDate}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{assignment.submissions}/{assignment.total}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusColors[assignment.status]} variant="secondary">
                        {assignment.status}
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
