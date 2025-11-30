import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { MessageSquare, Send, Clock, CheckCircle } from "lucide-react";

const mockFeedback = [
  { id: 1, subject: "WiFi connectivity issue", message: "WiFi in library is very slow...", date: "2024-12-10", status: "open", reply: null },
  { id: 2, subject: "Request for extra lab hours", message: "Can we have lab access on weekends?", date: "2024-12-05", status: "resolved", reply: "Lab will be open on Saturdays from next semester." },
];

const statusColors: Record<string, string> = {
  open: "bg-warning/10 text-warning",
  resolved: "bg-success/10 text-success",
  closed: "bg-muted text-muted-foreground",
};

export default function StudentFeedbackPage() {
  return (
    <DashboardLayout userRole="student" userName="Alex Thompson">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Feedback & Complaints</h1>
          <p className="text-muted-foreground">Submit feedback or raise complaints</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Submit New Feedback */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Submit New Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Brief subject of your feedback" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your feedback or complaint in detail..."
                  rows={5}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Switch id="anonymous" />
                  <Label htmlFor="anonymous" className="text-sm">Submit anonymously</Label>
                </div>
                <Button className="gap-2">
                  <Send className="h-4 w-4" />
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* My Submissions */}
          <Card>
            <CardHeader>
              <CardTitle>My Submissions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockFeedback.map((item) => (
                <div key={item.id} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{item.subject}</h4>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                    <Badge className={statusColors[item.status]} variant="secondary">
                      {item.status === "open" && <Clock className="h-3 w-3 mr-1" />}
                      {item.status === "resolved" && <CheckCircle className="h-3 w-3 mr-1" />}
                      {item.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.message}</p>
                  {item.reply && (
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Admin Response:</p>
                      <p className="text-sm">{item.reply}</p>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
