import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Download, FileText } from "lucide-react";

const mockExams = [
  { id: 1, name: "Mid-Term Examination", course: "CS101", date: "2024-12-20", time: "09:00 AM", venue: "Hall A", seat: "A-15", status: "upcoming" },
  { id: 2, name: "Final Examination", course: "MA102", date: "2024-12-22", time: "02:00 PM", venue: "Hall B", seat: "B-22", status: "upcoming" },
  { id: 3, name: "Quiz 3", course: "CS301", date: "2024-12-18", time: "11:00 AM", venue: "Room 101", seat: "R1-08", status: "upcoming" },
  { id: 4, name: "Lab Practical", course: "CS401", date: "2024-12-25", time: "10:00 AM", venue: "Lab 1", seat: "L-05", status: "upcoming" },
  { id: 5, name: "Quiz 2", course: "CS101", date: "2024-12-05", time: "10:00 AM", venue: "Room 102", seat: "R2-10", status: "completed", grade: "42/50" },
];

export default function StudentExamsPage() {
  const upcoming = mockExams.filter(e => e.status === "upcoming");
  const completed = mockExams.filter(e => e.status === "completed");

  return (
    <DashboardLayout userRole="student" userName="Alex Thompson">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Exams</h1>
            <p className="text-muted-foreground">View exam schedule and download hall tickets</p>
          </div>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Download All Hall Tickets
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Exams</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcoming.map((exam) => (
              <div key={exam.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{exam.name}</h3>
                    <Badge variant="secondary">{exam.course}</Badge>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {exam.date}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {exam.time}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {exam.venue}
                  </div>
                  <Badge className="bg-primary/10 text-primary">Seat: {exam.seat}</Badge>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  Hall Ticket
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Past Exams</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {completed.map((exam) => (
              <div key={exam.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{exam.name}</h3>
                    <Badge variant="secondary">{exam.course}</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-muted-foreground">{exam.date}</div>
                  <div className="text-lg font-bold text-success">{exam.grade}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
