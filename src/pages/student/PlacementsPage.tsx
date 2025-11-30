import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Calendar, MapPin, Upload, CheckCircle, Clock } from "lucide-react";

const mockDrives = [
  { id: 1, company: "Google", logo: "G", role: "Software Engineer", package: "₹25 LPA", deadline: "2024-12-20", location: "Bangalore", status: "open" },
  { id: 2, company: "Microsoft", logo: "M", role: "Product Manager", package: "₹22 LPA", deadline: "2024-12-22", location: "Hyderabad", status: "open" },
  { id: 3, company: "Amazon", logo: "A", role: "SDE-1", package: "₹28 LPA", deadline: "2024-12-18", location: "Bangalore", status: "applied" },
];

const mockApplications = [
  { id: 1, company: "Amazon", role: "SDE-1", appliedOn: "2024-12-10", status: "shortlisted" },
  { id: 2, company: "Flipkart", role: "Backend Developer", appliedOn: "2024-12-05", status: "in-review" },
  { id: 3, company: "Infosys", role: "Systems Engineer", appliedOn: "2024-11-28", status: "rejected" },
];

const statusColors: Record<string, string> = {
  shortlisted: "bg-success/10 text-success",
  "in-review": "bg-warning/10 text-warning",
  rejected: "bg-destructive/10 text-destructive",
  open: "bg-primary/10 text-primary",
  applied: "bg-muted text-muted-foreground",
};

export default function StudentPlacementsPage() {
  return (
    <DashboardLayout userRole="student" userName="Alex Thompson">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Placements</h1>
            <p className="text-muted-foreground">View placement drives and apply</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            Update Resume
          </Button>
        </div>

        <Tabs defaultValue="drives" className="space-y-4">
          <TabsList>
            <TabsTrigger value="drives">Active Drives</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
          </TabsList>

          <TabsContent value="drives" className="space-y-4">
            {mockDrives.map((drive) => (
              <Card key={drive.id}>
                <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14">
                      <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">
                        {drive.logo}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{drive.company}</h3>
                      <p className="text-muted-foreground">{drive.role}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm">
                        <span className="font-semibold text-success">{drive.package}</span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {drive.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      Deadline: {drive.deadline}
                    </div>
                    {drive.status === "applied" ? (
                      <Badge className={statusColors[drive.status]}>Applied</Badge>
                    ) : (
                      <Button>Apply Now</Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="applications" className="space-y-4">
            {mockApplications.map((app) => (
              <Card key={app.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{app.company}</h3>
                      <p className="text-sm text-muted-foreground">{app.role}</p>
                      <p className="text-xs text-muted-foreground">Applied: {app.appliedOn}</p>
                    </div>
                  </div>
                  <Badge className={statusColors[app.status]} variant="secondary">
                    {app.status === "shortlisted" && <CheckCircle className="h-3 w-3 mr-1" />}
                    {app.status === "in-review" && <Clock className="h-3 w-3 mr-1" />}
                    {app.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
