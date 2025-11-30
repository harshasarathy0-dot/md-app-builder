import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Calendar, Upload, CheckCircle, Clock, AlertCircle } from "lucide-react";

const mockAssignments = [
  { id: 1, title: "Programming Assignment 1", course: "CS101", dueDate: "2024-12-15", status: "pending", grade: null },
  { id: 2, title: "Matrix Operations", course: "MA102", dueDate: "2024-12-12", status: "submitted", grade: null },
  { id: 3, title: "Binary Trees Implementation", course: "CS301", dueDate: "2024-12-18", status: "pending", grade: null },
  { id: 4, title: "Linear Regression Model", course: "CS401", dueDate: "2024-12-20", status: "pending", grade: null },
  { id: 5, title: "Quiz 2 Solutions", course: "CS101", dueDate: "2024-12-05", status: "graded", grade: "85/100" },
  { id: 6, title: "Eigenvalues Problem Set", course: "MA102", dueDate: "2024-12-01", status: "graded", grade: "92/100" },
];

const statusConfig: Record<string, { color: string; icon: React.ReactNode }> = {
  pending: { color: "bg-warning/10 text-warning", icon: <Clock className="h-4 w-4" /> },
  submitted: { color: "bg-primary/10 text-primary", icon: <Upload className="h-4 w-4" /> },
  graded: { color: "bg-success/10 text-success", icon: <CheckCircle className="h-4 w-4" /> },
  late: { color: "bg-destructive/10 text-destructive", icon: <AlertCircle className="h-4 w-4" /> },
};

export default function StudentAssignmentsPage() {
  const pending = mockAssignments.filter(a => a.status === "pending");
  const submitted = mockAssignments.filter(a => a.status === "submitted");
  const graded = mockAssignments.filter(a => a.status === "graded");

  return (
    <DashboardLayout userRole="student" userName="Alex Thompson">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Assignments</h1>
          <p className="text-muted-foreground">View and submit your assignments</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{pending.length}</div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Upload className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{submitted.length}</div>
                  <p className="text-sm text-muted-foreground">Submitted</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{graded.length}</div>
                  <p className="text-sm text-muted-foreground">Graded</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="space-y-4">
          <TabsList>
            <TabsTrigger value="pending">Pending ({pending.length})</TabsTrigger>
            <TabsTrigger value="submitted">Submitted ({submitted.length})</TabsTrigger>
            <TabsTrigger value="graded">Graded ({graded.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pending.map((assignment) => (
              <Card key={assignment.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{assignment.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Badge variant="secondary">{assignment.course}</Badge>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Due: {assignment.dueDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button>Submit</Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="submitted" className="space-y-4">
            {submitted.map((assignment) => (
              <Card key={assignment.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{assignment.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Badge variant="secondary">{assignment.course}</Badge>
                        <Badge className={statusConfig[assignment.status].color} variant="secondary">
                          Awaiting Grade
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">View Submission</Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="graded" className="space-y-4">
            {graded.map((assignment) => (
              <Card key={assignment.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{assignment.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Badge variant="secondary">{assignment.course}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-success">{assignment.grade}</div>
                    <Button variant="ghost" size="sm">View Feedback</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
