import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, AlertTriangle, CheckCircle, Clock, Filter } from "lucide-react";

const mockFeedback = [
  { id: 1, from: "Alex Thompson", type: "complaint", subject: "Library timing issue", message: "The library closes too early during exams...", date: "2024-12-10", status: "open", priority: "high" },
  { id: 2, from: "Jessica Lee", type: "suggestion", subject: "More lab sessions", message: "Can we have additional lab sessions for...", date: "2024-12-09", status: "in-progress", priority: "medium" },
  { id: 3, from: "Anonymous", type: "complaint", subject: "Canteen food quality", message: "The food quality has degraded recently...", date: "2024-12-08", status: "resolved", priority: "low" },
  { id: 4, from: "David Chen", type: "feedback", subject: "Great teaching", message: "Really enjoyed the ML course. The professor...", date: "2024-12-07", status: "closed", priority: "low" },
  { id: 5, from: "Emma Wilson", type: "complaint", subject: "WiFi connectivity", message: "WiFi in hostel block C is very poor...", date: "2024-12-06", status: "open", priority: "high" },
];

const statusColors: Record<string, string> = {
  open: "bg-destructive/10 text-destructive",
  "in-progress": "bg-warning/10 text-warning",
  resolved: "bg-success/10 text-success",
  closed: "bg-muted text-muted-foreground",
};

const typeIcons: Record<string, React.ReactNode> = {
  complaint: <AlertTriangle className="h-4 w-4 text-destructive" />,
  suggestion: <MessageSquare className="h-4 w-4 text-primary" />,
  feedback: <CheckCircle className="h-4 w-4 text-success" />,
};

export default function FeedbackPage() {
  return (
    <DashboardLayout userRole="admin" userName="Admin User">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Feedback & Complaints</h1>
            <p className="text-muted-foreground">Manage student and staff feedback</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-sm text-muted-foreground">Open</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-sm text-muted-foreground">In Progress</p>
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
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-sm text-muted-foreground">Resolved</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-sm text-muted-foreground">Total</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockFeedback.map((item) => (
                <div key={item.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-secondary/20 text-secondary-foreground text-sm">
                      {item.from === "Anonymous" ? "?" : item.from.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {typeIcons[item.type]}
                      <span className="font-semibold">{item.subject}</span>
                      {item.priority === "high" && (
                        <Badge variant="destructive" className="text-xs">High Priority</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{item.message}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span>{item.from}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <Badge className={statusColors[item.status]} variant="secondary">
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
